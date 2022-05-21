// Multiplication (Recursive)
// Given two integers M & N, calculate and return their multiplication using recursion.
// You can only use subtraction and addition for your calculation. No other operators are allowed.

let m = -5;
let n = -3;
console.log(multi(m,n));

function multi(m,n){
if(n == 0 || m === 0){
    return 0;
}

let small =  multi(m,n-1) ;

return small + m
}
//not donr for -ve numbers