// Count Zeros
// Send Feedback
// Given an integer N, count and return the number of zeros that
//are present in the given integer ;

let n = 0002030;
// console.log("0002030",n)
// console.log("0002030",Number)

let m = 2300121;
console.log(zeros(m))
function zeros(m){
    if( m == 0){
        return 1;
    }
        if(m < 10){
            return m;
        }
        
        let last = m%10;
        let small_probm = zeros(Math.floor(m/10));

        if(last == 0){
            return small_probm +1;
        }
        return (small_probm)
}
//NOT DONE