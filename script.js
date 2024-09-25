function toUppercase() {
    let inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText.toUpperCase();
}

function toLowercase() {
    let inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText.toLowerCase();
}

function capitalize() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let words = inputText.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    document.getElementById('outputText').value = words.join(' ');
}
