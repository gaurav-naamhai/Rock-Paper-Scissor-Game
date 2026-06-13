function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice() {
   let randomno = getRandomInt(3);
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

function getHumanChoice() {
  let choice = prompt("Rock , Paper or Scissor?");
  if (choice.toLowerCase()=="rock"){
    return "rock"
  }
  else if(choice.toLowerCase() == "paper"){
    return "paper"
  }
  else if(choice.toLowerCase() == "scissor"){
    return "scissor"
  }}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
if (humanChoice=="rock" && computerChoice=="paper"){
     computerScore+= 1;
    console.log("You Lose");
    console.log("Your score:",humanScore);
    console.log("PC score:",computerScore);
    return;
}
 if  (humanChoice =="paper" && computerChoice=="scissor"){
      computerScore+= 1;
    console.log("You Lose");
     console.log("Your score:",humanScore);
     console.log("PC score:",computerScore);
    return;
}
 if (humanChoice=="scissor" && computerChoice=="rock"){
     computerScore+= 1;
    console.log("You Lose");
     console.log("Your score:",humanScore);
     console.log("PC score:",computerScore);
    return;
}
 if (humanChoice =="paper" && computerChoice=="rock"){
     humanScore+= 1;
    console.log("You Win");
     console.log("Your score:",humanScore);
     console.log("PC score:",computerScore);
    return;
}
 if (humanChoice =="scissor" && computerChoice=="paper"){
      humanScore+= 1;
    console.log("You Win");
     console.log("Your score:",humanScore);
     console.log("PC score:",computerScore);
    return;
}
 if (humanChoice=="rock" && computerChoice=="scissor"){
     humanScore+= 1;
    console.log("You Win");
     console.log("Your score:",humanScore);
     console.log("PC score:",computerScore);
    return;
}
if(humanChoice==computerChoice)  { 
  playRound(getHumanChoice(),getComputerChoice());
  return;
} 
}




function playGame(){
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
if(humanScore>=3){alert("You Win The Game,Congratulations!!!")}
if(computerScore>=3){alert("You lose The Game,Sorry :(")}
}
playGame();
