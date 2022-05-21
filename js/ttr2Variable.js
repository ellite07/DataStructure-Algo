console.log("ttr2");
// vra = it is Global scope with Changable value;
var names = "Tushar";
var channel;
var age = 32;
var mark = "55"
console.log(names,channel,age,mark);
// i can change anyu value at any point of time;

var mark = 20;
var names = "NewTushar"
console.log(names,channel,age,mark);

// const: it is Global scope with unChangable value
const ownerName = "hari ram";
// const ownerName =   "Tushar's Shop"   // cant use this it will thow a error;

const fruits = 'Orange';
console.log(ownerName,fruits)

// Let ;  = it is Block level scope;
// /always prefer const and let over var

{
    //if / else block;
    let city = "Satara";
    city = "new Mumbai"
    let named = "yash";
    console.log("city:",city,"named:",named)   // inside bloick let value is accepted
}
var city = "Satara";
var named = "yash";
console.log("city:",city,"named:",named)   // out side block Var value is taken, if var is upsent from global it wont print