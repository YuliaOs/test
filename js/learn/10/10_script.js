// функция принимает массив и считает сколько раз в этом массиве встречается каждый элмент и выводит в консоль.
// Элементы идут последовательно
//     [1,1,2,2,3,3,3]
// console 1:2, 2:2, 3:3
//
//     [1,1,1,1,1,1,1] -> 7
// console 1:7
// вывести объектом

//
// let arr = [1,1,1,2,2,3,3,3];
//
// function countElem(arr) {
//     let obj = {};
//     let result = 1;
//     for(let i=0; i <= arr.length - 2; i++) {
//         if(arr[i] === arr[i+1]) {
//             result += 1;
//         } else {
//             // console.log(`${arr[i]} : ${result}`);
//             obj[arr[i]] = result;
//             result = 1;
//         }
//     }
//     //console.log(`${arr[arr.length - 1]} : ${result}`);
//     obj[arr[arr.length-1]] = result;
//     return obj;
// }
//
// console.log(countElem(arr));
// -----------------------------------------------------------------------------------------------------------
// функция принимает массив и считает сколько раз в этом массиве встречается каждый элмент и выводит в консоль.
// Элементы идут НЕ последовательно
//     [5,1,2,2,5,3,3,3]
// console 1:1, 2:2, 3:3, 5:2
//
//     [1,1,1,2,1,1,1] -> 7
// console 1:7


let arr2 = [1,5,11,2,5,2,5,3,2,2,1,3,3,11];

function countElem2(arr) {
    let map = new Map();
    for (let i= 0; i <= arr.length - 1; i++) {
        let item = arr[i];
        if (map.get(item) === undefined) {  //map.has(key) === false;
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    }
    return Object.fromEntries(map);  // из map в объект
}

console.log(countElem2(arr2));



