// First Index of Number
// Send Feedback
// Given an array of length N and an integer x, you need to find and return the first index of integer x present in the array. Return -1 if it is not present in the array.
// First index means, the index of first occurrence of x in the input array.

let arr = [1,2,3,4,5];
let x = 3;
let i = 0;
console.log(find(arr,3))
function find(arr,x){
    if(i == arr.length ){
        return -1;
    }
    if( arr[i] == x){
        return i;
    }
    i++;
    return find(arr,x)
}