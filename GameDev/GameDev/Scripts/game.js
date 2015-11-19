/// <reference path="quintus/lib/quintus.js" />
var Q = Quintus()
        .include("Sprites")
        .setup({ width: 1000, height: 600 });

Q.load(["../assets/sprite3.png"], function () {
    var bg = new Q.Sprite({
        asset: "../assets/sprite3.png",
        x: Q.el.width / 2,
        y: Q.el.height / 2,
        type: Q.SPRITE_NONE
    });

    Q.gameLoop(function (dt) {
        Q.clear();
        bg.render(Q.ctx)
    });
});

var canvasWidth = 1000;
var canvasHeight = 600;
var FPS = 30;
var canvas = $('#gameCanvas')[0].getContext('2d');

var image = new Image();
image.src = "../assets/sprite3.png";

var x = (canvasWidth - image.width) / 2;
var y = (canvasHeight - image.height) / 2;

var keysDown = {};

$('#gameCanvas').attr('width', canvasWidth);
$('#gameCanvas').attr('height', canvasHeight);

$('body').bind('keyup',function (e) {
    keysDown[e.which] = false;
})
$('body').bind('keydown',function (e) {
    keysDown[e.which] = true;
})

setInterval(function () {
    update();
    draw();
}, 1000 / FPS);

function update() {
    if (keysDown[37]) {
        x -= 10;
    }
    else
    if (keysDown[38]) {
        y -= 10;
    }
    else
    if (keysDown[39]) {
        x += 10;
    }
    else
    if (keysDown[40]) {
        y += 10;
    }
    x = clamp(x, 0, canvasWidth - image.width);
    y = clamp(y, 0, canvasHeight - image.height);
}

function clamp(x, min, max) {
    return x < min ? min : (x > max ? max : x);
}

function draw() {
    canvas.clearRect(0, 0, canvasWidth, canvasHeight);
    canvas.strokeRect(0, 0, canvasWidth, canvasHeight);
    canvas.drawImage(image, x, y);
}


