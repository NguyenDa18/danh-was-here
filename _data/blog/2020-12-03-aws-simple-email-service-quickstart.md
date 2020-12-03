---
template: BlogPost
path: /aws-ses-quick
date: 2020-12-03T18:47:45.802Z
title: AWS Simple Email Service QuickStart
---
# Quickstart

## Init / Importing
```python
import boto3
from botocore.exceptions import ClientError

client = boto3.client('ses')
```

## Verify Email
```python
def verify_email(email: str):
    response = client.verify_email_identity(EmailAddress=email)
    print(response.text)
    return response
```

## Send Email
```python
def send_update(email: str):
    data = email_body()
    try:
        response = client.send_email(
            Destination={
                'ToAddresses': [email]
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': data
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT
                    }
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT
                }
            },
            Source=SENDER)
        return {"status": 200, "message": "Email sent"}
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent. Message ID:"),
        print(response['MessageId'])
```
