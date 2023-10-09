/*  this uses memoization , which does not recalculate the output which it has already calculated.
instead it stores it and looks up in o(1) time.  */

function fib(n,memo={}){
    if (n <=2 ) return n;

    if(!memo[n]){
        memo[n] = fib(n-1)+fib(n-2);
    }
    // console.log( memo )
}

let res = fib(5);
console.log(res);