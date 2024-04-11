
'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('.btn');  //  ===('button')

// let width = box.clientWidth;
// let height = box.clientHeight;



// let width = box.offsetWidth;
// let height = box.offsetHeight;

let width = box.scrollWidth;
let height = box.scrollHeight;

console.log(width,height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // координаты right это участок от левой границы экрана
// до правой границы элемента (скрол где заканчивается)
// bottom - от верх границы до нижней границы эл-та  = height + top

console.log(box.getBoundingClientRect().top); //возможность получить конкретное значение размеров

const style = window.getComputedStyle(box); // стили из css - можем только получить и не можем изменять

console.log(style);  // style.display - получ ить конкретное знач-е

console.log(document.documentElement.scrollTop);
// прямо в консоли на любом сайте написать --- document.documentElement.scrollTop
// --- можно задать конкретное значение --- "=0" --- вернется на начало стр
// window.scrollBy(0,400) - на сайте при нажатии энтер прыгнет вниз на указанные пиксели от положения, которое было пролистано
// window.scrollTo(0,400) - работает относительно всей стр, означает прыгнет на 400 пикселей сверху