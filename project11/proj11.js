// eli brooks
// 4/14/22
// array computation exercises

// compute average of numbers split by ,
function avgScore(){
    var scoreVar = userNum.value;
    let scoreArray = scoreVar.split(",");
    
    let sum = 0;
    for(let i = 0; i < scoreArray.length; i++ )
    {
        sum += Number(scoreArray[i]);
    }
    average = sum / scoreArray.length;
    
    document.getElementById("result").innerHTML = "Result: " + average;
    
    }

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
        document.getElementById("result2").innerHTML = "Number of Bad Words: " + total;
    }

// check for three 1's in input
function winGame(){
    let gameArray = document.getElementById("winning").value;
    gameCount = gameArray.split(",");
    let count = 0;
    
    // run until numbers are done
    for(let i=0; i < gameCount.length; i++){
        if(gameCount[i] == "1"){
            count +=1;
        }
        else 
        {
            document.getElementById("result3").innerHTML = "Winner";
            break;
        }
            if(count == 3) 
        {
            console.log(count);
            document.getElementById("result3").innerHTML = "Loser";
            break;
        }
    }
}