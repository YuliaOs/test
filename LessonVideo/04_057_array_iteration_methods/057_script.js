'use strict';


// метод forEach перебирает массив и не возвращает новый


//filter - на выходе новый массив с отфильтрованными данными

// const names = ['Ann', 'Kate', 'Ivan', 'Boris', 'Kris', 'Veronika'];
//
// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// }); //перебираем эл-ты и возвращаем только те, кот подходят под условия
//
// console.log(shortNames);


//map - взять массив и изменить каждый эл-т внутри него - на выходе новый массив

// let answers = ['IvAn', 'KaTE', 'VERoNiKa', 'Karina', 'John'];
//
// // const result = answers.map(item => {
// //     return item.toLowerCase();
// // });
// //console.log(result);
//
// answers = answers.map(item => item.toLowerCase()); // если не раскрываем скобки, return автоматически подставляется
// console.log(answers);


//some - если хотя бы один эл-т подходит под условия -возвращают true иначе false
//every - усли все эл-ты соот-ют - true

//есть хотя бы одно число?
// const arr = [4, 'qwq', 'sfreferf'];
// console.log(arr.some(item => typeof(item) === 'number')); //true
// console.log(arr.every(item => typeof(item) === 'number')); //false


//reduce - возвращает новый рез-т
// суммировать массив
// const arr = [1, 3, 5, 3];
//
//                         //  0      1
//                         //  1      3
//                         //  4      5
//                         //  9      3
//                         //  12
// const result = arr.reduce((sum, current) => sum + current, 3); // проходится по всем эл-м и складывает их,
// // sum = 3(начальное значение)
// console.log(result); //12
//
// const arr = ['apple', 'orange', 'pear' , 'plum'];
// const result = arr.reduce((sum, current) => `${sum},  ${current}`);
// console.log(result); // apple,  orange,  pear,  plum
//

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj); // в рез-те получаем массив, и теперь у него есть методы filter, map и т.д.
newArr.filter(item => item[1] === 'persone') // ["ivan", "persone"], ["ann", "persone"]
    .map(item => item[0]); // ["ivan", "ann"]

console.log(newArr);