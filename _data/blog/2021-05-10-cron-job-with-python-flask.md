---
template: BlogPost
path: /python-flask-cron-jobs
date: 2021-05-02T01:08:29.888Z
title: Cron Job with Python Flask
---
# Easiest way to configure cron jobs on running Flask service
One requirement I had for my internal service was to read from SharePoint periodically (in this case nightly), and update data if the file had changed.

I used Flask AP Scheduler.

## Install python package 
- `pip install `