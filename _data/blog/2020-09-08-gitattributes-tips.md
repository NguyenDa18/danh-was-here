---
template: BlogPost
path: /gitattributes-tips
date: 2020-09-08T16:51:42.862Z
title: Solve Script Issues with GitAttributes
metaDescription: 'script command not found, CLRF, LR, line endings for windows and linux'
tags: ["Quick Notes"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1583116494/blog/folders_squarespace-cdn_h2bu35.jpg
---
# Solve Script Running Issues with .gitattributes

## Background
Today at work I was running into a pesky error when trying to run a service with `docker-compose up`. 

The error:
```sh
internal-service    | /bin/sh: ./start.sh: not found
```

I had used a team GraphQL service template to generate my service and what was strange was that the current services not using the template were running fine with Docker Compose but *every single* one I generated failed (I knew I had to contact the developer of the template after seeing that the problem was not just in my service but in the docker config of the template itself). First we were stumped -the docker-compose.yml, Dockerfile, and aws.yml files were identical between working services and the ones failing based off of the template. But after some digging with the other developer, the other developer suggested line endings being the problem:

```sh
bash-4.4$ ./start.sh
bash: ./start.sh: /bin/bash^M: bad interpreter: No such file or directory
bash-4.4$
```

In which the start.sh script was in the correct path, but still not being found possibly due to line endings being different between Windows and Macs/Linux machines.

I was sure this was a common problem and sure enough I found articles that helped me discover .gitattributes files:
- [First article](https://techblog.dorogin.com/case-of-windows-line-ending-in-bash-script-7236f056abe)
- [Article on how to change all the line endings of a repo with .gitattributes](https://docs.github.com/en/github/using-git/configuring-git-to-handle-line-endings#refreshing-a-repository-after-changing-line-endings)
- [Another article confirming problem was due to line endings](https://stackoverflow.com/questions/37419042/container-command-start-sh-not-found-or-does-not-exist-entrypoint-to-contain)

## Details
So the problem was that Windows CLRF line endings were causing our script to fail.

At this point, it was a simple fix using a .gitattributes file, which I will be using for future projects.

- `touch .gitattributes`
- Add to the file:
```sh
* text=auto
*.sh text eol=lf
```

- `git add --renormalize .` : Change all line endings
- `git push` : Problem solved!
