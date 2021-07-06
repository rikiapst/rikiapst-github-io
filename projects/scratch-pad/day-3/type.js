// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 //Using an if/else conditional statement to test if the given value is an array
 //Using the Array.isArray method to test if the value is infact an array 
 //Using the strictly equals operator to test the data type
 //returning true if true 
//returning false if not an array 

function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if(Array.isArray(value) === true){
        return true
    }else {return false}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 //Using if/else if and else condtional statement to test wether the given value is an object 
 //Using array.isarray method to test wether the given value is an array
 //if its an array i will return false
 //using && operator to also test if the vale is a null data type by using the strictly equas operator
 //and using the keyword null
//Using the !== operator to ensure that the v=given value is not strictly equal to the data type being compared
 //Else return false
 
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if(typeof value === "object" && Array.isArray(value) !== true && value !== null && value instanceof Date !== true){
        return true
    } else  {
        return false}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 //creating an if/else if and else condtional statement to check if the given value is an object, if so return true
 //and also checking to see if the given value was an array if so return true
 //else return false 
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if(typeof value === "object" && Array.isArray(value) !== true && value !== null && value instanceof Date !== true){
        return true
    } else if (Array.isArray(value) === true) {
        return true 
        
    } else{
        return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 //using an if/else if/ and else conditional statement to test the given value agains all data types
 //returning the datatype thats tested in the form of a string 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
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
    } else{return "undifined"}
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
