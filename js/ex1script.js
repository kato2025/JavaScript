    // Declare variables
    let userScore = 0;
    let computerScore = 0;
    // Initialise user and computer choices
    function play(playerSelection) {
        const computerSelection = getComputerChoice();
        const result = getResult(playerSelection, computerSelection);
        updateScore(result);
        showResult(result, playerSelection, computerSelection);
    }
    // Get a radom number for the computer choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    // Evaluate user and computer choices to get the winner
    function getResult(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'win';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'win';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'win';
        } else if (playerSelection === computerSelection) {
            return 'tie';
        } else {
            return 'lose';
        }
    }
    // Update the results from evaluated user and computer choices
    function updateScore(result) {
        if (result === 'win') {
            userScore++;
        } else if (result === 'lose') {
            computerScore++;
        }
        document.getElementById('user-score').textContent = userScore;
        document.getElementById('computer-score').textContent = computerScore;
    }
    // Display results with win or lose text
    function showResult(result, playerSelection, computerSelection) {
        const resultText = document.getElementById('result-text');
        if (result === 'win') {
            resultText.textContent = `Your choice is ${playerSelection}, the computer's choice is ${computerSelection}. You win!`;
            humanface.textContent = `😃`
            computerface.textContent = `😓`
        } else if (result === 'lose') {
            resultText.textContent = `Your choice is ${playerSelection}, the computer's choise is ${computerSelection}. Computer wins!`;
            humanface.textContent = `😓`
            computerface.textContent = `😃`
        } else {
            resultText.textContent = `Your choice is ${playerSelection}, the computer's choice is ${computerSelection}. A tie!`;
            humanface.textContent = `😃`
            computerface.textContent = `😃`
        }
        document.querySelector('.result').style.display = 'block';
    }
    // Reset the game to start a new one
    function reset() {
        userScore = 0;
        computerScore = 0;
        document.getElementById('user-score').textContent = userScore;
        document.getElementById('computer-score').textContent = computerScore;
        document.getElementById('result-text').textContent = '';
        document.querySelector('.result').style.display = 'none';
        document.getElementById('humanface').style.visibility = 'visible';
        humanface.textContent = `👨‍🚀`
        document.getElementById('computerface').style.visibility = 'vivible';
        computerface.textContent = `🖲`
    }