let txtName = document.getElementById("txtName");
let dvWordOutput = document.getElementById("wordOutput");

function logText() {
    let txtWord = txtName.value;
    let word = `${txtWord}`;
    dvWordOutput.innerHTML = "Hello, " + word + ".";

    txtName.value =""
}

let numberName = document.getElementById("numberName");
let dvNumberOutput = document.getElementById("numOutput");

function numLog() {
    let tipVal = numberName.value;
    var tip = parseInt(tipVal * .20);
    var total = parseInt(tipVal);
    dvNumberOutput.innerHTML = "Tip (20%): " + tip + " Total: " + (total + tip);

    numberName.value ="";
}