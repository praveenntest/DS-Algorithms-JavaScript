//Optimised Approach
// [-5,-4, -3,-2,0,2,4,6,8] - I/P
// [-4,4] - 0/p
//Two point approach

function sumzero(array){
    let left = 0;
    let right = array.length -1;
    while(left < right){
        let sum = array[left] + array[right]
        if(sum == 0){
            return [array[left],array[right]]
        }
        else if(sum > 0){
            right--;
        }
        else{
            left++
        }
    }
}



const array = [-5,-4, -3,-2,0,2,4,6,8];
const result = sumzero(array)
console.log(result)
