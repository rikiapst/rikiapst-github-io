//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values inside of an arrays
//Using a for in loop  to loop through the object and access its values
//Craeting an array literal to store the output of the loop
//Using the push method to push the loops output values into the array 
//Returning an array of the objects values 
function objectValues(object) {
    let arrObj = [];
    
    for(let key in object){
        arrObj.push(object[key])
    }
    return arrObj;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take in an object and return all its keys in a string diveded with a space
//Using a for loop to loop through the object
//Creating an empty array to store the output of the loop
//Accessing the keys of the object by using the key keyword
//Using the .join method to join the array into a string divided with a space \
//assigning that value to a new variable and return the new variable

function keysToString(object) {
    let arr = [];
    
    for(let key in object){
       arr.push(key);
    }
    return arr.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take in an object and return its string values in a string all seperated by a space 
//I am assuming this means to make sure the value is a string datatype if so this is what i will do
//create an array literal 
//Loop through the object using a for in loop
//Using an if conditional to test if the value is a string
//Using the typeof and === operator to test objects values 
//Use the array literal to store the loops outputs 
//Using the join method to join the array into a string divided by spcaes 
//returning the string
function valuesToString(object) {
    let arr = [];
    
    for(let key in object){
        if(typeof object[key] === "string"){
            arr.push(object[key]);
        }
    } return arr.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take in an argument and return "arry" if its an array and "object" if its an object 
//Using an if else conditional statement to test if the given value is an array or an object 
//Using the typr of, instance of and array.isarray method along with the &&, !== and === oberators
//Testing for arrays, objects, dates and null values 
function arrayOrObject(collection) {
    
    if(Array.isArray(collection) === true){
        return "array";
    } else if (typeof collection === "object"){
        return "object";
        
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using the .charAt method to access the first character in the string
//Using the touppercase method to force that single character to upper case
//Using the .substr method to add the rest of the letters onto the string 
function capitalizeWord(string) {
 
 string = string.charAt(0).toUpperCase() + string.substr(1)  
 return string;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Creating a new variable and assigning it to the string.split turning it into an array
//Using a for loop to loop through the array
//Reassigning each element to the smae value but with the first letter capitolized
//Using the .charAt method to access the first character in the string
//Using the touppercase method to force that single character to upper case
//Using the .substr method to add the rest of the letters onto the string 
function capitalizeAllWords(string) {
    var newStr = string.split(" ");
    
    for(var i = 0; i < newStr.length; i++){
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substr(1);
    }
    return newStr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Take in an object with a name property
//Return a message saying "welcome name"
//using string interpilation
//Using a for in loop to loop through the object 
//Accessing the obje
function welcomeMessage(object) {
    
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.substr(1) + "!";
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
     return object.name.charAt(0).toUpperCase() + object.name.substr(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.substr(1) ;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

        var str = "";
     if(object.hasOwnProperty('noises') === true && object.noises.length > 0 && Array.isArray(object.noises) === true){
            str += object.noises.join(" ")
            return str
     } else {return "there are no noises"}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using .split to split the given string into an array
//Looping through the array using a for loop
//using an if conditionalt statement to compare the elments in the array to the given woord using the === operatpr
//if word is in string return true else return false
function hasWord(string, word) {
    var newArr = string.split(" ");
    
    for(var i = 0; i < newArr.length; i++){
        if(newArr[i] === word){
            return true;
        } else if (word !== newArr[i].name && i === newArr.length - 1){return false; }
    }
}
 

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    object.friends.push(name);
    
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Creating a function that takes in a name and an object 
//Return true if the given name is in the friends array within the given object
//Return false if there are no friends and if names is not a friend in the friends array
function isFriend(name, object) {

if (!object.friends) {
    return false;}
    
var list = object.friends


for(var i = 0; i < list.length; i++){
    if(name.toLowerCase() === list[i].toLowerCase()){
        return true;
    } 
} return false;




}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a function that takes in two parameters an array of names and a name 
//access the given names friends array using dot notation
//loop through the friends array
//create an array literal to store the outputs
//
function nonFriends(name, array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(!array[i].friends.includes(name) && array[i].name !== name){
            newArr.push(array[i].name);
        } 
    } return newArr;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Creating a function that takes in three parameters
//An object, a key and a value
//Update key on the given object with the given value
//If the key does not exist create it using dot notation

function updateObject(object, key, value) {
       if(!object[key]){
           object[key] = value;
       } else {
           object[key] = value;
       }
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a function that takes in an object and an array of strings
//Looping through the array of strings to access its elements in the array
//creatinf an if conditional to test if the elements inside of the array are properties on the given object peram
//Using the hawOwnProperty method to check 
//Using the delete operator if the condition is true
function removeProperties(object, array) {
     
     for(var i = 0; i < array.length; i++){
         if(object.hasOwnProperty(array[i]) === true){
             delete object[array[i]];
         }
     } 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a function that takes in an array parameter
//creating a for loop to loop through the array 
// Using an if conditional to test each array element against each other
//creating an array literal to push the non duplicates to 
// returning the new array of non duplicates 
function dedup(array) {
    var newArr = [];
    
    for(var i = 0; i < array.length; i++){
        
        if(!newArr.includes(array[i])){

            newArr.push(array[i])
        }
    } return newArr;

}
// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}