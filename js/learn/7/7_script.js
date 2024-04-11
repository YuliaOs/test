// Ввод: nums = [0,0,1,1,1,2,2,3,3,4]
// Выход: 5, nums = [0,1,2,3,4,_,_,_,_, _]
// Объяснение: Ваша функция должна возвращать k = 5, причем первые пять элементов числа nums равны 0, 1, 2, 3 и 4 соответственно.
//     Не имеет значения, что вы оставите после возвращенного k (следовательно, они являются подчеркиванием).

let nums = [0,0,1,1,1,2,2,2,3,3,4];

var removeDuplicates = function(nums) {
    let length = nums.length;
    for (let i=0; i <= length-2; i++){

        if (nums[i+1] === nums[i]) {

            let dupl = 1;
            //let a = nums[i+1];
            while (nums[i] === nums[i + dupl + 1]) {
                dupl += 1;
            }

            length -= dupl;
            for(let j=i+dupl+1; j <= nums.length-1; j++){

                nums[j-dupl] = nums[j];
            }
            //nums[nums.length-1] = a;

        }
    }

return length;
};

console.log(removeDuplicates(nums));
console.log(nums);



