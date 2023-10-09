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
    top(){
        return this.s[this.s.length-1];
    }
    isEmpty(){
        return this.s.length === 0;
    }
    size(){
        return this.s.length-1
    }
    reset(){
        this.s =[];
    }
}
function isValidSymbol(ele){
    return '()'.includes(ele);
}
function isOpening(ele){
    return ele === '(';
}
function isClosing(ele){
    return ele === ')';
}

function longestValidParenthis(s){
    let charStack = new Stack();
    let indexStack = new Stack();
    indexStack.push(-1);
    let max = 0;
    console.log('charStack:',charStack.s, '  indexStack:', indexStack.s, '  max:',max );
    for (let i=0; i< s.length; i++){
      
        if( isClosing(s[i]) && charStack.isEmpty() ){
           indexStack.push(i);
        }
        else if( isClosing(s[i]) && isOpening(charStack.top()) ){
            charStack.pop();   
            indexStack.pop();
            max = Math.max(max, i-indexStack.top()); 
        }
        else if( isOpening(s[i]) && charStack.isEmpty() ){
            charStack.push(s[i]);
            indexStack.push(i);    
        }
        else if( isOpening(s[i]) && isOpening(charStack.top()) ){
            charStack.push(s[i]);
            indexStack.push(i);
        }
        console.log(i,s[i],'charstack',charStack.s,'indexStack',indexStack.s, ' max:',max);
    }

    
    return max;
}


let str = '';
let result = longestValidParenthis(str);
console.log(result);
