---
title: "Versions of Javascript"
date: 2020-06-23T09:18:55-07:00
author: "Tyler Auer"
categories: ["Explainer",]
tags: [ "JavaScript",]
draft: true
subtitle: "ECMAScript, var, const, let, and why there are so many different verisons of JavaScript."
last_update: 2020-06-29
---

If you are learning JavaScript, you might not be aware that there are multiple versions of the language. Once you realize this, you might not worry. Almost everything on computers is versioned. Maybe you are used to applications updating automatically. After all, your computer and phone update to new versions all the time and not much seems to change, right?

JavaScripts versions are a bigger deal. And, it's not obvious to understand why. So, let's get into it.

## Your JavaScript code does not run on your device

When you build a site with JavaScript, your code is sent to a user's computer where it is run by their browser.[^1] JavaScript is an interpreted language (as opposed to compiled into machine code) and the user's web browser is what interprets the code you've written.

[^1]: That's not exactly the whole story. When you test your site on your computer, obviously you are running the code on your machine. Also, nowadays javascript can run outside of broswers. [Node.js](https://nodejs.org/en/) lets you write JS on your server and [Electron](https://www.electronjs.org/) lets you design desktop applications in JavaScript. That's one reason JS is a great language to learn, it can be used in so many different places!

The problem is that not everyone uses the same browser, and those browsers interpret your code differently. To make matters worse, many users fail to update their browsers regularly (if ever). So your users will be running your code using different browsers and different versions of the those browsers. This is not an insignificant issue.

So why bother updating JavaScript at all? Why not just stick with the same version of JavaScript so we don't have these browsers interpreting our code in different ways?

## Why are there different versions of JavaScript?

Programming languages evolve over time. Developers fix bugs and add new features. This a good thing. The new features especially can make your life as a developer much easier.

JavaScript was created by Brendan Eich in 1995 and was adopted by The European Computer Manufacturers Association (ECMA) in 1997 which is why it is sometimes referred to as [ECMAScript](https://www.ecma-international.org/memento/tc39.htm).

{{% notebox %}}
People use two different names to refer to the editions. For example, **ES6** and **ECMA2015** refer to the same versions. I'll stick with the latter since I think the year it was adopted is useful context. [w3schools](https://www.w3schools.com/js/js_versions.asp) has a great table summarizing the editions.
{{% /notebox %}}

Since then it's gone through a number of editions, each adding new features that make it easier for developers like you to build robust and engaging websites. Many functions you'll use often are relatively new to JavaScript.

* `JSON.parse()` wasn't added until ECMA2009
* `let` and `const` weren't added until ECMA2015
* `async` and `await` weren't added until ECMA2017

We really don't want to be writing code without some of these and more modern features. But, we also know that some people's browsers will not interpret these commands correctly (or at all). So, what can we do?

## So What are we Supposed to do?

If you are just learning, probably nothing. You've got enough to figure out to get your applications to run in a modern, up-to-date browser. Focus on making your application work in the best cast scenario. Then, as you learn more, you can refactor and expand the browsers you support.

But, when it comes to features like `let` and `const` from ECMA2015, you can rely on *most* browsers to support them. [Can I use ...](https://caniuse.com/#home) is a great site to help you see what percentage of users will be able to handle a given feature. At the time of writing, 94.11% of users will be good with you using `let`.

If you are a company, however, you might start to care if five or ten percent of your customers can't use your site. This is an even bigger issue if your target users are in certain countries or regions. In China, for example, only 81.67% of users' browsers support `let`. Yikes! That's nearly one-fifth of your potential customers!

Luckily there are tools that help with this. [Babel](https://babeljs.io/) is one of the best well known. Babel automatically turns a file written with fancy-schmancy, new JS features into one written with old-school JavaScript. Here's a quick example I put into Babel's [Try It Out](https://babeljs.io/repl) feature:

```js
///////////////////////////////////
// My code before Babel converts it
const adjectives = ["cool", "human", "bad at choosing adjectives"]

adjectives.forEach(adj => {
	console.log(`Tyler is ${adj}`)
})

//////////////////////////////////
// My code after Babel converts it
"use strict";

var adjectives = ["cool", "human", "bad at choosing adjectives"];
adjectives.forEach(function (adj) {
  console.log("Tyler is ".concat(adj));
});
```

Notice that `const` was replaced with `var`, my arrow function had its syntax changed, and the [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) now uses `string.concat()`. Babel did all of this conversion work for me, something I'd really appreciate if my code was longer and more complex.
