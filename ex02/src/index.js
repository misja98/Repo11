// Create a temps array here
var temps =[
[31,32,19,37],
[29,27,55,36],
[17,27,42,46],
[29,52,21,64],
[91,27,31,51]
];

// End of temps array
function myArrayFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];
    // Only change code below this line

        for (var i=0,sum=0;i<temps.length;i++) {
          sum += temps[i];
        }
    averageDayTemp.push((sum / temps.length))
      

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps)); // Change this line
module.exports = myArrayFunction;