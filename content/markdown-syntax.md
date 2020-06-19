+++
author = "Tyler Auer"
title = "Styles Sample Page"
date = "2019-03-11"
description = "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
tags = [
    "markdown",
    "css",
    "html",
]
categories = [
    "demo",
]
draft = true
+++

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.
<!--more-->

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

## H2 - Heading 2

### H3 - Heading 3

## An H2 Heading that is rather long and seems to go on forever onto multiple lines, am I right?

#### H4 - Heading 4

##### H5 - Heading 5

###### H6 - Heading 6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat. [^1]

[^1]: This is a quite long footnote in which I wax poetically about a few different things including how to keep this sentence going without it having any real meaning or value to the reader despite its considerable length and dirth.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike [^2]</cite>


[^2]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   | Name  | Age |
   | ----- | --- |
   | Bob   | 27  |
   | Alice | 23  |

#### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp; | Markdown&nbsp;&nbsp;&nbsp; | In&nbsp;&nbsp;&nbsp;                | Table  |
| ------------------------ | -------------------------- | ----------------------------------- | ------ |
| *italics*                | **bold**                   | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code` |

## Code Blocks

#### Code block with Hugo's internal highlight shortcode
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

<br>

{{< highlight javascript >}}
var randomColor = Math.floor(Math.random()*16777215).toString(16); // exactly 80
var hi = "Hello World!";
{{< /highlight >}}

<br>

{{< highlight js "linenos=table,hl_lines=6">}}
 const password = document.querySelector('#password');
 const message = document.querySelector('.message');

 password.addEventListener('keyup', function (e) {
     if (e.getModifierState('CapsLock')) {
         message.textContent = 'Caps lock is on';
     } else {
         message.textContent = '';
     }
 });

 var randomColor = Math.floor(Math.random()*16777215).toString(16); //exactly 80
 {{< /highlight >}}


## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item
* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus massa, dapibus eget elit nec, pulvinar iaculis neque. Nam tortor justo, fermentum at turpis at, tincidunt mollis orci. Praesent neque diam, elementum sed egestas aliquam, bibendum vel leo. Sed vel nisl gravida, iaculis est vel, aliquam sem. Nunc eget tincidunt orci. Praesent urna ex, tincidunt ac justo non, accumsan convallis libero. Integer luctus massa lectus, sed pellentesque est blandit quis. Curabitur ut dolor ultricies nibh varius malesuada et et nulla. In dui orci, aliquam vitae augue mattis, sagittis accumsan tortor. Donec urna lorem, tristique in vehicula vitae, sollicitudin id odio. Quisque condimentum ullamcorper vulputate. In varius non nibh quis convallis.

#### Nested list

* Item
  1. First Sub-item
  2. Second Sub-item

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd></kbd> to end the session. Praesent urna ex, tincidunt ac justo non, accumsan convallis libero. Integer luctus massa lectus, sed pellentesque est blandit quis. Curabitur ut dolor ultricies nibh varius malesuada et et nulla. In dui orci, aliquam vitae augue mattis, `/dir1/dir2/file.md` sagittis accumsan tortor. Donec urna lorem, tristique in vehicula vitae, sollicitudin id odio. Quisque condimentum ullamcorper vulputate. In varius non nibh quis convallis.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

