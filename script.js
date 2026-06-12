function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randomno = getRandomInt(3);
function getComputerChoice() {
    if (randomno == 0){
        return "Rock"
    }
    else if(randomno == 1){
        return "Paper"
    }
    else if(randomno == 2){
        return "Scissor"
    }
}
console.log(getComputerChoice());