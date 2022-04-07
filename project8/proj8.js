// eli brooks
// 4/7/22
// function exercises 2

// make the div usable in js
let dvNumOutput = document.getElementById("numOutput");

// function to generate and display the #
function genRandom() {
    let num = Math.floor(Math.random() * 11);
    dvNumOutput.innerHTML = "Number: " + num;
}

// make the div usable in js
let dvWordOutput = document.getElementById("wordOutput");

// create array of strings
const consol = ["xbox", "pc", "playstation"];

// function to output selection
function conOutput() {
    let answer = consol[0];
    dvWordOutput.innerHTML = answer;
}