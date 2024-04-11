// Поcчитать количество дубликатов в массиве из одинкаовых элементов
//     [3,3] -> 2
//     [1,1,1,1,1,1,1] -> 7

// let arr = [3,3];
//
// function countElem (arr) {
// let itog = 0;
//     for (let i=0; i <=arr.length-1; i++){
//     itog += 1;
// }
//     return itog;
// }

//console.log(countElem(arr));

// функция принимает 2 параметра
// элемент и массив и считает сколько раз в этом массиве встречается элмент
// 1, [1,1,5,2,1,1,1] -> 5
// 1, [1,1,1,1,1,1,1] -> 7

// let arr = [1,1,1,1,8,1,1];
//
// function countElem(elem, arr) {
//     let result = 0;
//     for (let i=0; i <= arr.length; i++) {
//         if (arr[i] === elem) {
//             result += 1;
//         }
//     }
//     return result;
// }
// console.log(countElem(1, arr));



// функция принимает массив и считает сколько раз в этом массиве встречается каждый элмент и выводит в консоль.
//     Элементы идут последовательно
//     [1,1,2,2,3,3,3]
// console 1:2, 2:2, 3:3
//
//     [1,1,1,1,1,1,1] -> 7
// console 1:7

let arr = [1,1,1,2,3,3,3];

function countElem(arr) {
    arr.sort();
    let result = 1;
    for (let i=0; i <= arr.length-2; i++) {
            if (arr[i] === arr[i+1]) {
                result += 1;
            } else {
                console.log(`${arr[i]} : ${result}`);
                result = 1;
            }
    }
    console.log(`${arr[arr.length-1]} : ${result}`);
}
countElem(arr);