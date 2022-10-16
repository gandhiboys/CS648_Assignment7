/*eslint-env browser*/

var myChoice;
var computerChoice;

function playGame() {
    "use strict";
    var num;
        
    do {
    myChoice = window.prompt("What do you want: Rock, Paper or Scissors?");
    myChoice= myChoice.toUpperCase()
   
      if (myChoice !== "ROCK" && myChoice !== "SCISSORS" && myChoice !== "PAPER") {
            window.alert("That is an invalid input. Please choose again!"); 
        } 
    } while (myChoice !== "ROCK" && myChoice !== "SCISSORS" && myChoice !== "PAPER");
    
    num = Math.random();
    if (num < 0.3) {
        computerChoice = "ROCK";
    } else if (num > 0.6) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
    
    if (myChoice === computerChoice) {
        window.alert("It is a TIE!")
    } 
    else if (myChoice === "ROCK" && computerChoice === "SCISSORS" || myChoice === "SCISSORS" && computerChoice === "PAPER" || myChoice === "PAPER" && computerChoice === "ROCK") {
        window.alert("You choose " + myChoice + "\nComputer chose " + computerChoice + "\nYou Win!");
    } 
    else {
        window.alert("You choose " + myChoice + "\nComputer chose " + computerChoice + "\nYou Lose!");
        
    }
}


function main() {
    "use strict"
    var playAgain = "y";  
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play again? (y/n)");
        if(playAgain == "n"){
            break;
        }
    }
    window.alert("Thanks for playing");
}

main();