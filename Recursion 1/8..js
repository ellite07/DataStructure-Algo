// Last Index of Number
// Send Feedback
// Given an array of length N and an integer x, you need to find and return the last index of integer x present in the array. Return -1 if it is not present in the array.
// Last index means - if x is present multiple times in the array, return the index at which x comes last in the array.
// You should start traversing your array from 0, not from (N - 1).

let arr = [1,2,5,5,5,3,4];
let x = 5;
let size = arr.length;
let arr2 = [];
let  i = 0;
console.log( last(arr,x,size,arr2))
function last(arr,x,size,arr2){3
        if(size == 0){
            //return when arr became empty
            return }

        if(arr[i] == x){
            arr2.push(i);
        }
        // console.log(i,arr[i],size,arr2)

        i++;

       last (arr, x, size-1,arr2);
       
        if(arr2.length !== 0){
            return arr2[arr2.length-1]
        }
        else{
            //return when arr2 is empty
            return -1
        }
}
