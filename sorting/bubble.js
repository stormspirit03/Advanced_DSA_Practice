
// bubble sort
let arr = [2,1,4,5,3,7];
for (let i= 0; i< arr.length; i++){
    console.log('i',i);
    for (let j = 0; j<arr.length-i; j++){  // every iteration array will start to sort from end , end element will be at its position.
        if(arr[j]>arr[j+1]){  
            swap(arr,j,j+1)
            console.log('arr',arr)
        }
    }
}

function swap (a,i,j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}