// Create a monitorsListArray array here
var monitorsListArray = ["Apple","Peach","Berry"];

// End of monitorsListArray array

function myMonitorFunction(arr){
    var newMonitorsList = [...arr];

// Only change code below this line
var monitorsList = [];
for (var i = 0;  i = newMonitorsList.length - 1; i+=1){
    monitorsList = newMonitorsList + i;
};

console.log(monitorsList()) ;

// Only change code above this line
}
console.log(myMonitorFunction()); // Change this line

module.exports = myMonitorFunction;

