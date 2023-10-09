let arr = [1,2,3,4,5];
let size = 2;
let count = 0;
let brr = [];
// while(count<arr.length){
//     let crr=[];
//     for (let j=0; j<size; j++){
//         if(count<arr.length){
//             crr.push(arr[count++]);
//         }    
//     }
//     brr.push(crr);
// }
// for (let ele of brr){
//     console.log(ele);
// }

while(count<arr.length){
    brr.push(arr.slice(count,count+2));
    count = count+2;
}
for (let ele of brr){
    console.log(ele);
}