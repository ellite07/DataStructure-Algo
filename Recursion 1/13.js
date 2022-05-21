// Geometric Sum

// Given k, find the geometric sum i.e.
// 1 + 1/2 + 1/4 + 1/8 + ... + 1/(2^k) 

let n =4;
console.log(sum(n))
// the sum of the given series
function sum(n)
{
 
    // 1^1 = 1
    if (n == 0)
        return 0;
    else
 
        // Recursive call
        return (Math.pow(2, n-1) + sum(n));
}