function fib(n,memo={}){
    if (n <=2 ) return n;

    if(!memo[n]){
        memo[n] = fib(n-1)+fib(n-2);
    }
    // console.log( memo )
}

let res = fib(5);
console.log(res);