let form = document.getElementById('calculate_total');
form.addEventListener('submit', event => {
    event.preventDefault();

    let result = calculateNeededTime();

    displayResult(result);
})

function calculateNeededTime() {
    const bookLength = document.getElementById('num_of_pgs').value;
    const readingAmount = document.getElementById('reading_amount').value;

    return bookLength / readingAmount;
}

function displayResult(result) {
    let showResult = document.getElementById('result');

    showResult.innerHTML = 'It will take you approximately ' + result + ' days to read this book';
}