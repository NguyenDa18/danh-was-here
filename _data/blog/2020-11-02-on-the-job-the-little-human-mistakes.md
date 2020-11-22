---
template: BlogPost
path: /on-the-job-human-mistakes
date: 2020-11-02T02:23:58.953Z
title: 'On the Job : The Little Human Mistakes'
metaDescription: 'human mistakes, job advice, software engineer advice'
tags: ['On the Job', 'Personal']
thumbnail: 'https://res.cloudinary.com/dnguyen/image/upload/v1606011157/blog/work-skyscrapers_dmmydt.jpg'
---
# The first of a series of job reflection / advice posts
- Core image from [Lorem Picsum](https://i.picsum.photos/id/1048/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk)

### TLDR: A lesson reminded from an all-nighter with the team trying to squash *one* bug

I've been working full-time for a year and a half now and have to emphasize something that cannot be taught : the significance of human errors that developers cannot control with code and can overlook, and why they can be the hardest issues to resolve. Developers rightfully pride themselves in making failing tests pass green, configuring the perfect structure for a project, and using version control to confidently time-travel through a project's snapshots to tell exactly the state of the project before. An attachment to control can be cultivated within developers -control fosters predictability, predictability fosters oh-so-desired mental clarity (you get the gist). But of course, not every part of a project can be implemented and tested with code, and I was reminded of that during out team's Open Enrollment deploy this year. One bug caused our deployment to only be 98% successful. That simply wouldn't do.

----

Some background information first: my team maintains and develops a medical insurance shopping site that always has a momentous deploy during Open Enrollment, the period when Americans can sign up for health insurance or change their plan. During that time, users from Oregon, Washington, Utah, and Idaho would be able to use our website to make changes for Open Enrollment.

Yesterday, my team was tested with pulling an all-nighter because of one pesky bug: a generated PDF form document that would be shown at the end of the application was displaying successfully for all browsers except for in Chrome. Twisting the knife some more, the document was displaying in Chrome for some regions but not for others. This ruled out that it was an issue in the codebase, because the code used to fill and process the PDF form was reused for all regions. To our dread, that could only mean one thing: something was intrinsically wrong with the PDF templates being used.

Eventually we were able to solve the problem by removing a page missing metadata from the PDF templates for states that the display was breaking on, and that reminded me of one of the hardest parts of working in industry.

The hardest part: as a developer you are responsible for solving any technological issues that occur, or justifying why additional help or reassignment is needed. Few things are more mentally draining than an error that has no way of tracing in error logs, and especially when it seems like a solution cannot be easily found after some Googling.
