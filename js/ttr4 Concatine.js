console.log("ttr4 Concatine")

   const name =   'Harry';
    
   let html;
//    method 1 to concatinate(attach) string;
   html = "<h1> This is  Heading</h1>" + 
          "<p>This is para </p>"
          console.log(html)
        //   method 2 by .concate();
// function of String;
 // 1: concat()
html = html.concat('This is');
console.log(html);

// 2. lowerCase();
var html2 = "<line> THIS IS  LINE is UPPER</line>";
console.log("CONVERTED INTO lOWERcASE",html2.toLowerCase());

// 3. UpperCase();
var html2 = "<line> this is line in lower</line>";
console.log("CONVERTED INTO uperCase",html2.toUpperCase());

// 4.indexOf():
var html3 = "my name is Tushar name is"
console.log(html3)

console.log("can show staring index of indexOf('character') =",html3.indexOf('is'))

// 5.lastIndexOf():
console.log("can show last-index of indexOf('character') =",html3.lastIndexOf('is'));



// 6.CharAt:
console.log("Char at postion=",html3.charAt(5));

//7. endsWith: (Give booolian);
console.log("Is string end at 'name is'=",html3.endsWith('name is'));
console.log("Is string end at 'is Tushar'=",html3.endsWith('is Tushar'))

// 8.Include: 
console.log("Is 'Tush' Present in string = ",html3.includes('Tush'));

// substring:
console.log("give substring from-to(3,6) =",html3.substring(3,6));

// slice:
console.log("GIve last Characters =",html3.slice(-4))
console.log("Give previous characters string with=",html3.slice(3,12));

// Split;
console.log("split by (' ')=", html3.split(" "))
console.log("split by ('is')=", html3.split("is"));

// replace ;
console.log("replace 1st ocarance vaur with other=",html3.replace('is','Mine'))

//function don't change string forever : 
console.log("function don't change string forever=",html);
console.log("function don't change string forever=",html2);
console.log("function don't change string forever=",html3);

// How to use java script for HTML:
let name1 = "tushar";
let fruit1 = "orange";
let fruit2 = "Apple";

let myHtml = `Hello ${name1}
             <h1>This is "my" Heading </h1>
             <p>You like ${fruit1} & ${fruit2}`;

document.body.innerHTML = myHtml;