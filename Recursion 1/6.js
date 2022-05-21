// Check Number
// Send Feedback
// Given an array of length N and an integer x, you need to find if x is present in the array or not. Return true or false.
// Do this recursively.

let arr = [1,2,3,4];
let x = 4;
console.log(find(arr,0,x));

function find(arr,i,x){

    if(i == arr.length){
        return false;
    }

    if(arr[i] == x){
        return true;
    }
    let small = find(arr, i+1, x);
    return small;
}


function firstIndex(arr,size, x) {
    
    
    if(size == 0){
        return false;
    }
    
    if(arr[size-1] == x){
        return true;
    }
    
    let small = firstIndex(arr.slice(0,size-1), size-1, x);   
    return small;
}

var size = arr.length;


console.log(firstIndex(arr,size,x));