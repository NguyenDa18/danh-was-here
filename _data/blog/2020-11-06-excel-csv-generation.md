---
template: BlogPost
path: /generate-excel-csv-python
date: 2020-11-06T00:47:38.492Z
title: Excel / CSV Generation
---
# Excel and CSV Generation
```python
from openpyxl import Workbook
from openpyxl.utils import get_column_letter
from openpyxl.styles import PatternFill, Font
from json import loads, dumps
from tempfile import NamedTemporaryFile

def generateExcelWorkbook(download_data):
     wb = Workbook()
     
     # Generate worksheet1
     ws1 = wb.active
     ws.title = 'Title 1'
     str_json = dumps(download_data)
```

## CSV
```python
def generateCSV(download data):
    with open(csv_name, mode='w', newline='') as csv_file:
        writer = DictWriter(csv_file, fieldnames=fieldnames, extrasaction='ignore')
        writer.writeheader()
        for el in data_list:
           writer.writerow(el)
```
