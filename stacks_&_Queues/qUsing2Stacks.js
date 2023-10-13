class Stack{
    constructor(){
        this.s = [];
    }
    push(ele){
        this.s.push(ele);
    }
    pop(){
        return this.s.pop();
    }
    peek(){
        return this.s[this.s.length-1];
    }
    isEmpty(){
        return this.s.length===0;
    }
    size(){
        return this.s.length;
    }
}


class Queue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
        this.dQueuing = false;
    }
 
    enQueue(ele){
        if(!this.dQueuing){
            this.s1.push(ele);
        }
    
    }
    dQueue(){
        
        if(!this.s2.isEmpty()) return this.s2.pop()
        else if(this.s1.isEmpty()) return 'Queue is empty..'
        else{
            this.dQueuing = true;
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop());
                console.log(this.s2);
            }
            this.dQueuing = false;
            return this.s2.pop();
        }
    }
    peek(){
        if(!this.s2.isEmpty()) return this.s2.peek()
        else if(this.s1.isEmpty()) return 'Queue is empty..'
        else{
            this.dQueuing = true;
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop());
            }
            this.dQueuing = false;
            return this.s2.peek();
        }
    }
    isEmpty(){
        return this.s2.isEmpty() && this.s1.isEmpty()
    }
}

let q1 = new Queue();
console.log(q1.isEmpty());
q1.enQueue(1);
q1.enQueue(2);
console.log('after enque stack1: ',q1.s1, 'stack2: ',q1.s2); //after enque stack1:  Stack { s: [ 1, 2 ] } stack2:  Stack { s: [] }
console.log(q1.dQueue());
console.log(q1.dQueue());
console.log('after Dque stack1: ',q1.s1, 'stack2: ',q1.s2); //after Dque stack1:  Stack { s: [] } stack2:  Stack { s: [] }

  