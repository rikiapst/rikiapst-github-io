/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using a for loop to loop through the array
//Using an if conditional to test wether the given name is in the objects of the array
function search(animals, name){
    
    for(var i = 0; animals.length; i++){
        if(name === animals[i].name){
        
            return animals[i];
        } else if(name !== animals[i].name && i === animals.length - 1) {
            return null;
            
        }
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using a for loop to loop through the given array 
//Using an if conditional statement to check the value of the given name to be === to the name property on animals
//if true then replce the object with the replacement parameter 
function replace(animals, name, replacement){
       for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
        
            animals[i] = replacement
        }
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using a for loop to loop through the given array 
//Using an if conditional statement to check the value of the given name to be === to the name property on animals
//Using the .splice method to remove the object if the condition it true 
function remove(animals, name){
        for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
        
           animals.splice(animals[i], 1);
        }
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using a for loop to loop through the given array 
//Using an if conditional statement to check the value of the given name to be === to the name property on animals
//using the && operator to check if the length of species and name is greater than 0 
//using the .push method to add the object to the animals array is true 
function add(animals, animal) { 
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === animal.name){
            return "This animal already exists";
         } else if(animal.name.length > 0 && animal.species.length > 0){
           animals.push(animal);
        } 
        
} }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
