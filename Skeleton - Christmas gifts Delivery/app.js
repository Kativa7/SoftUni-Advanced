function solution() {
    let addButtonElement = document.querySelector('.card button');
    let inputElement = document.querySelector('.card input');
    let ulElementGifts = document.querySelector('.card ul');
    let ulElemetSend = document.querySelectorAll('section')[2].lastElementChild;
   
    let ulElementDiscard = document.querySelectorAll('section')[3].lastElementChild;
 
    addButtonElement.addEventListener('click', e => {
        e.preventDefault();
        let liItem = document.createElement('li');
        liItem.textContent = inputElement.value;
        liItem.setAttribute('class', 'gift');
        let sendBtn = document.createElement('button');
        let discardBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        discardBtn.textContent = 'Discard';
        sendBtn.setAttribute('id', 'sendButton');
        discardBtn.setAttribute('id', 'discardButton');

        liItem.appendChild(sendBtn);
        liItem.appendChild(discardBtn);
        ulElementGifts.appendChild(liItem);

        inputElement.value = '';
       
        let allLiElements = Array.from(ulElementGifts.querySelectorAll('li'));
        let sortedLiElements = allLiElements.sort((a, b) => a.innerText.localeCompare(b.innerText));
     
        while (ulElementGifts.firstChild) {
            ulElementGifts.firstChild.remove();
        }
      
        for (const li of sortedLiElements) {
            ulElementGifts.appendChild(li);
        }
        
        sendBtn.addEventListener('click', ev => {
            ev.preventDefault;
            ev.target.remove();
            discardBtn.remove();
            ulElemetSend.appendChild(liItem);
        });

        discardBtn.addEventListener('click' , e=>{
            e.preventDefault;
            e.target.remove();
            sendBtn.remove();
            ulElementDiscard.appendChild(liItem);
        });
        
    });

    
}


