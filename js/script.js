'use strict'

let menu = document.querySelectorAll('.menu-item');
let ul = document.querySelector('.menu');
ul.insertBefore(menu[2], menu[1]);

let li = document.createElement('li');
li.textContent = 'Пятий елемент';
li.classList.add('menu-item');
ul.appendChild(li);

let title = document.querySelectorAll('.title');
title[0].textContent = 'Мы продаем официальную технику Apple';

let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
column[1].removeChild(adv);

function feedback(){
    let question = document.getElementById('prompt');
    let arr = [];

    for(let i=0; i<2; i++){
        arr[i] = prompt('Какие у вас впечатления?', ' чудово');
        if(arr[i] === null){
            alert('Отмена');
        };
    };

    question.textContent = '' ;
    question.textContent = arr;
};

feedback();

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';


