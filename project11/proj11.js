// eli brooks
// 4/14/22
// array computation exercises

// filter and count bad words
function badWords(){
    let total = 0;
    var wordString = wordField.value;

    let wordArray = wordString.split(" ");
    // loop to make sure it checks the whole string
    for(let i = 0; i < wordArray.length; i++){

        if(wordArray[i] == "clear"){
        total += 1;
        }
        else if(wordArray[i] == "tires"){
        total += 1;
        }
        else if(wordArray[i] == "water"){
        total += 1;
        }
        }
        document.getElementById("result").innerHTML = "Number of Bad Words: " + total;
    }

// check for three 1's in input
function winGame(){
    let gameArray = document.getElementById("winning").value;
    gameCount = gameArray.split(",");
    console.log(gameCount);
    let count = 0;
    
    // 
    for(let i=0; i < gameCount.length; i++){
        if(gameCount[i] == "1"){
            count +=1;
            console.log(count);
        }
        else 
        {
            document.getElementById("result").innerHTML = "Winner";
            break;
        }
            if(count == 3) 
        {
            console.log(count);
            document.getElementById("result").innerHTML = "Loser";
            break;
        }
    }
}