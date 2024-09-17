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
mainImage.src = "pac.png";

function checkReady() {
    this.ready = true;
    playGame();
}

function playGame() {
    render();
}

function render() {
    context.fillStyle = "blue";
    context.fillRect(0,0,canvas.width, canvas.height);
    //this is the original numbers = (320,0 move up, 32,32,0,0,(50,50)these two are to resize)
    context.drawImage(mainImage, 330, 0, 32, 32, 0, 0, 32, 32);
}



document.body.appendChild(canvas);
//context.fillText("Hello, World!!!",10,150);