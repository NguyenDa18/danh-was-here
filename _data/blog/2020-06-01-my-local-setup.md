---
template: BlogPost
path: /my-local-setup
date: 2020-08-15T22:21:00.000Z
title: My Local Setup
metaDescription: >-
  Local Mac Setup, Homebrew, SDKMan, Python, Java, Local Install, Environment
  Setup
thumbnail: >-
  https://res.cloudinary.com/dnguyen/image/upload/v1584826410/blog/personal/desk_background_ico88y.jpg
---
# Local Setup for my Mac

Homebrew, SDKMan, and Git have been my absolute favorite moving buddies whenever I needed to hop from different computers, whether it was for the start of an internship or career, or because I had knocked my personal Mac over from a jazzercize session (theoretically for me, my sister actually did that for hers).

Homebrew is a gift for installing stuff on a Mac: [Brew Documentation](https://brew.sh/).

SDKMan is a great tool I use to manage Java stuff because it gives me the greatest amount of control over switching versions in the most intuitive way: [SDKMan Documentation](https://sdkman.io/usage).

Git is as every developer knows a very popular (the most popular) way to use version control for a project. It is what allows you to time travel with your code, to go back to the past to reference non-buggy code or to create a new timeline by branching off and making the needed changes.

Setting up for local dev can be a real PIA, but these tools make it SOOO much easier! Note that this is a heavily Mac based setup because of the use of Homebrew (we are mostly an Apple family). As I move from computer to computer, I will cherish these favorite moving buddies.

- - -

*First thing to do of course is to install Homebrew on the Mac:*

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## My Brew Installs

### For Python

* `brew install python`

  **Adjust path to use Python 3 instead of Python 2*

    * To view where python is installed

      * `ls -l /usr/local/bin/python*`
    * change default python symlink to the version you want to use

      * `ln -s -f /usr/local/bin/<python3 version> /usr/local/bin/python`

    * close terminal and check that you now are using Python3 as the default:

      * `python -V` : should return Python <python3 version>
    * [Source](https://dev.to/malwarebo/how-to-set-python3-as-a-default-python-version-on-mac-4jjf)
* `brew install anaconda`

  * *Anaconda Setup*

    * Edit `~/.zshrc`
    * Add `export PATH="/usr/local/anaconda3/bin:$PATH"`
    * Restart terminal or use `source ~/.zshrc` to reload your shell environment
    * Then you will be able to run `jupyter notebook` or `python` and you will be using the Anaconda distribution
    * [Source](https://medium.com/ayuth/install-anaconda-on-macos-with-homebrew-c94437d63a37)

### For Web Services

* `brew install nginx`
* `brew install mysql`

  * To secure db: `mysql_secure_installation`
  * For basic connect and run `mysql.server start`
  * Then `mysql -uroot`
  * [Source](https://www.youtube.com/watch?v=jzvsotmNrK8)

### For Java : handling JDK + JRE

* `brew tap adoptopenjdk/openjdk`
* `brew cask install adoptopenjdk8`
* `brew install jenv` : [Manager for diff Java versions](https://medium.com/@brunofrascino/working-with-multiple-java-versions-in-macos-9a9c4f15615a)
* `brew install tomcat`: [Install Tomcat Server](https://medium.com/@fahimhossain_16989/installing-apache-tomcat-on-macos-mojave-using-homebrew-28ce039b4b2e)
* `brew install maven`: [Install Maven](https://www.code2bits.com/how-to-install-maven-on-macos-using-homebrew/)
* `brew cask install dynamodb-local` : [Use Dynamo locally](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)
* `brew cask install gradle`
* `brew cask install intellij-idea-ce`

### For Clojure

* *Be sure Java is installed first since Clojure has a dependency on the JDK*
* `brew install leiningen`

### For NodeJS

* `brew install node`

#### Node Version Manager

* *Not a package from Homebrew but equally as easy to install*
* Similarly to SDKMan NVM allows you to switch between different Node versions
* `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
* Use curl command from [NVM link](https://github.com/nvm-sh/nvm)

### For Docker

* `brew cask install docker`
* Installs Docker Desktop app
* Start Docker app and follow the same routine as if you installed the Mac .dmg from Docker: [Reference](https://stackoverflow.com/questions/44084846/cannot-connect-to-the-docker-daemon-on-macos)

## My SDKMan Setup

* SDKMan allows you to install Java stuff similarly but also painlessly switch between versions (comes in handy for using current or past JDKs)
- `sdk install java 11.0.8.j9-adpt`
- `sdk install maven 3.6.3`
- `sdk install gradle 6.6.1`
* [Easy install of Java and Gradle versions](https://sdkman.io/)
