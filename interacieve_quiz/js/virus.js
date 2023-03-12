var timer = window.setInterval(moveVirus, 1000);
var  colours = ["red", "green", "blue", "yellow"];

var timer = window.setInterval(changeColour, 1000)

function changeColour()
{
var n = Math.floor(Math.random()*4);
var color = colours[n];
document.body.style.backgroundColor = color;  
}

function moveVirus(){
    document.getElementById("virus").style.left=Math.random()*1920+"px";
    document.getElementById("virus").style.top=Math.random()*1080+"px";

} 