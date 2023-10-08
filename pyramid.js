// // let n = 3;
// // let string = '';
// // for( let i=0; i<n; i++){
// //     for(let j=0; j<n;j++){
// //         if(j<=i)string = string+ '*';
// //         else string = string+ '+'; 
// //     }
   
// //         string = string+'\n';
// // }
// // console.log(string); 
// // let n = 3;
// // let string = '';

// // for (let i = 0; i < n; i++) {
// //   // Add stars
// //   for (let j = 0; j < i + 1; j++) {
// //     string = string + '*';
// //   }

// //   // Add '++' characters after the stars
// //   for (let k = 0; k < i; k++) {
// //     string = string + '+';
// //   }

// //   // Add a newline character
// //   string = string + '\n';
// // }

// // console.log(string);
// // Define a recursive function to build the pyramid pattern
// function printPyramid(n) {
//     // Base case: If n reaches 0, return an empty string
//     if (n === 0) {
//       return '';
//     }
  
//     // Calculate the number of '*' characters for the current row
//     const stars = '*'.repeat(n);
  
//     // Calculate the number of spaces to align the stars
//     // const spaces = ' '.repeat(n - 1);
  
//     // Recursively build the pattern for rows above the current row
//     // const upperRows = ;
  
//     // Combine the upper rows, current row, and spaces with a newline
//     return printPyramid(n - 1) + stars + '\n' ;
//   }
  
//   // Wrapper function to print the right-facing pyramid pattern
//   function printRightFacingPyramid(n) {
//     // Call the printPyramid function and print the result
//     console.log(printPyramid(n));
//   }
  
//   // Call the wrapper function with n = 3 to print the pyramid
//   printRightFacingPyramid(3);
  
//   function pyramid(n){
//     if (n<0) return '';

//     let string = '*'.repeat(n);
    
//     return pyramid(n-1)+string+'\n';
// }
// let str = pyramid(5);
// console.log(str);

//------------double pyramid ----- ///
console.log('double pyramid..');

// let n = 3;
// let string = '';
// let mid = n-1;
// for (let i=0; i<n; i++){
//     for (let j=0; j<2*n-1; j++){
//         if( j>= mid-i && j<= mid+i ){
//             string= string+'*';
//         }
//         else string = string+' ';
        
//     }
//     string = string + '\n'
// }
// console.log(string)

console.log('using recursion');

function doublePyramid(n,mid){
    if(n===0) return '';
    let string = ' '.repeat(mid-n)+ '*'.repeat(2*n-1) +' '.repeat(mid-n); 

    return doublePyramid(n-1,mid)+string+'\n';
}
let s1 = doublePyramid(3,3);
console.log(s1);

