let objBall = {
    x: 100,
    y: 100,
    ballColor: "#a9a9a9",
    size: 25,
};

function setup() {
    createCanvas(500, 400);

    // create circle w above stats
    circle(objBall.x, objBall.y, objBall.size);
    fill(objBall.ballColor);
}

let objCircle = {
    x: 300,
    y: 100,
    size: 50,
    offsetX: 100,
}

function draw() {
    circle(objCircle.x, objCircle.y, objCircle.size);
    if(mousePressed) {
        objCircle.offsetX = -1;
    }
}