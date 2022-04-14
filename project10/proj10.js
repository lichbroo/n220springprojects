// eli brooks
// 4/12/22
// event exercises

// turn the 3 boxes to the clicked color
function colorChange(){
    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
    }

// declare colors
let red = 0;
let blue = 0;
let green = 0; 

let dvMain = document.getElementById('maindiv');
let displayDiv = document.getElementById('displayDiv');

// create display box
dvMain.style.height ='200px';
dvMain.style.width ='200px';

// change color w/ functions in the display box
changeColor();
function changeColor(){

    let color = "RGB(" +red + "," + green + "," + blue + ")"; 

    dvMain.style.backgroundColor = color;

    displayDiv.innerHTML = color;


}

// functions to change color values
function moreRed(){

    red += Number(event.target.getAttribute("data-num"));
    changeColor();
}
function moreBlue(){
    blue += Number(event.target.getAttribute("data-num"));
    changeColor();
}
function moreGreen(){
    green += Number(event.target.getAttribute("data-num"));
    changeColor();
}