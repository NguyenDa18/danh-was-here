---
template: BlogPost
path: /download-aws-s3-files
date: 2020-04-10T01:02:40.429Z
title: Downloading S3 Objects Using Presigned URLs
metaDescription: 'aws,s3,download,presigned url, how to download S3 object, AWS S3 download'
---
# Downloading S3 Objects Using Presigned URLs

## Background

For my current work project I am generating an Excel workbook and saving it to a private S3 bucket. I have a UI built in React that should allow that Excel file to be downloaded with just a click of a button. At first I thought it had to be complicated: expose an API Gateway endpoint that connects to an AWS Lambda that queries S3 for that object and sends that over by a bytestream. Ugh. One thing though was Excel sheets didn’t translate well to bytestream (or at least it wasn’t obvious how to do it with the library I was working with).

…And then I discovered:
[presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html)

![Whoa](https://giphy.com/gifs/woah-PoBDmG9EUpPhu)

With these babies you can generate a somewhat secure temporary link that exposes your S3 file as a downloadable link for the amount of time you set that link’s lifetime to.

As usual, Boto3 documentation on presigned URLs in Python [could have been better](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.generate_presigned_url).

## But then... 
Huzzah I found a worthy [example of usage](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html).

## Dynamically Generated Download Link

```python
import logging
import boto3
from botocore.exceptions import ClientError


def create_presigned_url(bucket_name, object_name, expiration=3600)
    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name},
                                                    ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response
```

Now all I had to do was return the link as a response to when data is POSTed on the frontend and voila, an easy to use and maintain way to make downloads from private S3 possible :3

## React Client Side Snippet

```react
const DownloadThing = () => {
const [downloadLink, setDownloadLink] = useState('https://via.placeholder.com/150')
const handleDownload = async (e) => {
    try {
     // endpoint points to Lambda that generates workbook and presigned URL
      const res = await fetch(process.env.REACT_APP_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      // URL returned from my POST call
      const { downloadurl } = await res.json()
      alert(`Created Excel sheet! ${downloadurl}`)
      setDownloadLink(downloadurl)
    }
    catch (err) {
      console.error(err)
    }
  }
return (
  <>
    <a href={downloadLink} download="test.xlsx">Get From S3</a>
  </>
)
} 
```
