let score = 0;
let lives = 3;
let boyX = 6;
let boyY = 6;
let pizzaX = 6;
let pizzaY = 0;
let pizzavangerX = 6; // initialize the position of the pizzavanger
let gameTimer;
let pizzaImages= [
"images/taart1+.png", 
"images/taart2+.png",
"images/taart3+.png"
];

function setLeft(id,x){
  document.getElementById(id).style.left= x+"px";
}
function setTop(id,y){
  document.getElementById(id).style.top= y+"px";
}


function startGame() {
  console.log();
  score = 0;
  lives = 3;
  boyX = 6;
  boyY = 6;
  pizzaX = 6;
  pizzaY = 0;
  gameTimer = window.setInterval(movePizza, 400);
  setLeft("pizzavanger", boyX * 50); // pass the width of the game board as a parameter
  setTop("pizzavanger", boyY * 50);
  setLeft("pizza", pizzaX * 50);
  setTop("pizza", pizzaY * 50);
  document.getElementById("scoreText").innerText = "Score: " + score;
  document.getElementById("levensText").innerText = "Kansen: " + lives;

  // Add event listener for arrow keys
  document.addEventListener("keydown", handleKeyboardInput);

  // Add event listeners for touch events to the start button and the game board element
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("touchstart", handleStartTouch);

  let pizzavanger = document.getElementById("pizzavanger");
  pizzavanger.addEventListener("touchstart", handleTouchStart);
  pizzavanger.addEventListener("touchmove", handleTouchMove);

  // Set the touch-action CSS property for the game board element
  gameBoard.style.touchAction = "manipulation";
}

function movePizza() {
  pizzaY++;
  setLeft("pizza", pizzaX * 50);
  setTop("pizza", pizzaY * 50);

  // Check for collision with "pizzavanger"
  if (boyX == pizzaX && boyY == pizzaY) {
    caughtPizza();
  }

  // Check if pizza has reached the bottom of the game board
  if (pizzaY > boyY + 5) {
    missedPizza();
  }
}

function missedPizza() {
  pizzaY = 0;
  pizzaX = randomNumber(2, 9);
  lives--;
  document.getElementById("levensText").innerText = "Kansen: " + lives;
  if (lives == 0) {
    gameOver();
  }
  document.getElementById("pizza").src = pizzaImages[randomNumber(0, pizzaImages.length - 1)];
}

function randomNumber(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function gameOver() {
  clearInterval(gameTimer);
  alert("Game Over! Jouw totaalscore: " + score);
  location.reload();
}

function caughtPizza() {
  pizzaY = 0;
  pizzaX = randomNumber(2, 9);
  score++;
  document.getElementById("scoreText").innerText = "Score: " + score;
  document.getElementById("pizza").src = pizzaImages[randomNumber(0, pizzaImages.length - 1)];
}

let touchX = 6;

// define the touch event handlers
function handleStartTouch(e) {
  // start the game when the start button is touched
  startGame();
}

function handleTouchStart(e) {
  // get the x-coordinate of the touch event
  touchX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  // get the x-coordinate of the touch event
  let newTouchX = e.touches[0].clientX;

  // calculate the difference between the current touch position and the initial touch position
  let touchDiff = newTouchX - touchX;

  // update the player position based on the touch difference
  boyX += Math.round(touchDiff / 50);

  // set the new position of the player element
  let pizzavanger = document.getElementById("pizzavanger");
  pizzavanger.style.left = (boyX * 50) + "px";

  // update the touch position for the next touch event
  touchX = newTouchX;
}

function handleKeyboardInput(e) {
  // move the player left or right based on the arrow key pressed
  if (e.keyCode == 37) { // left arrow
    if (boyX > 0) {
      boyX--;
      setLeft("pizzavanger", boyX * 50);
    }
  } else if (e.keyCode == 39) { // right arrow
    if (boyX < 11) {
      boyX++;
      setLeft("pizzavanger", boyX * 50);
    }
  }
}
