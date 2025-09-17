---
title: "Welcome to the Brew Shop! 🍺"
layout: post
date: 2025-09-16
permalink: /homebrew-installation-shop/
---

## Welcome to the Gem Shop! ‧⊹'💎♦️*⁠.⁠✧

---

### If you're driving a Chromebook and/or a Kasm/Linux car, then these steps are for you:
###### If you're driving a MacOS, your instructions are further down.

---

Your customer wants a nice shiny ruby gem for a proposal, here at the Gem Shop, you can pick it up for them! Here's how:

First, in your Kasm workspace, open a new terminal window. Then, run these commands:
```bash 
sudo apt update
sudo apt install -y ruby-full
gem install bundler
# install any gem later with:
# gem install <gem_name>
```
Great! Now you have your ruby gem! But you need to make sure its a real gem. To do that, run these in your terminal:
```
ruby -v
gem -v
bundler -v
```
If they're real gems, then you should be met with the ruby version number, the gem version number, and the bundler version number.

Congrats! You picked up your customer's shiny ruby gem. Head onto the next button now!

# 🎉🎉

---

### If you're driving a Chromebook and/or a Kasm/Linux car, then these steps are for you:

---
Your customer wants a nice shiny ruby gem for a proposal, here at the Gem Shop, you can pick it up for them! Here's how:

First, in your MacOS workspace, open a new terminal window. Then, run these commands:
```bash
echo 'export PATH="$(brew --prefix ruby)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc


gem install bundler
```
Great! Now you have your ruby gem! But you need to make sure its a real gem. To do that, run these in your terminal:
```
ruby -v
gem -v
bundler -v
```
If they're real gems, then you should be met with the ruby version number, the gem version number, and the bundler version number.

Congrats! You picked up your customer's shiny ruby gem. Head onto the next button now!

# 🎉🎉