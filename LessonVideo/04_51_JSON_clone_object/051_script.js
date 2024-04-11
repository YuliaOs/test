'use strict';

let person = {
    name: "Alex",
    tel: '89103454365',
    parents:{
        mom: 'Anna',
        dad: 'John',
    }
};

console.log(JSON.stringify(person));  // объект {"name":"Alex","tel":"89103454365"}

console.log(JSON.parse(JSON.stringify(person))); // {name: "Alex", tel: "89103454365"}
                                                 // name: "Alex"
                                                 // tel: "89103454365"
                                                 // __proto__: Object

const clone = JSON.parse(JSON.stringify(person));
clone.parents.dad = 'Mike';
clone.name = 'Kate';
clone.tel = '89156743245';
console.log(clone);