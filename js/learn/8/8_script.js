// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next)
    }
}
//
// let list = new ListNode(1,new ListNode(3, new ListNode(5, new ListNode(6))));
// let head = list;
// list = list.next.next;
//
// //----------------
//
// list = head.next;
//
// console.log(list.val);






// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


let listNode4 = new ListNode(4, null);
let listNode2 = new ListNode(2, listNode4);
let list1 = new ListNode(1, listNode2);

let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

let mergeTwoLists = function (list1, list2) {

    let headNew = new ListNode(0),
        current = headNew,
        currentFirst = list1,
        currentSecond = list2;

    while (currentSecond !== null && currentFirst !== null) {
        if (currentFirst.val < currentSecond.val) {
            current.next = currentFirst;
            currentFirst = currentFirst.next;
            current = current.next;
        } else {
            current.next = currentSecond;
            currentSecond = currentSecond.next;
            current = current.next;
        }
    }

    if (currentFirst == null) {
        current.next = currentSecond;
    } else {
        current.next = currentFirst;
    }

    return headNew.next;
};

// function findMin(node1, node2) {
//     if (node1.val > node2.val) {
//         return node2;
//     } else {
//         return node1;
//     }
// }


console.log(mergeTwoLists(list1, list2));