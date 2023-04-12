    // Declare variables
    let playerScore = 0;
    let computerScore = 0;
    // Initialise player and computer choices
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
    // Evaluate player and computer choices to get the winner
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
            playerScore++;
        } else if (result === 'lose') {
            computerScore++;
        }
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
    }
    // Display results with win or lose text
    function showResult(result, playerSelection, computerSelection) {
        const resultText = document.getElementById('result-text');
        if (result === 'win') {
            resultText.textContent = `Your choice is ${playerSelection}, the computer's choice is ${computerSelection}. You win!`;
            playerface.textContent = `😃`
            computerface.textContent = `😓`
        } else if (result === 'lose') {
            resultText.textContent = `Your choice is ${playerSelection}, the computer's choice is ${computerSelection}. Computer wins!`;
            playerface.textContent = `😓`
            computerface.textContent = `😃`
        } else {
            resultText.textContent = `Your choice is ${playerSelection}, the computer's choice is ${computerSelection}. A tie!`;
            playerface.textContent = `😃`
            computerface.textContent = `😃`
        }
        document.querySelector('.result').style.display = 'block';
    }
    // Reset the game to start a new one
       function reset() {
        let winner;
        // Congratulate the winner
        if (playerScore > computerScore) {
            winner = 'player';
            const message = `Congratulations! You won with a score of ${playerScore}-${computerScore}!`;
            alert(message);
        } else if (computerScore > playerScore) {
            winner = 'computer';
            const message = `Better luck next time! The computer won with a score of ${computerScore}-${playerScore}.`;
            alert(message);
        } else {
            winner = 'tie';
            const message = `Congratulations Player and Computer. It's a tie! The score is ${playerScore}-${computerScore}.`;
            alert(message);
        }
        // ask for user confirmation before resetting
        if (confirm("CLick OK to reset the score and start a new game or click Cansel to return to the game and continue playing")) {
            playerScore = 0;
            computerScore = 0;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('result-text').textContent = '';
            document.getElementById('playerface').style.visibility = 'visible';
            playerface.textContent = `👨‍🚀`;
            document.getElementById('computerface').style.visibility = 'visible';
            computerface.textContent = `🖲`;
        }
    }
    