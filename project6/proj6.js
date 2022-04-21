// eli brooks
// 4/20/22
// loops and arrays exercises

// for loop to run 5 times
for(let i = 1; i <= 25; i++){
    document.getElementById("loop").innerHTML+= i + "000";
}

// for loop to run it 25 times
for(let i = 1; i <= 25; i++){
    // beep
    if(i % 3 == 0){
        document.getElementById("beepBop").innerHTML+= "Beep" + "<br>";
    }
    // bop
    else if(i % 5 == 0){
        document.getElementById("beepBop").innerHTML += "Bop" + "<br>";
    }
    // beepbop
   if(i % 3 == 0  && i % 5 == 0){
        document.getElementById("beepBop").innerHTML += "Beep Bop" + "<br>";
    }
}

// runner up times
var times = [10.76, 11.02, 11.10];

// make new places for second and third times
times = times.sort(function(a,b){
    return a - b; 
});
for(let i = 0; i<times.length; i++) {
    document.getElementById("runnerUp").innerHTML += "Final Time: " + times[i] + "<br>";
}

// array of favorites
var favorites = ["YouTube", "Donuts", "French fries", "Code that works"];

// output each
for(let i = 0; i < favorites.length; i++){
    document.getElementById("favorray").innerHTML += favorites[i] += ", is one of my favorite things." + "<br>";
}
