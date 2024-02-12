document.addEventListener('event:response', () => {
    input.addEventListener('keydown', () => {
        document.getElementById("res").innerText = input.value;
    });
});