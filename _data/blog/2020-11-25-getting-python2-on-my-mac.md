---
template: BlogPost
path: /get-python2
date: 2020-11-25T19:24:41.219Z
title: Getting Python2 on my Mac
metaDescription: 'Python2 Mac install, python2 install'
---
## The Python community is trying to Thanos snap Python2...

### TLDR:
1. Install Pyenv from Homebrew
```bash
brew install pyenv
pyenv versions
```

- Running this step you will see what version of Python your current system is using

2. Switch to Python2
```bash
pyenv install 2.7.18
pyenv global 2.7.18
```

3. Enable Python2 in your Bash shell
```bash
eval "$(pyenv init -)"
```

And for good reason. Python2 is considered pretty deprecated, and Python3 is the way to go.

Python3 has treated me well, as an ally for working with AWS, the joy of using print method instead of statements, and the Machine Learning support built around it.

However, Python2 would just not leave me alone.
Enter: node-sass, particularly node-gyp.

Here is how I got Python2 working on my Mac

---
- [Source](https://stackoverflow.com/questions/18671253/how-can-i-use-homebrew-to-install-both-python-2-and-3-on-mac)
- [PyEnv Documentation](https://github.com/pyenv/pyenv)
