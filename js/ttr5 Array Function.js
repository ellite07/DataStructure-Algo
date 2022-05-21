console.log( "ttr5 Array & object");
// array
var marks = [32, 56, 45, 21];
const fruits = ["apple","banana","orange"];
const mix = ["orange2","54","pinaapale"];
// by functions Of array
const arr = new Array(23,54,10,'papaya','santra');

// console.log(marks)
// console.log(fruits)
// console.log(mix)
// console.log(arr)

// // length of array;
// console.log("length of marks",marks.length);
// console.log("length of arr",arr.length);
// console.log("is mix is an array?",Array.isArray(mix));
// console.log("is fruits is an array?",Array.isArray(fruits));
// console.log("is feff is an array?",Array.isArray('feff'));

// // changing arrays elements ;
// mix[1] = "Mosambi";
// console.log(mix);


// array ;
 marks = [32, 56, 45, 21];
console.log(marks);
console.log("index of element=",marks.indexOf(45));
console.log("index of element=",marks.indexOf(10));

// mutating or modifying arrays;
marks.push(2,10,15)
console.log("pushing 2 10 15",marks);

marks.pop();
marks.pop();
console.log("poping out last 2 elements",marks);

marks.unshift(1009);
console.log("adding 1st element at start (unshift)",marks);

marks.shift(marks);
console.log("removing 1st element at start(shift)",marks);

marks.splice(1,2);
console.log("removing from 1,2 elements",marks);

marks.reverse();
console.log("reversing array",marks);

let marks2 = [1,2,3,4];
console.log("concatinating 2 arrays + [1,2,3,4]",marks.concat(marks2));

let myobj ={
    name : 'Harry',
    channel : "code With Harry",
    isActive : true,
    marks :  [1,2,3,4]
}
console.log(myobj);
console.log(myobj.name);
console.log(myobj["marks"]);

