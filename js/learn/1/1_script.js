//Пример 1:

// Ввод: nums = [2,7,11,15], target = 9
// Выход: [0,1]
// Объяснение: поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
//     Пример 2:
//
// Ввод: nums = [3,2,4], цель = 6
// Вывод: [1,2]
// Пример 3:
//
// Ввод: nums = [3,3], цель = 6
// Вывод: [0,1]

// Ограничения:
//
//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
// Существует только один действительный ответ.

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // будет вести как обычный скрипт помещ-й на стр, если несколько - будут выполняться др за др
    document.body.append(script);
}
loadScript("js/test.js");


let myNums = [2,1,11,3,6,15];
let myTarget = 9;
//[i,j]
function findIndex (nums, target) {
for (let i = 0; i < nums.length-1; i++) {
    for (let j = i+1; j < nums.length-1; j++){
       if (nums[i] + nums[j] == target) {
           return [i,j];
       }
    }
    }
}

let arrInd = findIndex(myNums, myTarget);
console.log(findIndex(myNums,myTarget));
console.log(arrInd);


















//
//
// let nums = [9,8,7,6,2,11,7,15];
// let target = 26;
// let ans = [1,4];
//
//
// for (let i=0; i < nums.length-1; i++) {
//
//     for (let j=i+1; j<nums.length; j++) {
//         if (nums[i] + nums[j] == target){
//             console.log([i,j]);
//             break;
//         }
//     }
// }
//
