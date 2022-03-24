let txtName = document.getElementById("txtName");
let dvWordOutput = document.getElementById("wordOutput");

function logText() {
    let txtWord = txtName.value;
    let word = `${txtWord} ${txtWord} ${txtWord}`;
    dvWordOutput.innerHTML = "Hello, " + word;

    txtName.value =""
}