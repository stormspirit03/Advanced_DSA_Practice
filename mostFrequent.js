let hmap = {}
let str = 'abbbbccvbbcs';
let max = 0;
let macChar = '';

for (let char of str){
     hmap[char] = hmap[char]+ 1 || 1;   
}

for (char in hmap){
    if (hmap[char] > max){
        max = hmap[char];
        maxChar = char;
    }
}
console.log(max, maxChar);
