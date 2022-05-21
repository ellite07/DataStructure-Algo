// Multiplication (Recursive);
// You can only use subtraction and addition for your calculation. No other operators are allowed.

var msg = "Hello  World";
console.log(msg);

let m = 10;
let n = 6;
console.log(rec(m,n))
function rec(m,n){
     //base;
  if(m == 0 || n == 0){
    return 0;
  }
  if(m == 1 ){
    return n;
  }
  if(n == 1 ){
    return m;
  }

  //smalll;
  let small = rec(m, 1);

  return small + rec(m ,n-1);

}