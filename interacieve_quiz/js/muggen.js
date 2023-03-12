var score = 0;
var seconds = 0;
var moveTimer = window.setInterval(moveVirus, 1000);
var rotateTimer = window.setInterval(rotateVirus, 700);
var  colours = ["red", "green", "blue", "yellow"];

var colourTimer = window.setInterval(changeColour, 1000)

function changeColour()
{
var n = Math.floor(Math.random()*4);
var color = colours[n];
document.body.style.backgroundColor = color;  
}

function moveVirus(){
    seconds++;
    document.getElementById("virus").style.left=Math.random()*1920+"px";
    document.getElementById("virus").style.top=Math.random()*1080+"px";

    if (seconds > 30)
    {
        clearInterval(moveTimer);
        clearInterval(rotateTimer);
        clearInterval(colourTimer);
        alert("Je totaalscore is: " + score); //totaalscore wordt weergegeven
        location.reload(); //pagina herlaad

    }

} 

function rotateVirus(){
    var virus = document.getElementById("virus");
    var angle = Math.random() * 10; // generate a random angle between 0 and 10 degrees
    virus.style.transform = "rotate(" + angle + "deg)"; // set the rotation angle

}

function caughtlt()
{
    score++;
    document.getElementById("scoreText").innerText="Score:"+score+" punten";
}