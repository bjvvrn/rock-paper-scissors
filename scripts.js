function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Rock, paper or scissors?');
    return humanChoice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'paper':
            switch (computerChoice) {
                case 'paper':
                    console.log('Its a tie!');
                    break;
                case 'rock':
                    console.log('You win! Paper beats Rock');
                    humanScore++;
                    break;
                case 'scissors':
                    console.log('You lose! Scissors beats Paper');
                    computerScore++;
                    break;
            }
            break;

        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    console.log('Its a tie!');
                    break;
                case 'paper':
                    console.log('You lose! Paper beats Rock');
                    computerScore++;
                    break;
                case 'scissors':
                    console.log('You win! Rock beats Scissors');
                    humanScore++;
                    break;
            }
            break;

        case 'scissors':
            switch (computerChoice) {
                case 'scissors':
                    console.log('Its a tie!');
                    break;
                case 'paper':
                    console.log('You win! Scissors beats paper');
                    humanScore++;
                    break;
                case 'rock':
                    console.log('You lose! Rock beats Scrissors');
                    computerScore++;
                    break;
            }
            break;
    }
}

let humanScore = 0;
let computerScore = 0;