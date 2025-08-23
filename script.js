let humanScore = 0, computerScore = 0;
let  round=0;

const text = document.querySelector('#text');
const buttons = document.querySelector('#buttons');

text.innerText= 'Select a Button!!!' ;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        default:
            return 'Scissor';
    }

}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        text.innerText = "You win! Rock beats computer Choice: Scissor";
        console.log("You win! Rock beats Scissor");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++;
        text.innerText = "You win! Paper beats computer Choice: Rock";
        console.log("You win! Paper beats Rock");
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        humanScore++;
        text.innerText = "You win! Scissor beats computer Choice: Paper ";
        console.log("You win! Scissor beats Paper ");
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        computerScore++;
        text.innerText = "You lose! Rock beats Scissor ";
        console.log("You lose! computer Choice: Rock beats Scissor ");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++;
        text.innerText = "You lose! Paper beats Rock ";
        console.log("You lose! computer Choice: Paper beats Rock ");
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        computerScore++;
        text.innerText = "You lose! Scissor beats Paper";
        console.log("You lose! computer Choice: Scissor beats Paper");
    } else {
        text.innerText = "We have a draw play Again!!!"
        console.log('We have a draw play Again!!!');
    }

}

buttons.addEventListener('click',function(event){
    if(round>=5){
        text.innerText = "Game Over. Please refresh to play again";
        return;
    }

    let humanSelection='';
    let target = event.target.id;

    switch(target){
        case 'rock' : humanSelection='Rock'; break;
        case 'paper' : humanSelection='Paper'; break;
        case 'scissor': humanSelection='Scissor'; break;
        default :return;
    }

    const computerSelection = getComputerChoice();

    playRound(humanSelection,computerSelection);

    round++;
    
    if(round === 5){
    if (humanScore > computerScore) {
      text.innerText = `You won the game! Final: You ${humanScore} - CPU ${computerScore}`;
    } else if (computerScore > humanScore) {
      text.innerText = `You lost the game! Final: You ${humanScore} - CPU ${computerScore}`;
    } else {
      text.innerText = `It's a tie! Final: You ${humanScore} - CPU ${computerScore}`;
    }
  }

})


