let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let previousGuesses = [];

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const retryBtn = document.getElementById("retryBtn");
const result = document.getElementById("result");
const previous = document.getElementById("previous");
const count = document.getElementById("count");

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    previousGuesses = [];

    count.textContent = "0";
    previous.textContent = "";
    result.textContent = "";
    guessInput.value = "";
    guessInput.focus();
}

submitBtn.addEventListener("click", function () {
    const guess = Number(guessInput.value);

    if (!guessInput.value || Number.isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    guessCount++;
    previousGuesses.push(guess);

    count.textContent = guessCount;
    previous.textContent = previousGuesses.join(", ");

    if (guess === randomNumber) {
        result.textContent = "Correct! You guessed the number.";
    } else if (guess < randomNumber) {
        result.textContent = "Too Low!";
    } else {
        result.textContent = "Too High!";
    }

    guessInput.value = "";
    guessInput.focus();
});

retryBtn.addEventListener("click", resetGame);

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitBtn.click();
    }
});