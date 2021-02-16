function solve() {
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [name, age, kind, currentOwner] = inputElements;
    let addBtn = document.querySelector('#container button');
    let adoptionSection = document.querySelector('#adoption ul');
    let adoptedSection = document.querySelector('#adopted ul');


    addBtn.addEventListener('click', addPet);



    function createHTMLEl(tagName, className, textContent, attributes, event) {
        let element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (attributes) {
            attributes.forEach((a) => {
                element.setAttribute(a.k, a.v)
            });
        }

        if (event) {
            element.addEventListener(event.name, event.function)
        }
        return element;
    }

    function addPet(e) {
        e.preventDefault();
        if (!Number(age.value)) {
            return;
        }

        if (!inputElements.every(x => x.value)) {
            return;
        }

        let liItem = createHTMLEl('li');
        let pItem = createHTMLEl('p');
        let spanOwner = createHTMLEl('span', undefined, `Owner: ${currentOwner.value}`);
        let contactBtn = createHTMLEl('button', undefined, 'Contact with owner');
        contactBtn.addEventListener('click', changeOwner);
        pItem.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;



        liItem.appendChild(pItem);
        liItem.appendChild(spanOwner);
        liItem.appendChild(contactBtn);


        adoptionSection.appendChild(liItem);

        name.value = '';
        age.value = '';
        kind.value = '';
        currentOwner.value = '';

    }

    function changeOwner(e) {
        let liItem = e.target.parentNode;

        let divContainer = createHTMLEl('div');
        let inputNewOwner = createHTMLEl('input');
        inputNewOwner.setAttribute('placeholder', 'Enter your names')
        let takeItBtn = createHTMLEl('button', undefined, 'Yes! I take it!');

        divContainer.appendChild(inputNewOwner);
        divContainer.appendChild(takeItBtn);


        liItem.removeChild(liItem.lastElementChild);
        liItem.appendChild(divContainer);
        console.log(liItem);

        takeItBtn.addEventListener('click', e => {
            if (!inputNewOwner.value) {
                return;
            }
            let liSpan = liItem.querySelector('span');
            let spanNewOwner = createHTMLEl('span', undefined, `New Owner: ${inputNewOwner.value}`);
            let checkedBtn = createHTMLEl('button', undefined, "Checked");
            liItem.removeChild(liItem.lastElementChild);
            liSpan.remove();
            liItem.appendChild(spanNewOwner);
            liItem.appendChild(checkedBtn);
            adoptedSection.appendChild(liItem);

            checkedBtn.addEventListener('click', e => {
                e.target.parentNode.remove();
            })
        })
    }


}

