/**
LOOPS! 

Okay so here's an interesting topic to discuss.. Loops! Loops are a way to gain access or look inside of an object or an array '

You can look insid eto see an arrays elments, its indecies and you can add, change or remove any of those elements

With an object you can access its keys and values. With that kindd of access
you can update, replace, remove or add anything to the object Or you can just look inside to see whats there

The only thing about loops is that there are different kinds for different data types!

For looking inside of an array you can use a For Loop or a while loop!

For looking inside of an object you can use ONLY a For In Loop!

The syntax for these loops are very different with a few similarities

Lets start with the for in loop!

The for in loop starts with the keyword for followed by a set of parenthesis(). 
Inside of the parenthesis resides a few different components
The first component is where you declare a variable and assign that variable 
to where you would like to START your for loop. You can start your loop where ever you 
would like to inside of the array. You can start it at the first index, a random
index, the last index, the world is yours

The second component to the for loop inside of the parethesis would be 
where you would like the loop to end
Here, you will use these comparison operators <= >= < > to
Inform the loop where your starting position resides compared to the 
ending condition. This prevents the loop from being an infinite loop

Also these three components are all sepreated with a semicolon :

The third componenet will be the incrementer or the decrementer
This will tell your loop if you want to decrease or increase and by what number 
or amount you like to increse the loops outputs by 

Now that the work is done inside of the parenthesis next would be the code inside of the code block
this resides inside of a set of curly braces
Here is where you can put your code that can execute something onto the array 
or it can do something else  like assign an element inside of the array to another variable 


Now that we have the for loop down lets go to the while loop!

While loops are much more simple. they can be used on arrays and numbers or strings like the for loops
But they do not require so much syntax like the three components required inside of the parenthesis inside of the
for loop. 

Here's the syntax for a while loop.
Its starts with the keyword while followed by a set of parenthesis. Inside of the parenthesis 
is the conditon that needs to be met. Then it is followed by the
set of curly braces that has code that will execute as long as the conditon
inside of the parenthesis remains true 


Now onto the For in loop. This is the loop that can only be used for objects, not arrays, not numbers and 
no strings allowed. The syntax for this one is also pretty cool compared to the for loop


The for in loops starts with the keyword for followed by a set of parethesis
In side resides a few components. First you will need declare a variable
and this varibale will hold the value of the keys inside of the object 
the next component is the key worn in this repersents whats inside of the object 
thats being looped over 
The next componenet is the name of the object or the keyword object that is often used
or replaced with the name of the actual object being looped over.
After thats complete you can now move onto the set of curly braces that holds
code that can be executed on the object or code that can use its access in the object to 
perform certain actions

In the examples below i will demontrate how to use each of the loops
I will use the for loop to loop forward and backwards over an array 
I will use the while loop to loop through a number 
I will use the for in loop to loop through an object 
*/

var prettyColors = ["blue", "black", "grey", "white"]

for(var i = 0; i < prettyColors.length; i++){
    console.log(prettyColors[i])
}
//this will prent the elements inside of the array forward to the console

for(var i = prettyColors.length - 1; i >= 0; i--){
    console.log(prettyColors[i])
}

//this will print all of the elments in the array backwards to the console
var num = 1
while(num < 10){
    console.log("I'm not a ten yet")
    num++
}
//This will print I'm not a ten yet 9 times and increment the num variable until it reaches 10
//then the loop will stop 

var objectStuff = {
    name: "rikia",
    nameAgain: "rikia stewart"
}

for(let key in objectStuff){
    console.log(objectStuff[key])
}


//This will log the values inside of the object to the console using bracket notation 
// Explain while, for, and for-in loops
// Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
// Loop over an Array, forwards and backwards
// Loop over an Object