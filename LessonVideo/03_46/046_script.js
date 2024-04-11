'use strict';

// function showThis() {
//     console.log(this);
// }
//
// showThis();

// 1) Обычная ф-я: this = window, но если стоит 'use strict' - undefined

// function showSum(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         // return this.a + this.b; // чтобы ф-я работала нужно удалить this, сделать замыкание ф-и.
//         // сначала она будет искать аргументы внутри себя, не найдет и пойдет выше
//         return a + b;
//     }
//     console.log(sum());
// }
//
// showSum(2,2);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this); // сам объект
//     }
// };
//
// obj.sum();

// 2) контекст у методов объекта - сам объект

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function doSmth() {
//             console.log(this); // underfined
//         }
//         doSmth();  //простой вызов ф-и, он не относится к методу, это ф-я кот-я запускается внутри метода
//     }
// };
//
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello, ${this.name}`);
//         console.log(this);
//     }
// }
//
// let ivan = new User('Ivan', 28);
// ivan.hello();
// 3) в конструкторах и классах - это новый экземпляр объекта (ivan)
// ______________________________________________________________________________
//
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }
//
// let user = {
//   name: 'Kate',
// };
//
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
//
// // ______________________________________________________________________________
//
// function count(num) {
//     return this * num;
// }
//
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 4) ручная привязка this: call, apply, bind

// 1) Обычная ф-я: this = window, но если стоит 'use strict' - undefined
// 2) контекст у методов объекта - сам объект
// 3) в конструкторах и классах - это новый экземпляр объекта
// 4) ручная привязка this: call, apply, bind
//____________________________________________________________________________________________

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    // console.log(this);
    this.style.backgroundColor = 'red';  // this обращается к самому эл-ту
});
// тоже самое:
// btn.addEventListener('click', (e)=> {
//     e.target.style.backgroundColor = 'red';  // this обращается к самому эл-ту
// });

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this);  // this берет контекст своего родителя, получаем объект в рез-те
            console.log(this.num); // 5
        };
        say();
    }
};

obj.sayNumber();

//________________________________________

const double = (a) => {
    return a * 2;
};
// тоже самое:
const double1 = a => a * 2;
// только если один аргумент - можно без круглых скобок;
// только если ф-я в одну строчку - можно без фиг скобок и без return

console.log(double(4));
console.log(double1(4));