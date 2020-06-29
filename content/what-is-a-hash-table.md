---
title: "What Is a Hash?"
date: 2020-06-28T19:48:59-07:00
author: "Tyler Auer"
categories: ["explainer",]
#tags: [ "html",]
draft: true
subtitle: ""
# last-update: ""
---
When I first started coding, I saw the term "hash" frequently but never really understood what it was. I certainly had never implemented one and wasn't even sure if I had used one. And, Googling "hash" didn't get me any explanations I could wrap my head around. But, now that I've learned a bit more, I'd like to try to provide the explanation that beginner me was looking for.

## You've Hashed Before!

Chances are, you've used a hash map before because [your programming language of choice](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array)) offers one as part of its standard library and because they are incredibly useful. In JavaScript, for example, `objects` are hash maps[^1]. Python calls their implementation a `dictionary`. You can recognize them by their key-value pairs:

[^1]: This may not be 100% accurate, but it is true enough for our purposes here.

{{< highlight js>}}
  // a JavaScript object
  const aHashMap = {
    heightInInches: 73,
    weightInPounds: 200,
    ageInYears: 35
  }
{{< /highlight >}}

Hash Maps are great to use in your code because they make it easy to access data. If I need a value, I can just reference its key (ex: `aHashMap.heightInInches`). My code editor will also recognize what I am typing and use autocomplete to help me.

That convenience for you as the coder is also great for the computer. Behind the scenes, hash maps are really efficient, especially for looking up (searching) for values. Let's look at what they are doing.

## Hash VS Hash Map

A confusing feature of this concept is that **hash** and **hash map** (or sometimes hash table, hashing, ...) are used somewhat interchangebly, and it's hard to know what is what.

A hash is a function that takes an input string and outputs an integer. In other words, you give it some text and it spits out a number. Importantly, if you give it the same text it **ALWAYS** returns the same number, meaning the same input always turns into the same output.

A very simple hash function might convert characters to their [ASCII](https://en.wikipedia.org/wiki/ASCII) values, like so:

{{< codewindow "hashing_function.js">}}
  {{< highlight js>}}
  // This isn't a real function in JS, I just made it up as an example
  hashing_function('helloworld'); // returns: 104101108108111119111114108100
  {{< /highlight >}}
{{< /codewindow >}}

The output of the **hash function** is then used as an index for an array. That system, where an input goes into a hash function and provides a reference for where to find data in an array, is what is known as a **hash map**.

Wait, did you catch that I suddenly said array? Yeah, hash maps store data in an array. But, their trick is to use the integer that comes out of the hashing function as the index (the position) of the associated value.

Why does this matter? Well, it makes looking up values in the array much faster. Let's look at an array of key-value pairs stored in nested subarrays:

```js
const arrOfKeyValuePairs = [
  [heightInInches, 73],
  [weightInPounds, 20],
  [ageInYears, 35]
  // imagine many many many more key-value pairs
  // ...
  // ...
]
```

If I wanted to search for `ageInYears` in this array, I would need to go one-by-one through every single key-value pair until one matched. If the item I need is in the last position (say `[dataOfDeath, 07042076`), then I would need to traverse the whole array. That's slow!

With a hash map, the hashing function is a guide[^2] that tells me exactly where in the array the value I want is located. I shove my key into the hashing function and it tells me exactly which index has the data I want. No need to look anywhere else!

[^2]: Or, dare I say, a map?

## A Few More Intense Details (Optional)

If you are wondering how long this array would need to be to handle ***HUGE*** indexes like in my ASCII example, well you've unearthed another layer of complexity. Since arrays take up space in memory we certainly can't be occupying 104,101,108,108,111,119,111,114,108,100 spots just waiting for one or two to be filled with data.

Instead, a prediction is made about the size of the array that will be needed and then the array's length is used with modulo to ensure the index is actually within the array's length. An example will help here:

```js
function hash(inputString) {
  // Returns the number of characters in the input string
  return inputString.length
}

const anArrayWith3PositionsForTheHashMap = [ , , ]

// hash('Hello') returns 5 which would then be
// divided by 3 (the length of the array).
// The remainder, 2, is then the index for the data
hash('Hello') // 5 --> 5 % 3 --> 2
hash('See you!!!') // 10 --> 10 % 3 --> 1
hash('A longer input!') // 15 --> 15 % 3 --> 0
```

Since the array for the hash map has three positions, we compute mod 3 (`%` in many languages) to identify the index for the data. If it turns out that our array is too short, then we make it larger, change the mod and recalculate the indexes. But, importantly, the result of our hashing function does not change. Just the mod we are using to adjust it.

But, this doesn't always work out so nicely. You may have noticed that I chose my values carefully in the above example. After using modulo, I got three unique indexes. That's not guarunteed. In fact, if the length of my array had been 5 instead of 3, then 5, 10, and 15 mod 5 would all return 0. Disaster!

This is known as a collision. It's not actually a disaster -- we can just store multiple values at that index -- but it does slow down our hash map.

Building good hash maps is about balancing array size, hashing function complexity, and a host of other things. Lots of people with lots of PhDs work on optimizing these concerns, so we don't have to worry about them.

## Where Else Are Hashing Functions Used

- For encoding data where reversing is not ideal
  - Our ASCII hash function is reversible.
  - But it is possible to write functions that cannot be reversed (absolute value and square root) 
- This is often used when storing passwords or other private information. You use a hash to jumble up the users password. Then when they sign in you use the same function to jumble up the password they entered and see if the jumbles match. All the while, you don't even know what their password is. And, if someone hacks your server, they can only get the jumble, not the password.

https://www.wired.com/2016/06/hacker-lexicon-password-hashing/