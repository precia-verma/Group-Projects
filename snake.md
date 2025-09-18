---
layout: base
title: Snake Game 
permalink: /snake
---

<style>
    body{
    }
    .wrap{
        margin-left: auto;
        margin-right: auto;
    }

    canvas{
        border: 3px solid #444444;
        margin: 20px auto;
        display: block;
        width: 320px;
        height: 320px;
        background-color: #2F4F2F;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
    canvas.hidden{
        display: none !important;
    }
    canvas:focus{
        outline: none;
    }

    /* All screens style */
    #gameover p, #setting p, #menu p{
        font-size: 20px;
    }

    #gameover a, #setting a, #menu a{
        font-size: 30px;
        display: block;
    }

    #gameover a:hover, #setting a:hover, #menu a:hover{
        cursor: pointer;
    }

    #gameover a:hover::before, #setting a:hover::before, #menu a:hover::before{
        content: ">";
        margin-right: 10px;
    }

    #menu{
        display: block;
    }

    #gameover{
        display: none;
    }

    #setting{
        display: none;
    }

    #setting input{
        display:none;
    }

    #setting label{
        cursor: pointer;
    }

    #setting input:checked + label{
        background-color: #FFF;
        color: #000;
    }

    /* Special styling for extreme speed modes */
    #speed0:checked + label{
        background-color: #90EE90;
        color: #000;
    }

    #speed4:checked + label{
        background-color: #FF4500;
        color: #FFF;
        animation: pulse 1s infinite;
    }

    /* Scoreboard animations */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    @keyframes scoreUpdate {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); color: #FFD700; }
        100% { transform: scale(1); }
    }

    .score-update {
        animation: scoreUpdate 0.3s ease-in-out;
    }
</style>

<h2>Snake</h2>
<div class="container">
    <!-- Simplified Scoreboard -->
    <div style="text-align: center; margin: 20px 0; padding: 10px; background: #333; color: white; border-radius: 10px;">
        <span>Score: <span id="score_value">0</span></span> | 
        <span>Length: <span id="snake_length">1</span></span> | 
        <span>Level: <span id="game_level">1</span></span> | 
        <span>Best: <span id="high_score">0</span></span>
        <div id="achievement_banner" style="margin-top: 10px; color: gold; display: none;">
            🎉 <span id="achievement_text"></span> 🎉
        </div>
    </div>
    <div class="container bg-secondary" style="text-align:center;">
        <!-- Main Menu -->
        <div id="menu" class="py-4 text-light">
            <p>Welcome to Snake, press <span style="background-color: #FFFFFF; color: #000000">space</span> to begin</p>
            <a id="new_game" class="link-alert">new game</a>
            <a id="setting_menu" class="link-alert">settings</a>
        </div>
        <!-- Game Over -->
        <div id="gameover" class="py-4 text-light">
            <p>Game Over, press <span style="background-color: #FFFFFF; color: #000000">space</span> to try again</p>
            <a id="new_game1" class="link-alert">new game</a>
            <a id="setting_menu1" class="link-alert">settings</a>
        </div>
        <!-- Play Screen -->
        <canvas id="snake" class="wrap" width="320" height="320" tabindex="1"></canvas>
        <!-- Settings Screen -->
        <div id="setting" class="py-4 text-light">
            <p>Settings Screen, press <span style="background-color: #FFFFFF; color: #000000">space</span> to go back to playing</p>
            <a id="new_game2" class="link-alert">new game</a>
            <br>
            <p>Speed:
                <input id="speed0" type="radio" name="speed" value="300"/>
                <label for="speed0">Grandma</label>
                <input id="speed1" type="radio" name="speed" value="120"/>
                <label for="speed1">Slow</label>
                <input id="speed2" type="radio" name="speed" value="75" checked/>
                <label for="speed2">Normal</label>
                <input id="speed3" type="radio" name="speed" value="35"/>
                <label for="speed3">Fast</label>
                <input id="speed4" type="radio" name="speed" value="10"/>
                <label for="speed4">Impossible</label>
            </p>
            <p>Wall:
                <input id="wallon" type="radio" name="wall" value="1" checked/>
                <label for="wallon">On</label>
                <input id="walloff" type="radio" name="wall" value="0"/>
                <label for="walloff">Off</label>
            </p>
        </div>
    </div>
</div>

<script>
    (function(){
        /* Attributes of Game */
        /////////////////////////////////////////////////////////////
        // Canvas & Context
        const canvas = document.getElementById("snake");
        const ctx = canvas.getContext("2d");
        // HTML Game IDs
        const SCREEN_SNAKE = 0;
        const screen_snake = document.getElementById("snake");
        const ele_score = document.getElementById("score_value");
        const ele_snake_length = document.getElementById("snake_length");
        const ele_game_level = document.getElementById("game_level");
        const ele_high_score = document.getElementById("high_score");
        const ele_achievement_banner = document.getElementById("achievement_banner");
        const ele_achievement_text = document.getElementById("achievement_text");
        const speed_setting = document.getElementsByName("speed");
        const wall_setting = document.getElementsByName("wall");
        // HTML Screen IDs (div)
        const SCREEN_MENU = -1, SCREEN_GAME_OVER=1, SCREEN_SETTING=2;
        const screen_menu = document.getElementById("menu");
        const screen_game_over = document.getElementById("gameover");
        const screen_setting = document.getElementById("setting");
        // HTML Event IDs (a tags)
        const button_new_game = document.getElementById("new_game");
        const button_new_game1 = document.getElementById("new_game1");
        const button_new_game2 = document.getElementById("new_game2");
        const button_setting_menu = document.getElementById("setting_menu");
        const button_setting_menu1 = document.getElementById("setting_menu1");
        // Game Control
        const BLOCK = 10;   // size of block rendering
        let SCREEN = SCREEN_MENU;
        let snake;
        let snake_dir;
        let snake_next_dir;
        let snake_speed;
        let food = {x: 0, y: 0};
        let score;
        let game_level;
        let high_score = localStorage.getItem('snake_high_score') || 0;
        let wall;
        /* Display Control */
        /////////////////////////////////////////////////////////////
        // SCREEN_SNAKE = 0 for the game
        // SCREEN_MENU = -1 for the main menu
        // SCREEN_GAME_OVER = 1 for the game over screen
        // SCREEN_SETTING = 2 for the settings screen
        let showScreen = function(screen_opt){
            SCREEN = screen_opt;
            switch(screen_opt){
                case SCREEN_SNAKE:
                    screen_snake.classList.remove("hidden");
                    screen_menu.style.display = "none";
                    screen_setting.style.display = "none";
                    screen_game_over.style.display = "none";
                    break;
                case SCREEN_MENU:
                    screen_snake.classList.add("hidden");
                    screen_menu.style.display = "block";
                    screen_setting.style.display = "none";
                    screen_game_over.style.display = "none";
                    break;
                case SCREEN_GAME_OVER:
                    screen_snake.classList.remove("hidden");
                    screen_menu.style.display = "none";
                    screen_setting.style.display = "none";
                    screen_game_over.style.display = "block";
                    break;
                case SCREEN_SETTING:
                    screen_snake.classList.add("hidden");
                    screen_menu.style.display = "none";
                    screen_setting.style.display = "block";
                    screen_game_over.style.display = "none";
                    break;
            }
        }
        /* Actions and Events  */
        /////////////////////////////////////////////////////////////
        window.onload = function(){
            // Initialize canvas as hidden
            screen_snake.classList.add("hidden");
            
            // Initialize high score display
            ele_high_score.innerHTML = String(high_score);
            
            // HTML Events to Functions
            button_new_game.onclick = function(){newGame();};
            button_new_game1.onclick = function(){newGame();};
            button_new_game2.onclick = function(){newGame();};
            button_setting_menu.onclick = function(){showScreen(SCREEN_SETTING);};
            button_setting_menu1.onclick = function(){showScreen(SCREEN_SETTING);};
            // speed
            setSnakeSpeed(75); // Set to match the default "Normal" radio button
            for(let i = 0; i < speed_setting.length; i++){
                speed_setting[i].addEventListener("click", function(){
                    for(let i = 0; i < speed_setting.length; i++){
                        if(speed_setting[i].checked){
                            setSnakeSpeed(speed_setting[i].value);
                        }
                    }
                });
            }
            // wall setting
            setWall(1);
            for(let i = 0; i < wall_setting.length; i++){
                wall_setting[i].addEventListener("click", function(){
                    for(let i = 0; i < wall_setting.length; i++){
                        if(wall_setting[i].checked){
                            setWall(wall_setting[i].value);
                        }
                    }
                });
            }
            // activate window events
            window.addEventListener("keydown", function(evt) {
                // spacebar detected
                if(evt.code === "Space" && SCREEN !== SCREEN_SNAKE)
                    newGame();
            }, true);
        }
        /* Snake is on the Go (Driver Function)  */
        /////////////////////////////////////////////////////////////
        let mainLoop = function(){
            let _x = snake[0].x;
            let _y = snake[0].y;
            snake_dir = snake_next_dir;   // read async event key
            // Direction 0 - Up, 1 - Right, 2 - Down, 3 - Left
            switch(snake_dir){
                case 0: _y--; break;
                case 1: _x++; break;
                case 2: _y++; break;
                case 3: _x--; break;
            }
            snake.pop(); // tail is removed
            snake.unshift({x: _x, y: _y}); // head is new in new position/orientation
            // Wall Checker
            if(wall === 1){
                // Wall on, Game over test
                if (snake[0].x < 0 || snake[0].x === canvas.width / BLOCK || snake[0].y < 0 || snake[0].y === canvas.height / BLOCK){
                    showScreen(SCREEN_GAME_OVER);
                    return;
                }
            }else{
                // Wall Off, Circle around
                for(let i = 0, x = snake.length; i < x; i++){
                    if(snake[i].x < 0){
                        snake[i].x = snake[i].x + (canvas.width / BLOCK);
                    }
                    if(snake[i].x === canvas.width / BLOCK){
                        snake[i].x = snake[i].x - (canvas.width / BLOCK);
                    }
                    if(snake[i].y < 0){
                        snake[i].y = snake[i].y + (canvas.height / BLOCK);
                    }
                    if(snake[i].y === canvas.height / BLOCK){
                        snake[i].y = snake[i].y - (canvas.height / BLOCK);
                    }
                }
            }
            // Snake vs Snake checker
            for(let i = 1; i < snake.length; i++){
                // Game over test
                if (snake[0].x === snake[i].x && snake[0].y === snake[i].y){
                    showScreen(SCREEN_GAME_OVER);
                    return;
                }
            }
            // Snake eats food checker
            if(checkBlock(snake[0].x, snake[0].y, food.x, food.y)){
                snake[snake.length] = {x: snake[0].x, y: snake[0].y};
                updateStats(++score);
                addFood();
            }
            
            // Redraw everything
            drawGame();
            
            // Recursive call after speed delay
            setTimeout(mainLoop, snake_speed);
        }
        /* New Game setup */
        /////////////////////////////////////////////////////////////
        let newGame = function(){
            console.log("newGame called");
            
            // Show canvas
            showScreen(SCREEN_SNAKE);
            screen_snake.focus();
            
            // Initialize snake FIRST
            snake = [];
            snake.push({x: 16, y: 16}); // Center position
            snake_dir = 1; // Moving right
            snake_next_dir = 1;
            
            // Then initialize game state
            score = 0;
            game_level = 1;
            updateStats(score); // Now snake exists
            
            // Initial food
            food = {x: 20, y: 20};
            
            // Draw initial game state
            drawGame();
            
            // Set up controls
            canvas.onkeydown = function(evt) {
                changeDir(evt.keyCode);
            }
            
            // Set speed
            if (!snake_speed) {
                setSnakeSpeed(75);
            }
            
            // Start the main game loop
            setTimeout(mainLoop, snake_speed);
            
            console.log("newGame complete - game loop started");
        }
        
        let drawGame = function(){
            // Clear canvas
            ctx.fillStyle = "#2F4F2F";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw snake
            ctx.fillStyle = "#00FF00";
            for(let i = 0; i < snake.length; i++){
                activeDot(snake[i].x, snake[i].y);
            }
            
            // Draw food
            ctx.fillStyle = "#FF0000";
            activeDot(food.x, food.y);
        }
        /* Key Inputs and Actions */
        /////////////////////////////////////////////////////////////
        let changeDir = function(key){
            // test key and switch direction
            switch(key) {
                case 65:    // 'a' key (left)
                    if (snake_dir !== 1)    // not right
                        snake_next_dir = 3; // then switch left
                    break;
                case 87:    // 'w' key (up)
                    if (snake_dir !== 2)    // not down
                        snake_next_dir = 0; // then switch up
                    break;
                case 68:    // 'd' key (right)
                    if (snake_dir !== 3)    // not left
                        snake_next_dir = 1; // then switch right
                    break;
                case 83:    // 's' key (down)
                    if (snake_dir !== 0)    // not up
                        snake_next_dir = 2; // then switch down
                    break;
            }
        }
        /* Dot for Food or Snake part */
        /////////////////////////////////////////////////////////////
        let activeDot = function(x, y, type = "snake"){
            let pixelX = x * BLOCK;
            let pixelY = y * BLOCK;
            
            if (type === "food") {
                // Draw food as a red circle (apple-like)
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(pixelX, pixelY, BLOCK, BLOCK);
                ctx.fillStyle = "#FFFF00";
                ctx.fillRect(pixelX + 2, pixelY + 2, BLOCK - 4, BLOCK - 4);
            } else {
                // Draw snake segments as green squares
                ctx.fillStyle = "#00AA00";
                ctx.fillRect(pixelX, pixelY, BLOCK, BLOCK);
                // Add a lighter green border for 3D effect
                ctx.fillStyle = "#00FF00";
                ctx.fillRect(pixelX + 1, pixelY + 1, BLOCK - 2, BLOCK - 2);
            }
        }
        /* Random food placement */
        /////////////////////////////////////////////////////////////
        let addFood = function(){
            food.x = Math.floor(Math.random() * ((canvas.width / BLOCK) - 1));
            food.y = Math.floor(Math.random() * ((canvas.height / BLOCK) - 1));
            for(let i = 0; i < snake.length; i++){
                if(checkBlock(food.x, food.y, snake[i].x, snake[i].y)){
                    addFood();
                }
            }
        }
        /* Collision Detection */
        /////////////////////////////////////////////////////////////
        let checkBlock = function(x, y, _x, _y){
            return (x === _x && y === _y);
        }
        /* Update Score and Stats */
        /////////////////////////////////////////////////////////////
        let updateStats = function(score_val){
            // Update score with animation
            ele_score.classList.add('score-update');
            setTimeout(() => ele_score.classList.remove('score-update'), 300);
            ele_score.innerHTML = String(score_val);
            
            // Update snake length
            if (snake && snake.length !== undefined) {
                ele_snake_length.innerHTML = String(snake.length);
            } else {
                ele_snake_length.innerHTML = "0";
            }
            
            // Calculate and update level (every 5 points = new level)
            game_level = Math.floor(score_val / 5) + 1;
            ele_game_level.innerHTML = String(game_level);
            
            // Update high score
            if (score_val > high_score) {
                high_score = score_val;
                localStorage.setItem('snake_high_score', high_score);
                ele_high_score.innerHTML = String(high_score);
                showAchievement("NEW HIGH SCORE!");
            } else {
                ele_high_score.innerHTML = String(high_score);
            }
            
            // Check for achievements
            if (score_val > 0 && score_val % 10 === 0) {
                showAchievement(`Level ${game_level} Reached!`);
            } else if (snake.length >= 20) {
                showAchievement("Snake Master!");
            } else if (snake.length >= 10) {
                showAchievement("Getting Long!");
            }
        }
        
        let showAchievement = function(text) {
            ele_achievement_text.innerHTML = text;
            ele_achievement_banner.style.display = 'block';
            setTimeout(() => {
                ele_achievement_banner.style.display = 'none';
            }, 3000);
        }
        /////////////////////////////////////////////////////////////
        // Change the snake speed...
        // 300 = grandma mode (very slow)
        // 120 = slow (default)
        // 75 = normal
        // 35 = fast
        // 10 = impossible mode (extremely fast)
        let setSnakeSpeed = function(speed_value){
            snake_speed = speed_value;
        }
        /////////////////////////////////////////////////////////////
        let setWall = function(wall_value){
            wall = wall_value;
            if(wall === 0){screen_snake.style.borderColor = "#606060";}
            if(wall === 1){screen_snake.style.borderColor = "#FFFFFF";}
        }
    })();
</script>
