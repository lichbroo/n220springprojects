// eli brooks
// 4/20/22
// loops and arrays exercises

// for loop to rnu it 25 times
for(let i = 1; i <= 25; i++){
    // beep
    if(i % 3 == 0){
        document.getElementById('beepBop').innerHTML+= "Beep" + "<br>";
    }
    // bop
    else if(i % 5 == 0){
        document.getElementById('beepBop').innerHTML += "Bop" + "<br>";
    }
    // beepbop
   if(i % 3 == 0  && i % 5 == 0){
        document.getElementById('beepBop').innerHTML += "Beep Bop" + "<br>";
    }

}