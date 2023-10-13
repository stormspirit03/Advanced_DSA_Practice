
class Queue{
    constructor(values) {
        if(!values) this.data = []
        else this.data = values
    }
    enQueue(ele){
        this.data.unshift(ele);
    }
    deQueue(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1];
    }
    empty(){
        this.data = [];
    }
    size(){
        return this.data.length;
    }
}

let q1 = new Queue();
let q2 = new Queue();
let q3 = new Queue();
q1.enQueue(1);
q1.enQueue(2);
q1.enQueue(3);
q2.enQueue('a');
q2.enQueue('b');
q2.enQueue('c');
// q3.enQueue(5);
console.log('q1', q1.data, ' q2:', q2.data, ' q3:',q3);
// output : q1 [ 3, 2, 1 ]  q2: [ 'c', 'b', 'a' ]  q3: Queue { data: [] }


while(q1.peek() || q2.peek()){
    if(q1.peek()){
        q3.enQueue(q1.deQueue());
    }
    if (q2.peek()){
        q3.enQueue(q2.deQueue());
    }
}
console.log('After----','q1', q1.data, ' q2:', q2.data, ' q3:',q3);
//output After---- q1 []  q2: []  q3: Queue { data: [ 3, 'c', 2, 'b', 1, 'a' ] }
while(q3.peek()){
    console.log(q3.deQueue());
}

/* 
output 
1
a
2
b
3
c
 */