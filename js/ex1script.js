    // Declare variables
    let userScore = 0;
    let computerScore = 0;
    // Initialise user and computer choices
    function play(userChoice) {
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        updateScore(result);
        showResult(result, userChoice, computerChoice);
    }
    // Get a radom number for the computer choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    // Evaluate user and computer choices to get the winner
    function getResult(userChoice, computerChoice) {
        if (userChoice === 'rock' && computerChoice === 'scissors') {
            return 'win';
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            return 'win';
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {
            return 'win';
        } else if (userChoice === computerChoice) {
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
    function showResult(result, userChoice, computerChoice) {
        const resultText = document.getElementById('result-text');
        if (result === 'win') {
            resultText.textContent = `Your choice is ${userChoice}, the computer's choice is ${computerChoice}. You win!`;
            humanface.textContent = `😃`
            computerface.textContent = `😓`
        } else if (result === 'lose') {
            resultText.textContent = `Your choice is ${userChoice}, the computer's choise is ${computerChoice}. Computer wins!`;
            humanface.textContent = `😓`
            computerface.textContent = `😃`
        } else {
            resultText.textContent = `Your choice is ${userChoice}, the computer's choice is ${computerChoice}. A tie!`;
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