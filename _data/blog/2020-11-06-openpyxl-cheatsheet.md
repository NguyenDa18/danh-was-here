---
template: BlogPost
path: /openpyxl-cheetsheet
date: 2020-11-06T04:36:04.732Z
title: OpenpyXL Cheatsheet
metaDescription: 'openpyxl, python, excel, python excel'
---
# OpenPyXL

## Create a fill
```python
from openpyxl .styles import PatternFill
headerFill = PatternFill(start_color='00FFC001',
                   end_color='00FFC001',
                   fill_type='solid')
```
