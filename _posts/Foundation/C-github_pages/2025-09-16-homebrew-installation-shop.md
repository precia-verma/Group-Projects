---
title: "Welcome to the Brew Shop! 🍺"
layout: post
date: 2025-09-16
permalink: /homebrew-installation-shop/
---

## Welcome to the Brew Shop! 🍺

### If you're driving anything other than a MacOS car, then you can skip this pickup stop.

Your customer wants Homebrew, here’s how to get it:

First, let's check if you already have Homebrew in your car. In a new terminal, type `brew --version`. If the command is not found, then you need to order Homebrew. 

To do so, go to https://brew.sh/ and follow the instructions.

On the website, it will tell you to run this code in your terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
You may need enter your password into terminal. Then, wait for your order to finish. Then, make sure to run this: (make sure to put the word `sudo` before pasting this code)
```bash
echo >> /Users/anshrathod/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' »> /Users/anshrathod/ •zprof
ile
eval "$(/opt/homebrew/bin/brew shellenv)"
```
Your order should be complete now! But first--take a sip to make sure it's ready for your customer! Run `brew --version` to make sure your Homebrew is correctly installed. If the output is `Homebrew (version number)` then your brew is perfect and ready for your customer. 
# 🎉🎉
