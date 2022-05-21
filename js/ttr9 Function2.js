// Method function;
// Important;
var myaddress = function(room,build,city,state="Maharashtra"){
    let roomN = room;
    let buildN = "Omkar Bramha";
    let ctyN = city;
    console.log(roomN,buildN,ctyN,state);
}
let room  = 102;
let city = "NewMumbai";
myaddress(room,"buildName",city)

// Function  in Object;
const myObj = {
    name : "Skill",
    game : function(){
        return "GTA"
    }
}
console.log(myObj.game);
console.log(myObj.game());


// 

let array  = [2,4,5,7,8];
// Always give output in Element , index,array form
array.forEach(function(elem,indx,arr) {
    console.log(elem,indx,arr)
});