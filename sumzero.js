//Checking for sum zero

// [-5,-4, -3,-2,0,2,4,6,8] - I/P
// [-4,4] - 0/p

function sumzero(arry){
    for(const number of array){
      for(let j=1;j<array.length;j++){
          if(number + array[j] == 0){
               return [number,array[j]]
          }
      }
    } 
 }
 const array = [-5,-4, -3,-2,0,2,4,6,8];
 const result = sumzero(array)
 console.log(result)