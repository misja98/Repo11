// Create a monitorsListArray array here
var monitorsListArray = ["Apple","Peach","Berry"];

// End of monitorsListArray array

function myMonitorFunction(arr){
    var newMonitorsList = [...arr];

// Only change code below this line
var newMonitorsList = [];
monitorsListArray.forEach(function(element, counter) {
    console.log(counter+" "+element);
});

};


// Only change code above this line

console.log(myMonitorFunction(monitorsListArray)); // Change this line

module.exports = myMonitorFunction;

