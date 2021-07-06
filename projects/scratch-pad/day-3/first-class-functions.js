 // #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
 //creating a function with a parameter name value to test against 
 //Using an if and else if statements to check the value of the is a number or a string 
 //Using the typeof operator to check the value of the base and value parameters 
 //Using a nested if and else conditional statments tot test compare values of which is less or greater
 //Using the number keyword to test for numbers and the string keyword to test for strings
 //Using the strictly equal operator to test for the datat type
 //If the base is a string or a number use the comparison operator to test which is greater 
 
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value){
        if(typeof base === 'string' && typeof value === 'string'){
            if(base > value){
                return false
            } else {return true}
        } else if(typeof base === 'number' && typeof value === 'number'){
            if(base > value){
                return false;
            } else{ return true}
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
 //Creating an inner function that has a parameter named value
 //Creating an if and else if statment to test the values of the base and value parameter 
 //Using the typeof urnary operator to test the data types
 //using a nestesd if/else condtional statement to test whoch is greater or less than the other
 //Returning a boolean value from the function thats being returned
 //I wonder if i need to check the values at all?? 
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
      return function (value){
        if(typeof base === 'string' && typeof value === 'string'){
            if(base > value){
                return true
            } else {return false}
        } else if(typeof base === 'number' && typeof value === 'number'){
            if(base > value){
                return true;
            } else{ return false}
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 //Creating a function that will be returned inside of the createStartsWithFiler 
 //that has the parameter named string that takes in a string
 //Using an if/else statement to compare the first character of the string to the given character 
 //Forcing the string's first charcater and the given character to lowercase using the .toLowerCase() method
 //Accessing the string first character by using the charAt() function using the number 0 for the first index
 
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        if(startsWith.toLowerCase() === string.charAt(0).toLowerCase()){
            return true;
        }else {return false}
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
  //Creating a function that will be returned inside of the createEndssWithFilter 
 //that has the parameter named string that takes in a string
 //Using an if/else statement to compare the last character of the string to the given character 
 //Forcing the string's last charcater and the given character to lowercase using the .toLowerCase() method
 //Accessing the string last character by using the charAt() function using the .length -1 method for the last element
 
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
        return function(string){
        if(endsWith.toLowerCase() === string.charAt(string.length -1).toLowerCase()){
            return true;
        }else {return false}
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 //Create an array literal to store the output of the modify function parameter
 //Using a for loop to loop over the array of strings 
 // Using a function call to call the modify function on each element of the array of strings
 //Use the push method to push the function call value into the array literal 
 //return the new array literal 
 
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    let arr = []
    
    for(let i = 0; i < strings.length; i++){
        arr.push(modify(strings[i]))
    }
    
    return arr;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 //creating a for loop to loop through the array of strings
 //Using the test function to call on each string inside of the array 
 //using an if/else statement to test if all of the strings that were passed to the test function are all true
 //if not all true false will be returned 
 //Have to return outside of the loop inorder to test all of the loops outouts in this case its the array of strings 
 
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    for(let i = 0; i < strings.length; i++){
        if(test(strings[i]) === false){
            return false;
        } 
    }
    
    
    return true
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
