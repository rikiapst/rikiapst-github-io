/** Operators in Javascript are used to manipulate values 
 * by using a spesific operator. There are six different
 * operators that have different uses that I will explain
 * 
 * 
 * ASSIGNMENT OPERAORS
 * - These operators include a very important sign, the equal sign 
 * 
 * Assignment operators are used to asign or reassign a value to another value
 * In this example I will use the var keyword to create a variable and assign it a value
 * using the assignment operator, then I will reassign the value
 * With assignment operators you can also include arithmatic opertors to change the value 
*/

var num = 1;
console.log(num) //=> prints 1

num = 2;
console.log(num) // => prints 2

num += 3
console.log(num) // prints => 5 in this example the number 3 is added to the value of num and also reassigns it

num *= 2
console.log(num) // prints => 10 in this example the multiplication operator is being used and reassigns the num to the new value



// Arithmetic operators!
/** I've showed a glimpse into arithmetica operators in the above examples but there are a few more that I did not mention
 * Arithmeitic operators perform mathematical actions on to the decided operands
 * There are five areithmetic operators:
 *  - subtraction
 *      The subtraction operator uses - symbol and subtracts one vvalue from another
 * 
 *  / division
 *      The division operator uses the / symbol and divides 
 * 
 *  * multiplication
 *      The multiplication operator uses the * symbol and multiplies 
 *  + addition 
 *      The addition operator uses the + symbol and adds one value to another including concatenating 
 *  % remainder/modulo
 *      This returns the remainder of a value
 * 
 * 
*/

var numbers = 0;
console.log(numbers) // prints 0

numbers = 0 + 1;
console.log(numbers) // prints 5

numbers = numbers * 5;
console.log(numbers) // prints 5

numbers = numbers - 1;
console.log(numbers) // prints 4

numbers = numbers / 2;
console.log(numbers) // prints 2


numbers = numbers % 2

console.log(numbers) // prints 0

// Comparison operators
/**
Comparison operators do just that, compare one value to another
These Operators results to a bolean value true or false

== This is the lightly equal operator meaning that it compars two values only by the characters not by its data type
=== This is the strictly equal operator, this operator checks the charcters and the datatype 
!= This is the not lightly equal operator meaning it compars two values only by 
    the characters not by its data type using the bang operator
!==  This is the not  equal operator, this operator checks the 
    charcters and the datatype using the bang operator 
>= This operator is the greater than or eqal to which is inclusive to the value being compared 
>  This is the greater than operator
<= This operator is the less than or eqal to which is inclusive to the value being compared 
<  This is the greater than operator

Compariosn operators are commonly used in conditional statements
*/

var doll = 1;

if( doll == "1"){
    return true;
}

// prints true because 1 and "1" are the same characters

if( doll === "1"){
    return false;
}
// prints false because 1 and "1" are not the same data types 1 is a number and "1" is a string 

if( doll != "1"){
    return false;
}
// prints false because 1 and "1" are the same characters and when compared lightly results to the same

if( doll !== "1"){
    return true;
}
// prints true because 1 and "1" are not the same data types 1 is a number and "1" is a string 

var barbie = 5;

if(barbie > doll){
    return true;
}
//prints true because barbie has a value of 5 and is greater that doll which has the value of 1

if(barbie < doll){
    return false;
}
//prints false because barbie has a value of 5 and is greater that doll which has the value of 1

for(var i = 0; i <= 5; i++){
    console.log(i)
}
//prints numbers 1 through 5 becuase the number 5 is inclusive in the comparison 

for(var i = 5; i >= 1; i--){
    console.log(i)
}
//prints numbers 5 through 1 backwards becuase the number 1 is inclusive in the comparison 

// Logical operators
/** Logical operators also resolves to a boolean value
 * Logical operators can be used on any data type
 * 
 * || OR operator is used to compare two values where at least one needs to result to true to return true
 * 
 * && AND operator  is used to compare two values where both values have to pass
 * 
 * ! NOT operator is used 
*/

if(1 === 1 || 1 === 5){
    return true;
}

//prints true because one of the comparisons resolves to true 

if(1 === 1 && 1 === 5){
    return true;
} else {return false}

//prints false because one of the comparisons resolves to false when using the && both have to be true


