---
template: BlogPost
path: /sharepoint-with-python
date: 2021-01-11T22:56:14.976Z
title: Using SharePoint with Python
metaDescription: Using SharePoint API with Python, SharePoint API list query,
  SharePoint API get file by value query, Make SharePoint request with Python
  with requests library, SharePoint API get Excel values
tags: ["Tutorials", "Python", "Quick Notes"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1583116494/blog/folders_squarespace-cdn_h2bu35.jpg
---

## Share the pain with me in using SharePoint and Python

_Not so painful!_

### Background

A new requirement came up for the internal service I built at work: grabbing the Excel file directly from SharePoint and loading into an AWS S3 bucket -just one more step of automation for the service, because currently I upload the Excel file manually into the POC environment bucket and use Postman jobs to copy that file to the AWS testing environments.
After much debate with IT about the use of Graph API, we were able to compromise and choose using just the SharePoint API to do this.

As usual, the API documentation [could have been better](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service?tabs=http). More specifically, the documentation on [working with SharePoint files](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/working-with-folders-and-files-with-rest). The examples used C# as the client for the SharePoint REST calls, and I was looking for examples with Python. After writing some pet scripts using the python requests library, I was able to perform the operations needed for this requirement.

### Prerequisite : SharePoint API Access Token

The SharePoint API access token is the big kahuna that makes all the following requests possible. You will need to contact the SharePoint admin or find some other way to get credentials to be able to use SharePoint. The config you need are: a client id, client secret, resource id, and SharePoint ID.

This is the structure of the request I am using to get the access token:

```curl
curl --location --request POST 'https://accounts.accesscontrol.windows.net/{SharePoint ID}/tokens/OAuth/2' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id=<client id>' \
--data-urlencode 'client_secret=<client secret>' \
--data-urlencode 'resource=<resource id>'
```

Once you have this access token you will need to provide it as a Bearer token in the Authorization headers of each request.

### Step by Step with the SharePoint API

- Base URL (which will be used in following examples) for my organization is in the format of:
  `https://<organization>.sharepoint.com/sites/<Base folder>`
  In the SharePoint API documentation you see: `https://{site_url}/` often. the site_url using my example would be: `<organization>.sharepoint.com/sites/<Base folder>`.

- Get list of folders inside the SharePoint site

```curl
curl --location --request GET 'https://{Base URL}/_api/web/lists' \
--header 'Authorization: Bearer <SharePoint Access Token>'
```

- Retrieve a file that is attached to that list item (in this case an Excel file)

In the following example, I get a file in the SharePoint site at <Base folder>. Inside is a folder called 'apples'. Inside is an Excel workbook called `prices.xlsx`.

```curl
curl --location --request GET 'https://{Base URL}/_api/web/GetFolderByServerRelativeUrl('apples')/Files('prices.xlsx')/$value' \
--header 'Authorization: Bearer <SharePoint Access Token>'
```

If you try this out in Postman or whatever REST client, you'll run into some trouble: the response is completely unreadable!! That is because the response received is in bytes.

Which is where our friend Python comes in...

- Read SharePoint file contents with Python

Below is a simple script in which I use the Python `requests` library to query SharePoint using the "Retrieve a file that is attached to that list item" query, providing the access token in the headers. The key is that we want the response to be in _bytes_.

For half an hour I was getting into ugly parsing territory because I was using `response.text`, not `response.content`. The former would return a string of the returned Excek byte data that would lead to parsing issues because of alien characters. The latter would return a byte array, which you could inspect with: `print(type(response.content))`. I called `strip()` to clean up the bytes some more. Then I used the `openpyxl` library which I was familiar with before to load in the bytes and read the Excel Worksheet -basically the behavior I wanted with a Microsoft Graph API call. It's as simple as that!

```python
# sharepoint_read_excel_demo.py
import requests
import io
from openpyxl import load_workbook

url = "https://{BASE_URL}/_api/web/GetFolderByServerRelativeUrl('apples')/Files('prices.xlsx')/$value"
sharepoint_token = "<sharepoint token>"

headers = {
    'Authorization': 'Bearer {}'.format(sharepoint_token)
}

response = requests.get(url, headers=headers)
modded = response.content.strip()

wb = load_workbook(filename=(io.BytesIO(modded)), data_only=True)
print(wb.sheetnames)
ws = wb['Worksheet 1']

for row in ws.values:
   for value in row:
     print(value)
```
