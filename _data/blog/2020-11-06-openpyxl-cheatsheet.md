---
template: BlogPost
path: /openpyxl-cheetsheet
date: 2020-11-06T04:36:04.732Z
title: openpyxl Cheatsheet
metaDescription: 'openpyxl, python, excel, python excel'
---
## openpyxl Need to Know

### Create a fill
```python
from openpyxl .styles import PatternFill
myfill = PatternFill(start_color='00FFC001',
                   end_color='00FFC001',
                   fill_type='solid')

# fill in a cell with it
ws['{}{}'.format(get_column_letter(col), str(idx))].fill = myFill
```
