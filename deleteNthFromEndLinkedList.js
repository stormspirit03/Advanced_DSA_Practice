/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nNode = head;
    let prev = head;
    if(!head.next){
        return null;
    }
    let i = 0;
    while(i<n){
        nNode=nNode.next;
        i++;
    }
    if(!nNode) return head.next;
    while(nNode && nNode.next){
        nNode = nNode.next;
        prev = prev.next;
    }
    //del ntd using prev.
    prev.next = prev.next.next;
    return head;
    
};


/* my first apporach. O(2n)
if (head && head.next){ // only len 2 and above linkedlists
         let once = head;
         let size = 1;
         while(once.next){
             once = once.next
             size++;
         }
         // index of nodeTobeDeleted = ntd
        let ntd = size-n;
        if(ntd === 0) return head= head.next; // if node to be deleted is head only.
        let prevOfNtd = ntd-1;
        let i =0;
        // reset once to head
        once = head; 
        // got to prev of ntd to del ntd
        while(i<prevOfNtd){
            once = once.next;
            i++;
        }
        // we are on prevOfNtd, now del ntd
        once.next = once.next.next;
        // thats it return head.
        return head;
    }
    else return null */;