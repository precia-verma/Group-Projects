---
title: calculator-blog
layout: base
description: Calculator BLOG!
permalink: /calculator-blog
---
# 🖥️ The Coders (group name)

# 🧮 Calculator Project Blog

## 👩‍💻 The Coders 

| Name            | GitHub Profile                                   |
|-----------------|--------------------------------------------------|
| **Precia Verma**| [github.com/precia-verma](https://github.com/precia-verma) |
| **Krystal**     | [github.com/krystal-727](https://github.com/krystal-727) |
| **Tasha (Struti)** | [github.com/StutiPandey19](https://github.com/StutiPandey19) |

---

## 📝 Hack 1: Notebook
[calculator.md](https://github.com/user-attachments/files/22397696/calculator.md)

---

## 🚀 Hack 2: Your Own Feature

### Feature Name: JS Calculator
**Purpose:**  
The JS Calculator is an interactive web-based calculator built with HTML, CSS, and JavaScript. Its purpose is to help users perform basic arithmetic operations (addition, subtraction, multiplication, division) directly in the browser. The calculator features a visually appealing, right-justified display, responsive buttons for numbers and operations, and supports decimal calculations. It also includes a clear (A/C) button to reset the calculation and an equals button to compute results, making it a practical tool for learning and practicing JavaScript DOM manipulation and event handling.

### Feature Name: Right-Justified Output Display
**Purpose:**  
This feature ensures that the calculator’s result/output is always aligned to the right side of the display area, mimicking the behavior of real-world calculators. It improves readability, especially for large or decimal numbers, and provides a familiar user experience. This makes it easy for users to read and interpret results as they perform calculations.

#### Example CSS:
```css
display: flex;
align-items: center;
justify-content: flex-end; /* right-align text */
```

This makes numbers and results easy to read, especially for long or decimal values.

### Feature Name: Clear (A/C) Button
**Purpose:**  
The calculator includes an "A/C" (All Clear) button that resets the calculator to its initial state. When clicked, it sets the display back to 0 and clears any stored numbers or operations, allowing the user to start a new calculation.

#### Example JavaScript:
```javascript
function clearCalc () {
	firstNumber = null;
	output.innerHTML = "0";
	nextReady = true;
}
```

The button is styled and placed in the calculator grid for easy access.

---

## 🎮 Try the Calculator
[Link to Game: https://precia-verma.github.io/Group-projects/calculator](https://precia-verma.github.io/Group-projects/calculator)

---

## 🖼️ Picture of Code

<img width="836" height="816" alt="Image" src="https://github.com/user-attachments/assets/22a2fb7a-2a1e-482f-a0a6-88956cdc6266" />

---

## 💻 Here is our code
```markdown
---
title: JS Calculator
comments: true
hide: true
layout: base
description: A common way to become familiar with a language is to build a calculator.  This calculator shows off button with actions.
permalink: /calculator
---

<!-- 
Hack 0: Right justify result
Hack 1: Test conditions on small, big, and decimal numbers, report on findings. Fix issues.
Hack 2: Add the common math operation that is missing from calculator
Hack 3: Implement 1 number operation (ie SQRT) 
-->

<!-- 
HTML implementation of the calculator. 
-->

<!-- 
		Style and Action are aligned with HRML class definitions
		style.css contains majority of style definition (number, operation, clear, and equals)
		- The div calculator-container sets 4 elements to a row
		Background is credited to Vanta JS and is implemented at bottom of this page
-->
<style>
	/* Page body styling */
	body {
		background: linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%); /* page background gradient */
		min-height: 100vh; /* ensure body fills at least one viewport height */
	}
	/* Main calculator grid container */
	.calculator-container {
		display: grid; /* use CSS Grid layout for buttons/display */
		grid-template-columns: repeat(4, 64px); /* 4 equal-width columns */
		grid-template-rows: repeat(6, 64px); /* 6 equal-height rows */
		gap: 12px; /* spacing between grid cells */
		width: max-content; /* size to content width */
		margin: 40px auto 0 auto; /* center horizontally, add top margin */
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); /* panel gradient */
		padding: 32px 28px 28px 28px; /* inner spacing */
		border-radius: 24px; /* rounded corners */
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18); /* soft outer shadow */
		border: 1.5px solid #e0e0e0; /* subtle border */
	}
	/* Output display styling */
	.calculator-output {
		grid-column: 1 / span 4; /* stretch across all 4 columns */
		grid-row: 1; /* place in first row */
		border-radius: 10px; /* rounded display corners */
		padding: 0.2em 0.5em; /* inner padding for text */
		font-size: 1.3rem; /* display font size */
		border: none; /* remove default border */
		box-shadow: 0 2px 8px rgba(67,198,172,0.10); /* subtle inner shadow */
		display: flex; /* flexbox to align text */
		align-items: center; /* vertically center text */
		justify-content: flex-end; /* right-align text */
		background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%); /* display background */
		min-height: 28px; /* ensure minimum height */
		margin-bottom: 8px; /* space below the display */
		color: #222; /* dark text color */
		font-family: 'Fira Mono', 'Consolas', monospace; /* mono font for numbers */
		letter-spacing: 1px; /* spacing between characters */
		font-weight: 600; /* semi-bold text */
		border-bottom: 2px solid #43c6ac; /* accent underline */
	}
	/* Base button styling (numbers, operations, clear, equals) */
	.calculator-number, .calculator-operation, .calculator-clear, .calculator-equals {
		display: flex; /* center content with flexbox */
		align-items: center; /* vertical centering */
		justify-content: center; /* horizontal centering */
		font-size: 1.5rem; /* button text size */
		border-radius: 12px; /* rounded button corners */
		background: #f7fafc; /* base button background */
		cursor: pointer; /* show clickable cursor */
		user-select: none; /* prevent text selection when clicking */
		border: none; /* no border */
		box-shadow: 0 2px 6px rgba(67,198,172,0.08); /* light shadow */
		transition: background 0.18s, box-shadow 0.18s, transform 0.12s; /* hover/press transitions */
		font-family: 'Fira Sans', 'Arial', sans-serif; /* button font */
		font-weight: 500; /* medium weight */
	}
	/* Hover effects for buttons */
	.calculator-number:hover, .calculator-operation:hover, .calculator-clear:hover, .calculator-equals:hover {
		background: #e0eafc; /* lighten background on hover */
		box-shadow: 0 4px 12px rgba(67,198,172,0.18); /* stronger shadow on hover */
		transform: translateY(-2px) scale(1.04); /* subtle pop up */
	}
	/* Operation button specific styling */
	.calculator-operation {
		background: linear-gradient(135deg, #ffd966 60%, #fffbe6 100%); /* yellowish op background */
		color: #b8860b; /* dark golden text */
		font-weight: 700; /* bold for emphasis */
		border-bottom: 2px solid #ffd966; /* bottom accent */
	}
	/* Clear button specific styling */
	.calculator-clear {
		background: linear-gradient(135deg, #ffb3b3 60%, #fff0f0 100%); /* reddish clear background */
		color: #b22222; /* firebrick text */
		font-weight: 700; /* bold */
		border-bottom: 2px solid #ffb3b3; /* bottom accent */
	}
	/* Equals button specific styling */
	.calculator-equals {
		background: linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%); /* green-yellow gradient */
		color: #222; /* dark text */
		font-weight: 700; /* bold */
		grid-column: 1 / span 4; /* stretch equals across all columns */
		font-size: 2rem; /* larger text size */
		border-bottom: 2px solid #43c6ac; /* bottom accent */
		box-shadow: 0 4px 16px rgba(67,198,172,0.18); /* stronger shadow */
	}
	/* Ensure Vanta canvas isn't blurred */
	canvas {
		filter: none; /* disable any filter on canvas */
	}
	/* End of style block */
  
</style>

<!-- Add a container for the animation (Vanta will attach here) -->
<div id="animation"> <!-- wrapper div for animated background -->
	<div class="calculator-container"> <!-- grid container for calculator layout -->
		<!-- Output display -->
		<div class="calculator-output" id="output">0</div> <!-- main display initialized to 0 -->
		<!-- 7 8 9 / row -->
		<div class="calculator-number" style="grid-row:2;grid-column:1;">7</div> <!-- row 2, col 1: digit 7 -->
		<div class="calculator-number" style="grid-row:2;grid-column:2;">8</div> <!-- row 2, col 2: digit 8 -->
		<div class="calculator-number" style="grid-row:2;grid-column:3;">9</div> <!-- row 2, col 3: digit 9 -->
		<div class="calculator-operation" style="grid-row:2;grid-column:4;">/</div> <!-- row 2, col 4: divide operator -->
	<!-- 4 5 6 * row -->
	<div class="calculator-number" style="grid-row:3;grid-column:1;">4</div> <!-- row 3, col 1: digit 4 -->
	<div class="calculator-number" style="grid-row:3;grid-column:2;">5</div> <!-- row 3, col 2: digit 5 -->
	<div class="calculator-number" style="grid-row:3;grid-column:3;">6</div> <!-- row 3, col 3: digit 6 -->
	<div class="calculator-operation" style="grid-row:3;grid-column:4;">*</div> <!-- row 3, col 4: multiply operator -->
	<!-- 1 2 3 - row -->
	<div class="calculator-number" style="grid-row:4;grid-column:1;">1</div> <!-- row 4, col 1: digit 1 -->
	<div class="calculator-number" style="grid-row:4;grid-column:2;">2</div> <!-- row 4, col 2: digit 2 -->
	<div class="calculator-number" style="grid-row:4;grid-column:3;">3</div> <!-- row 4, col 3: digit 3 -->
	<div class="calculator-operation" style="grid-row:4;grid-column:4;">-</div> <!-- row 4, col 4: minus operator -->
	<!-- A/C 0 . + row -->
	<div class="calculator-clear" style="grid-row:5;grid-column:1;">A/C</div> <!-- row 5, col 1: clear button -->
	<div class="calculator-number" style="grid-row:5;grid-column:2;">0</div> <!-- row 5, col 2: digit 0 -->
	<div class="calculator-number" style="grid-row:5;grid-column:3;">.</div> <!-- row 5, col 3: decimal point -->
	<div class="calculator-operation" style="grid-row:5;grid-column:4;">+</div> <!-- row 5, col 4: plus operator -->
	<!-- Equals row -->
	<div class="calculator-equals" style="grid-row:6;grid-column:1/span 4;">=</div> <!-- row 6: equals spans all 4 columns -->
	</div>
</div>

<!-- JavaScript (JS) implementation of the calculator. -->
<script>
// initialize important variables to manage calculations
var firstNumber = null; // stores the first number in the calculation
var operator = null;    // stores the current operator (+, -, *, /)
var nextReady = true;   // flag to indicate if the next number input should start fresh
// build objects containing key elements
const output = document.getElementById("output"); // reference to the calculator display
const numbers = document.querySelectorAll(".calculator-number"); // all number buttons
const operations = document.querySelectorAll(".calculator-operation"); // all operation buttons
const clear = document.querySelectorAll(".calculator-clear"); // all clear buttons
const equals = document.querySelectorAll(".calculator-equals"); // all equals buttons

// Number buttons listener
numbers.forEach(button => { // for each number button
	button.addEventListener("click", function() { // add a click event listener
		number(button.textContent); // call number() with the button's value
	});
});

// Number action
function number (value) { // function to input numbers into the calculator
	if (value != ".") { // if the value is not a decimal point
		if (nextReady == true) { // if ready for a new number
			output.innerHTML = value; // set display to the new value
			if (value != "0") { // avoid multiple leading zeroes
				nextReady = false; // now in the middle of entering a number
			}
		} else {
			output.innerHTML = output.innerHTML + value; // append digit to current display
		}
	} else { // special case for adding a decimal; can't have two decimals
		if (output.innerHTML.indexOf(".") == -1) { // only add decimal if not already present
			output.innerHTML = output.innerHTML + value; // append decimal
			nextReady = false; // now in the middle of entering a number
		}
	}
}

// Operation buttons listener
operations.forEach(button => { // for each operation button
	button.addEventListener("click", function() { // add a click event listener
		operation(button.textContent); // call operation() with the button's value
	});
});

// Operator action
function operation (choice) { // function to input operations into the calculator
	if (firstNumber == null) { // if this is the first operation
		firstNumber = parseInt(output.innerHTML); // store the current display as firstNumber
		nextReady = true; // ready for next number
		operator = choice; // store the chosen operator
		return; // exit function
	}
	// if already have a first number, perform calculation with current display
	firstNumber = calculate(firstNumber, parseFloat(output.innerHTML)); 
	operator = choice; // update operator
	output.innerHTML = firstNumber.toString(); // update display with result
	nextReady = true; // ready for next number
}

// Calculator
function calculate (first, second) { // function to calculate the result of the equation
	let result = 0; // variable to store result
	switch (operator) { // check which operator is selected
		case "+": // addition
			result = first + second;
			break;
		case "-": // subtraction
			result = first - second;
			break;
		case "*": // multiplication
			result = first * second;
			break;
		case "/": // division
			result = first / second;
			break;
		default: // if no valid operator
			break;
	}
	return result; // return the calculated result
}

// Equals button listener
equals.forEach(button => { // for each equals button
	button.addEventListener("click", function() { // add a click event listener
		equal(); // call equal() when clicked
	});
});

// Equal action
function equal () { // function used when the equals button is clicked; calculates equation and displays it
	firstNumber = calculate(firstNumber, parseFloat(output.innerHTML)); // calculate result
	output.innerHTML = firstNumber.toString(); // display result
	nextReady = true; // ready for next input
}

// Clear button listener
clear.forEach(button => { // for each clear button
	button.addEventListener("click", function() { // add a click event listener
		clearCalc(); // call clearCalc() when clicked
	});
});

// A/C action
function clearCalc () { // clears calculator
	firstNumber = null; // reset first number
	output.innerHTML = "0"; // reset display
	nextReady = true; // ready for new input
}
</script>

<!-- 
Vanta animations just for fun, load JS onto the page
-->
<script src="{{site.baseurl}}/assets/js/three.r119.min.js"></script> <!-- three.js core (required by Vanta) -->
<script src="{{site.baseurl}}/assets/js/vanta.halo.min.js"></script> <!-- Vanta HALO effect -->
<script src="{{site.baseurl}}/assets/js/vanta.birds.min.js"></script> <!-- Vanta BIRDS effect -->
<script src="{{site.baseurl}}/assets/js/vanta.net.min.js"></script> <!-- Vanta NET effect -->
<script src="{{site.baseurl}}/assets/js/vanta.rings.min.js"></script> <!-- Vanta RINGS effect -->

<script>
// setup vanta scripts as functions
var vantaInstances = { // map names to Vanta constructors
	halo: VANTA.HALO, // halo animation
	birds: VANTA.BIRDS, // birds animation
	net: VANTA.NET, // net (mesh) animation
	rings: VANTA.RINGS // rings animation
};

// obtain a random vanta function
var vantaInstance = vantaInstances[ // randomly choose one of the effects
	Object.keys(vantaInstances)[ // array of effect keys
		Math.floor(Math.random() * Object.keys(vantaInstances).length) // random index
	]
];

// run the animation
vantaInstance({ // initialize the chosen effect
	el: "#animation", // attach to the outer wrapper
	mouseControls: true, // enable mouse interaction
	touchControls: true, // enable touch interaction
	gyroControls: false // disable gyroscope control (mobile)
});
</script>
```
| Name            | GitHub Profile                                   |
|-----------------|--------------------------------------------------|
| **Precia Verma**| [github.com/precia-verma](https://github.com/precia-verma) |
| **Krystal**     | [github.com/krystal-727](https://github.com/krystal-727) |
| **Tasha (Struti)** | [github.com/StutiPandey19](https://github.com/StutiPandey19) |

---

## 🍪 Hack 1: Quiz
<img width="1496" height="945" alt="Quiz Screenshot" src="https://github.com/user-attachments/assets/5bc12101-b14a-4927-a7b4-b506c3fc8bc2" />

### Notebook
[**2025-08-29-collaboration.ipynb**](https://github.com/user-attachments/files/22396858/2025-08-29-collaboration.ipynb)

---

## 🥛 Hack 2: Your Own Feature – **Milk Upgrade**

### Purpose  
The **Milk Upgrade** is a purchasable item in the Cookie Clicker game shop (Cost: **1000 cookies**).  
Buying Milk gives a sweet boost: it **doubles cookies per click** and makes the grind way more strategic.

| Screenshot | Screenshot | Screenshot | Screenshot |
|------------|-----------|-----------|-----------|
| <img width="1496" height="945" src="https://github.com/user-attachments/assets/2164306a-a41d-4ade-aeee-9862155b1692" /> | <img width="753" height="853" src="https://github.com/user-attachments/assets/9ab5cb70-de6e-4b7b-8d01-6e556067f26a" /> | <img width="745" height="818" src="https://github.com/user-attachments/assets/fe90b75b-75c8-4d3a-8a54-44dab56c934c" /> | <img width="836" height="664" src="https://github.com/user-attachments/assets/4f8c2c75-0be4-44f3-a5f3-88b263226100" /> |

---

## 🎮 Play the Game
👉 **[Cookie Clicker Game Live Site](https://precia-verma.github.io/Group-projects/cookie-clicker-game/)**  

---
