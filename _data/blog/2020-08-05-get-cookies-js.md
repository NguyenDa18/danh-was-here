---
template: BlogPost
path: /get-cookies-js
date: 2020-08-05T16:51:42.862Z
title: How I Get Application Cookies using JS
metaDescription: 'JavaScript, Get Cookies JS, Cookies Util Function, JavaScript Util Cookies'
tags: ["Quick Notes", "JavaScript"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1596646591/blog/cookies_rucwwh.jpg
---
# How I Get Application Cookies Using Pure JS
* Core image from [What's Cooking?](https://www.kraftwhatscooking.ca/recipe/bakers-chocolate-chip-cookie-recipe-85606)

For a work project I had to transfer some application cookies used for user tracking to a site we had to redirect to, passing the cookies as parameters in the context.

This utility function was all I needed to make it work:
```javascript
export function getCookie(name) {
	if (document) {
		let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	return ""
}
```

The utility function successfully parses the cookies stored as strings and removes whitespace characters and character encodings so you have clean representations of the cookie values returning after querying by key.

And you use the utility function as so:
```javascript
const mycookie = getCookie(`${cookieName}`)
```

[Source of Cookies Util Function](https://javascript.info/cookie)

This got the job done and I will be turning to this if I need a simple solution to get cookies. Thanks!
