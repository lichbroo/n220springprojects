// eli brooks
// 4/7/22
// function exercises 2

// make the div usable in js
let dvNumOutput = document.getElementById("numOutput");

//function picker() {
 //   let num = Math.floor(Math.random() * 10);
//}

function genRandom() {
    let num = Math.floor(Math.random() * 10);
    dvNumOutput.innerHTML = "Number: " + num;
}

const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);