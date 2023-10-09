let s = 'i am a cs engineer.';
// let first = s.slice(0,1);
// let second = s.slice(1, s.length);
// first = first.toUpperCase();
// final = first+second;
words = []
for(word of s.split(' ')){
    // console.log( word[0].toUpperCase());
   let final = word[0].toUpperCase()+ word.slice(1);
    words.push(final)
}
s2 = words.join(' ');
console.log(s2);