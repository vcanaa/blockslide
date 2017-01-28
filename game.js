var UP = 38;
var DOWN = 40;
var LEFT = 37;
var RIGHT = 39;

var canvas;
var canvasCxt;

function onload() {
    canvas = document.getElementById("gamecanvas");
    canvasCxt = canvas.getContext("2d");
}

block = { x: 20, y: 20, h: 20, w: 20, dx: 0, dy: 0};

drawElements = [ block ];
updateElements = [ block ];

grid = createGrid (
".........x
..........
..........
.x........
........x.
..........
.......x..
..........
..........
x.........
");



document.addEventListener('keydown', function(event) {
    if(event.keyCode == LEFT) {
        block.dx = -1;
        block.dy = 0;
    }
    else if(event.keyCode == RIGHT) {
        block.dx = 1;
        block.dy = 0;
    }
    else if(event.keyCode == UP) {
        block.dx = 0;
        block.dy = -1;
    }
    else if(event.keyCode == DOWN) {
        block.dx = 0;
        block.dy = 1;
    }
});

block.draw = function () {
    canvasCxt.beginPath();
    canvasCxt.rect(this.x, this.y, this.w, this.h);
    canvasCxt.stroke();
    canvasCxt.closePath();
} 

block.update = function () {
    this.x += this.dx;
    this.y += this.dy;
}

function drawCanvas() {
    canvasCxt.clearRect(0, 0, canvas.width, canvas.height);
    drawElements.forEach(function (e) {
       e.draw();
    })
}

function updateGame() {
    updateElements.forEach(function (e) {
       e.update(10);
    })
}

setInterval(drawCanvas, 10);
setInterval(updateGame, 10);