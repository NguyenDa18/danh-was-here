---
template: BlogPost
path: /on-the-job-human-mistakes
date: 2020-11-02T02:23:58.953Z
title: 'On the Job : The Little Human Mistakes'
metaDescription: human mistakes
---
# The first of a series of job reflection posts

I've been working full-time for a year and a half now and have to emphasize something that cannot be taught : the significance of human errors that developers can overlook, and why they are the hardest to resolve. Developers rightfully pride themselves in making failing tests pass green, configuring the perfect structure for a project, and using version control to confidently time-travel through a project's snapshots to tell exactly the state of the project before.

Some background information first: my team maintains and develops the medical insurance shopping site that always has a momentous deploy during Open Enrollment, the period when Americans can sign up for health insurance or change their plan. During that time, users from Oregon, Washington, Utah, and Idaho would be able to use our website to make changes for Open Enrollment.

Yesterday, my team was tasked with pulling an all-nighter because of one pesky bug: a fillable PDF form document was displaying fine for all browsers except for Chrome. 

Twisting the knife some more, the document was displaying in Chrome for some regions but not for others. This ruled out that it was an issue in the codebase, because the code used to fill and process the PDF form was reused for all regions. To our dread, that could only mean one thing: something was intrinsically wrong with the PDF templates being used.

Eventually we were able to solve the problem by removing a page missing metadata from the PDF templates for states that the display was breaking on, and that reminded me of the hardest part of working.

This is the hard part: as a developer you are responsible for solving any technological issues that occur, or justifying why additional help or reassignment is needed.
