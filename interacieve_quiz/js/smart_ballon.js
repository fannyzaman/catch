var score = 0;
var speed = 1;
var colours = ["red", "green", "blue", "yellow"];
var floatTimer, floatTimer2, rotateTimer, rotateTimer2, colourTimer;
var audio = new Audio();
audio.src = 'sound/ATLAS01.mp3';
audio.preload = 'auto';

function startGame() {
  // Start the game
  floatTimer = window.setInterval(floatUp, 100);
  floatTimer2 = window.setInterval(floatUp2, 100);
  rotateTimer = window.setInterval(rotateBallon, 500);
  rotateTimer2 = window.setInterval(rotateBallon2, 500);
  colourTimer = window.setInterval(changeColour, 1000);
}

window.onload = function() {
  document.getElementById("startButton").addEventListener("click", startGame);
};

function gameOver() {
  clearInterval(floatTimer);
  clearInterval(floatTimer2);
  clearInterval(rotateTimer);
  clearInterval(colourTimer);
  alert("Game Over! Your score is: " + score);
  location.reload();
}

function changeColour() {
  var colours = ["red", "green", "blue", "yellow"];
  var n = Math.floor(Math.random() * 4);
  var color = colours[n];
  document.body.style.backgroundColor = color;
}

function floatUp() {
  var y = getTop("ballon");
  if (objectOutOfBounds("ballon")) {
    gameOver();
  } else {
    setTop("ballon", y - speed);
  }
}

function setLeft(id, x) {
  document.getElementById(id).style.left = x + "px";
}

function setTop(id, y) {
  document.getElementById(id).style.top = y + "px";
}

function getLeft(id) {
  return document.getElementById(id).offsetLeft;
}

function getTop(id) {
  return document.getElementById(id).offsetTop;
}

function floatUp2() {
    var y2 = getTop("ballon2");
    if (objectOutOfBounds("ballon2")) {
      gameOver();
    } else {
      setTop("ballon2", y2 - speed);
    }
  }

function objectOutOfBounds(id) {
  var bounds = document.getElementById(id).getBoundingClientRect();

  if (bounds.top < -document.getElementById(id).height / 2) {
    return true;
  } else {
    return false;
  }
}

function objectOutOfBounds2(id) {
    var bounds = document.getElementById(id).getBoundingClientRect();

    if (bounds.top < -document.getElementById(id).height / 2) {
      return true;
    } else {
      return false;
    }
  }

function popped() {
  score++;
  speed++;
  document.getElementById("scoreText").innerText = "Score: " + score;
  setLeft("ballon", randomNumber(0, window.innerWidth - 100));
  setTop("ballon", window.innerHeight);
  audio.play();
}

function rotateBallon() {
  var ballon = document.getElementById("ballon");
  var angle = Math.random() * 300; // generate a random angle between 0 and 300 degrees
  ballon.style.transform = "rotate(" + angle + "deg)"; // set the rotation angle
}

function popped2() {
    score++;
    speed++;
    document.getElementById("scoreText").innerText = "Score: " + score;
    setLeft("ballon2", randomNumber(0, window.innerWidth - 100));
    setTop("ballon2", window.innerHeight);
    audio.play();
  }

function rotateBallon2() {
    var ballon = document.getElementById("ballon2");
    var angle = Math.random() * 250; // generate a random angle between 0 and 250 degrees
    ballon.style.transform = "rotate(" + angle + "deg)"; // set the rotation angle
}

function randomNumber(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function randomNumber2(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}
