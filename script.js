//Nesta função defino as opções e a escolha aleatória do computador as opções
function getComputerChoice(playerSelection) {
    let options = ['Rock', 'Paper', 'Scissors'];//Opções
    let computerSelection = options[Math.floor(Math.random() * 3)] //Nesta linha o computador escolhe aleatoriamente uma opção
    console.log( `Você escolheu: ${playerSelection} Computador escolheu: 
    ${computerSelection} ${playRound(playerSelection, computerSelection)}`); // imprimo o resultado no console
    
}
//Defino a lógica e as regras do jogo
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Empate!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Scissors" && computerSelection === "Paper" || 
            playerSelection === "Paper" && computerSelection === "Rock") {
                return "Você ganhou!";
            } else {
               return "Você perdeu!";
            } 
}

const playerSelection = "scissors"; //Seleção da opção do jogador
const computerSelection = getComputerChoice(playerSelection);
playRound(playerSelection, computerSelection);//invoquei a função playRound aqui