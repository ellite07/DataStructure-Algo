// Sum of Array
// Send Feedback
// Given an array of length N, you need to find and return the sum of all elements of the array.
// // Do this recursively.

let arr = [3,6,9,2];

// let last = arr.pop();
// let remainig = arr;
// console.log(last);
// console.log(remainig);



console.log(sum(arr))
function sum(arr){
    if(arr.length == 1){
        return arr[0];
    }
    if(arr.length == 0){
        return 0;
    }
    
    let last  = arr.pop();
    let remain = arr;
    
    return (sum(remain)+last);
}

let arr2 = [ 1,4,8]
// let first = arr2.shift()
// console.log(arr2)
// console.log(first);

console.log(sum1(arr2));
function sum1(arr2){
    if(arr2.length == 1){
        return arr2[0];
    }
    if(arr.length == 0){
        return 0;
    }
    
    let first = arr2.shift();
    let remain = arr2;
    
    return (sum1(remain)+first)
}
