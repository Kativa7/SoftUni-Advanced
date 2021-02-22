function solve() {
   let creatorEl = document.querySelector('#creator');
   let titleEl = document.querySelector('#title');
   let categoryEl = document.querySelector('#category');
   let contentEl = document.querySelector('#content');
   let btnEl = document.querySelector('.btn');

   let postEl = document.querySelectorAll('section')[1];

   let olEl = document.querySelector('.archive-section ol')


   btnEl.addEventListener('click', ev => {
      ev.preventDefault();
      
      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add("btn");
      deleteBtn.classList.add("delete");
      deleteBtn.textContent = 'Delete';
      
      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add("btn");
      archiveBtn.classList.add("archive");
      archiveBtn.textContent = 'Archive';
     
      let divButton = document.createElement('div');
      divButton.setAttribute('class','buttons');
      divButton.appendChild(deleteBtn);
      divButton.appendChild(archiveBtn);

      let lastParagraph = document.createElement('p');
      lastParagraph.textContent = contentEl.value;
      let midleParagraph = document.createElement('p');
      midleParagraph.innerHTML = `Creator: <strong>${creatorEl.value}</strong>`;
      let firstParagraph = document.createElement('p');
      firstParagraph.innerHTML = `Category: <strong>${categoryEl.value}</strong>`;

      let h1  =  document.createElement('h1');
      h1.textContent = titleEl.value;
      let article = document.createElement('article');

      article.appendChild(h1);
      article.appendChild(firstParagraph);
      article.appendChild(midleParagraph);
      article.appendChild(lastParagraph);
      article.appendChild(divButton);

      postEl.appendChild(article)

      deleteBtn.addEventListener('click' ,e =>{
         e.target.parentNode.parentNode.remove();
      });

      archiveBtn.addEventListener('click',e =>{
         
         let li = document.createElement('li');
         li.textContent =h1.textContent // titleEl.value 
         olEl.appendChild(li);
         Array.from(document.querySelectorAll('.archive-section ol li'))
         .sort((a,b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
         .forEach(x=>olEl.appendChild(x));
        
         e.target.parentNode.parentNode.remove();



      })

   });

}


