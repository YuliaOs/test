//s = "()[]{}"
//s = "()"
// Вывод: true;

// Ввод: s = "(]"
// Вывод: ложь


// [{{()}}]
// [{{(")"
// [{{ "}"
// [{   "}"
// [      "]"

let s = "[]{}";

function checkBrackets(str) {
    let openBrackets = ['(', '{', '['];
    let closeBrackets = [')', '}', ']'];

    let stack = new Stack();

    for (let i = 0; i <= str.length - 1; i++) {
        stack.printStack();
        if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else if (closeBrackets.includes(str[i])) {

            let left = stack.pop();
            let right = str[i];
            if (left === '(' && right !== ')') {
                return false;
            } else if (left === '[' && right !== ']') {
                return false;
            } else if (left === '{' && right !== '}') {
                return false;
            }
        } else {
            return  false;
        }
    }
    if (stack.length() !== 0) {
        return false;
    } else {
        return true;
    }
}

class Stack {
    constructor(arr) {
        this.arr = [];
    }

    push(elem) {
        return this.arr.push(elem);
    }

    pop() {
        return this.arr.pop();
    }

    printStack() {
        console.log(this.arr);
    }

    length() {
        return this.arr.length;
    }
}

console.log(checkBrackets(s));