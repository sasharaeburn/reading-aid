let form = document.getElementById('calculate-total');
form.addEventListener('submit', event => {
    event.preventDefault();

    let result = calculateNeededTime();
    displayResult(result);
})

function getBookLength() {
    return parseInt(document.getElementById('book-length').value);
}

function calculateNeededTime() {
    const bookLength = getBookLength();
    const readingAmount = parseInt(document.getElementById('reading-amount').value);

    return bookLength / readingAmount;
}

function displayResult(result) {
    let showResult = document.getElementById('result');
    let bookLength = getBookLength();

    if (bookLength >= 700 && result > 1) {
        showResult.innerHTML = "Wow, that's a long book! It will take you approximately " + Math.ceil(result) + ' days to finish it.'
    } else if (bookLength < 700 && result > 1) {
        showResult.innerHTML = 'It will take you approximately ' + Math.ceil(result) + ' days to finish this book.';
    } else if (bookLength >= 700 && result === 1) {
        showResult.innerHTML = "Wow, that's a long book! However, it will take you only one day to finish it.";
    } else {
        showResult.innerHTML = "Seems like you can finish this book in one day.";
    }
}

