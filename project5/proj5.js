let dvBox = document.getElementById("box");
let size = 100;

dvBox.style.backgroundColor = "#32a852";
dvBox.style.height = size + "px";
dvBox.style.width = size + "px";

function increase() {
    dvBox.style.height = size * 1.1 + "px";
    dvBox.style.width = size * 1.1 + "px";
}

let dvBox2 = document.getElementById("box2");
let size = 100;

dvBox.style.backgroundColor = "#0335fc";

function on() {
    dvBox2.style.backgroundColor = "#0335fc";
}
function off() {
    dvBox2.style.backgroundColor = "#000";
}