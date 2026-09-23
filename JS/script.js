
const buttons = document.querySelectorAll(".choice-btn");

const resultDisplay = document.querySelector("#result-display");

const winDisplay = document.querySelector("#win");
const drawDisplay = document.querySelector("#draw");
const loseDisplay = document.querySelector("#lose");

const resetButton = document.querySelector("#reset");

const choices = ["Pierre", "Feuille", "Ciseaux"];

let wins = 0;
let draws = 0;
let losses = 0;

function playGame(playerChoice) {

    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    if (playerChoice === computerChoice) {

        draws++;

        resultDisplay.textContent =
            `Vous avez choisi ${playerChoice}. L'ordinateur a choisi ${computerChoice}. Égalité !`;

    } else if (
        (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
        (playerChoice === "Feuille" && computerChoice === "Pierre") ||
        (playerChoice === "Ciseaux" && computerChoice === "Feuille")
    ) {

        wins++;

        resultDisplay.textContent =
            `Vous avez choisi ${playerChoice}. L'ordinateur a choisi ${computerChoice}. Vous avez gagné !`;

    } else {

        losses++;

        resultDisplay.textContent =
            `Vous avez choisi ${playerChoice}. L'ordinateur a choisi ${computerChoice}. Vous avez perdu !`;
    }

    updateScore();
}

function updateScore() {

    winDisplay.textContent = `${wins} victoire${wins > 1 ? "s" : ""}`;

    drawDisplay.textContent = `${draws} égalité${draws > 1 ? "s" : ""}`;

    loseDisplay.textContent = `${losses} défaite${losses > 1 ? "s" : ""}`;
}

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const playerChoice = button.textContent.trim();

        playGame(playerChoice);

    });

});

resetButton.addEventListener("click", function() {

    wins = 0;
    draws = 0;
    losses = 0;

    updateScore();

    resultDisplay.textContent = "";

});