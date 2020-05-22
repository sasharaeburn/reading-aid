let form = document.getElementById('calculate-total');
form.addEventListener('submit', event => {
    event.preventDefault();

    let result = calculateNeededTime();
    let displayMessage = getDisplayMessage(result);

    displayResult(displayMessage);
})

function getBookLength() {
    return parseInt(document.getElementById('book-length').value);
}

function calculateNeededTime() {
    const bookLength = getBookLength();
    const readingAmount = parseInt(document.getElementById('reading-amount').value);

    return bookLength / readingAmount;
}

function getDisplayMessage(result) {
    let bookLength = getBookLength();

    if (bookLength >= 700) {
        if (result > 1) {
            return "Wow, that's a long book! It will take you approximately " + Math.ceil(result) + ' days to finish it.'
        }

        return "Wow, that's a long book! However, it will take you only one day to finish it.";
    }

    if (result > 1) {
        return 'It will take you approximately ' + Math.ceil(result) + ' days to finish this book.';
    }

    return "Seems like you can finish this book in one day.";
}

function displayResult(text) {
    document.getElementById('result').innerHTML = text;
}