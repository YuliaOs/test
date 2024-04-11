// Ввод: nums = [0,1,2,2,3,0,4,2], val = 2
// Выход: 5, nums = [0,1,4,0,3,_,_,_]
// Объяснение: Ваша функция должна возвращать k = 5, причем первые пять элементов nums содержат 0, 0, 1, 3 и 4.
// Обратите внимание, что пять элементов могут быть возвращены в любом порядке.
//     Не имеет значения, что вы оставите после возвращенного k (следовательно, они являются подчеркиванием).
//


// let nums = [3,2,2,3], val = 3;
// var removeElement = function(nums, val) {
// let length = nums.length;
// for(let i=0; i <= length-1; i++) {
//
//     if(nums[i] === val) {
//
//         let dupl = 1;
//         while (i+dupl < length && nums[i+dupl] === val){
//             dupl += 1;
//
//         }
//         length -= dupl;
//
//         for(let j= i+dupl; j <= nums.length-1; j++) {
//             nums[j-dupl] = nums[j];
//         }
//     }
// }
// return length;
// };
//
// console.log(removeElement(nums,val));
// console.log(nums);


let nums = [3,3,3,5,7,3], val = 3;
var removeElement = function(nums, val) {
    let length = nums.length;
    for(let i= 0; i <= length-1; i++) {
        while (i<length && nums[i] === val) {
            nums[i] = nums[length - 1];
            length -=1;
        }
    }
    return length;
};

console.log(removeElement(nums,val));
console.log(nums);