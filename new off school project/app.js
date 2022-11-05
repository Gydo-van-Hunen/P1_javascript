let myGamePiece;
let myObstacle;
let myObstacle2;
let myObstacle3;
let myObstacle4;
let myObstacle5;
let myObstacle6;
let myObstacle7;
let myWin;

function startGame() {
    myGameArea.start();
    myObstacle = new component(960, 210, 'black', 50, 0);
    myObstacle2 = new component(100, 250, 'black', 0, 250);
    myObstacle4 = new component(200, 250, 'black', 140, 250);
    myObstacle3 = new component(900, 200, 'black', 100, 300);
    myObstacle5 = new component(200, 250, 'black', 380, 250);
    myObstacle6 = new component(170, 260, 'black', 830, 0);
    myObstacle7 = new component(170, 250, 'black', 620, 250);
    myWin = new component(40, 40, 'limegreen', 960, 260);
    myTrap = new component(30, 30, "red", 5, 215);
    myGamePiece = new component(30, 30, "blue", 5, 5);
}

const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myTrap.x >= 800) {
        myTrap.speedX = -8;
    }
    if (myTrap.x <= 40) {
        myTrap.speedX = 8;
    }
    myTrap.newPos();
    myTrap.update();
    myObstacle.update();
    myObstacle2.update();
    myObstacle3.update();
    myObstacle4.update();
    myObstacle5.update();
    myObstacle6.update();
    myObstacle7.update();
    myWin.update();
    if (myGameArea.keys && myGameArea.keys[65]) {
        if (myGamePiece.x - 1 <= 0) { }
        else if ((myGamePiece.x - 3) <= (myObstacle2.x + myObstacle2.width) && (myGamePiece.x - 3) >= myObstacle2.x && (myGamePiece.y + myGamePiece.height) >= myObstacle2.y && myGamePiece.y <= (myObstacle2.y + myObstacle2.height)) { }
        else if ((myGamePiece.x - 3) >= myObstacle.x && (myGamePiece.x - 3) <= (myObstacle.x + myObstacle.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle.y && myGamePiece.y <= (myObstacle.y + myObstacle.height)) { }
        else if ((myGamePiece.x - 3) >= myObstacle3.x && (myGamePiece.x - 3) <= (myObstacle3.x + myObstacle3.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle3.y && myGamePiece.y <= (myObstacle3.y + myObstacle3.height)) { }
        else if ((myGamePiece.x - 3) >= myObstacle4.x && (myGamePiece.x - 3) <= (myObstacle4.x + myObstacle4.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle4.y && myGamePiece.y <= (myObstacle4.y + myObstacle4.height)) { }
        else if ((myGamePiece.x - 3) >= myObstacle5.x && (myGamePiece.x - 3) <= (myObstacle5.x + myObstacle5.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle5.y && myGamePiece.y <= (myObstacle5.y + myObstacle5.height)) { }
        else if ((myGamePiece.x - 3) >= myObstacle6.x && (myGamePiece.x - 3) <= (myObstacle6.x + myObstacle6.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle6.y && myGamePiece.y <= (myObstacle6.y + myObstacle6.height)) { }
        else if ((myGamePiece.x - 3) >= myObstacle7.x && (myGamePiece.x - 3) <= (myObstacle7.x + myObstacle7.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle7.y && myGamePiece.y <= (myObstacle7.y + myObstacle7.height)) { }
        else {
            myGamePiece.speedX = -4;
        }
    }
    if (myGameArea.keys && myGameArea.keys[68]) {
        if (myGamePiece.x + 1 >= 970) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle2.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle2.x + myObstacle2.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle2.y && myGamePiece.y <= (myObstacle2.y + myObstacle2.height)) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle.x + myObstacle.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle.y && myGamePiece.y <= (myObstacle.y + myObstacle.height)) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle3.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle3.x + myObstacle3.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle3.y && myGamePiece.y <= (myObstacle3.y + myObstacle3.height)) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle4.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle4.x + myObstacle4.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle4.y && myGamePiece.y <= (myObstacle4.y + myObstacle4.height)) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle5.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle5.x + myObstacle5.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle5.y && myGamePiece.y <= (myObstacle5.y + myObstacle5.height)) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle6.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle6.x + myObstacle6.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle6.y && myGamePiece.y <= (myObstacle6.y + myObstacle6.height)) { }
        else if ((myGamePiece.x + myGamePiece.width + 3) >= myObstacle7.x && (myGamePiece.x + myGamePiece.width + 3) <= (myObstacle7.x + myObstacle7.width) && (myGamePiece.y + myGamePiece.height) >= myObstacle7.y && myGamePiece.y <= (myObstacle7.y + myObstacle7.height)) { }
        else {
            myGamePiece.speedX = 4;
        }
    }
    if (myGameArea.keys && myGameArea.keys[87]) {
        if (myGamePiece.y - 1 <= 0) { }
        else if ((myGamePiece.y - 3) <= (myObstacle2.y + myObstacle2.height) && (myGamePiece.y - 3) >= myObstacle2.y && (myGamePiece.x + myGamePiece.width) >= myObstacle2.x && myGamePiece.x <= (myObstacle2.x + myObstacle2.width)) { }
        else if ((myGamePiece.y - 3) <= (myObstacle.y + myObstacle.height) && (myGamePiece.y - 3) >= myObstacle.y && (myGamePiece.x + myGamePiece.width) >= myObstacle.x && myGamePiece.x <= (myObstacle.x + myObstacle.width)) { }
        else if ((myGamePiece.y - 3) <= (myObstacle3.y + myObstacle3.height) && (myGamePiece.y - 3) >= myObstacle3.y && (myGamePiece.x + myGamePiece.width) >= myObstacle3.x && myGamePiece.x <= (myObstacle3.x + myObstacle3.width)) { }
        else if ((myGamePiece.y - 3) <= (myObstacle4.y + myObstacle4.height) && (myGamePiece.y - 3) >= myObstacle4.y && (myGamePiece.x + myGamePiece.width) >= myObstacle4.x && myGamePiece.x <= (myObstacle4.x + myObstacle4.width)) { }
        else if ((myGamePiece.y - 3) <= (myObstacle5.y + myObstacle5.height) && (myGamePiece.y - 3) >= myObstacle5.y && (myGamePiece.x + myGamePiece.width) >= myObstacle5.x && myGamePiece.x <= (myObstacle5.x + myObstacle5.width)) { }
        else if ((myGamePiece.y - 3) <= (myObstacle6.y + myObstacle6.height) && (myGamePiece.y - 3) >= myObstacle6.y && (myGamePiece.x + myGamePiece.width) >= myObstacle6.x && myGamePiece.x <= (myObstacle6.x + myObstacle6.width)) { }
        else if ((myGamePiece.y - 3) <= (myObstacle7.y + myObstacle7.height) && (myGamePiece.y - 3) >= myObstacle7.y && (myGamePiece.x + myGamePiece.width) >= myObstacle7.x && myGamePiece.x <= (myObstacle7.x + myObstacle7.width)) { }
        else {
            myGamePiece.speedY = -4;
        }
    }
    if (myGameArea.keys && myGameArea.keys[83]) {
        if (myGamePiece.y + 1 >= 470) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle2.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle2.y + myObstacle2.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle2.x && myGamePiece.x <= (myObstacle2.x + myObstacle2.width)) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle.y + myObstacle.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle.x && myGamePiece.x <= (myObstacle.x + myObstacle.width)) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle3.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle3.y + myObstacle3.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle3.x && myGamePiece.x <= (myObstacle3.x + myObstacle3.width)) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle4.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle4.y + myObstacle4.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle4.x && myGamePiece.x <= (myObstacle4.x + myObstacle4.width)) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle5.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle5.y + myObstacle5.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle5.x && myGamePiece.x <= (myObstacle5.x + myObstacle5.width)) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle6.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle6.y + myObstacle6.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle6.x && myGamePiece.x <= (myObstacle6.x + myObstacle6.width)) { }
        else if ((myGamePiece.y + myGamePiece.height + 3) >= myObstacle7.y && (myGamePiece.y + myGamePiece.height + 3) <= (myObstacle7.y + myObstacle7.height) && (myGamePiece.x + myGamePiece.width) >= myObstacle7.x && myGamePiece.x <= (myObstacle7.x + myObstacle7.width)) { }
        else {
            myGamePiece.speedY = 4;
        }
    }
    // the trap
    if ((myGamePiece.y + myGamePiece.height + 3) >= myTrap.y && (myGamePiece.y + myGamePiece.height + 3) <= (myTrap.y + myTrap.height) && (myGamePiece.x + myGamePiece.width) >= myTrap.x && myGamePiece.x <= (myTrap.x + myTrap.width)) { location.reload(); }
    else if ((myGamePiece.y - 3) <= (myTrap.y + myTrap.height) && (myGamePiece.y - 3) >= myTrap.y && (myGamePiece.x + myGamePiece.width) >= myTrap.x && myGamePiece.x <= (myTrap.x + myTrap.width)) { location.reload(); }
    else if ((myGamePiece.x + myGamePiece.width + 3) >= myTrap.x && (myGamePiece.x + myGamePiece.width + 3) <= (myTrap.x + myTrap.width) && (myGamePiece.y + myGamePiece.height) >= myTrap.y && myGamePiece.y <= (myTrap.y + myTrap.height)) { location.reload(); }
    else if ((myGamePiece.x - 3) >= myTrap.x && (myGamePiece.x - 3) <= (myTrap.x + myTrap.width) && (myGamePiece.y + myGamePiece.height) >= myTrap.y && myGamePiece.y <= (myTrap.y + myTrap.height)) { location.reload(); }
    // the win
    if ((myGamePiece.y + (myGamePiece.height / 2)) >= myWin.y && (myGamePiece.y + (myGamePiece.height / 2)) <= (myWin.y + myWin.height) && (myGamePiece.x + (myGamePiece.width / 2)) >= myWin.x && myGamePiece.x <= (myWin.x + myWin.width)) { window.open('./win-screen.html'); window.close('./index.html'); }
    else if ((myGamePiece.x + (myGamePiece.width / 2)) >= myWin.x && (myGamePiece.x + (myGamePiece.width / 2)) <= (myWin.x + myWin.width) && (myGamePiece.y + (myGamePiece.height / 2)) >= myWin.y && myGamePiece.y <= (myWin.y + myWin.height)) { window.open('./win-screen.html'); window.close('./index.html'); }

    myGamePiece.newPos();
    myGamePiece.update();
}