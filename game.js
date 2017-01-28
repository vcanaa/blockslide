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
collisionElements = [];

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
    });

    for(var i = 0; i < collisionElements.length; i++) {
        var a = collisionElements[i];
        for(var j = i + 1; j < collisionElements.length; j++) {
            var b = colli
            if ()
        }
    }
}

grid = [
[.,.,.,.,.,.,.,.,.,1],
[.,.,.,.,.,.,.,.,.,.],
[.,.,.,.,.,.,.,.,.,.],
[.,1,.,.,.,.,.,.,.,.],
[.,.,.,.,.,.,.,.,1,.],
[.,.,.,.,.,.,.,.,.,.],
[.,.,.,.,.,.,.,1,.,.],
[.,.,.,.,.,.,.,.,.,.],
[.,.,.,.,.,.,.,.,.,.],
[1,.,.,.,.,.,.,.,.,.],
];

function createBlocks(grid) {
    for(var i = 0; i < grid.length; i++) {
        line = grid[i];
        for(var j = 0; j < line.length; j++) {
            if (line[j] == 1) {

            }
        }
    }
}

setInterval(drawCanvas, 10);
setInterval(updateGame, 10);