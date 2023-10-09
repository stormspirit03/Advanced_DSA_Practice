let n = 15;
for (let i =1; i<=n; i++){
    let str = '';
    if(i%3===0)str+='fizz';
    if(i%5===0)str+='buzz';
    else str+=i;
    console.log(str);
    // if (i%3 ==0 && i%5 ==0) console.log('fizzBuzz');
    // else if(i%3==0) console.log('fizz');
    // else if(i%5==0) console.log('buzz');
    // else console.log(i);
}