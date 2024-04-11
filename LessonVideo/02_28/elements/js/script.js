'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // псевдомассив
console.log(btns);
//btns = document.getElementsByTagName('button')[1]; только вторая кнопка
// console.log(btns)[1];  тоже самое

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // нужно ставить точку или # - id
console.log(hearts);

hearts.forEach(item => {   //только для querySelectorAll
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // получает первый элемент который находит
console.log(oneHeart);

