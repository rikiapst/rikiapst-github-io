/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/* KEYWORD LET 

 * To create a varibale we can also use they keyword let!
 * The key word let almost serves the same purpose as they keyword var but not quiet 
 * let was inrtouduced in ES6. Using let instead of var would be considered a best praqctice to avoid errors
 *
 * Unlike the var keyword let is not hoisted to their code block 
 * Let restricts a variable to its code block making the code less prone to errors 
 *
 * These are more similarities between let and var. 
 * variables declared with let can be reassigned and scoped to functions
 
 * Variables declared with let are most importantly scoped to function blocks, if blocks and and loops 
 * Variables declared with var are only scoped to function blocks 

*/

// 1. Declaration //
let name; 

console.log(name) // prints => undefined 
// The name varibale was only declared and not assigned a value 

//2. Assignment//
name = 'Oji'
console.log(name) // prints => "Oji"

//3.Re-assignment//
name = 'Zumi'
console.log(name) // prints => "Zumi"


/* KEYWORD CONST 

 * To create a varibale we can also use they keyword const!
 * The key word const almost serves the same purpose as the keywords var and let but not quiet 
 * const was also inrtouduced in ES6. Using const is considered the more strict and conservative route 
 *
 * Const variables are not hoisted to their code block 
 * Const variables cannot be reassigned  
 * Const variables are scoped to a function block, if blocks and loops
 * 

*/

// 1. Declaration //
//const ame; 

//console.log(ame) // prints => error
// The name varibale has to be initalized when using the keyword const you cannot do declarations with the const keyword 

//2. Assignment//
const me = 'Oji'
console.log(me) // prints => "Oji"

//3.Re-assignment//
me = 'Zumi'
console.log(name) // prints => erroe
//Const variables cannot be reassigned 




/* HOISTING 

Variables declared with the var key word are hoisted to the top of their scope. like in the var 1st example the varibale myName 
returned undefined because it was not assgned a value yet. But if console.log was called on the line before the myName variballe was declared
undefined would have still printed to the console becuase variables declared with the keyword var takes precendence over the other code
the interpertur automatically puts varibales declared with var at the top thus returning undefined 

*/

// 1. Hoisting/ calling before declared  //
console.log(myName); // prints => undefined
var myName;


