---
template: BlogPost
path: /my-local-setup
date: 2020-06-01T22:21:00.000Z
title: My Local Setup
metaDescription: 'Local Mac Setup, Homebrew, Python, Java, Local Install, Environment Setup'
tags: ["Tech Help", "Quick Notes"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1584826410/blog/personal/desk_background_ico88y.jpg
---
# Local Setup w/ Homebrew

[Brew Documentation](https://brew.sh/)

Setting up for local dev is sometimes a PIA, but Homebrew makes it SOOO much easier! My go-to answer for whenever someone asks why Mac? As I move to computer to computer, I will cherish my favorite moving buddies: Git (my go-to version control), Homebrew, and NPM. Homebrew? More like Homeboy...

- - -

## Install Homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## Brew Installs

### Python related

* `brew install nginx`
* `brew install python`
* `brew install anaconda`

### Adjust path to use Python 3 instead of Python 2

* [Link](https://medium.com/ayuth/install-anaconda-on-macos-with-homebrew-c94437d63a37)
* Edit `~/.zshrc`
* Add `export PATH="/usr/local/anaconda3/bin:$PATH"`
* Restart terminal or use `source ~/.zshrc` to reload your shell environment
* Then you will be able to run `jupyter notebook` or `python` and you will be using the Anaconda distribution

### Java Stuff : handle JDK + JRE

* `brew tap adoptopenjdk/openjdk`
* `brew cask install adoptopenjdk8`
* `brew install jenv` : [Manager for diff Java versions](https://medium.com/@brunofrascino/working-with-multiple-java-versions-in-macos-9a9c4f15615a)
* `brew install tomcat`: [Install Tomcat Server](https://medium.com/@fahimhossain_16989/installing-apache-tomcat-on-macos-mojave-using-homebrew-28ce039b4b2e)
* `brew install maven`: [Install Maven](https://www.code2bits.com/how-to-install-maven-on-macos-using-homebrew/)
* `brew cask install dynamodb-local` : [Use Dynamo locally](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)
* `brew cask install gradle`
* `brew cask install intellij-idea-ce`

## SDKMan to the rescue
- [Easy install of Java and Gradle versions](https://sdkman.io/)

### Then you can install Leiningen, b/c Clojure has dependency on Java

* `brew install leiningen`

### Install Docker
* `brew cask install docker`
* Installs Docker Desktop app
* Start Docker app and follow the same routine as if you installed the Mac .dmg from Docker: [Reference](https://stackoverflow.com/questions/44084846/cannot-connect-to-the-docker-daemon-on-macos)

### Node Installation

* Use curl command from [NVM link](https://github.com/nvm-sh/nvm)
