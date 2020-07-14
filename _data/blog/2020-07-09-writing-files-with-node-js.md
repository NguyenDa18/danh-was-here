---
template: BlogPost
path: /writing-files-with-nodejs
date: 2020-03-02T00:40:26.671Z
title: Writing Files with Node.js
metaDescription: Reference to write JSON files with Node.js
thumbnail:  https://res.cloudinary.com/dnguyen/image/upload/v1583116494/blog/folders_squarespace-cdn_h2bu35.jpg
---
# Writing Files 

1. Import fs module (native to Node, no need to install from NPM)
```js
const fs = require('fs')
```

2. Write using fs and format JSON neatly (you don't even need to create the file beforehand)
```js
try {
  fs.writeFile('./data/output.json', JSON.stringify(<js obj array>, null, 4), (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
}
catch (e) {
    console.error(e)
}
```
