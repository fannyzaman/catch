let score = 0;
let lives = 3;
let boyX = 6;
let boyY = 10;
let pizzaX = 6;
let pizzaY = 0;
let pizzavangerX = 6; // initialize the position of the pizzavanger
let gameTimer;
let pizzaImages= [
"images/taart1.png", 
"images/taart2.png",
"images/taart3.png"
];

function setLeft(id, x, boardWidth) {
  let element = document.getElementById(id);
  if (x < 0) {
    x = 0;
  } else if (x > boardWidth - element.offsetWidth) {
    x = boardWidth - element.offsetWidth;
  }
  element.style.left = x + "px";
}

function setTop(id, y) {
  document.getElementById(id).style.top = y + "px";
}

function startGame() {
  console.log();
  score = 0;
  lives = 3;
  boyX = 6;
  boyY = 10;
  pizzaX = 6;
  pizzaY = 0;
  gameTimer = window.setInterval(movePizza, 300);
  setLeft("pizzavanger", boyX * 50, 750); // pass the width of the game board as a parameter
  setTop("pizzavanger", boyY * 50);
  setLeft("pizza", pizzaX * 50);
  setTop("pizza", pizzaY * 50);
  document.getElementById("scoreText").innerText = "Score: " + score;
  document.getElementById("levensText").innerText = "Kansen: " + lives;

  // Add event listener for arrow keys
  document.addEventListener("keydown", handleKeys);
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
  pizzaX = randomNumber(2, 16);
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
  pizzaX = randomNumber(2, 16);
  score++;
  document.getElementById("scoreText").innerText = "Score: " + score;
  document.getElementById("pizza").src = pizzaImages[randomNumber(0, pizzaImages.length - 1)];
}

document.onkeydown = handleKeys;

function handleKeys(event) {
  // handle the arrow keys to move the pizzavanger
  if (event.keyCode == 37 && pizzavangerX > 0) { // left arrow
    pizzavangerX--;
  } else if (event.keyCode == 39 && pizzavangerX < 14) { // right arrow
    pizzavangerX++;
  }
  setLeft("pizzavanger", pizzavangerX * 50); // update the position of the pizzavanger
}

