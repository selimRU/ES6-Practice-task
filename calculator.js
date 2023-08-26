document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayNumberField = document.getElementById('input');
    if (isNaN(number)) {
        if (number === 'C') {
            displayNumberField.value = '';

        }
    } else {
        const preDisplayNumber = displayNumberField.value;
        const currentDisplayNumber = preDisplayNumber + number
        displayNumberField.value = currentDisplayNumber;
    }
})