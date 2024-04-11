// найти общую длину


//
// Input: strArr = ["flower","flow","flight"]
// Output: "fl"
//



let strArr = ["flower","flow","flight", "flight", "flight"];

// console.log(strArr[0]);
// console.log(strArr[0].length);

function findPrefix(arr) {
    let itog = arr[0];
    for (let i = 1; i <= arr.length-1; i++) {
        itog = prefix(arr[i],itog); // 'fl'
    }

return itog;
// if (arr.length = 1) {
//     return arr[0];
// }
}

function prefix (str1, str2) {
    let itog ='';

    for (let i = 0; i <= Math.min(str1.length,str2.length)-1; i++) {
           if (str1[i] == str2[i]) {
                itog += str1[i];
           } else {
               return itog;
        }
    }
    return itog;
}

prefix("кошка", "кот");

console.log(findPrefix(strArr));