---
layout: base
title: Background with Object
description: Use JavaScript to have an in motion background.
sprite: images/platformer/sprites/redcarthatREALLYworks.png
background: images/platformer/backgrounds/THEBETTERSTREETPLSWORK.png
permalink: /background
---

<canvas id="world"></canvas>

<script>
  // Get the canvas and its drawing context
  const canvas = document.getElementById("world");
  const ctx = canvas.getContext('2d');
  // Create image objects for background and sprite
  const backgroundImg = new Image();
  const spriteImg = new Image();
  // Set image sources using Jekyll page variables
  backgroundImg.src = '{{page.background}}';
  spriteImg.src = '{{page.sprite}}';

  let imagesLoaded = 0;
  // Wait for background image to load
  backgroundImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };
  // Wait for sprite image to load
  spriteImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };

  // Start the game world only when both images are loaded
  function startGameWorld() {
    if (imagesLoaded < 2) return;

    // Base class for all game objects
    class GameObject {
      constructor(image, width, height, x = 0, y = 0, speedRatio = 0) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedRatio = speedRatio;
        // Speed is based on game speed and object's speed ratio
        this.speed = GameWorld.gameSpeed * this.speedRatio;
      }
      update() {}
      // Draw the object on the canvas
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    // Background class for scrolling effect
    class Background extends GameObject {
      constructor(image, gameWorld) {
        // Fill entire canvas
        super(image, gameWorld.width, gameWorld.height, 0, 0, 0.1);
      }
      // Move background to create scrolling effect
      update() {
        this.x = (this.x - this.speed) % this.width;
      }
      // Draw two backgrounds for seamless scrolling
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
      }
    }

    // Player class for animated sprite
    class Player extends GameObject {
      constructor(image, gameWorld) {
        // Scale sprite to half its natural size and center it
        const width = image.naturalWidth / 1.2;
        const height = image.naturalHeight / 1.2;
        const x = (gameWorld.width - width) / 2;
        const y = (gameWorld.height - height) / 2 + 50;
        super(image, width, height, x, y);
        this.baseY = y;
        this.frame = 0;
      }
      // Animate player with a sine wave motion
      
    }

    // Main game world class
    class GameWorld {
      static gameSpeed = 5;
      constructor(backgroundImg, spriteImg) {
        this.canvas = document.getElementById("world");
        this.ctx = this.canvas.getContext('2d');
        // Set canvas size to window size
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `0px`;
        this.canvas.style.top = `${(window.innerHeight - this.height) / 2}px`;

        // Add background and player to game objects
        this.gameObjects = [
         new Background(backgroundImg, this),
         new Player(spriteImg, this)
        ];
      }
      // Main game loop: update and draw all objects
      gameLoop() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (const obj of this.gameObjects) {
          obj.update();
          obj.draw(this.ctx);
        }
        requestAnimationFrame(this.gameLoop.bind(this));
      }
      // Start the game loop
      start() {
        this.gameLoop();
      }
    }

    // Create and start the game world
    const world = new GameWorld(backgroundImg, spriteImg);
    world.start();
  }
</script>
