function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randomno = getRandomInt(3);
function getComputerChoice() {
    if (randomno == 0){
        return "rock"
    }
    else if(randomno == 1){
        return "paper"
    }
    else if(randomno == 2){
        return "scissor"
    }
}
let choice = prompt("Rock , Paper or Scissor?");
function getHumanChoice() {
  if (choice.toLowerCase()=="rock"){
    return "rock"
  }
  else if(choice.toLowerCase() == "paper"){
    return "paper"
  }
  else if(choice.toLowerCase() == "scissor"){
    return "scissor"
  }
}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
if (humanChoice=="rock" && computerChoice=="paper"){
     computerScore+= 1;
    console.log("You Lose");
    return;
}
if (humanChoice =="paper" && computerChoice=="scissor"){
      computerScore+= 1;
    console.log("You Lose");
    return;
}
if (humanChoice=="scissor" && computerChoice=="rock"){
     computerScore+= 1;
    console.log("You Lose");
    return;
}
if (humanChoice =="paper" && computerChoice=="rock"){
     humanScore+= 1;
    console.log("You Win");
    return;
}
if (humanChoice =="scissor" && computerChoice=="paper"){
      humanScore+= 1;
    console.log("You Win");
    return;
}
if (humanChoice=="rock" && computerChoice=="scissor"){
     humanScore+= 1;
    console.log("You Win");
    return;
}
    console.log("Try Again");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);