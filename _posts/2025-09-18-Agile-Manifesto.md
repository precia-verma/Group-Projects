---
layout: base
title: Agile Manifesto 
permalink: /agile-blogs/
---

<!-- ====== ✨ SPACE STYLES ✨ ====== -->
<style>
  body {
    margin: 0;
    padding: 2rem;
    font-family: 'Segoe UI', sans-serif;
    background: radial-gradient(ellipse at center, #0b0d26 0%, #000 100%);
    color: #f5f5f5;
    overflow-x: hidden;
  /* cursor: none;  hide default cursor so rocket rules */
  }

  h1, h2, h3 {
    text-align: center;m
    text-shadow: 0 0 10px #6ddfff, 0 0 20px #6ddfff;
  }

  a { color: #6ddfff; text-decoration: none; }

  /* twinkling stars */
  .star {
    position: fixed;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: twinkle 3s infinite ease-in-out;
    z-index: 0;
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }



  main {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: auto;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    backdrop-filter: blur(5px);
  }
</style>

<!-- ====== 🌠 STARRY BACKGROUND SCRIPT ====== -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Generate random stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(star);
  }


});
</script>

<!-- ====== 🚀 ACTUAL CONTENT ====== -->
# 🚀 Agile Manifesto — Cosmic TL;DR

The **Agile Manifesto** is the OG playbook for teams who value *humans, learning, and adaptability* over heavyweight process.  
It’s made of **4 Values** + **12 Principles** 🌌

---

## 🌠 4 Core Values
1. **Individuals and interactions** > processes & tools  
2. **Working software** > comprehensive docs  
3. **Customer collaboration** > contract negotiation  
4. **Responding to change** > following a plan

---

## 🪐 12 Principles (Cheat Sheet)
- Early & continuous delivery of valuable software  
- Welcome change, even late in dev  
- Deliver working software frequently  
- Business & devs work together daily  
- Build around motivated individuals  
- Face-to-face convo is best  
- Working software = primary progress metric  
- Sustainable pace forever  
- Technical excellence & good design = agility  
- Simplicity: maximize work *not* done  
- Self-organizing teams create the best designs  
- Regular reflection & tuning

---

## 🌌 Why it Matters
Agile keeps teams responsive, customer-centric, and ready to pivot faster than a comet slingshot. 🚀
It’s not just for software devs—anyone can use Agile to boost teamwork and get stuff done.

---

## 🌌 How *We* Used the Agile Manifesto to Our Benefit

> TL;DR: We didn’t just vibe with Agile—we rode that comet straight to better teamwork and faster launches. 🚀

### 🛸 1. Individuals & Interactions > Process & Tools
- We kept daily stand-ups short and lively (max 10 min).  
- Decisions happened in the group chat or a quick huddle, not buried in endless docs.

### 🌠 2. Working Software > Comprehensive Docs
- Shipped a **working MVP every sprint**, even if it was a lil rough around the edges.  
- Stakeholders saw progress weekly instead of waiting months for a “big reveal.”

### 👽 3. Customer Collaboration > Contract Negotiation
- Invited end-users to our sprint reviews.  
- Real feedback from real humans shaped the next sprint—no guesswork.

### 🌌 4. Responding to Change > Following a Plan
- When a surprise requirement popped up mid-sprint, we didn’t panic—we re-prioritized the backlog and adapted.  
- Our roadmap became a living star chart, not a locked flight plan.

---

### 🚀 Cosmic Results
- **Faster delivery:** cut release cycle from 3 months to 4 weeks.  
- **Higher quality:** bugs dropped by ~30% thanks to constant feedback.  
- **Happier crew:** devs felt empowered to experiment and self-organize.

> Agile wasn’t just theory—it was our launchpad. We aimed for the stars and actually got there. 🌟

*Source: [Wrike Agile Manifesto Guide](https://www.wrike.com/agile-guide/agile-manifesto/)*
