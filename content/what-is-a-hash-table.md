---
title: "What Is a Hash?"
date: 2020-06-28T19:48:59-07:00
author: "Tyler Auer"
categories: ["explainer", "data structure"]
#tags: [ "html",]
draft: false
subtitle: "What are hashes, hashing functions, and hash maps? And, why do programmers use them?"
# last-update: ""
---
When I first started coding, I saw the term "hash" frequently but never really understood what it was referring to. I certainly had never implemented one and wasn't even sure if I had used one. Googling "hash" didn't get me any explanations I could wrap my head around either. But, now that I've learned a bit more, I'd like to try to provide the explanation that beginner me was always looking for.

## You've Hashed Before!

Chances are you've used a hash map before because [your programming language of choice](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array)) offers one as part of its standard library, and because hash maps are incredibly useful. In JavaScript, for example, `objects` are hash maps[^1]. Python calls their implementation a `dictionary`. You can recognize them by their key-value pairs:

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

That convenience for you as the coder also happens to be great for the computer. Behind the scenes, hash maps are really efficient, especially for looking up (searching) for values. Let's look at how they are built to understand why.

## A Hash is used to make a Hash Map

A confusing feature of this concept is that **hash** and **hash map** (or sometimes hash table, hashing, ...) are used somewhat interchangeably, and it's hard to know what is what.

A hash is a function that takes an input string and outputs an integer. In other words, you give it some text and it spits out a number. Importantly, if you give it the same text it *ALWAYS* returns the same number, meaning the same input always turns into the same output.

A simple hash function might convert characters to their [ASCII](https://en.wikipedia.org/wiki/ASCII) values, like so:


{{< highlight js>}}
// This isn't a real function in JS, I just made it up as an example
hashing_function('helloworld'); // returns: 104101108108111119111114108100
{{< /highlight >}}


The output of the **hash function** is then used as an index for an array. That system, where an input goes into a hash function and provides a reference for where to find data in an array, is what is known as a **hash map**.

Wait, did you catch that I suddenly said array? Yeah, hash maps store data in arrays. But, their trick is to use the integer that comes out of the hashing function as the index (the position or address) of the associated value in the array.

Why does this matter? Well, it makes looking up values in the array much faster. Let's look at an array of key-value pairs stored in nested subarrays without hash mapping:

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

If I wanted to search for `ageInYears` in this array, I would need to go one-by-one through every single key-value pair until one matched. If the item I need is in the last position I check (say `[dataOfDeath, 07042076`), then I would need to traverse the whole array to find it. That's slow!

Even if my array is sorted and I do a binary search,[^2] I still will have to take multiple steps to find my value. Plus, I'll need to keep my array sorted, which takes work too.

[^2]: A binary search is a divide and conquer algorithm. You pick a value in the middle and use it to determine if the value you are looking for is to the left or right (smaller or larger). That eliminates half of the possible places you'd need to check. Doing this recursively finds a value in logarithmic time.

With a hash map, the hashing function is a guide[^3] that tells me exactly where the value I want is located in the array. I shove my key into the hashing function and it tells me exactly which index has the data I want. No need to look anywhere else!

[^3]: Or, dare I say, a map?

## A Few More (Optional) Details

If you are wondering how long this array would need to be to handle ***HUGE*** indexes like in my ASCII example, well you've unearthed another layer of complexity. Since arrays take up space in memory, we certainly can't be occupying 104,101,108,108,111,119,111,114,108,100 spots just waiting for one or two to be filled with data.

Instead, a prediction is made about the size of the array that will be needed and then the array's length is used with modulo to ensure the index is actually within the array's length. An example will help here:

```js
// Returns the number of characters in the input string
function hash(inputString) {
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

But, this doesn't always work out so nicely. You may have noticed that I chose my values carefully in the above example. After using modulo, I got three unique indexes. That's not guaranteed. In fact, if the length of my array had been 5 instead of 3, then 5, 10, and 15 mod 5 would all return 0. Disaster!

This is known as a collision. It's not actually a disaster; we can just store multiple values at that index. But, it does slow down our hash map, so we want to avoid it.

Building good hash maps is about balancing array size, hashing function complexity, and a host of other things. Lots of people with lots of PhDs work on optimizing these concerns, so we don't have to worry about them.

## Hash Functions are also used to Protect Your Passwords

Hashing functions are also really useful for storing passwords. When you create an account with a website you supply a password which the company stores on their server. When you return to the site, you send them your password and they check that the password you sent matches the one on their servers. The problem with this is that if a hacker breaks into their server they now have every user's username and password combination. A hash function can provide an added layer of protection.

Instead of storing your actual password, sites encode the password using a secret hashing function. Then when you try to login, they run the password you send through the same hash function and see if the outputs match. Then they never need to know or even store your actual password.

This method is secure because hash functions can be designed to be one way. Meaning, it's easy to provide an input and get an output, but hard to start with the output and derive the input like a hacker would need to do if they stole the hashed version of your password.[^4]

[^4]: A non-reversible function may seem hard to pull off, but you've definitely run into functions like this before. Exponentiation, for example, isn't reversible. If you have a function, *f(x)* = *x*<sup>2</sup>, and know that the output is 9, then what is the input? You can't be sure. Maybe it was 3. Or, maybe it was -3. So, that function is not reversible. Of course, it's easy for a black hat to try both of the possible values. So you'd need a better hash than this, but you at least get a taste of the methods. And, yes, this blog is written by a former math teacher.

How hard a hash function is to reverse makes a big difference. If one is easy to crack, then users don't have time to change their passwords and protect their accounts. But, if it takes a while, the company can alert their users of the breach and encourage them to change their passwords.[^5]

If you want to read more, [this article](https://www.wired.com/2016/06/hacker-lexicon-password-hashing/) from Wired is great!

[^5]: Most won't. And, since so many people use the same passwords at multiple sites, the hackers then can log into every account with that login-password combination.
