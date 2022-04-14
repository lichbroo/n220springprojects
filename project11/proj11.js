// eli brooks
// 4/14/22
// array computation exercises

// filter and count bad words
function badWords(){
    let total = 0;
    var wordString = wordField.value;

    let wordArray = wordString.split(" ");

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