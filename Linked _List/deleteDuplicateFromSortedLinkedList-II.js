

// this time remove all the elements which are duplicates ex  1,1,2 --> 2
// 1,2,3,3,4,4,5 --> 1,2,5
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let c = head;
    let prevHead = new ListNode(null,head);
    let prev = prevHead;
    let flag = true;

    while(c){
        while(c && c.next && c.val === c.next.val){
            c = c.next;
        }
        if(c) c = c.next; // for cases like 1 2 3 3 4 4 5;
        if(c && c.next && c.val === c.next.val) continue

        // for the first time pre mover;
        if(flag){
            if(head.val !== head.next.val) prev = head ;   
            flag = false;
        }

        prev.next = c;
        prev = c;
    }
    return prevHead.next;
};