// All Indices of Number
// Send Feedback
// Given an array of length N and an integer x, you need to find all the indexes where x is present in the input array. Save all the indexes in an array (in increasing order).
// Do this recursively. Indexing in the array starts from 0.

let arr = [1,4,6,1,3,6,4,5,6];
let x = 4;
let output = [];
size = arr.length;
console.log(index(arr,x,size,output))

function index(arr,x,size,output){

    if(size == 0){return}

    if(arr[size-1] == x){
        output.unshift(size-1);
    }
    index(arr,x,size-1,output);

    let ans = output.length;
    return ans;
}