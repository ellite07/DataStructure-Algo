//POWER;
// Write a program to find x to the power n (i.e. x^n). Take x and n from the user. You need to return the answer.;

let m = 3;
let n = 4;

console.log(rec(m,n));

function rec(m,n){
    if(n == 0){
        return 1;
    }
    if(m == 0){
        return 0;
    }

    //small ;
    let small = rec(m,n-1);

    return small*m
}