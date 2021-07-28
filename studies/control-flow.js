
/**
Control flow

Understanding control flow
Here is one of my favorite things about learning javascript! If staements and else if statement s and else statements are
made to check for conditionals and return or perform a certain action

This helps with the flow of your code hinse the name control flow
You can prevent your code from having certain errors by using the conditional chains
Implementing the else statement assures something will be returned or some action
will happen regardless if the pervious conditions werent met
This ensures that something well always happen and you get to desicde with that something is

Lets start with some syntax rules with the control flow

The keyword if is used to start off the conditional chain
followed by a set of parenthises. This is where you will store
your condition! This condition will result to a boolean value
If the set of code in the parethesis is true then the code in the 
code block will execute. This code in the code block resides in a set of 
curly braces {}. You can do a number of things inside of the curly braces

Now lets go on to the next set of syntax rules. Thes lies with in the else if statemnt 
These statements will only execute if and only if the first if statement condition results to false
The syntax is the same as if conditionals but the else if statements need the keyword else infront of 
the keyword if and it is also chained next to the last curlu braxe ot the if statement 


Next we have the else statement. This one is the special one. It only runs if all or the pervious conditionals results to false.
And unlike the if and the else if statement the else statement does not use the set of parethesis meaning that they
do not have any conditionals. That is because it is only going to execute the code in its code block 
only if all of the other conditionals results to false

The next important thing to note is that the if conditional statement is required! The else if staments and the else statements are not 
required. Also there can be multiple different else if statements but there can only ever be one else statement 
and there can only be one if statment 

In the examples below i will demonstarte conditional staments including the if, else if and else staments 

*/

var colors = "blue"

if(colors === "yellow"){
    console.log("why yellow though?")
}else if( colors === "black"){
    console.log("I like black but I thought it was something else")
} else if(colors === "purple"){
    console.log("purple is cool its just not for me")
} else {
    console.log("I could have sworn the color was blue but okay i guess")
}

//This conditional chain has an if statement, two else if statements and one else statement 
//none of the conditons were true so I could have sworn the color was blue but okay i guess will be logged to the console

/**
 * Okay lets not forget about the switch! This one is similar to the if,else if and else conditonal chain but its 
 * a little bit different and also have different syntax but the goal is all the same. To have code less prone to errors
 * and a smooth testing ride t
*/


//Statements is code that performs an acction

//Expressions code that resolves to a value and expressions are also statments 

//Conditional statwments are expressions because they evealute to a boolean value 