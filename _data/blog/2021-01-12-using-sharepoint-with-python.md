---
template: BlogPost
path: /sharepoint-with-python
date: 2021-01-11T22:56:14.976Z
title: Using SharePoint with Python
metaDescription: SharePoint use with Python, SharePoint list, SharePoint get
  file by value, Make SharePoint request with Python
---
## Share the pain with me in using SharePoint and Python
*Not so painful!*


### Prerequisite
- Get access token to use with SharePoint
- Once you have this operations with SharePoint is simple: just provide this as the Bearer token

### Setup
- URL = "https://{site-url}/_api/web/"
- Get File By Value URL = "https://{site-url}/_api/web/GetFolderByServerRelativeUrl('<title of folder>')/Files('<full name of file with file type>')/$value"

### Step by Step
- Get list of folders inside the SharePoint site
- Get file bytes by value
- Read file content