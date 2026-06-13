# Rock-Paper-Scissor-Game



1. dont call function multiple times in a function bcz it will generate several no and that function will fail like this:
function getComputerChoice() {
    if (getRandomInt(3) == 0){
        return "Rock"
    }
    else if(getRandomInt(3) == 1){
        return "Paper"
    }
    else if(getRandomInt(3) == 2){
        return "Scissor"
    }
}


instead do this:
let randomno = getRandomInt(3);
function getComputerChoice() {
    if (randomno == 0){
        return "Rock"
    }
    else if( randomno == 1){
        return "Paper"
    }
    else if(randomno == 2){
        return "Scissor"
    }
}\


2. problem:
if (humanChoice=="rock" && computerChoice=="scissor"){
    return  humanScore+= 1;
    console.log("You Win");
    return;
}

it was breaking function at first return and was never able to get console.log() statement
solution:
if (humanChoice=="rock" && computerChoice=="scissor"){
     humanScore+= 1;
    console.log("You Win");
    return;
}


3. problem:
i by mistake didnt used  () here now solved:
earlier:
function getHumanChoice() {
  if (choice.toLowerCase=="rock"){
    return "rock"
  }
  else if(choice.toLowerCase == "paper"){
    return "paper"
  }
  else if(choice.toLowerCase == "scissor"){
    return "scissor"
  }}
now:
function getHumanChoice() {
  if (choice.toLowerCase()=="rock"){
    return "rock"
  }
  else if(choice.toLowerCase() == "paper"){
    return "paper"
  }
  else if(choice.toLowerCase() == "scissor"){
    return "scissor"
  }}
  what happened: prompt was not able to know to get what value and how to check that



  4.randomno and choice are computed once at script load, then read 5 times by functions that never recompute them. like this:
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


  solution:
 
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

  5.problem:when computer and human chose same try again came but that round got counted as a rounnd while iyt was not supposed to so i did recursion but parameters were general so it git crashed so to solve that parameters that were passed were noe getHumanChoice() and getComputerChoice():
  if(humanChoice==computerChoice)  { 
  console.log("Try Again");
  playRound(humanChoice,computerChoice);
  return;
} 
instead i did this then:
if(humanChoice==computerChoice)  { 
  console.log("Try Again");
  playRound(getHumanChoice(),getComputerChoice());
  return;
} 