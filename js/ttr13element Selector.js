console.log("element selectors");

// single element selector 
// multi element selector


// single element selector ;
let element = document.getElementById('myFirst');
let element2 = document.getElementById('second');

// element = element.className;
// element = element.childNodes;

// changing CSS by js:
element.style.color="red";  //for more property Google: how ro change bgn-clr/border by js;
element2.style.color="red";

// changing only text by js;
element.innerText= '<b><h3>by Innner-TEXT</h3></b>'; //on browser
// console.log(element.innerText)

element2.innerHTML='<b><h3>by Innner HTML</h3></b>' //on browser
// console.log(element2.innerHTML)


 sel = document.querySelector('#myFirst');
// console.log(sel);

// class;
sel = document.querySelector(".child"); //give 1st child of claasss
// console.log(sel)
sel = document.querySelectorAll(".child"); //give all child of claasss  //in object
// console.log(typeof(sel)) 
// all tag by class
sel = document.querySelectorAll("div");    //give all child of claasss  
// console.log(sel);

//  with class we can call tags;
sel = document.querySelector("h3");     //give 1st child of claasss
// console.log(sel);

sel = document.querySelector("div");    //give 1st child of claasss 
sel.style.color="green"
// console.log(sel);


//2.  Multi - Selctor :
let elem = document.getElementsByClassName('child')  //get all class of name child;
// console.log(elem);
// console.log(elem[2]);

elem = document.getElementsByClassName('container');
console.log(elem);
// console.log(elem[0]);
// console.log(elem[0].getElementsByClassName('child'));
// console.log(elem[0].getElementsByTagName('div'));
// console.log(typeof(elem[0].getElementsByTagName('div')));  //object

// // but we can not use for each on  it; so we have to use Array.from(arr).forEach(function elemet(){})
// Array.from(elem).forEach(element =>{
//     console.log(element)        //control + s (save);
//     element.style.color = "pink"; // all div got pink color
// });


// or Samilar by looop;

for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color = "skyblue";
    
}