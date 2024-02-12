const redux = document.querySelector('[data-name=Redux] .skills__title');
const Rtl = document.querySelector('[data-name="React testing library"]  .skills__title');

redux.innerText = 'node.js';
Rtl.innerText = 'MONGODB';

// add new skill => "typescript" after the javascript
const jsitem = document.querySelector('[data-name=Javascript]');
const tsstring = ` <li data-name="typescript" class="skills__column">
<h2 class="skills__title">Typescript</h2>
<span class="skills__years">2 years</span>
</li>`;
jsitem.insertAdjacentHTML('afterend', tsstring);

// delete cv link
const findoutlink = document.querySelector('.find-out-link');
findoutlink.remove();

// low the size of the picture
const biopicList = document.querySelectorAll('.bio__pic');

biopicList.forEach((biopic) => {
  biopic.style.width = '36rem';
});
// underline the skil

const skillsList = document.querySelectorAll('.skills__column');

[...skillsList].map((item) => {
  item.addEventListener('click', () => {
    const activeElement = document.querySelector('.underline');
    if (activeElement) {
      activeElement.classList.remove('underline');
    }
    item.classList.add('underline');
  });
});
