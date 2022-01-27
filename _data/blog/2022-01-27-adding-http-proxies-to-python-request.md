---
template: BlogPost
path: /add-proxy-to-python-requests
date: 2022-01-27T06:25:48.426Z
title: Adding HTTP Proxies to Python Request
metaDescription: python,requests,http,proxies
---
For the Python Flask service I talk about in this blog, some security scans led to some changes to the AWS container configuration led to...the service breaking! :O

I updated the PIP modules in the service, including the `requests` module, and the new version was more strict about http prefixes being required for proxies.

I kept getting a `Proxy URL had no scheme, should start with https` error when I called the API route that queried from SharePoint. The error meant I couldn't get a SharePoint token and that meant without it I couldn't read my dear Excel file in SharePoint!
After some attempts to solve it myself, I then asked the devops guy about it and with his help I was able to solve the issue!

He said the container's environment http environment variables did not have the http prefix to them and might need some manipulation -sounded exactly like what the Flask error said! Different languages accepted different cases (lowercase or uppercase) versions of HTTP proxy so the config handled both lower and upper -case versions of HTTP(S) proxy. My service would have to handle that as well.

I created a test Flask API endpoint that I could call in the development environment:

```python
def get_config():
   return {
       'HTTP_PROXY': os.environ.get('HTTP_PROXY'),
       'HTTPS_PROXY': os.environ.get('HTTPS_PROXY'),
       'http_proxy': os.environ.get('http_proxy'),
       'https_proxy': os.environ.get('https_proxy')
   }
```

Calling `/config` I was able to see the proxies without the http prefixes:

```json
{
       'HTTPS_PROXY': 'egress.dev.mycompany.com:8080',
       'HTTP_PROXY': 'egress.dev.mycompany.com:8080',
       'http_proxy': 'egress.dev.mycompany.com:8080',
       'https_proxy': 'egress.dev.mycompany.com:8080'
}
```

After seeing that I saw *the easy fix was to add the http prefixes programmatically and to add that proxy when making the request with python using the requests module*.

```python
proxy = {
        'http': 'http://{}'.format(os.environ.get("http_proxy")),
        'https': 'http://{}'.format(os.environ.get("https_proxy"))
     }

headers = {
   'Authorization': 'Bearer {}'.format(access_token_from_sharepoint)
}
response = requests.get(file_url, headers=headers, proxies=proxy)
```

And that did the trick! I never would have figured out this cryptic error without consulting the devops guy -so thankful it worked out and that I wasn't stubborn about asking for help.