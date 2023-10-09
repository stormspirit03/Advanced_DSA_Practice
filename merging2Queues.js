class Queue{
    constructor(values) {
        if(!values) this.data = [];
        this.data = values;
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

let q1 = new Queue([1,2,3]);
let q2 = new Queue(['a','b','c']);
console.log('q1', q1.data, ' q2:', q2.data);