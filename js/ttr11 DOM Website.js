console.log("DOM: Doc. Operation Model");

a = window;
a = document;
// all the data will display in form of HTML collection;
// a = document.all;           // to see control +  s(save)
// a = document.body;
// a = document.forms
// console.log(a)
// a = document.forms[0];
// console.log(a)

// a = document.all;            // to see control +  s(save)
// // give an html Collection 
// Array.from(a).forEach(function(element){
//     console.log(element)
// })
// console.log(a)

// link
// a = document.links[0].href;   // to see control +  s(save)
// console.log(a)

// // script                           // to see control +  s(save)
// a = document.scripts[0];
// console.log(a);
// a = document.scripts[1];
// console.log(a);

console.log(`Exercise 1 Solution`);

 a = document.links;
console.log(a)
let myText = 'harry';


Array.from(a).forEach(function(element){
    if(String(element).includes(myText)){
        console.log(element);
        
    }
    else{
        console.log("No link is present in Website")
    }
})
