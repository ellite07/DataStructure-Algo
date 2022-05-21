// Number of Digits
// Given the code to find out and return the number of digits present in a number recursively. But it contains few bugs, 
// that you need to rectify such that all the test cases should pass.

let n = 00102030;
let count = 0;
console.log(numberLength( n))
function numberLength( n) {
  if (n < 10) {
    return n;
  }
  const lastDigit = n%10;
  // console.log(lastDigit)
    const remain = Math.floor(n/10);

    return numberLength(numberLength(remain)+lastDigit)
  }