---
template: BlogPost
path: /react-map-with-google-api
date: 2021-06-12T21:06:26.383Z
title: "Tutorial: React Map Using Google Maps API"
metaDescription: react google map, google map api, react map, react, react
  google map tutorial, react tutorial, react simple project, react google maps
  api, @react-google-maps/api
---
# Simple Recipe #2 : React Map using @react-google-maps/api package

Our team released a substantial refactor of the ecommerce shopping app we maintain, making every component cleaner by switching to React functional components with React Hooks, using Redux Toolkit for less boilerplate, *TypeScript* porting which helps with typing protection and self-documenting code, and overall a cleaner developer experience and more efficient app; both in development times and better response times and accessibility scores in production.

I took upon the task of migrating the Pharmacy search page, which allows the user to search for pharmacy locations within their area or in proximity to a location they enter. The previous version of the component was a bit of a mess, with interop Google Maps API snippets setting the state in a class lifecycle function. Now that by the time we chose to refactor, there were many Google Maps React libraries we could use to make the codebase cleaner, the opportunity had to be taken.

Coincidentally, the humble and all-knowing Brad Traversy [released a React Google Maps example](https://www.youtube.com/watch?v=ontX4zfVqK8) with similar functionality for what we were going for, but the library he used 'google-map-react' did not support map search so I went with a different single library that gave everything we needed.