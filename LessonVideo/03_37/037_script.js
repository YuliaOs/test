
'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // колич-во классов у первой кнопки
// console.log(btns[0].classList.item(0)); // класс под нулевым индексом
// console.log(btns[0].classList.item(1)); // класс под первым индексом
// console.log(btns[2].classList.add('red', 'some', 'laaaaa', 'huuuuuu')); // добавить класс red.
// // Через запятую можно перечислить неск классов
// console.log(btns[7].classList.add('some'));
// console.log(btns[6].classList.add('blue'));
// console.log(btns[0].classList.remove('blue')); // удалить класс blue
// console.log(btns[0].classList.toggle('blue')); // если нет, добавит -- если есть, удалит


/*
console.log(btns[1].classList.add('red'));
if (btns[1].classList.contains('red')) {
    console.log('red');
}
*/


btns[0].addEventListener('click', () => {
    //
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});


wrapper.addEventListener('click', (event) => {
    //console.dir(event.target);
    if(event.target && event.target.tagName == 'BUTTON') {       // event.target && event.target.classList.contains('blue')
        console.log('hello');                     // event.target && event.target.matches('button.red') - сравнивает с
                                                  // указанным эл-том
    }                                                  // event.target && event.target.tagName == 'BUTTON'
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);