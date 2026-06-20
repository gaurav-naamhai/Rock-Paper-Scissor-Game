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

## Bug 6: DOM Element Passed Instead of String

**In the event listeners:**
```js
// WRONG
rock.addEventListener("click", () => playRound(rock, getComputerChoice()));

// FIXED
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
```
`rock` is an HTMLElement. Inside `playRound`, every comparison like `humanChoice == "rock"` always returned false. No round ever registered a result.

---

## Bug 7: Double Quotes Instead of Backticks on Template Literals

```js
// WRONG — prints literally "${humanScore}"
text.innerText = "Your score:${humanScore}";

// FIXED
text.innerText = `Your score:${humanScore}`;
```
Template literal interpolation only works inside backticks. Double quotes treat `${...}` as plain text.

---

## Bug 8: Multiple `innerText` Assignments Overwriting Each Other

```js
// WRONG — only last line renders
text.innerText = "You Lose";
text.innerText = "Your score:${humanScore}";
text.innerText = "PC score:${computerScore}";

// FIXED — single assignment
text.innerText = `You Lose, Your score:${humanScore}, PC score:${computerScore}`;
```
Each assignment replaces the previous. Only `PC score:${computerScore}` ever showed on screen.

---

## Bug 9: Infinite Recursion on Tie

```js
// WRONG — passes same fixed choices, loops forever → stack overflow
if (humanChoice == computerChoice) {
    playRound(humanChoice, computerChoice);
    return;
}

// FIXED — rerolls computer choice
if (humanChoice == computerChoice) {
    playRound(humanChoice, getComputerChoice());
    return;
}
```
A tie should replay the round with a new computer choice. Passing the same `computerChoice` guaranteed another tie, infinitely.

---

## Bug 10: `declare()` / `playGame()` Called at Load Before Any Round

```js
// WRONG — scores are 0 at load, alert never triggers
playGame();

// WRONG — declare() runs once at load, then never again
declare();
```
Both functions checked scores that hadn't changed yet. Fix: call `declare()` inside `playRound` after every non-tie round.

---

## Bug 11: Alert Code Unreachable (Dead Code After `return`)

```js
// WRONG — every if-block returns before reaching the alert
function playRound(...) {
    if (...) { ... return; }
    if (...) { ... return; }
    // alert code here — never reached
    if (humanScore === 5) alert("You Won!!");
}
```
Every execution path hit a `return` before the alert block. Fix: call `declare()` before each `return`, or restructure to a single exit point.

---

## Bug 12: `humanChoice` Undefined Inside `playGame()`

```js
// WRONG — humanChoice doesn't exist in this scope
function playGame() {
    playRound(humanChoice, getComputerChoice()); // ReferenceError
}
```
`playGame()` tried to call `playRound` without knowing what the human chose. The game loop doesn't belong here — round tracking belongs inside `playRound` itself.

---

## Final Solution

Track rounds inside `playRound` using a counter. Call `declare()` before every `return`. No standalone `playGame()` or `declare()` calls outside the flow.

```js
let humanScore = 0;
let computerScore = 0;
let playRoun = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        playRound(humanChoice, getComputerChoice()); // reroll on tie
        return;
    }
    // ... result logic, then:
    playRoun++;
    declare();
    return;
}

function declare() {
    if (playRoun == 5) {
        if (humanScore > computerScore) alert("You Won!!");
        else if (computerScore > humanScore) alert("You lost, try again!!");
    }
}
```