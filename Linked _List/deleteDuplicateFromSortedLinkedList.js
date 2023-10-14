// delete duplicate nodes from a sorted linked list
// 1,2,3,3,4,5,5  --> 1,2,3,4,5
//[] --> [];
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;

    let i = head; // slow
    let j = head.next; // fast
    while(j){
          console.log('outer loop i', i, ' j',j);

        while(j && (i.val === j.val)){
           console.log('inner loop i', i.val, ' j**',j.val);
            j = j.next;
        }
        i.next = j;
        i = j;
    }
    return head;
   
};
