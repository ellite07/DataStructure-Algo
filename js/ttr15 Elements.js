console.log("Element");
// Creating element
let elem = document.createElement('li');
let text = document.createTextNode("im a text Node");
elem.appendChild(text);
// Add class name to Li element;
elem.className = 'child-ul' ,
elem.id = 'Created-li' ,
elem.setAttribute('title','myTitle');
// elem.innerText ='<h3>Im new ul by append</h3>';

// now i want grab div.container.ul.UL-Lisst ;
let ul = document.querySelector('ul.UL-Lisst')   //querySelector :bydefault selects 1st element of DOM
ul.appendChild(elem);
// console.log(ul);
// console.log(elem);

// flow;
// create elem (li) - create textNode - add class id attribute - put elem in ul;


// if i want to replace a element;
// replace create (li);

let elem2 =document.createElement('h3');

elem2.id = 'element2';
elem2.className = 'elem2';
let tnode = document.createTextNode('Created node fpr elem2');
elem2.appendChild(tnode);

console.log(elem2);

// now replacing elem2 with elem;
elem.replaceWith(elem2);        //it is replaced, you can see it in inspect > element >  child-ul change to h3;

            // we can even replace child;

let myul =document.getElementById('myUl');
myul.replaceChild(elem, document.getElementById('2nd'));
// in syntax write (newElement , changeElement);

// remove child from node;
myul.removeChild(document.getElementById('4th'));

