document.addEventListener("DOMContentLoaded", () => {
  const cookieCountDisplay = document.getElementById("cookie-count");
  const cookieButton = document.getElementById("cookie");
  const gameArea = document.getElementById("game-area");
  const shopContainer = document.getElementById("shop-container");

  const cookie = {
    cookieMulti: 1,
    cookies: 0,
    addCookies(amount) {
      this.cookies += amount;
      this.updateDisplay();
      localStorage.setItem("cookies", this.cookies);
    },
    updateDisplay() {
      if (cookieCountDisplay) cookieCountDisplay.textContent = this.cookies;
    },
    fetchStoredCookies() {
      const stored = Number(localStorage.getItem("cookies"));
      if (!isNaN(stored) && stored > 0) {
        this.cookies = stored;
        this.updateDisplay();
      }
    },
  };

  const shopItems = [
    { name: "Grandma", emoji: "👵", price: 69, priceIncrementer: 1.5, cookiesPerSecond: 1 },
    { name: "Factory", emoji: "🏭", price: 400, priceIncrementer: 1.4, cookiesPerSecond: 4 },
    { name: "MangoTemple", emoji: "🥭", price: 2000, priceIncrementer: 1.2, cookiesPerSecond: 10 },
    { name: "Bank", emoji: "🏦", price: 6741, priceIncrementer: 1.1, cookiesPerSecond: 20 },
  ];

  const upgrades = [
    { name: "2X Clicks", emoji: "🖱", price: 150, multiplier: 2 }
  ];

  const gameLoop = {
    autoClickers: {},
    upgrades: {},
    cookiesPerSecond: 0,
    intervalId: 0,
    addAutoClicker(name, cps) {
      this.autoClickers[name] = (this.autoClickers[name] || 0) + 1;
      this.cookiesPerSecond += cps;
      this.runLoop();
      const item = shopItems.find(i => i.name === name);
      if (item) new EmojiBuddy(item.emoji).spawn(Math.random() * 400, Math.random() * 300);
    },
    updateCookieMulti(name, amt) {
      this.upgrades[name] = amt;
      cookie.cookieMulti += amt;
    },
    runLoop() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => cookie.addCookies(this.cookiesPerSecond), 1000);
    },
    getAmount(name) {
      return this.autoClickers[name] || 0;
    }
  };

  class EmojiBuddy {
    constructor(emoji) {
      this.emojiString = emoji;
      this.dx = 2;
      this.dy = 2;
      this.x = 0;
      this.y = 0;
      this.el = null;
      this.animate = this.animate.bind(this);
    }
    spawn(x, y) {
      this.x = x;
      this.y = y;
      this.el = document.createElement("div");
      this.el.textContent = this.emojiString;
      this.el.style.position = "absolute";
      this.el.style.fontSize = "2rem";
      gameArea?.appendChild(this.el);
      this.animate();
    }
    animate() {
      if (!this.el || !gameArea) return;
      const rect = gameArea.getBoundingClientRect();
      this.x += this.dx;
      this.y += this.dy;
      if (this.x <= 0 || this.x + this.el.offsetWidth >= rect.width) this.dx *= -1;
      if (this.y <= 0 || this.y + this.el.offsetHeight >= rect.height) this.dy *= -1;
      this.el.style.left = `${this.x}px`;
      this.el.style.top = `${this.y}px`;
      requestAnimationFrame(this.animate);
    }
  }

  const shop = {
    items: [...shopItems],
    upgrades: [...upgrades],
    render() {
      if (!shopContainer) return;
      shopContainer.innerHTML = "<h2>Shop</h2>";
      [...this.items, ...this.upgrades].forEach((item) => {
        const btn = document.createElement("button");
        btn.textContent = `${item.emoji} ${item.name} (${item.price} 🍪)`;
        btn.style.margin = "5px";
        btn.addEventListener("click", () => {
          if (cookie.cookies < item.price) return alert("Not enough cookies!");
          cookie.addCookies(-item.price);
          if (item.cookiesPerSecond) gameLoop.addAutoClicker(item.name, item.cookiesPerSecond);
          if (item.multiplier) gameLoop.updateCookieMulti(item.name, item.multiplier);
        });
        shopContainer.appendChild(btn);
      });
    }
  };

  // Initialize
  cookie.fetchStoredCookies();
  shop.render();

  cookieButton?.addEventListener("click", () => {
    cookie.addCookies(cookie.cookieMulti);
  });
});
