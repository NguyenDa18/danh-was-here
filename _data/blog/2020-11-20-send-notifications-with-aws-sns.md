---
template: BlogPost
path: /send-notifications-with-aws
date: 2020-11-19T21:32:46.257Z
title: Send Notifications with AWS SNS
metaDescription: >-
  Amazon SNS, AWS SNS, Amazon Simple Notification Service, Send Notifications
  with Python, Subscribe to Topic AWS SNS, Boto3 Python SNS
---
## Using AWS SNS (Simple Notification Service)
The automation tool I created at work was a success and now I'm tasked with implementing new features to it for next year.

One of the requirements is to notify users by email when changes have been made to the data after reading from a modified Excel spreadsheet. Since my project was already using AWS with the help of the boto3 library, I decided it was a great opportunity to use SNS, the AWS-provided way to send notifications to users subscribed to a topic. It works with email as well as SMS when users provide phone numbers instead to receive texts.

Here are some quick notes that allowed me to set everything up quite easily for this requirement.

### Required import to connect with SNS
```python
import boto3
sns = boto3.client('sns')
```

### Create Notification Topic
```python
def create_url_topic(name):
    alerts_arn = sns.create_topic(Name=name)['TopicArn']
    return alerts_arn
```

- This function can be run on initial setup of notifications -create a topic that users will subscribe to.

### Send Email Notification
```python
def send_email(_deployed_env_):
    response = sns.publish(
        TargetArn=topic_arn,
        Message="Update for env {}".format(_deployed_env_),
        Subject="SNS Update Notification")
    return response
```

- _deployed_env_ is the variable I am using to tell what environment config my Flask server is using. The topic_arn is found after you create the notification topic.


### Add Subscriber to Topic
```python
def add_subscriber(email):
    resp_email = sns.subscribe(
        TopicArn=topic_arn,
        Protocol="email",
        Endpoint=email
    )
    return resp_email['SubscriptionArn']
```

### Unsubscribe From Topic
```python
def unsubscribe_from_topic():
    response = sns.unsubscribe(SubscriptionArn=<arn of user notification endpoint>)
```
