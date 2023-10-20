let arr = [1,2,2,4,3,5,6,6,7];
let countObject = {};


for (let i=0; i<arr.length; i++){
    if(!countObject[arr[i]] ){
        countObject[arr[i]] = 1;
    }
    else countObject[arr[i]] = countObject[arr[i]]+1;
}
console.log(countObject);

let result = arr.filter((ele) => countObject[ele] === 1 );
console.log(result)