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

function showWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log('You win the game! Play again.');
    } else if (humanScore < computerScore) {
        console.log('You lose the game. Try again!');
    } else {
        console.log('Its a tie! Play again.');
    }
}

function changeGameInfo(humanScore, computerScore, message) {
    const divMessage = document.querySelector('#message');
    divMessage.textContent = message;
    
    const scoreDiv = document.querySelector('#scores');
    scoreDiv.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let message;
        switch (humanChoice) {
            case 'paper':
                switch (computerChoice) {
                    case 'paper':
                        message = 'It\s a tie!';
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                    case 'rock':
                        message = 'You win! Paper beats Rock';
                        humanScore++;
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                    case 'scissors':
                        message = 'You lose! Scissors beats Paper';
                        computerScore++;
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                }
                break;

            case 'rock':
                switch (computerChoice) {
                    case 'rock':
                        message = 'It\s a tie!';
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                    case 'paper':
                        message = 'You lose! Paper beats Rock';
                        computerScore++;
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                    case 'scissors':
                        message = 'You win! Rock beats Scissors';
                        humanScore++;
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                }
                break;

            case 'scissors':
                switch (computerChoice) {
                    case 'scissors':
                        message = 'It\s a tie!';
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                    case 'paper':
                        message = 'You win! Scissors beats paper';
                        humanScore++;
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                    case 'rock':
                        message = 'You lose! Rock beats Scrissors';
                        computerScore++;
                        changeGameInfo(humanScore, computerScore, message);
                        break;
                }
                break;
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let humanChoice = button.textContent.toLowerCase();
            playRound(humanChoice, getComputerChoice());
        });
    });

    showWinner(humanScore, computerScore);
}

playGame();