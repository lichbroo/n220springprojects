// eli brooks
// 1/18/22
// personal composition n220

// to start the project
function setup() {
    createCanvas(800, 800);
    
    //first triangle!
    fill('#222222');
    strokeWeight(2);
    stroke('#c20000');
    triangle(30, 75, 58, 20, 86, 75);
    
    //second triangle, reversed colors of the first
    fill('#c20000')
    strokeWeight(2);
    stroke('#000');
    triangle(140, 100, 86, 130, 86, 75);
    
    //circle in between the two
    strokeWeight(1);
    fill('#fff')
    circle(57, 103, 50);
  }