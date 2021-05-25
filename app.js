'use strict';

const inputBox = document.querySelector('#to-do');
const addBtn = document.querySelector('#add');
const results = document.querySelector('#results');

addBtn.addEventListener('click', function () {
    let par = document.createElement('p');
    let text = document.createTextNode(inputBox.value);
    let newEntry = par.appendChild(text);
    results.appendChild(newEntry);

    console.log(par);
});
