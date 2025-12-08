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

function changeScores(humanScore, computerScore) {
    const scoreDiv = document.querySelector('#scores');
    scoreDiv.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case 'paper':
                switch (computerChoice) {
                    case 'paper':
                        console.log('Its a tie!');
                        changeScores(humanScore, computerScore);
                        break;
                    case 'rock':
                        console.log('You win! Paper beats Rock');
                        humanScore++;
                        changeScores(humanScore, computerScore);
                        break;
                    case 'scissors':
                        console.log('You lose! Scissors beats Paper');
                        computerScore++;
                        changeScores(humanScore, computerScore);
                        break;
                }
                break;

            case 'rock':
                switch (computerChoice) {
                    case 'rock':
                        console.log('Its a tie!');
                        changeScores(humanScore, computerScore);
                        break;
                    case 'paper':
                        console.log('You lose! Paper beats Rock');
                        computerScore++;
                        changeScores(humanScore, computerScore);
                        break;
                    case 'scissors':
                        console.log('You win! Rock beats Scissors');
                        humanScore++;
                        changeScores(humanScore, computerScore);
                        break;
                }
                break;

            case 'scissors':
                switch (computerChoice) {
                    case 'scissors':
                        console.log('Its a tie!');
                        changeScores(humanScore, computerScore);
                        break;
                    case 'paper':
                        console.log('You win! Scissors beats paper');
                        humanScore++;
                        changeScores(humanScore, computerScore);
                        break;
                    case 'rock':
                        console.log('You lose! Rock beats Scrissors');
                        computerScore++;
                        changeScores(humanScore, computerScore);
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