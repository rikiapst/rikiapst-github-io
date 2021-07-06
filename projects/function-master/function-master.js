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

     if(!object.noises || !object.noises.length){
         return "there are no noises"
            
     } else { return object.noises.join(" ")}
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

function isFriend(name, object) {
var list = object.friends

for(var i = 0; i < list.length; i++){
    if(name.toLowerCase() === list[i].toLowerCase){
        return true;
    } 
        return false;
        
    
}


}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Creating a function that takes in a name and an array of names 
//Returning all of the names that name is not friends with
//Creating an array literal to store the out put of the for loop
//sing a for loop to loop through the array of names 
//Usinf an if conditional to compare the names 
//Then compare that array of friends to the given array of friends 
//Then return all of the names that are in the given array but not in the names friends array
function nonFriends(name, array) {
        var arr = [];
        
        for(var i = 0; i < array.length; i++){
            for(var i = 0; i < [i].friends.length; i++){
                if(array[i].friends[i].toLowerCase() !== name.toLowerCase()){
                    arr.push(array[i].friends[i])
                }
        }
            
        } return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Creating a function that takes in three parameters
//An object, a key and a value
//Update key on the given object with the given value
//If the key does not exist create it using dot notation

function updateObject(object, key, value) {
       if(object.hasOwnProperty(key)){
           object[key] = value;
       } else {
           object[key]
       }
        
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

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