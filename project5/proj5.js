let dvBox = document.getElementById("box");
let size = 100;

dvBox.style.backgroundColor = "#32a852";
dvBox.style.height = size + "px";
dvBox.style.width = size + "px";

function grow() {
    dvBox.style.height = size * 1.1 + "px";
    dvBox.style.width = size * 1.1 + "px";
}