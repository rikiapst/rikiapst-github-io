// Datatypes in JavaScript are spesific types of data that have different functions, uses, and abilities. 

/* There are two different types of data types. The are SIMPLE/Primitive data types and there are Complex data types.
*
* Let's start with the SIMPLE/Primitive data types. 
* 
* Simple data types are:
        - immutable, meaning they do not store any other datatypes besides simple data types
          They cannot store or hold compleax data types
*       - copy by value, meaning that when they are assigning are reassigning they are
*         copied by its value to the next value 
*       - variables directly store simple data types because they hold very little memory 
*       - there is a spesific amount of memore allocated for variables allowing them to by
*         stored in themselves and copied by value
*
*  Here are the following list of simple data types in JavaScript: 
*       - Number: Numbers include positive and negative numbers, any integer 
                  Example:*/  var num = 5;
                            console.log(num) //print => 5


/*      - String: a string is charcters wrapped in quotes, these characters can me numbers, letter or symbols
*                 strings start at a zero index/charcater. There are different method that can be used to manipulate strings
*                 These methods are listed in the String Manipulation section
                  Example:*/  var str = "This is a string of words and one symbol!";
                              console.log(str) //print => This is a string of words and one symbol!
                    
                    
/*      - Boolean: Boolean values are true or false. These values are commonly used 
*                  in conditional statements which are mentioned later. Here I will 
*                  show an example of variables assigned to booleans
*                   Example:*/  var bool = true; 
                                console.log(bool) //print => true
                                var lean = false;
                                console.log(lean) //print => false 
                                
/*      - NaN: NaN is something that is rarely used so far in my programming but Nan stands for "not a number"
               NaN is the same a number. Nan 
               
*       - Undefined: this can show up many times in the terminal when variables are uninitialized or have no value
                     undefined also shows up when a value is hoisted to the top of its
                     scope which you can find in the hoisted section
                      Example:*/  var num;
                            console.log(num) //print => undefined because num was not assigned a value 

/*       - null: null is used to spesify no value purposely by the person creating the code. This may be use to save it for 
*                 the input of another value at a later time. 
*                  Example:*/ var contactName = null;
                              console.log(contactName) // prints => null contactName have no value 

/** Let's start with the Complex data types. 
* 
* Complex data types are:
        - mutable, meaning they collect other values of its own data type and othe data types simple and complex
*       - copy by refrence, meaning that when they are assigning or reassigning they are
*         copied by its refrence, a shadow copy not its actual value to the next variable 
*       - variables do not directly store complex data types because they a lot of memory 
*       - there is  no spesific amount of memory allocated for complex values allowing them to be infinite and
*         stored by refrence 
*

/*
There are two complex data Types that are named collections, these are called objects and arrays
* They are both considered a collection but they collect data in different ways with different syntax
* *
* /**Arrays
 * elements are listed by its index starting from 0
 * Objects do not have an ordered list 
 * 
 * Arrays have elements 
 * objects have key value pairs 
 * 
 * Arrays are in essence an object thats designed to behave like an array 
 * objects are actually just objects 
 * 
 * 
 * 
 * Objects!
 * Objects are filled with key value pairs, unlike arrays, objects are not orderd by indecies
 * 
 * Objects can store any data type along with storing nested data types
 * 
 * 
 * 
 */



/** Arrays: with arrays you can use the push method
 * unshift or bracket notation or concatenation
 * 
 * You can you use dot notation or braket notation to add to objects 
 */

var arr = ["what", "the", "heck"]
arr.push(" is this")

console.log(arr)


var obj = {
  thoughts: 'none',
  mood: "hungry",
  food: "burnt"
}

obj["moneyForFood"] = null;
//console.log(obj)



/** You can use the splice method to remove things from an array. .pop() or .shift() or delete
 * 
 * You can use the delete operator to delete properites from objects 
 */

 arr.shift();
console.log(arr)


delete obj.moneyForFood

console.log(obj)



// How do you access things from them?
/** for loops for arrays 
 * 
 * for in loops for objects 
 */

for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

for(var key in obj){
  console.log(obj[key])
}
/** I would use an array for data that needs to be stored in a certain
 * ordered or data that didnt need excessive information for each element 
 * 
 * I would use objects if i need to store multiple elements of data for
 * one thing for example if i wanted to store a student and the students name and the students grades but I wanted a bunch of students 

*/

/**
 * Next complex data type are Functions!
 * 
 * Functions are blocks of code that can be used multiple times throughout your code!
 * This saves time and prevents error 
 * The purpose of creating a function is to be able to use a set of code to perform a 
 * certain action like looping through an object or array 
 * You can even capitalize all letters or lowercase or letters
 * Functions allow you to do a number of things
 * 
 * The syntax for a function is diffeerent from the other two
 * complex data types mentioned arrays and functions
 * 
 * Functions have a few main parts:
 * 1. the keyword function or arrow function 
 * 2. a set of parethesis () used to hold parameters
 * 3. a set of curly braces{} used to hold the code, named the code block
 * 4. used another set of parenthesis () to call the function
 * 5. Arguments are passed inside of the function call if needed
 * 6. Parameteres are place holders for arguments 
 * 7. Parameters are not required making arguments not required
 * 
 * 
 * In this example I will create a function that loops through an array
 * and return the array with its elements all lowercased 
 * 
*/

var greeting = ["HEY!"];
function loopLow (array){
    
    for(let i = 0; i < array.length; i++){
        array[i].toLowerCase();
    }
    return array;
}

loopLow(greeting); //=> prints to the console hey!



/**
 * 
*/
