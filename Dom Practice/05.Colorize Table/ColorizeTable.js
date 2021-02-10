function colorize() {
    let trElements = document.querySelectorAll('table tr');
    for(let i = 1; i < trElements.length; i+=2){
        trElements[i].style.backgroundColor = 'teal';
    }
}