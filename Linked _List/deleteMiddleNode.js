/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next){
        return null;
    }
    let once = new ListNode(null,head);
    let temp1 = once; // store to remove later.
    let twice = head;
    while(twice && twice.next){
        twice= twice.next.next;
        once = once.next
    }
    let temp2 = once.next;
    once.next = once.next.next;
    // remove mid 
    temp2.next = null;
    // remove the starting null node
    temp1 = null;
    // console.log(JSON.stringify(head))
    return head;
};