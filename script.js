let humanScore = 0, computerScore = 0;

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
function getHumanChoice() {
    let humanChoice = prompt("You are expected to write your choice Rock ,Paper or Scissor for the Game? let's GO", '').toLowerCase();

    switch (humanChoice) {
        case "rock":
            return 'Rock';
        case "paper":
            return 'Paper';
        case "scissor":
            return 'Scissor';
        default:
            alert('Syntax Error Reload the page');
            break;
    }
}
function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        alert("You win! Rock beats Scissor");
        console.log("You win! Rock beats Scissor");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++;
        alert("You win! Paper beats Rock");
        console.log("You win! Paper beats Rock");
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        humanScore++;
        alert("You win! Scissor beats Paper ");
        console.log("You win! Scissor beats Paper ");
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissor ");
        alert("You lose! Rock beats Scissor ");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock ");
        alert("You lose! Paper beats Rock ");
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        computerScore++;
        console.log("You lose! Scissor beats Paper");
        alert("You lose! Scissor beats Paper");
    } else {
        console.log('We have a draw play Again!!!');
        alert('We have a draw play Again!!!');
    }

}
function playGame() {
    for (let i = 0; i < 5; i++) {

        alert(`game #${i + 1}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You Aced Chmapion!!!");
        alert("You Aced Chmapion!!!");
    } else {
        console.log("ish! Simple game you cannot play wooooo!!!");
        alert("ish! Simple game you cannot play wooooo!!!");

    }
}

playGame();