function triggerReflow() {
    document.body.style.display = 'none'; // Hide the body temporarily
    void document.body.offsetWidth; // Trigger a reflow
    document.body.style.display = ''; // Show the body again
}

window.addEventListener('focus', triggerReflow); 

function focusNextInput(currentInput, nextInputId) {
    var nextInput = document.getElementById(nextInputId);
    if (currentInput.value && nextInput) {
        nextInput.focus();
    }
}

function submitIfLastInput(currentInput) {
    if (currentInput.value && currentInput === document.getElementById('goal')) {
        document.getElementById('calculatorForm').submit();
    }
}
