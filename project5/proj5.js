// create first box + size for both
let dvBox = document.getElementById("box");
let size = 100;

// styles of first box
dvBox.style.backgroundColor = "#32a852";
dvBox.style.height = size + "px";
dvBox.style.width = size + "px";

// the increase function to make the box grow bigger onclick
function increase() {
    dvBox.style.height = size * 1.1 + "px";
    dvBox.style.width = size * 1.1 + "px";
}

// create box 2
let dvBox2 = document.getElementById("box2");

// style box2 like the first, using size again because they're the same size
dvBox2.style.backgroundColor = "#0335fc";
dvBox2.style.height = size + "px";
dvBox2.style.width = size + "px";

// function for hovering/not hovering
function on() {
    dvBox2.style.backgroundColor = "#0335fc";
}
function off() {
    dvBox2.style.backgroundColor = "#000";
}