---
template: BlogPost
path: /openpyxl-cheetsheet
date: 2020-11-06T04:36:04.732Z
title: openpyxl Cheatsheet
metaDescription: 'openpyxl, python, excel, python excel, python cheatsheet'
---
## openpyxl Need to Know

I chose to use openpyxl as the main Python library to help me read and create Excel spreadsheets for an internal tool at my job, and it was a fantastic tool that allowed me to be productive while also attaining a great developer experience. As with most lessons learned on the job, it's best to write a cheatsheet down so that I can use it the next time I need to use the openpyxl library again, which looks like soon. 

### Python imports that will be used for the following examples:
```
from openpyxl import Workbook
from openpyxl.utils import get_column_letter
from openpyxl.styles import PatternFill, Font
import boto3
from botocore.exceptions import ClientError
```

### Writing spreadsheet headers

```python
workbook = Workbook()
worksheet = workbook.active

alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

for idx, value in enumerate(ws_headers):
    cell_pos = '{}1'.format(alphabet[idx])
    current_cell = worksheet[cell_pos]
    
    # fill value
    current_cell.value = value

    # color column name and make labels bold
    current_cell.fill = headerFill
    current_cell.font = Font(bold=True)
```

### Writing to spreadsheet body

```python
# Starting with a list of dictionaries (worksheet_data) in which the keys are the column names and values are cell values
workbook = Workbook()
worksheet = workbook.active
worksheet.title = 'Worksheet Title'
for idx, data in enumerate(worksheet_data, start=2):
    row_item = list(data.values())
    for col in range(1, len(row_item) + 1):
        # space each column by length 80
        worksheet.column_dimensions[get_column_letter(col)].width = 80

        # fill in cell
        worksheet[get_column_letter(col) + str(idx)] = row_item[col - 1]
```

### Creating a colored fill for a cell

```python
from openpyxl.styles import PatternFill
myfill = PatternFill(start_color='00FFC001',
                   end_color='00FFC001',
                   fill_type='solid')

# fill in a cell with it
ws['{}{}'.format(get_column_letter(col), str(idx))].fill = myFill
```

### Saving a workbook to AWS S3 Bucket

```python
from tempfile import NamedTemporaryFile
import boto3
from botocore.exceptions import ClientError
...

s3_resource = boto3.resource('s3')
with NamedTemporaryFile() as tmp:
    filename = '/tmp/{}'.format(excel_filename)
    wb.save(filename)
    s3_resource.Bucket(bucket_name).upload_file(Filename=filename, Key=excel_filename)
```
