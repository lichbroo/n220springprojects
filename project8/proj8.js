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

