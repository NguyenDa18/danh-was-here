---
template: BlogPost
path: /python-notes
date: 2020-09-28T01:43:10.537Z
title: Python Notes to Myself
---
### Check Version of Python Package
```python
import <package-name>
print('package version: {}'.format(<package-name>._version_))
```

### Simple Web Requests with Python
```python
url="<some url>"
import requests

###
# Working with Web Pages
###

# Get webpage
r = requests.get(url)
print(r.text)

# Print HTML structure
from bs4 import BeautifulSoup
soup = BeautifulSoup(r.text, 'html.parser')
print(soup.prettify())

# Print just HTML text
print(soup.get_text())

###
# Working with APIs
###

# Get JSON response
print(r.json())

```

