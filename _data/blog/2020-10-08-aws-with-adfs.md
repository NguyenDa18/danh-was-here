---
template: BlogPost
path: /aws-with-adfs
date: 2020-02-24T18:55:16.701Z
title: AWS with ADFS
metaDescription: 'Log in with AWS with ADFS, aws-adfs, python, aws'
thumbnail: 'https://res.cloudinary.com/dnguyen/image/upload/v1582578373/blog/cloud_lorempixel_1056_p3osjj.jpg'
tags: ["Quick Notes", "AWS"]
---
# Logging in to AWS with ADFS
If your organization uses Active Directory Federation Services (ADFS), you can use this very useful tool to authenticate with the cli

* prereqs: python and pip installed, also aws cli tool

## Generate credentials to work with aws-cli
- Download AWS-ADFS at [this link](https://github.com/venth/aws-adfs)
- Run the following command:
```sh
aws-adfs login --no-sspi --adfs-host aws-sso.<company>.com --profile default
```

- Fill out the username and password like you would on the UI on initial load of the command line tool

## View Generate AWS Credentials
- View credentials with `vi ~/.aws`, check credentials folder
- Your credentials will look like so:
```bash
[default]
aws_access_key_id = blah
aws_secret_access_key = blah
aws_session_token = long blah
aws_security_token = long blah
```
- Configure CLI with the new credentials

## Use with the CLI:
- `aws configure`
- answer prompts:
```sh
AWS Access Key ID [*******]:
AWS Secret Access Key [*******]:
Default region name [<region>: <enter region>]
Default output format [json]:
```
