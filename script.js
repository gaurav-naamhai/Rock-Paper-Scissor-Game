
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const div = document.getElementsByClassName("choose")
const text = document.getElementById("text");

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
let humanScore=0;
let computerScore=0;
let playRoun=0;

function playRound(humanChoice, computerChoice){
if (humanChoice=="rock" && computerChoice=="paper"){
     computerScore+= 1;
    text.innerText=`You Lose, Your score:${humanScore},PC score:${computerScore}`;
    playRoun++;
    declare();
    return;
}
 if  (humanChoice =="paper" && computerChoice=="scissor"){
      computerScore+= 1;
    text.innerText=`You Lose, Your score:${humanScore},PC score:${computerScore}`;
    playRoun++;
    declare();
    return;
}
 if (humanChoice=="scissor" && computerChoice=="rock"){
     computerScore+= 1;
    text.innerText=`You Lose, Your score:${humanScore},PC score:${computerScore}`;
    playRoun++;
    declare();
    return;
}
 if (humanChoice =="paper" && computerChoice=="rock"){
     humanScore+= 1;
    text.innerText=`You Win, Your score:${humanScore},PC score:${computerScore}`;
    playRoun++;
    declare();
    return;
}
 if (humanChoice =="scissor" && computerChoice=="paper"){
      humanScore+= 1;
    text.innerText=`You Win, Your score:${humanScore},PC score:${computerScore}`;
    playRoun++;
    declare();
    return;
}
 if (humanChoice=="rock" && computerChoice=="scissor"){
     humanScore+= 1;
text.innerText=`You Win, Your score:${humanScore},PC score:${computerScore}`;
playRoun++;
declare();
    return;
}
if(humanChoice==computerChoice)  { 
  playRound(humanChoice,getComputerChoice());
  return;
} 
}
function declare(){
    if(playRoun==5){
            if( humanScore>computerScore){
 alert("You Won!!")
    }
   else if(  computerScore>humanScore){
 alert("You lost,try again!!")
    }
    }
}
rock.addEventListener("click",()=>playRound("rock",getComputerChoice()));
paper.addEventListener("click",()=>playRound("paper",getComputerChoice()));
scissor.addEventListener("click",()=>playRound("scissor",getComputerChoice()));



