/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declaring a variable assigning it to an empty object
var animal = {};
//Using dot notation to add a property to the animal object
animal.species = "earwig";
///using bracket notation to add a property to the animal
animal["name"] = "Creepy";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating an array literal
var noises = [];
//Using bracket notation using the number 0 to access th eifrst element in the array 
noises[0] = "crawly";
//using .push to add to end of array
noises.push('scwilly');
//using .unshift to add to the beginning of the array 
noises.unshift("bleepbloop");
//Using .length to access the last index of the array and assign it to an element 
noises[noises.length] = "rippy";
//using console.log and .lenght to log the length of noises
console.log(noises.length);
//using console.log and .length -1 to access the last element in the array and print it
console.log(noises.length -1);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
/////////////////////////////////////////////////////////////////////
//using bracket notation to add the noises array to the noise property on animal
animal["noises"] = noises;
//using the push method and dot notation to add another noise to the noises array inside of the animals noises property 
animal.noises.push('weep');
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    You can access propreties on on=bjects using bracket notation 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declaring animals variable assigning it to an array literal
var animals = [];
//using .push to push animal to the animals array
animals.push(animal);
//using console.log to log the screen 
console.log(animals);
//creating a variable using var named data 
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//using push to push duck to animals
animals.push(duck);
console.log(animals)

var mouse = { species: 'mouse', name: 'staci', noises: ['mip', 'wip', 'tip', 'lip'] }
animals.push(mouse);

var rabbit = { species: 'rabbit', name: 'plami', noises: ['ven', 'ten', 'wen', 'men'] }
animals.push(mouse);
console.log(animals)
console.log(animals.length)



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//We chose an array becuase the data structure would just need to hold
//the list of friends which would be easy to store in and access in an array 

var friends = [];

//I: The animal array 
//O: A random index in the animal array 
//C: Using the math. random function
//E: NONE 

//Using math.floor to get the greatest integer and no decimals
//Using math.random to get the random index 
function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
} 

friends.push(animals[getRandom(animals)].name)

animals[getRandom(animals)].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}