// eli brooks
// 4/25/22
// final project

let playerOne;
let playerTwo;
let turn;
let board;

function setup() {
  playerOne = new Player("X");
  playerTwo = new Player("O");
  createCanvas(400, 400);
  board = new Board(3, playerOne, playerTwo);
}

// p5 to help create place to play
function draw() {
  background(220);
  board.display();
}

function mousePressed(){
	if (!board.winState){
    if (board.turn === "X"){
      playerOne.select(board);
    } else {
      playerTwo.select(board);
    }
    board.toggleTurn();
  } else {
  	board.newGame();
  }
}

// a class for the board
class Board {
  constructor(size, playerOne, playerTwo){
    //data needed for the board
    this.s = size;
    this.cells = [];
    this.cSize = (width-1)/this.s;
		//data dealing with players
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.turn = this.playerOne.t;
    //data needed to deal with winning
    this.winState = false;
    this.resultText = "";
    this.newGame();
  }
  
  display(){
    let cSize = this.cSize;
    if (this.winState){
      textSize(24);
      textAlign(CENTER);
    	text(this.resultText, width/2, height/2);
      text("Click anywhere for a new game", width/2, height/2+30);
      
    } else {
      this.cells.forEach(function(element){
        rect(element.r*cSize, element.c*cSize, cSize, cSize);
        textSize(64);
        textAlign(CENTER);
        text(element.t, element.r*cSize+cSize/2, element.c*cSize+cSize/1.5);
      });
    }
  }
  
  // 
  update(r, c, t){
    let turn = this.turn;
    this.cells.forEach(function(element){
			if (element.r === r && element.c === c && element.v === 0){
      	element.t = t;
        if(turn==="X"){
        	element.v = 1;
        } else {
        	element.v = -1;
        }
      }
    });
    let result = this.checkResult()
    if (result){
      this.winState = true;
      this.resultText = result + " wins!";
    }
  }
  
  // to give each player a turn, repeating
  toggleTurn(){
  	if (this.turn == playerOne.t){
    	this.turn = playerTwo.t;
    } else {
    	this.turn = playerOne.t;
    }
  }
  
  // displays win/tie messages depending
  checkResult() {
	let winner;
    let playerOne = this.playerOne;
    let playerTwo = this.playerTwo;
    let rowSums = new Array(this.s);
    let colSums = new Array(this.s);
    let diagSums = new Array(this.s);
    let numOpen = 9;
    let s = this.s
    for (let i=0; i<this.s; i++){
      rowSums[i]= 0;
      colSums[i] = 0;
      diagSums[i] = 0;
    }
    this.cells.forEach(function(element) {
      rowSums[element.r] += element.v;
      colSums[element.c] += element.v;
      numOpen -= abs(element.v);
      if(abs(element.r-element.c) === 0){
      	diagSums[0] += element.v;
      }
      if(abs(element.r-element.c) === 2 || (element.r == 1  && element.c == 1)){
      	diagSums[1] += element.v;
      }
    });
    // check for win through horizontal
    rowSums.forEach(function(element) {
    	if(element === s){
      	winner = playerOne.t;
        playerOne.win();
      }
      if (element === -1*s){
      	winner = playerTwo.t;
        playerTwo.win();
      }
    });
    // check for win through vertical
    colSums.forEach(function(element) {
    	if(element === s){
      	winner = playerOne.t;
        playerOne.win();
      }
      if (element === -1*s){
      	winner = playerTwo.t;
        playerTwo.win();
      }
    });
    // check for win through diagonal
    diagSums.forEach(function(element) {
    	if(element === s){
      	winner = playerOne.t;
        playerOne.win();
      }
      if (element === -1*s){
      	winner = playerTwo.t;
        playerTwo.win();
      }
    });
    if (numOpen === 0 ){
      winner = "Neither";
    }
    return winner;
  }
  
  newGame(){
    this.winState = false;
    this.turn = this.playerOne.t;
    this.cells = [];
    for (let i=0; i<this.s; i++){
      for (let j=0; j<this.s; j++){
        this.cells.push({
          "r": i,
          "c": j,
          "t": "",
          "v": 0
      	});
    	}
    }
  }
}


// a class for the player
class Player {
	
  constructor(p){
    this.t = p;
    this.score = 0;
  }
  
  select(b){
    if(b.turn === this.t){
      let cx = int(Math.floor(mouseX/b.cSize));
      let cy = int(Math.floor(mouseY/b.cSize));
      b.update(cx, cy, this.t);
    }
  }
  
  win(){
  	this.score ++;
  }
}