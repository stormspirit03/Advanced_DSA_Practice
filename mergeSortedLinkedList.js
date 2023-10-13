function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    apeand(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
      else {  
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
      }
    }
    print(){
        if(this.head){
            let current = this.head;
            while(current){
                console.log('current value',current.value);
                current = current.next;
            }
        }
        else console.log('list is empty');
       

        
    }
}

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.apeand(1);
list1.apeand(2);
list1.apeand(3);
list2.apeand(1);
list2.apeand(2);
list2.apeand(4);

var mergeTwoLists = function(list1, list2) {
    // both list are non empty then
     if(!list1) return list2;
     else if(!list2) return list1;
     else{
        let list3Head ;
        let current;
        while(list1 && list2){
            if(list1.val<=list2.val){
                if(!list3){
                    list3Head = new ListNode(list1.val);
                    current = list3Head;
                    list1 = list1.next;
                 }
                 else{
                    current.next = list1;
                    list1=list1.next;
                 }
            }
            else{
              if(!list3Head){
                list3Head = new ListNode(list2.val);
                current = list3Head;
                list2 = list2.next;
              }
              else{
                current.next = list2;
                list2 = list2.next;
              }
            }
        }
        if(list1)current.next = list1;
        if(list2)current.next = list2;
        // print output 
        current = list3Head;
        while(current){
            console.log('new linked list',current.val);
            current = current.next;
        }
        return list3Head;
     }
  }