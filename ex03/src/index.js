// Create a myPetsArray array here

var myPets = ["Dog", "Cat"];

// End of myPets array

function myArrayFunction(mypets){
    var myNewPets = [...myPets];
// Only change code below this line
myNewPets.push("Bird","Fish");
var firstPet = myNewPets.shift();
var lastPet = myNewPets.pop();
myNewPets.unshift("Lion");

return myNewPets;
// Only change code above this line
}

console.log(myArrayFunction()); // Change this line
module.exports = myArrayFunction;