/*

You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).

Example 1:

Input:
N = 4
A[] = {1, 2, 3, 4}
Output:
1 3

*/

const array = [1, 2, 3, 4]
for(let i=0;i<array.length;i++){
    if(i % 2 === 0){
        console.log(array[i])
    }
}