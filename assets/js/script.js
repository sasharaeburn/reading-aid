let form = document.getElementById('calculate-total');
form.addEventListener('submit', event => {
    event.preventDefault();

    let result = Math.ceil(calculateNeededTime());
    displayResult(result);
})

function calculateNeededTime() {
    const bookLength = parseInt(document.getElementById('book-length').value);
    const readingAmount = parseInt(document.getElementById('reading-amount').value);

    return bookLength / readingAmount;
}

function displayResult(result) {
    let showResult = document.getElementById('result');
    let bookLength = parseInt(document.getElementById('book-length').value);

    if (bookLength >= 700 && bookLength <= 15000 && result > 1) {
        showResult.innerHTML = "Wow, that's a long book! It will take you approximately " + result + ' days to finish it.'
    } else if (bookLength < 700 && result > 1) {
        showResult.innerHTML = 'It will take you approximately ' + result + ' days to finish this book.';
    } else if (!(bookLength < 700 && result === 1)) {
        showResult.innerHTML = "Wow, that's a long book! However, it will take you only one day to finish it.";
    } else {
        showResult.innerHTML = "Seems like you can finish this book in one day.";
    }
}

