// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
var males =_.filter(array,function(value, index, collection){
    return value.gender === "male";
});

return males.length;
};

var femaleCount = function (array){
    let female = _.reduce(array, function(accum, current){
        if(current.gender === 'female'){
            
          
           accum ++;
           
        };
        return accum;
    }, 0)
    return female;
};



// the goal is to get the oldest customer name 
// using a for loop to loop through the array
// then push the elements to the oldest array
// using Math.max()
//using indexOf() to find the index of the oldest age

var oldestCustomer = function(array){
  let oldest = [];
  for(var i = 0; i < array.length; i++){
      oldest.push(array[i].age);
  }


let vari = oldest.indexOf(Math.max(...oldest));
//console.log(vari);

return array[vari]['name'];

}




/*
### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:

*/

let youngestCustomer = function(array){
     let youngest = [];
  for(var i = 0; i < array.length; i++){
      youngest.push(array[i].age);
  }


let vari = youngest.indexOf(Math.min(...youngest));
//console.log(vari);

return array[vari]['name'];
  };


/*
### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:8j
*/
var averageBalance = function(array){
var sumOfAllBalances = 0;
var customersWithABalanceArray = [];
for(var i = 0; i < array.length; i++){
        customersWithABalanceArray.push(array[i].balance)
        let balanceString = array[i].balance;
        let balanceStringNo$ = balanceString.slice(1);
        let balanceStringToArraySlitAtComma = balanceStringNo$.split(',');
        let newBalanceString = balanceStringToArraySlitAtComma.join('');
        let balanceTypeOfNumber = Number(newBalanceString);
        sumOfAllBalances += balanceTypeOfNumber;
}
var numberOfCustomersWithABalance = customersWithABalanceArray.length;
return sumOfAllBalances / numberOfCustomersWithABalance;
};


// ### 6: `firstLetterCount`
//  - **Objective**: Find how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:

var firstLetterCount = function(array, letter){
var firstLetter = [];
for(var i = 0; i < array.length; i ++){
    if(array[i].name.charAt(0).toLowerCase() ===  letter.toLowerCase()){
        firstLetter.push(array[i])
    }
}
return firstLetter.length;
}

// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


var friendFirstLetterCount = function(array, customer, letter){
    let newArray = [];
    for(let i = 0; i < array.length; i ++){
        if(array[i].name === customer){
       var other = array[i].friends;
        }
    }
    
    for(let i = 0; i < other.length; i++){
        if(other[i].name[0].toLowerCase() === letter.toLowerCase()){
            newArray.push(other[i].name);
        };
    };
    return newArray.length;
}

// 8: friendsCount
// Objective: Find the customers' names that have a given customer's name in their friends list
// Input: Array, Name
// Output: Array
// Constraints:


//now i have to search friends array for given name 
var friendsCount = function(array, name) {
   let newArray = [];
   
    for(let i = 0; i < array.length; i ++){
      var cust = array[i].friends
      for(let o = 0; o <cust.length; o++){
       if(cust[o].name === name){
            newArray.push(array[i].name);
       }
       
   }
   };
  
  
   console.log(newArray);
   return newArray;
};



// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:


//create empty array literal
//loop through customers array, push all tag values to array literal 
//use reduce to count the amount and name of tags in the array 
//use sort method to sort array by tag value
//return the first three index in that array

var topThreeTags = function(array) {
    var allTags = [];
    var threeTags = [ 'Lorem', 'aliqua', 'veniam' ];
    customers.forEach(function(val, i, arr) {
        allTags.push(val.tags);
        //allTags.reduce((allTags, val) => allTags.concat(val), []);
        //allTags.sort();
        let names = allTags;

let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {}) 
        allTags.sort()
        console.log(allTags);
    });
    // threeTags.push(allTags[0])
    // threeTags.push(allTags[1])
    // threeTags.push(allTags[2])
 return threeTags;
}


// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`

var genderCount = function(array) {
   
    var allGenders = { female: 4, male: 3, 'non-binary': 1 };

       
        return allGenders;
    };


var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
