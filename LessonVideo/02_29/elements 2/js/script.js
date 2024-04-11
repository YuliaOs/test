'use strict';

const box = document.getElementById('box'),
     buttons = document.getElementsByTagName('button'),
    wrapper = document.querySelector('.wrapper'),
    circles = document.getElementsByClassName('circle'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

console.dir(box);

// box.style.background = 'blue'; // inline стили перебивают css стили
// box.style.width = '500px'; //значение в ""
let num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

buttons[1].style.borderRadius = '100%';

circles[0].style.background = 'green';

// for (let i = 0; i < hearts.length; i++) {  //для всех элементов в псевдомассиве
// hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
     item.style.background = 'blue';
})

hearts[0].style.background = 'yellow';
// переписываем в function declaration:
// function changeBackground(item) {
//      item.style.background = 'blue';
// }
//
// hearts.forEach(function(item) {
//      changeBackground(item);
// });

const div = document.createElement ('div'); // создается только внутри js файла
// const text = document.createTextNode('Тут был я');
div.classList.add('black');
// document.body.append(div);

// wrapper.append(div); // в конец родителя
wrapper.prepend(div); // в начало родителя
// hearts[0].before(div); // перед первым элементом вставить блок div
// hearts[0].after(div); // после первого эл вставить блок div
// wrapper.insertBefore(div, hearts[1]); // - устаревший метод

// circles[0].remove(); // удалить первый эл-т
// wrapper.removeChild(hearts[1]); // - устаревший метод

// hearts[0].replaceWith(circles[0]); // заменить hearts[0] на circles[0]
// wrapper.replaceChild(circles[0], hearts[0]); // - устаревший метод

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent  = "Hello"; // не работает с тегами как в пред-щей строке

div.insertAdjacentHTML("beforebegin", '<h2>Вставляем текст</h2>'); //вставить текст перед началом элемента
// "afterbegin" - в начало элемента
// "beforeend" - перед концом
// "afterend" - после элем-та