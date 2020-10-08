---
template: BlogPost
path: /upload-file-to-aws-s3-bucket
date: 2020-04-10T01:02:40.429Z
title: Uploading File to AWS S3 Bucket
metaDescription: 'aws,s3,upload,base64,api-gateway,aws upload'
thumbnail: 'https://res.cloudinary.com/dnguyen/image/upload/v1583116494/blog/folders_squarespace-cdn_h2bu35.jpg'
tags: ['AWS', 'Quick Notes']
---
# Uploading a File To S3

## Background 

I ran across another common problem with my work project: how to upload a file to a private S3 bucket. In only an hour I was able to implement it after finding the exact right resources to learn from :)

## How I Did It

The steps involved in the UI side are:

1 - Initialize API Gateway endpoint for uploading (see below link)
2 - Encode the file to Base64

```js
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
const encoding = await toBase64(file).catch(e => console.log(e))
});
```

3 - Remove the content type heading from the encoding (in this case I am removing the metadata related to the Excel file I am trying to upload)

```js
const b64 = encoding.replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", "")
const content = {
  content: b64
}
```

4 - Write the AJAX async/async snippet to upload the base64-encoded file

```js
try {
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
    if (res.status === 200) {

      // Using react-toastify to notify user
      toast.success("🎉 Uploaded file successfully!", { autoClose: 5000 })
    }
    const { statusCode } = await res.json()
    return statusCode === 200
  }

  catch (e) {
    // Using react-toastify to notify user
    toast.error('🔥 Upload error.', { autoClose: 5000 })
  }
```

## Sources
- [API Gateway for Uploading](https://medium.com/swlh/upload-binary-files-to-s3-using-aws-api-gateway-with-aws-lambda-2b4ba8c70b8e)
- [Base64 encode file with async/await](https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript)