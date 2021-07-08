// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
      if(typeof value === "string"){
        return "string"
    }else if (Array.isArray(value) === true){
        return "array"
    } else if(typeof value === "object" && Array.isArray(value) !== true && value !== null && value instanceof Date !== true){
        return "object"
    } else if(typeof value === "number"){
        return "number"
    } else if(typeof value === "boolean"){
        return "boolean"
    } else if(value === null){
        return "null"
    } else if(value instanceof Date === true){
        return "date"
    } else if(typeof value === "function"){
        return "function"
    } return "undefined"
    
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//I: An array and a number
//O: Multiple different return satements 
//Creating a afunction that takes in an array and a number
//using an if conditional to run multiple test inside of the function
//The first test will use the array.isarray method to test if the given array parameter is in fact an array 
// If the array is not an array return an empty array using the ! operator
// In the next conditional test if the given number parameter is a number if its not a number using typeof
//If its not a number return the first element in the given array using bracket notation
//Next conditional test if the given number is greater that array.length -1 is so, return the entire array
//if all else fails use the else statement to return the given number of elements in the array

_.first = function(array, number){
   if(!Array.isArray(array)){
       return [];
   } else if(typeof number !== "number"){
       return array[0];
   } else if(number > array.length - 1){
       return array;
   }else {
       return array.splice(0,number)
   }
   
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//Creating a function that takes intwo parameters an array and a number
//using arra.isarray to test if the given array is an array data type if its not return empty array 
//if the number is not a number using the typeof operator returning the last element in the array using bracket notation and the .length method
// using .splice to return the last number of elements in the array

_.last = function(array, number){
    if(!Array.isArray(array)){
        return [];
    } else if(typeof number !== "number"){
        return array[array.length - 1];
    }else if(number > array.length - 1){
        return array;
    } else{
        return array.splice(array.length - number, number)
    } 
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//Creating a function with two inputs of an array and a given value
//Returning the index of the array that is the first occurrance of the given value
//Using a for loop to loop through the given array 
//using an if conditional to test wether the given value is inside of the array and then return its index
//if the given value is not inside of the array return -1 

_.indexOf = function(array, value){

  
    for(var i = 0; i < array.length; i++){
       
        if(array[i] === value){
            return i
        } 
        
    }return -1;
    
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//function takes in two parameters an array and a value 
// return true if array contains value
//Using a for loop to loop through the array 
//Using an if conditional to test if value is in the given array
//Returning true if it is 
//returning false outside of the loop if its not 

_.contains = function(array, value){
    
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    } return false;
    
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
        }} else {
            for(var key in collection){
            func(collection[key], key, collection)
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// creating a function that takes in an array 
// returning a new  array with the duplicates removed
// creating an array literal to stor the array elements 
//using the indexOf function that was created above indexOf returns the first occurance of a value in an array

_.unique = function(array){

      let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//Creating a function that takes in an array and a function
//Call a function on each element its index and the array
//return a new array of elements if true 
_.filter = function(array, func){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
         newArray.push(array[i])  
         
        }
    }return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//creating a function that takes in two parameters an array and a function
// using a for loop to loop through the array and call the function on each element, index and array 
// return a new array of elements that return false from the function
//Creates a new array literal to store the functions outputs

_.reject = function(array, func){
    var newArr = [];
    
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            newArr.push(array[i])
        }
    } return newArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//Creating a function that takes in an array and a function
//creating two emprty arrays to store the nested array falsy values
//creating a for loop to loop through the arrays
//using an if and else conditionaal statement to test for true and falsy values
//assigning truthy values to an arry
//assigning the falsy values to another array 

_.partition = function (array, func){
    var arr1 = [[],[]];
  
    
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
           arr1[0].push(array[i]);
        } else if(func(array[i], i, array) === false){
           arr1[1].push(array[i]);
            //arr1.push(arr2);
        }
    } 
    
    return arr1;
    
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//Creating a function that takes in a collection and a function
//create two array literals to store the output of the function calls
//test wether the given collection is an array or an object using a conditional statement 
//using array.isarray and typeof for object
//using a for loop and for in loop to loop over the array and the object to access its values 

_.map = function(collection, func){
    var arr = [];
    var obj = [];
    
    if(Array.isArray(collection) === true){
        for(var i = 0; i < collection.length; i++){
            arr.push(func(collection[i], i, collection))
            
        } return arr;
    }else if(typeof collection === "object"){
            for(var key in collection){
                obj.push(func(collection[key], key, collection))
                
            }return obj;
        }
    
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
