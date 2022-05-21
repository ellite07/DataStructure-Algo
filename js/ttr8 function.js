console.log("Function");
console.log("Simple Function call")
function greet(names,thanks){
    console.log(`Hey ${names} Happy birthday brother &my good wishes always with you ${thanks}`);
    return 7;
}
let names = "'Tuhsar'";
var result = greet(names,"'Thanks A Lot'");
console.log("result",result) //return 

//if in parameter wedidnt pass any thing we want a defalt value in parameter;

function name(named, email= 'shelketushar100@gmail.com'){
    console.log(`My name is ${named}, and my email id is ${email}`)
}
let naam = "Tushar";
let result2 = name(naam, 'rockyBelboa@123');

// defasult parameter;
result2 = name(naam);


function add(room,build,city="New Mumbai",state='Maharashtra',pinCode) {
    let roomNumb = `My room number is ${room}.`;
    let buildName = `My building name is ${build}`;
    let pin = pinCode;
    
    console.log(roomNumb,buildName,city,state,pin);
    
}
let room  = 102;
let build = "Omkar Bramha,Adai.";
let pinCode = 410216;
var res = add(room,build,pinCode)
