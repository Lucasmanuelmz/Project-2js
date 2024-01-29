let buttons = document.querySelectorAll('button');
let content = document.querySelector('#answer');
let paragraph = document.createElement('p');
let para = document.createElement('p');
let parag = document.createElement('p');
content.appendChild(paragraph);
content.appendChild(para);
content.appendChild(parag);

parag.style.fontWeight = '700';
parag.style.fontStyle = 'italic'


function getComputerChoice(playerSelection) {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = options[Math.floor(Math.random() * 3)] 
    paragraph.textContent = `Você escolheu: ${playerSelection}`;
    para.textContent = `Computador escolheu: ${computerSelection}` 
    parag.textContent = playRound(playerSelection, computerSelection); 
    return paragraph, para, parag;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        getComputerChoice(playerSelection);
    })
})

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Empate!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Você ganhou este jogo!";
        } else if(playerSelection === "Paper" && computerSelection === "Rock"){
                return "Você ganhou este jogo!";
            } else if(playerSelection === 'Rock' && computerSelection === "Paper") {
               return 'Você ganhou este jogo!';
            } else {
                return 'Você perdeu este jogo!'
            }
}

playRound();

