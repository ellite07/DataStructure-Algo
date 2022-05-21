///counting digits of array;
let arr = [12 ,14 ,16 ,17, 29];
let arr2 = [];


for(var i=0; i<arr.length; i++){
;
    arr2.push(sum2(arr[i]))
}
console.log(arr2)
function sum2(n){
    // base case;
    if(n<=9){
      return n
    }
    ///small;
    let small = n%10;
    
    return (small  + sum2((Math.floor(n/10))));
  }