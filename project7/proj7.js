// eli brooks
// 3/24/22
// user input exercises

// first box and output
let txtName = document.getElementById("txtName");
let dvWordOutput = document.getElementById("wordOutput");

// function to output the name put into the box after reading it
function logText() {
    let txtWord = txtName.value;
    let word = `${txtWord}`;
    dvWordOutput.innerHTML = "Hello, " + word + ".";

    txtName.value ="";
}

// second box and output
let numberName = document.getElementById("numberName");
let dvNumberOutput = document.getElementById("numOutput");

// function to declare the string as integers and do the math to calculate expected tip of the user's input, or bill amount
function numLog() {
    let tipVal = numberName.value;
    var tip = parseInt(tipVal * .20);
    var total = parseInt(tipVal);
    dvNumberOutput.innerHTML = "Tip (20%): " + tip + " Total: " + (total + tip);

    numberName.value ="";
}

// translate third boxes and output to js
let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let dvUserPassOutput = document.getElementById("userPassOutput");

// function to check if the user input the right credentials
function signIn() {
    let usern = userName.value;
    let passw = passWord.value;
    if( (usern == "Username") && (passw == "Password") ) {
        dvUserPassOutput.innerHTML = "Success."
    } else {
        dvUserPassOutput.innerHTML = "Wrong information.";
    }
}
