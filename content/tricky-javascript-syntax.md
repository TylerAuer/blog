---
title: "Tricky Javascript Syntax"
date: 2020-08-13T12:31:27-07:00
author: "Tyler Auer"
categories: ["Explainer",]
tags: [ "JavaScript",]
draft: true
subtitle: "Weird notation you'll run into as you learn JavaScript"
# last-update: ""
---
There's a reason we refer to JavaScript, Python, Go, and others as languages. Each has their own vocabulary and grammar that they use to represent ideas. Part of learning to program is figuring out how to express logic with the symbols and structures of a language.

I first learned to code in Python but began to focus on JavaScript when I decided to change careers. JavaScript, like English, often has multiple ways to express the same concept. This flexibility is powerful. It allows us to write clear and concise code that can be understood more-easily by others.

But, that same flexibility makes it hard for someone who is just learning. When the same concept is expressed in multiple forms, it's harder to see the patterns and make connections. So, I've assembled this guide for the trickier notation and syntaxes that I encountered as I learned JavaScript[^1].

## Functions

There are a few different ways to define functions in JavaScript. You'll run into all of them, but the most common currently seems to be **arrow functions**. Here are a few examples:

{{< codewindow "arrow-function-examples.js">}}
  {{< highlight js "linenos=true">}}
  
  // Reference to anonymous arrow function stored in variable
  const referenceToAnAnonymouseArrowFunction = (number) => {
    return number + 1
  }

  // Arrow function used with array helper method
  const arr = [1, 2, 3, 4]
  const doubledArr = arr.map((num) => num * 2)
  {{< /highlight >}}
{{< /codewindow >}}



## Truthy and Falsy Values

## Spread Operator

## Object / Array Destructuring

## Short-circuit Evaluation

## Promises and Async Functions

## Type Coercion

## Closure

[^1]: Obviously, still learning.