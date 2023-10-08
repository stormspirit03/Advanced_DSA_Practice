// check for valid brackets using stack 

class Stack {
    constructor(){
        this.s = [];
    }

    push(ele){
        this.s.push(ele);
    }

    pop(){
        if(this.s.length === 0) return 'stack is empty';
        return this.s.pop();
    }

    top(){
        if(this.s.length === 0) return 'stack is empty';
        return this.s[this.s.length-1];
    }

    isEmpty(){
        return this.s.length === 0;
    }

    size(){
        return this.s.length;
    }

    print(){
        console.log(this.s);
    }
}

function isOpening(s){
    let str = '[{(';
    return str.includes(s);
}

function isClosing(s){
    str = '}])';
    return str.includes(s);
}

function isSame(symbol, stackTop){
    console.log('inside isSame method', symbol , 'stacktop:', stackTop);
    if (symbol ===')') return stackTop ==='('
    else if (symbol ===']') return stackTop ==='['
    else if (symbol ==='}') return stackTop ==='{'
}

function isValidBracket(s){
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        console.log(s[i], stack); // teesting
        if(!'{[()]}'.includes(s[i])) return false // if invalid symbol;
        else if (stack.isEmpty() && isClosing(s[i])) return false;// starts with a closing symbol
        else if (!isClosing(s[i]) && i === s.length - 1) return false // ends with any other than closing symbol
        else if (isOpening(s[i]) && stack.isEmpty()) stack.push(s[i]) // push if opening symbol and empty stack
        else if (isOpening(s[i]) && isOpening(stack.top())){ stack.push(s[i])} // happy path ((
        else if (isClosing(s[i]) && !isSame(s[i], stack.top())) return false   // closing and top is opening but noting same type 
        else if (isClosing(s[i]) && isSame(s[i], stack.top())) stack.pop() // if symbol is closing and top is the same type of opening, then pop the top.
    }
    console.log(stack.isEmpty());
    return stack.isEmpty();
}

// let s1 = '{[()]}';
let s2 = '(])';
// let result1 = isValidBracket(s1);
let result2 = isValidBracket(s2);
// console.log(result1, s1);
console.log(result2, s2);

