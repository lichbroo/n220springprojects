// eli brooks
// objects exercises
// due 2/10

// declare the ball object
let objBall = {
    x: 100,
    y: 100,
    ballColor: "#a9a9a9",
    size: 25,
};

// general setup 
function setup() {
    createCanvas(500, 400);

    // create circle w above stats
    circle(objBall.x, objBall.y, objBall.size);
    // the part that is changed is the ball fill -- in this one, it stays white.
    fill(objBall.ballColor);
}

// a second circle for the second prompt
let objCircle = {
    x: 300,
    y: 100,
    size: 50,
    offsetX: 100,
}

// calling the circle
function draw() {
    circle(objCircle.x, objCircle.y, objCircle.size);
    if(mouseIsPressed) {
        objCircle.offsetX -= 1;
    }
    else {
        objCircle.offsetX += 1;
    }

    // stop it at 0, reset
    if (objCircle.offsetX <= 0) {
        objCircle.offsetX += 100;
    }
}