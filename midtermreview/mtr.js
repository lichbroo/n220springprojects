// eli brooks
// 4/23/22
// miderm review exercises

// declare all objects
let mouse = document.getElementById("mouse");
let keyboard = document.getElementById("keyboard");
let screen = document.getElementById("screen");
let headphones = document.getElementById("headphones");
let usb = document.getElementById("usb");
let hdmi = document.getElementById("hdmi");

// all the different styles
mouse.innerHTML = "mouse";
mouse.style.fontSize = "20px";
mouse.style.backgroundColor = "#7da3b3";
mouse.style.padding = "3px 6px"

keyboard.innerHTML = "keyboard";
keyboard.style.fontSize = "20px";
keyboard.style.backgroundColor = "#b9c5c9";
keyboard.style.padding = "3px 6px"

screen.innerHTML = "screen";
screen.style.fontSize = "20px";
screen.style.backgroundColor = "#1899cc";
screen.style.padding = "3px 6px"

headphones.innerHTML = "headphones";
headphones.style.fontSize = "20px";
headphones.style.backgroundColor = "#8c0013";
headphones.style.padding = "3px 6px"

usb.innerHTML = "USB";
usb.style.fontSize = "20px";
usb.style.backgroundColor = "#2438b5";
usb.style.padding = "3pxpx 6px"

hdmi.innerHTML = "HDMI";
hdmi.style.fontSize = "20px";
hdmi.style.backgroundColor = "#b5b024";
hdmi.style.padding = "3px 6px";

// change when each is clicked
holder.onclick = function(holderClicked) {
    holder.style.fontWeight = "bold";
}


// place for game to run
let game = document.getElementById("game");
    game.style.display = "flex";
    game.style.padding = "6px 12px";    

// show which is chosen
let rock = document.getElementById("rock");
    rock.style.display = "flex";

let paper = document.getElementById("paper");
    paper.style.display = "flex";

let scissors = document.getElementById("scissors");
    scissors.style.display = "flex";

let guard = document.getElementById("guard");
    guard.style.display = "flex";

let score = document.getElementById("score");