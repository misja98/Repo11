// Only change code below this line
function mySplice(arr1,arr2, n){
    let arr3 = arr2.slice();
    arr3.splice(n, 0, ...arr2);
    return arr1 = [...arr3];
    
    
}
    // Only change code above this line
    
    console.log(mySplice(["b","c"],["a","d"],1)); // Change this line

    module.exports = mySplice;