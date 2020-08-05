---
template: BlogPost
path: /flask-env-config
date: 2020-07-31T21:15:04.607Z
title: My Flask Setup for Multiple Environments
metaDescription: 'Flask server, Python server, Flask configuration multiple different environments'
tags: ["Tech Help", "Tutorials", "Python"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1587692311/blog/snake_fp6nd1.jpg
---
# My Flask Setup for Multiple Environments

For a work project, I used a Flask server as a backend for an internal tool. The tool would connect to an AWS endpoint depending on what environment it was deployed in, standard procedure of using a DEV, UAT/testing, and PROD environment. This called for using Flask configuration variables or we would run the risk of doing dev experimental work in the PROD environment -Oh ho ho! Do not be naughty like that!

Good news is, Flask makes it really easy to use different environments by taking advantage of the built-in config for a Flask app. As usual, there are many ways to specify your config but this is the method I found my groove with and will be using throughout any Flask development project.

# Let's get started.

Some prereq: instantiate a Flask app

The steps are:
1. Read the environment variables of the local operating system you deployed to.
A Docker compose file builds my Flask service within a container and specifies an environment variable with the key of `ENVIRONMENT` with the value of the respective environment: local, dev, uat, or prd within that container. The environment variable is essentially global for whatever process I run, as long as I have a way of reading it within the program. 

For a Flask app, read that environment variable using Python:
```python
# preferably in api.py where I instantiate my Flask app
import os
 _deployed_env_ = os.environ.get("ENVIRONMENT", default=None)

 # Flask app init
 app = Flask(__name__)
```

2. For local development set the default config
To do so, create a `settings.py` file in the same level as your Flask app (e.g. `api.py`).

Add in your environment config
```python
# settings.py
S3_BUCKET_NAME="my-poc-s3"
DB_NAME="my-poc-db"
DEBUG=True
```
By specifying the following we load that POC config to the Flask app
```python
app = Flask(__name__)

# read from initial config in settings.py
app.config.from_object('settings')
```

3. Override the config depending on the environment
The last step is a simple conditional statement to check the environment variable used for deploy:
```python
# override env variables based on deploy target
if (_deployed_env_ is not None):
    if (_deployed_env_ == 'dev'):
        app.config.from_pyfile('./appconfigs/dev_settings.py')
    elif (_deployed_env_ == 'uat'):
        app.config.from_pyfile('./appconfigs/uat_settings.py')
    elif (_deployed_env_ == 'prd'):
        app.config.from_pyfile('./appconfigs/prd_settings.py')
    else:
        raise RuntimeError('Unknown environment setting provided.')
```

I like to create a folder called `appconfigs` and add the config variables that will override the default config.

And that's it! A simple way to set the config for a Flask server depending on the environment your fancy server is deployed to! 

🎵 It's in the way that you use it... 🎵
