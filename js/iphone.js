function triggerReflow() {
    document.body.style.display = 'none'; // Hide the body temporarily
    void document.body.offsetWidth; // Trigger a reflow
    document.body.style.display = ''; // Show the body again
}

window.addEventListener('focus', triggerReflow); 
