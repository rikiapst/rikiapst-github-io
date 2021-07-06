// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 
 //Using a for loop to loop over the given array parameter
 //In order to loop forward The loop will start at 0
 //The loop will end at the array last element 
 //Accessing the arrays last element by using the .length method
 //Will increment by 1
 //Using console.log to print the array values while also using bracket notation to access the elements
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for(let i = 0; i < array.length; i++){
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 
 //Using a for loop to loop backwards through the given array parameter
 //To loop backwards the for loop will start at the end of the array, the last element 
 //Inorder to access the array last element i will use the .lenth method and also subtracting 1 to access the last elmeent in the array
 //The loop will stop at the first index of the array which is 0
 //Using >= to be inclusive with the first 0 index 
 //The loop will decrement by 1
 //Using console.log and bracket notation to print the array elements backwards
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for(let i = array.length -1; i >= 0; i --){
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 //Using a for in loop to loop through the given object
 //Creating an array literal to store the objects keys
 //Using the push method to push the object keys into the new array 
 //Using the keyword key to access the keys inside of the given object parameter
 //Using a return statment to retun the new array of keys
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  let newArray = [];
  
  
  for(let key in object){
    newArray.push(key)
  }
  
  return newArray;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
 
 //Uisng a for in loop to loop over the given object 
 //Using console.log to print the objects keys 
 //Using the keyword keys to access the keys inside of the given object
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for(let key in object){
    console.log(key)
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 
 //Creating an array literal to later store the values inside of the given object 
 //Using a for in loop to loop over the given object
 //Using the push method to push the objects values inside of the new array literal 
 //Accessing the object's values by using the keywords object and key and surrounding key with brackets 
 //Using a return statement to return the new array of the object's values
 
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  let newArray = [];
  
  for(let key in object){
    newArray.push(object[key])
  }
  
  return newArray;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 
 //Using a for in loop to loop over the given object
 //Printing the objects values using console.log
 //Accessing the object's values using the two keywords object and key while surrounding key in brackets 
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for(let key in object){
    console.log(object[key])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
 
 //Creating an array literal to store the given object's key value pairs
 //Using a for in loop to loop over the given object 
 //Using the push method to push the key value pairs into the new array literal 
 //Using the two key words object and key to access the object's key value pairs by surrounding key with quotes and brackets 
 //Using the length method to determine the number of elements in the array of key value pairs
 //Returning the new array length 
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  let newArray = [];
  
  for(let key in object){
    newArray.push(object["key"])
  }
  
  return newArray.length;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
 //To print the object's values in revese Iw ill need to create an array literal 
 //Using the array literal to store the objects values 
 //Using a for in loop to loop over an daccess the given object's values 
 //Using the push method to add the object's values to the array
 //Using the new array of values to loop over backwards
 //Using a for loop to loop over the new array 
 //The loop will start at the last element of the array by using the .length method
 //The loop will end at the first e=index of the array 0
 // Will us the >= operator to inclusive to 0
// The llop will be decrementing by 1
 //Using console.log to print the values backwards and brackets notation to access the array's elements 
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  let newArray = [];
  
  for(let key in object){
    newArray.push(object[key])
  }
  
  for(let i = newArray.length - 1; i >= 0; i --){
    console.log(newArray[i])
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
