// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
 //Using the .length method to return the length of the string 
function length(string) {
    // YOUR CODE BELOW HERE //
    
return string.length 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
 
 //Using the toLowerCase() function to force the given string parameter to lowercase 
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
 
 //Using the .toUpperCase() function to force the given string parameter to uppercase and return its values 
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 
 //Using the split method to split the string into an array of thrings
 //Creating a new variable to assign the split string to 
 //Using the join method to join the array of strings with a dash 
 //Using the toLowerCase function to forcae the charcters to lowercase characters 
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

let newArr = string.split(' ')

return newArr.join("-").toLowerCase()


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 //Using an if and else statement to compare the given string first charcacter to the given character 
 //Using the charAt() function to access the first charcater in the string 
 //Forcing the given character and the string first charcter to lower or upper case to compare
 //Using the strictly equal operator to comapre the charcaters 
 //If equal return true else return false 
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    if(string.charAt(0).toLowerCase() === char.toLowerCase()){
        return true 
    } else {return false}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 //Becuase the function is case insensitive, forcing the chacaters to uppercase or lower case to compare charcaters
 //Using the charAt function to access a spesific character in the sting 
 //Using the .length method -1 to access the last chacter in the string 
 //Using an if and else conditional statement to compare the chacters and return true if equal and false if not 
 //Using the strictly equals operator to compare charcaters 
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    if(string.charAt(string.length -1).toLowerCase() === char.toLowerCase()){
        return true;
    } else {return false}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
 
 //Using the + operator to return the given string parameters concatenated 
 
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 
 //Using the join method to join the given strings into one stirng with no spaces by using a close set of quotes 
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

        return args.join("");
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
 //Using an if and else conditional statement to compare the length of the two given string parameters
 //Using the .length method to access the number of charcaters in a string 
 //Using the less than or greater than operator to compare string lengths 
 //Returning the string with the longest length
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    if(stringOne.length > stringTwo.length){
       
        return stringOne;
        
    } else {return stringTwo}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 //Using an if, else if and else conditional statements to compare the heiarchy of the given string charcaters 
 // Using the greater and less than operators to compare
 //I can compare the strings alphabetacol order by just using the comapring operators 
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if(stringOne > stringTwo){
        return 1
    } else if (stringOne < stringTwo){
        return -1
    } else {return 0}

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

        if(stringOne < stringTwo){
        return 1
        } else if (stringOne > stringTwo){
        return -1
        } else {return 0}


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
