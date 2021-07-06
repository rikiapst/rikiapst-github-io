// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

//Using a for loop to loop through the numbers 1 - 100
//The loop will loop forward starting at 1 and ending at 100 while incrementing by 1
//Using an if, else if and else conditional statement 
//The order of the conditionals are important so the first conditional will have to check for both the multiples of 5 and 3 
//Using the % operator to check for the multiples of the numbers 1 - 100
//Using the === operator to check the value of the remainder to see if its strictly equals to 0
//Using console.log to print the given phrases 
//Using the amber sand to be inclusive to two comparisons
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for(let i = 1; i <= 100; i++){
        

         if(i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz")
         }  else if(i % 5 === 0){
                console.log("Buzz")
         } else if(i % 3 === 0){
                console.log("Fizz")
        }  else {console.log(i)}
        
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}