/* given 2 linked lists , each one is a positive number. add them and return the sum in the form of 3rd linked list.
ex 1,2,3
 + 2,3,5 
==3,5,8 */

/* new concept of chaining operaotor , which can be used to avoid "can not access proprty of null"

ex: const person = {
  name: 'John',
  address: {
    city: 'New York'
  }
}; */

const cityName = person.address?.city; // 'New York'
const zipCode = person.address?.zipCode; // undefined (no error)

var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let digit = 0;
    let curr ;
    let l3 ;
    while(l1 || l2){
        let val1 = l1? l1.val:0;
        let val2 = l2? l2.val:0;
        sum = val1+val2+carry;
        digit = sum % 10;
        carry = Math.floor(sum/10);
        // console.log('sum:',sum,' digit:',digit,' carry:',carry);
        if(!curr){
            curr = new ListNode(digit);
            l3 = curr;
        }
        else{
            curr.next = new ListNode(digit);
            curr = curr.next;  
        }
        if(l1) l1= l1.next;
        if(l2) l2= l2.next;
    }
    if(carry) curr.next = new ListNode(carry);
    return l3;
}