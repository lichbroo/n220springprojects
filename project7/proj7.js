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
    let tip = `${tipVal}`;
    dvNumberOutput.innerHTML = "Hello, " + tip + ".";

    numberName.value ="";
}