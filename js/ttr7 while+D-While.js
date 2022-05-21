
// While Loop :
console.log("While")

let j = 5;
while(j <= 12){
    console.log(j);
    j++;
}

// Do-While:
console.log("Do-While")
let k = 0;
do {
    if(k == 5 || k ==6 || k==7){
        k++;
        continue; 
    }
    console.log(k);
    k++;
} while (k < 10);

// for each;
console.log("For-Each");

let arr = [1,23,3,4,5,6];
arr.forEach(function(element){
    console.log(element)
})

arr.forEach(function(element,index,array){
    console.log(element,index,array)
})
console.log("Object");

let obj = {
    name : "Tushar",
    age : 23,
    lang : "JS",
}
for(var key in obj){
        console.log(`The ${key} of Object is ${obj[key]}`)
    }

for (const key in obj) {
   
        const element = obj[key]; // key
        console.log("key=", key, ", element=",element)    
}

