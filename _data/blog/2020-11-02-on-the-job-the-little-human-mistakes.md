---
template: BlogPost
path: /on-the-job-human-mistakes
date: 2020-11-02T02:23:58.953Z
title: 'On the Job : The Little Human Mistakes'
metaDescription: human mistakes
---
# The first of a series of job reflection posts

I've been working full-time for a year and a half now and would like to emphasize something that cannot be taught : the significance of human errors that developers can overlook, and why they are the hardest to resolve. Developers rightfully hold pride in making failing tests pass green, configuring the perfect structure for a project, and even laying out the architecture.

Some background information: my team maintains and develops the insurance shopping site that always has a momentous deploy for Open Enrollment. During the time, users from Oregon, Washington, Utah, and Idaho would be able to apply for insurance for next year.

Yesterday, my team was tasked with pulling an all-nighter because of one pesky bug: a fillable PDF form document was displaying fine for all browsers except for Chrome. 

Twisting the knife some more, the document was displaying in Chrome for some regions but not for others. This ruled out that it was an issue in the codebase, because the code used to fill and process the PDF form was reused for all regions. Some states had PDF forms that were generated and displayed successfully, so that meant the code was working as expected.

To our dread, that could only mean one thing: something was intrinsically wrong with the PDF templates being sent.

This is the hard part: as much as
