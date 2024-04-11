'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello, ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушёл`);
};

let alex = new User('Alex', 24);
let kate = new User('Kate', 26);

alex.hello();
kate.hello();
kate.exit();


console.log(kate);
console.log(alex);