var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green'; 
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 5) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
        lastResult.style.backgroundColor = 'red';
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
}

guessSubmit.addEventListener('click', checkGuess);

guessField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'play again';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber);








