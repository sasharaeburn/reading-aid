let form = document.getElementById('calculate_total');
form.addEventListener('submit', event => {
    event.preventDefault();

    let result = Math.ceil(calculateNeededTime());
    displayResult(result);
})

function calculateNeededTime() {
    const bookLength = parseInt(document.getElementById('book_length').value);
    const readingAmount = parseInt(document.getElementById('reading_amount').value);

    return bookLength / readingAmount;
}

function displayResult(result) {
    let showResult = document.getElementById('result');
    let bookLength = parseInt(document.getElementById('book_length').value);

    if (bookLength >= 700 && bookLength <= 15000 && result > 1) {
        showResult.innerHTML = "Wow, that's a long book! It will take you approximately " + result + ' days to finish this one.'
    } else if (bookLength < 700 && result > 1) {
        showResult.innerHTML = 'It will take you approximately ' + result + ' days to finish this book.';
    } else {
        showResult.innerHTML = "Wow, that's a long book! However, it will take you only " + result + ' day to finish this one.';
    }
}

