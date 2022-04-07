// eli brooks
// 4/7/22
// function exercises 2

// make the div usable in js
let dvNumOutput = document.getElementById("numOutput");

function picker() {
    Math.floor(Math.random() * 10);
}

function genRandom() {
    let num = picker();
    dvNumOutput.innerHTML = "Number: " + num;
}