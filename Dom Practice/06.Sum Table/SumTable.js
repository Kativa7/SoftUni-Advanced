function sumTable() {
let lastComElements = Array.from(document.querySelectorAll('table tbody td:nth-last-child(1)'));
let resultElement = lastComElements.pop();
let sum = 0;
for(let i = 0; i <lastComElements.length; i++){
    sum +=Number(lastComElements[i].textContent);
    
}
resultElement.textContent = sum;
}