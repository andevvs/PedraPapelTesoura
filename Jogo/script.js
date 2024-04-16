const choices = ["pedra", "papel", "tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "EMPATE!";
    }
    else{
        switch(playerChoice){
            case "pedra":
                result = (computerChoice === "tesoura") ? "VENCEU!" : "PERDEU!";
                break;
            case "papel":
                result = (computerChoice === "pedra") ? "VENCEU!" : "PERDEU!";
                break;
            case "tesoura":
                result = (computerChoice === "papel") ? "VENCEU!" : "PERDEU!";
                break;
        }
    }

    playerDisplay.textContent = `JOGADOR: ${playerChoice}`;
    computerDisplay.textContent = `Computador: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "VENCEU!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "PERDEU!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}