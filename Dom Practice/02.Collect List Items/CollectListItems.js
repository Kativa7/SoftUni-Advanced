function extractText() {
    let liItems = Array.from(document.querySelectorAll('ul#items li'));
    let idArea = document.getElementById('result');
    liItems.forEach(x => idArea.value += x.textContent + "\n");
}