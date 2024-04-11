let myArr = [3,6,8,2,11,4,1,55];
console.log(myArr[myArr.length-1]);

let findElem = function(arr, elem) {
    arr.sort(function(a, b) {return a - b;});

    let i = 0;
    let j = arr.length-1;


        while (i < j-1) {
            let mid = Math.round((i+j)/2);
            if (arr[mid] > elem) {
                j = mid;
            }
            else if (arr[mid] < elem) {
                i = mid;
            } else {
                console.log("Found" + mid +":" + arr[mid]);
                return arr[mid];
            }
        }

        return null;
}

console.log("function response" + " " + findElem(myArr, 2));

findElem(myArr, 2);