let x = 12321;

function checkPalind(num) {
    let str = num.toString();
    let j = str.length - 1;
    for (let i = 0; i < (str.length - 1)/2; i++) {

        if (str[i] == str[j]) {
            j--;

        } else {
            return false;
        }
    }
    return true;

}

console.log(checkPalind(x));
console.log(Math.div(121,100));