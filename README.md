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
}