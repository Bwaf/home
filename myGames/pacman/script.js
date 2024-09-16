/*
var canvas = document.getElementById('canvasSpace');
var ctx = canvas.getContext("2d");
ctx.fillText("Hello, World!!!",10,150);
*/
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 600;

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
//this is some code that I cant do anything with
//because I dont have the image file for the pacman pixel art
// \/\/\/\/\/\/\/\/\/\/\/\/
mainImage.src = "pac.png";
///\/\/\/\/\/\/\/\/\/\/\/\

function checkReady() {
    this.ready = true;
    playGame();
}

function playGame() {
    render();
}

function render() {
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height);
}



document.body.appendChild(canvas);
context.fillText("Hello, World!!!",10,150);