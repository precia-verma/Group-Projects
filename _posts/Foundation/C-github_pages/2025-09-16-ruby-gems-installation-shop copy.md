---
title: "Welcome to the Gem Shop! ‧⊹'💎♦️*⁠.⁠✧"
layout: post
date: 2025-09-16
permalink: /ruby-gems-installation-shop/
---

## Welcome to the Gem Shop! ‧⊹'💎♦️*⁠.⁠✧

<style>
/* Reused scoped styles to restyle gem shop post (presentation only) */
#frontpage-card{max-width:980px;margin:18px auto;padding:26px;border-radius:14px;background:linear-gradient(180deg,#ffffff 0%,#f7fbff 50%,#f0f6ff 100%);box-shadow:0 18px 40px rgba(8,30,54,0.06);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,'Helvetica Neue',Arial;color:#07314a}
#frontpage-card h2{font-size:2.1rem;margin:0 0 10px;color:#05233a;letter-spacing:-0.5px}
#frontpage-card hr{border:none;border-top:1px solid rgba(7,49,74,0.06);margin:18px 0}
#frontpage-card p{color:#1f3b4b;font-size:1.01rem;line-height:1.55}
#frontpage-card ul, #frontpage-card ol{color:#16323f;margin-left:1.1rem}
#frontpage-card code, #frontpage-card pre{background:#0b2a3a;color:#e6fbff;padding:10px;border-radius:8px;display:block;overflow:auto}
.cta-btn{display:inline-block;padding:14px 20px;background:linear-gradient(90deg,#ff7a59,#ff3b6a);color:#fff;border-radius:999px;font-weight:800;text-decoration:none;box-shadow:0 10px 30px rgba(255,59,106,0.22);transition:transform .18s ease,box-shadow .18s ease}
.cta-btn:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(255,59,106,0.18)}
details{background:linear-gradient(90deg,#f8fbff,#ffffff);padding:10px;border-radius:10px;margin:8px 0}
summary{cursor:pointer;font-weight:700;color:#083049}
@media (max-width:640px){#frontpage-card{padding:16px}#frontpage-card h2{font-size:1.5rem}}
</style>

<div id="frontpage-card" markdown="1">

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

</div>

---

### If you're driving a MacOS car, then these steps are for you:

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