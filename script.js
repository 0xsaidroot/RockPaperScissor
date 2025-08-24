
const MAX_ROUND = 5;

let humanSelection = '';
let round = 0, computerScore = 0, humanScore = 0;

const resetBtn = document.querySelector('#reset');
const box = document.querySelector('#buttonBox');
let textOne = document.querySelector('#textOne');
let textTwo = document.querySelector('#textTwo');


function getCompterChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';
        default: return;
    }
}
function getIcon(icon) {
    let arr = ["🪨", "📄", "✂️"];
    switch (icon) {
        case 'rock': return arr.at(0);
        case 'paper': return arr.at(1);
        case 'scissor': return arr.at(2);
    }
}
function playRound(human, computer) {
    if ((human === 'rock' && computer === 'scissor') || (human === 'scissor' && computer === 'paper') || (human === 'paper' && computer === 'rock')) {
        textOne.innerText = `You : ${human.toUpperCase()}${getIcon(human)} vs CPU : ${computer.toUpperCase()}${getIcon(computer)} --- You Win `;
        humanScore++;
        round++;
    } else if (computer === human) {
        textOne.innerText = `You : ${human.toUpperCase()}${getIcon(human)} vs CPU : ${computer.toUpperCase()}${getIcon(computer)} --- Draw `;
    } else {
        textOne.innerText = `You : ${human.toUpperCase()}${getIcon(human)} vs CPU : ${computer.toUpperCase()}${getIcon(computer)} --- You Lose `;
        computerScore++;
        round++;
    }

}
function playGame(human, computer) {
    playRound(human, computer);
    textTwo.innerText = `Score  : You : ${humanScore} --- CPU : ${computerScore}\n\nRemaining Rounds : ${MAX_ROUND - round}`;

    if (round === MAX_ROUND) {
        textOne.innerText = `${(humanScore > computerScore) ? "You Win Thats Awesome Champion!" : "Ish Simple Game you Cannot Play!"}`;
        document.querySelectorAll('#buttonBox button').forEach((btn) => {
            btn.disabled = true;
        })
    }

}
function resetGame() {
    round = 0;
    computerScore = 0;
    humanScore = 0;
    document.querySelectorAll('#buttonBox button').forEach((btn) => {
        btn.disabled = false;

        textOne.innerText = "Game Reset! Choose Rock, Paper, or Scissor.";
        textTwo.innerText = `You : 0 --- CPU : 0\nRemaining Rounds : ${MAX_ROUND}`;

        document.querySelector('#rock').focus();
    })
}

textOne.innerText = 'Get Ready to Play!';

box.addEventListener('click', (event) => {

    let target = event.target.id;

    if (target === "rock") humanSelection = 'rock';
    else if (target === "paper") humanSelection = 'paper';
    else if (target === "scissor") humanSelection = 'scissor';
    else return;

    const computerSelection = getCompterChoice();

    console.log({ computerSelection });
    console.log({ humanSelection });

    playGame(humanSelection, computerSelection);
})
resetBtn.addEventListener('click', resetGame);