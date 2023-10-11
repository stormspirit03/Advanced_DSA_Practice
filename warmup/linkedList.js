class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
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

let ll = new LinkedList();
ll.apeand(1);
ll.apeand(2);
ll.apeand(3);
ll.print();