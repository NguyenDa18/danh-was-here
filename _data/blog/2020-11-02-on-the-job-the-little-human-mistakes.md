---
template: BlogPost
path: /on-the-job-human-mistakes
date: 2020-11-02T02:23:58.953Z
title: 'On the Job : The Little Human Mistakes'
metaDescription: human mistakes
---
# The annoying little mistakes that matter

I've been working full-time for a year and a half now and would like to hammer something that cannot be taught : the significance of human errors.

Yesterday, my team was tasked with pulling an all-nighter because of one pesky bug: a fillable PDF form document was displaying fine for all browsers except for Chrome. Twisting the knife some more, the document was displaying in Chrome for some regions but not for others. That mostly ruled out that it was an issue in the codebase, because the code used to write to and process the PDF form was reused for all regions. Some states had PDF forms that were generated fine, so that meant the code was working as expected.

To our dread, that could only mean one thing: something was intrinsically wrong with the PDF templates being sent.

This is the hard part: as much as
