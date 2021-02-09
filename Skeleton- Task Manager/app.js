function solve() {
    let addButtonEl = document.querySelector('#add');
    let inputElements = Array.from(document.querySelectorAll('form input'));
    let [task, date] = inputElements;
    let description = document.getElementById('description');
    let openSection = document.getElementsByTagName('section')[1];
    let progressSection = document.querySelector('#in-progress');
    let completeSection = document.getElementsByTagName('section')[3];



    addButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (!inputElements.every(x => x.value)) {
            return;
        }

        if (description.value == '') {
            return;
        }

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let div = document.createElement('div');
        div.setAttribute('class', 'flex');
        let startButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        startButton.setAttribute('class', 'green');
        deleteButton.setAttribute('class', 'red');

        h3.textContent = task.value;
        p1.innerHTML = `Description: ${description.value}`;
        p2.innerHTML = `Due Date: ${date.value}`;
        startButton.textContent = 'Start';
        deleteButton.textContent = 'Delete';

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);

        openSection.lastElementChild.appendChild(article);
        deleteButton.addEventListener('click', e => {
            article.remove();
        });

        startButton.addEventListener('click', e => {
            let wholeArticle = e.target.parentElement.parentElement;
            startButton.remove();
            deleteButton.remove();
            let newDeleteButton = document.createElement('button');
            let finishButton = document.createElement('button');
            newDeleteButton.setAttribute('class', 'red');
            finishButton.setAttribute('class', 'orange');

            newDeleteButton.textContent = 'Delete';
            finishButton.textContent = 'Finish';
            div.appendChild(newDeleteButton);
            div.appendChild(finishButton);
            wholeArticle.appendChild(div);


            progressSection.appendChild(wholeArticle);

            newDeleteButton.addEventListener('click', e => {
                wholeArticle.remove();
            });

            finishButton.addEventListener('click', e => {
                div.remove();
                completeSection.lastElementChild.appendChild(wholeArticle);
            })
        });

    });

}