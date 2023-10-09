let sentence = 'this is a javascript program';
let count = 0;
let a = new Set();
let vowelArray = ['a','A','e','E','i','I','o','O','u','U'];
for(let vowel of vowelArray){
    a.add(vowel);
}
console.log(a);

for (let char of sentence ){
    if (a.has(char)) count++;

}
console.log(count);
