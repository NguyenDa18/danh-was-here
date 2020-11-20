---
template: BlogPost
path: /send-notifications-with-aws
date: 2020-11-19T21:32:46.257Z
title: Send Notifications with AWS SNS
---
## Using AWS SNS (Simple Notification Service)
```python
import boto3
sns = boto3.client('sns')
```

### Create Notification Topic
```python
def create_url_topics():
    alerts_arn = sns.create_topic(Name=<name of alert>)['TopicArn']
    return alerts_arn
```

### Send Email Notification
```python
def send_email(_deployed_env_):
    response = sns.publish(
        TargetArn=topic_arn,
        Message="Update for env {}".format(_deployed_env_),
        Subject="SNS Update Notification")
    return response
```


### Add Subscriber to Topic
```python
def add_subscriber(email):
    resp_email = sns.subscribe(
        TopicArn=<arn of alert>,
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
