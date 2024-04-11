// От римского к целому числу

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


// let s = 'III';
let s = "MCMXCIV"; // 1994
// let s = "LVIII"; // 58

function doNumber (symbolStr) {
    let itog = 0;
    let dict = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }

    // dict[I]=1;

    for (let i= 0; i <= symbolStr.length-2; i++) {
        if (dict[symbolStr[i]] >= dict[symbolStr[i+1]]) {
            itog += dict[symbolStr[i]];
        } else {
            itog -= dict[symbolStr[i]];
        }

    }
    return itog += dict[symbolStr[symbolStr.length-1]];
}

console.log(doNumber(s));




























// function doNumber(numArr) {
//
//     let itog = 0;
//     //let numArr = symbolStr.split("");  //массив из букв строк
//     //let numArr = replaceItemInArr(strArr); // массив из цифр
//     let dictA = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     for (let i = 0; i <= numArr.length-2; i++) {
//         if (dictA[numArr[i]] >= dictA[numArr[i+1]]) {
//             itog += dictA[numArr[i]];
//         } else {
//             itog -= dictA[numArr[i]];
//         }
//         console.log(itog);
//     }
//     return itog + dictA[numArr[numArr.length-1]];
// }
// console.log(doNumber(s));
//
// function replaceItemInArr (symbolArr) {
//     let dictA = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     return symbolArr.map((element) => {
//         return dictA[element];
//     })
// }



// let arr = ["I","I","V","X"];
// console.log("here");
// console.log(replaceItemInArr(arr));
