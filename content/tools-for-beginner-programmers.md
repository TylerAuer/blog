---
title: "A List of Tools for Beginner Programmers"
date: 2020-06-20T20:10:05-07:00
author: "Tyler Auer"
categories: ["Tools",]
tags: [ "Git", "Command Line", "Visual Studio Code", "Emmet", "Alfred", "Pock"]
draft: false
subtitle: "A growing collection of tools new programmers should use as they move from beginner to pro."
---

In your path from beginner to hobbyist to professional programmer, you'll find that the right tool can make a huge difference in your productivity and growth. Programming, especially as you are learning, means being in the zone, a flow state. The right tools and resources can make a big difference.

This is a list of things I found to be really helpful in my professional journey.

## Code Editor

The most important resource as you are learning is a **good editor**. You can write code in any text-editor. But an editor designed specifically for writing code comes with many features that will make your life better, way better.

A code editor does many things you will immediately appreciate. Things like syntax highlighting[^1], autocompletion[^2], multiple-cursors, and much more. Even if you aren't using these at first, you'll appreciate them as you become more advanced.

[^1]: **Syntax Highlighting** - Color coding your code based on the language or format of the file. This makes it easier for you to notice patterns and errors. Also, it looks pretty.

[^2]: **Autocompletion** - Your editor will recognize all different things as you type and offer to autocomplete what you are typing. This is especially useful for avoiding bugs from typos.

Choosing the right editor is very much about what feels right to you. And, there are a lot of options. Popular choices include:

- [Vim](https://www.vim.org/)
- [Emacs](https://www.gnu.org/software/emacs/)
- [Atom](https://atom.io/)
- [Sublime](https://www.sublimetext.com/)

But, **if you are a beginner**, I recommend [Visual Studio Code](https://code.visualstudio.com/) (usually just referred to as "VS Code"). It's an editor that's incredibly powerful and [popular](https://www.software.com/src/ranking-the-top-5-code-editors-2019), but also ***friendly*** for beginners.

Programmers like to do everything on their keyboard with shortcuts because moving their hand to and from their mouse is slow.[^3] So most editors have bare-boned, stripped-down interfaces. VS Code's is more robust. There are good 'ol buttons and menus you can click on. But, it also has all of keyboard-based shortcuts and tools other editors offer. VS Code also has an extensive extension library with easy, one-click installs. This is awesome when you are beginning.

[^3]: I know this sounds crazy, but you'll get to this point too. I really recommend making a habit of trying to learn a few different shortcuts at a time. When you find yourself doing something without using the shortcut, undo it and then redo it with the shortcut. You'll be amazed at how quickly you internalize it.

Finally, VS Code has excellent [Git](https://git-scm.com/) integration. If you don't know what Git is, then you'll definitely appreciate this when you finally have to learn to use it. VS Code provides a graphical interface for Git which is more intuitive than using the command line when you are a beginner. With that in mind...

## Git

[Git](https://git-scm.com/) is a version control system, a way to track changes to code. **Everyone** uses Git. Becoming a professional programmer means learning Git. Git also makes it easier to collaborate on projects with others, often through [GitHub](https://github.com/), an online repository for codebases.

As you might expect, Git and GitHub work together to track the changes you and others make and then merge those changes together. The closest analogous service is Google Docs, but two developers aren't working in the same document at the same time. Instead they work in their own copies of a file and then merge their changes together.

## Monospace Font with Ligatures

I didn't realize how much this mattered to me until I found a font I really liked. And, boy do I love [JetBrains Mono](https://www.jetbrains.com/lp/mono/#key-features)!

Coding fonts are monospaced, which means that each character is the same width. This is crucial for coding where lining up text is visually helpful and sometimes a requirement of the language. But, it's also not pleasant to look at for eight hours a day.

Programmers also use a wider variety of characters and symbols than a typical computer user. Being able to quickly and accurately differentiate between letters and letter combinations helps avoid typos and bugs. To help with this, many coding fonts provide a wide variety of ligatures.[^4] In JavaScript `=`, `==`, and `===` all have different meanings. A good coding font will reshape symbols like these into visually distinct but recognizable versions, helping you avoid bugs.

[^4]: A [ligature](https://en.wikipedia.org/wiki/Orthographic_ligature) is the combining of multiple characters into one symbol. This is often done with fi, fl or th in many fonts. 

There are other fonts that offer ligatures like [Fira Code](https://github.com/tonsky/FiraCode), but JetBrains Mono is the best.

## Emmet

[Emmet](https://emmet.io/) is a plugin for code editors (it comes preinstalled with VS Code) that helps you generate HTML content quickly. Once you get the hang of it, you'll save tons of time typing out annoying HTML syntax with classes, IDs, and more. Here's an example straight from Emmet's docs:

```HTML
<!-- Emmet abbreviation -->
#page>div.logo+ul#navigation>li*5>a{Item $}

<!-- One key/click transforms that abbreviation into -->
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

## Window Manager (macOS)

When coding, you'll often be moving back and forth between a few applications at a time. You'll want a terminal, an editor, and browser open all at once. You'll want these arranged nicely on your screen to avoid having to switch back and forth over-and-over.

MacOS has some built in features to help with this, but it's worth picking up a 3rd party option with a little more power, especially if you have a larger external monitor. I use [Magnet](https://apps.apple.com/us/app/magnet/id441258766?mt=12) but there is also a free option called [Rectangle](https://github.com/rxhanson/Rectangle). Both of these let you snap your windows to different positions instantly with shortcuts.

## Alfred (macOS)

MacOS's Spotlight feature ( <kbd>⌘ + space</kbd> ) is great for quickly opening apps, doing calculations, and many other tasks. [Alfred](https://www.alfredapp.com/) is Spotlight on steroids. It's more powerful and highly customizable. You can hook into your terminal and password manager, search specific sites, and much more.

## iTerm2 and Powerlevel10k (macOS)

While many beginners are intimidated by the command line (I certainly was) you'll learn to love it. Customizing your terminal set up is a great way to make it more accessible.

The first thing to do is to install [iTerm2](https://www.iterm2.com/) which is similar to Terminal but better. Next, you'll want to customize the theme. This can be confusing to set up. Oh My Zsh is a popular way to do this, but I strongly recommend [Powerlevel10k](https://github.com/romkatv/powerlevel10k). It's the best looking, the most customizable, and has the best tutorial to make the setup process easier.

## Pock (if your Mac has a Touch Bar)

If you've got a Touch Bar, you probably find it to be useless. [Pock](https://pock.dev/) is a free app that lets you customize your Touch Bar and make it useful.
