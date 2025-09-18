---
layout: page
title: "🌠 LxD Plan — Interstellar Edition"
permalink: /lxd-plan
description: "All of my LxD plan wrapped in a star-filled sky with a rocket cursor."
---

<!-- === CSS === -->
<style>
/* ----- Starry Night Background ----- */
body {
  margin: 0;
  background: #000;
  color: #e0e6f8;
  font-family: "Trebuchet MS", sans-serif;
  overflow-x: hidden;
}

/* create layers of twinkling stars */
body::before, body::after {
  content: "";
  position: fixed;
  top: 0; left: 0;
  width: 200%; height: 200%;
  background: transparent url('https://raw.githubusercontent.com/andrewnakas/space-assets/main/stars.png') repeat;
  animation: moveStars 100s linear infinite;
  z-index: -2;
}
body::after {
  background-size: 50%;
  opacity: 0.6;
  animation-duration: 200s;
}

@keyframes moveStars {
  from {transform: translateY(0);}
  to   {transform: translateY(-1000px);}
}

/* ----- Headings ----- */
h1, h2, h3 {
  text-align: center;
  color: #a8d8ff;
  text-shadow: 0 0 10px #5dd0ff;
}

/* ----- Glowing Buttons ----- */
.space-btn {
  display: inline-block;
  margin: 12px;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  background: rgba(28,37,65,0.6);
  color: #e0e6f8;
  border: 2px solid #5dd0ff;
  box-shadow: 0 0 15px #5dd0ff;
  transition: all 0.3s ease;
}
.space-btn:hover {
  background: #5dd0ff;
  color: #0d1b2a;
  box-shadow: 0 0 25px #5dd0ff;
}

/* ----- Section Cards ----- */
.star-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(93,208,255,0.4);
  border-radius: 20px;
  padding: 1.2em;
  margin: 2em auto;
  max-width: 750px;
  backdrop-filter: blur(4px);
}

/* ----- Rocket Cursor Follower ----- */
#rocket {
  position: fixed;
  width: 60px;
  height: 60px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.1s linear;
}
</style>

<!-- ====== Rocket Image (you can swap with your own) ====== -->
<img id="rocket" src="https://raw.githubusercontent.com/andrewnakas/space-assets/main/rocket.png" alt="rocket" />

<!-- === JS === -->
<script>
// Make rocket cursor follow mouse smoothly (closer, but not instant)
const rocket = document.getElementById('rocket');
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

document.addEventListener('mousemove', function(e) {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateRocket() {
  // Lerp closer to cursor (higher factor = closer)
  currentX += (targetX - currentX) * 0.25;
  currentY += (targetY - currentY) * 0.25;
  rocket.style.left = currentX + 'px';
  rocket.style.top = currentY + 'px';
  requestAnimationFrame(animateRocket);
}
animateRocket();
</script>

# 🌌 Mission Control — LxD Plan

Ready for launch, **Captain Pre**! This page charts every stop on the LxD journey.

---

## 🛰 Quick Jump Gates
<a class="space-btn" href="https://pages.opencodingsociety.com/github/pages/jokes">Jokes</a>
<a class="space-btn" href="https://pages.opencodingsociety.com/github/pages/anatomy">Anatomy</a>
<a class="space-btn" href="https://pages.opencodingsociety.com/github/pages/theme">Theme</a>
<a class="space-btn" href="https://pages.opencodingsociety.com/github/pages/markdown">Markdown</a>
<a class="space-btn" href="https://pages.opencodingsociety.com/github/pages/jekyll">Jekyll</a>
<a class="space-btn" href="https://pages.opencodingsociety.com/github/pages/hacks">Hacks</a>

---

<div class="star-card">
### 🌠 1. Jokes  
Fun JS jokes inside Jupyter notebooks—practice running JavaScript cells and moving files around GitHub Pages.  
[Blast off →](https://pages.opencodingsociety.com/github/pages/jokes)
</div>

<div class="star-card">
### 🪐 2. Anatomy  
Map of your repo universe: `_posts`, `_layouts`, `_config.yml`—learn how Jekyll assembles sites from stardust.  
[Orbit here →](https://pages.opencodingsociety.com/github/pages/anatomy)
</div>

<div class="star-card">
### 🌌 3. Theme  
Swap constellations (themes) with Makefile spells like `make use-minima` and override layouts locally.  
[Dock here →](https://pages.opencodingsociety.com/github/pages/theme)
</div>

<div class="star-card">
### ✍️ 4. Markdown  
Markdown is your star chart—mix HTML, CSS, and images to design planets of content.  
[Launch pad →](https://pages.opencodingsociety.com/github/pages/markdown)
</div>

<div class="star-card">
### 🔧 5. Jekyll  
Master Liquid templates and loops to auto-generate blog universes.  
[Hyperjump →](https://pages.opencodingsociety.com/github/pages/jekyll)
</div>

<div class="star-card">
### 🚀 6. Hacks  
Apply everything: custom nav, JS in notebooks, Utterances comments—turn theory into a working interstellar station.  
[Warp speed →](https://pages.opencodingsociety.com/github/pages/hacks)
</div>

---

### 🌟 Launch Checklist
1. Fork/clone the repo.  
2. Drop this file in as `index.md`.  
3. Commit & push to GitHub Pages.  
4. Watch the stars twinkle and the rocket chase your cursor. ✨
