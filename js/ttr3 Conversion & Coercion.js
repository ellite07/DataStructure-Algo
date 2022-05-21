//  Type of Conversion & Coercion;
console.log("ttr3 Conversion & Coercion.js");

// string
let myVar =  34 ;
console.log(myVar,typeof myVar);

myVar = String(34)
console.log(myVar,typeof myVar);

// Boolean
let booleanVar =  true;
console.log(booleanVar,typeof booleanVar);

booleanVar = String(true)
console.log(booleanVar,typeof booleanVar);

// date;
let date = new Date();
console.log(date,(typeof date));

// array;
var arr = [1,3,3,4,5,6];
console.log(arr,"Length=",arr.length,typeof arr);

 arr = String([1,3,3,4,5,6]);
console.log(arr,"Length=",arr.length,typeof arr);

// another method to convert String is "toString";
var i = 8;
var bool = false;
var array = [1,2,3];
console.log("i=",i,"bool=",bool,"array=",array)
console.log("i=",i.toString(),"bool=",bool.toString(),"array=",array.toString());

//  NUMBER ;
let stri = "3234";
console.log("stri=",stri,typeof stri);

let str = Number("3234");
console.log("str=",str,typeof str);

str = Number("3fcc34");
console.log("str=",str,typeof str);

str = Number(true);
console.log("str=",str,typeof str);
 str = Number(false);
console.log("str=",str,typeof str);

// parseInt = convert string in to Numer with Integer value, 34.512 = 34;
let number =  parseInt('34.325');
console.log("parseInt = convert string in to Numer with Integer value, 34.512 = 34,",number,typeof number)

// parceFloat = convert string to number & we can also determined how much value we want after ".=decimal";
console.log("parceFloat = convert string to number & we can also determined how much value we want after '.'=decimal");
let num1 = parseFloat('21.2354');
console.log("num1",num1.toFixed(2));
// can use to show price $21.21,
console.log("num1",num1.toFixed(7));


// Type of Coercion ;
let mystr = "654";
let mynum = 34;
let sum = mystr + mynum;
let sum1 = Number(mystr) + mynum;
let sum2 = mystr + String(mynum);


console.log("'654' + 34 =",sum,typeof sum);
console.log("654 + 34 =",sum1,typeof sum1)
console.log("'654' + '34' =",sum2,typeof sum2)