'use strict';

const log = function(a,b, ...rest) {
    console.log(a,b, rest);
};

log('one', 'two', 'three', 'four');  // получаем массив ['three', 'four']

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;    //возвращает первый true => если basis не задали, то вернется значение 2
    console.log(number * basis);
}

calcOrDouble(3,5);
calcOrDouble(3);