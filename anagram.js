let s = 'anagram';
let t = 'nagaram';

if (s.length !== t.length) return false;
let map = {};
for(let char of s){
    map[char] = map[char]+1 || 1;
}   
console.log(map);
for (let char of t){
    console.log(char);
    if(!char in map) return false;
    else{
        map[char] = map[char]-1;
    }
}

let values = Object.values(map);
console.log(values);
for (let value in values){
    if(value != 0) return false;
}
return true;