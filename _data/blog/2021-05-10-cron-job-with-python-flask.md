---
template: BlogPost
path: /python-flask-cron-jobs
date: 2021-05-02T01:08:29.888Z
title: Cron Job with Python Flask
---
# Easiest way to configure cron jobs on running Flask service
One requirement I had for my internal service was to read from SharePoint periodically (in this case nightly), and update data if the file had changed.

I used Flask AP Scheduler.

Documentation for the module is [here](https://github.com/viniciuschiele/flask-apscheduler).

## Install python package 
- `pip install flask_APScheduler`

## Import and configure the APScheduler in the main file (where Flask app is initialized)

```
from flask import Flask, request
from flask_apscheduler import APScheduler

# Add Function that is executed by cron job
def scheduledTask(*args):
    # code for cron job

# some code...

if __name__ == "__main__":
    # Flask hook for cron job
    scheduler = APScheduler()
    scheduler.app_job(id = 'Description of cron job', func = scheduledTask, trigger = 'interval', seconds = 86400)
    scheduler.start()
    app.run()
```