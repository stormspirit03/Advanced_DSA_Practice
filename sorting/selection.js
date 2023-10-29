// selection sort
// selection  sort ( select min and put it to ith position. array starts sorting from begining instead of ending unlike bubble sort.
let arr = [2,1,4,5,3,7];

for(let i=0; i<arr.length; i++){
    let minIndex = i;
    for (j=i; j<arr.length; j++){
        if(arr[minIndex]> arr[j]) minIndex = j;   // if it's current is small than minIndex , then change minIndex to current. 
    }
    if(minIndex !== i) swap(arr,i, minIndex) // only one swap per iteration.
}
console.log('arr',arr);
function swap(a,i,j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}