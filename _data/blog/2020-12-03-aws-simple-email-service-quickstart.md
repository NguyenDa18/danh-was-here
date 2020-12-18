---
template: BlogPost
path: /send-email-with-aws-ses
date: 2020-12-03T18:47:45.802Z
title: Send Email with AWS SES
metaDescription: 'Send email with AWS SES, Simple Email Service'
---
# Using AWS SES (Simple Email Service)

## Init / Imports needed
```python
import boto3
from botocore.exceptions import ClientError

ses = boto3.client('ses')
```

## Verify Email
```python
def verify_email(email: str):
    response = ses.verify_email_identity(EmailAddress=email)
    print(response.text)
    return response
```

## List Verified Emails
```python
def list_subscribers():
    response = ses.list_identities(
        IdentityType="EmailAddress"
    )
    return response
```

## Delete Verified Email
```python
def delete_subscriber(email):
    response = ses.delete_identity(
        Identity=email
    )
    return response
```

## Send Email
```python
def send_update(email: str):
    CHARSET = "UTF-8"
    data = email_body()
    try:
        response = ses.send_email(
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
