// medium 
/* strs =
["eat","tea","tan","ate","nat","bat"]
Output
[["eat","tea","ate"],["tan","nat"],["bat"]]
Expected
[["bat"],["nat","tan"],["ate","eat","tea"]] */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function createHash(s){
    let arr = s.split('');
    let hash = arr.sort().join('');
    return hash;
}
var groupAnagrams = function(strs) {
    let hashMap ={};
 for(let i =0; i<strs.length;i++){
     let hash = createHash(strs[i]);
     if(hashMap[hash] === undefined) hashMap[hash]=[strs[i]];
     else hashMap[hash].push(strs[i]); 
 }   
 let result = [];
 for(let key in hashMap){
     result.push(hashMap[key]);
 }
 return result;
};


