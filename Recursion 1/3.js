// prime numb;
// Given is the code to print numbers from 1 to n in increasing order recursively. But it contains few bugs that you need to rectify such that all the test cases pass.

let n = 6;

rec(n)
function rec(n){
    //base case
    if (n == 0){
        return;
    }

    ///recussion call
    rec(n-1);
    
    //small;
    console.log(n)
    
}