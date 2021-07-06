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




Array
// Object
// Function
// Infinity and -Infinity (Google them if you don't know!)
*/