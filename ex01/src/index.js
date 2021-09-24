// Create an array here
var myArr = [2, 4, 0, 8, 10];


// End of creating an array

function myArrayFunction(arr){
    var myItems = [...arr];
    // Only change code below this line

    var myItems = [2, 4, arr, 8, 10];
    var arr = 6;
    
return myItems;
    // Only change code above this
}

console.log(myArrayFunction(myItems)); //Change this line
module.exports = myArrayFunction;