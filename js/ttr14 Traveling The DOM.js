console.log("ttr14 Traveling The DOM");

let cont  = document.querySelector('.no');
 cont  = document.querySelector('.container');
 cont  = document.querySelector('.container').childNodes; ///text ,comment doc, doc.tag every un-nesesary thing is carry under childNodes
// console.log(cont);

cont  = document.querySelector('.container').children; //this is use to display onlt elements
// console.log(cont);

// node Name:
cont  = document.querySelector('.container');
let node_Name = cont.childNodes[5].nodeName;
// console.log(node_Name)

node_type = cont.childNodes[5].nodeType;
// console.log("node_type=",node_type);

// 1 = element , 2 = Attribute, 3 = TextNode , 8 = comment, 9 = doc, 10 = doc-Type

// accecing chilred of children;

var contain = document.querySelector('.container');
// console.log(contain.children);
// console.log(contain.children[1]);
// console.log(contain.children[1].children[2]);
// console.log(contain.children[1].children[1].children);
// console.log(contain.children[1].children[2].className);


var contain = document.querySelector('.container');
// console.log(contain.childNodes)

// console.log(contain.firstChild)
// console.log(contain.firstElementChild)

// console.log(contain.lastChild)
// console.log(contain.lastElementChild)

var contain = document.querySelector('.container');
// console.log(contain.children);
// console.log(contain.childElementCount)  //count of children nodes

var contain = document.querySelector('.container');
console.log("1st-element =",contain.firstElementChild); //control+ save

console.log("parent-node",contain.firstElementChild.parentNode); //show parent of that child

console.log("next sibling",contain.firstElementChild.nextSibling); //show next sibling of that child

console.log("next sibling-element",contain.firstElementChild.nextElementSibling); //show 1st element of that child