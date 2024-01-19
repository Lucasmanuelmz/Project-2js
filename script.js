function getComputerChoice(playerSelection) {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = options[Math.floor(Math.random() * 3)] 
    console.log( `Você escolheu: ${playerSelection} Computador escolheu: 
    ${computerSelection} ${playRound(playerSelection, computerSelection)}`);
    
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Empate!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Scissors" && computerSelection === "Paper" || 
            playerSelection === "Paper" && computerSelection === "Rock") {
                return `Você ganhou!`;
            } else {
               return 'Você perdeu!';
            } 
  }

const playerSelection = "Rock";
const computerSelection = getComputerChoice(playerSelection);
playRound(playerSelection, computerSelection);