/*
nput:
N = 5
Arr[] = {15, 2, 45, 12, 7}
Output: 2
Explanation: Only Arr[2] = 2 exists here.
*/

function valueindex(arr,n){
  for(let i=1;i<=n;i++){
    if(arr[i] == i+1){
        console.log(arr[i]);
    }
  }
}

valueindex([15, 2, 45, 12, 7],5)

//alternative

class Solution{
    valueEqualToIndex(arr,n){
        //code here
        let result = [];
        for(let i=0;i<n;i++){
            if(arr[i] == i+1){
                  result.push(arr[i]);
            }
        }
        return result;
    }
}

