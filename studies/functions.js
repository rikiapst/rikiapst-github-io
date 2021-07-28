/**
Okay so now we are onto FUNCTIONNS!! This is the powerhouse of code! Omg functions!
Lets take a moment and imagine code without functions... Nope, to scary! 

Functions not only saves us a bunch of time from rewritting code over and over but it also 
saves us time from debugging code because we had to rewrite it over and over

Functions makes your code more effecient! 

Lets start with what you can do with a function. You can do anything. Thats it, thats the tweet
Well while you cant do anything you can do a lot
Everything else we've descussed inside of this studies project loops, conditional statements, datatypes,
operators, string manipulation, all of that can go inside of a function! Heck, a function
can go inside of a function! like what who created these thing? Acutally, let me look that up, brb...
Okay ladies and gents lets give a round of applause to John MCcarthy! He is the one who started the whole
functional proh=gramming thing in the 1950's at MIT! 

Okay now that I have gotten off track a little lets look into the syntax of a named function. 
This function does the same thinf ad the other fucntions but it uses the function keyword followed but name you 
give it. You can name the function anything, like your name but its best to keep things relevent.

Next you have the famous set of parenthesis that filled with what we call optional parameters. I mean they are called 
parameters but i thought this would be a good time to mention that they are optional. Acutall lets call the,
optional place holding parameters. Yes, parameters are optional and they are also place holders. Sort of like
putting a reserved sign in a parking space. In functions parameters are like those revserved parking spaces
they may be used throughout the code block but will be replaced by what ever argument being passed to it
But we will get to arguments a little later

Next is the famous curly braces of course. In here resides the code block. Any variables created here are 
function scoped also called locally scoped meaning that they can not be accessed outside of the functions scoped. 
Here is where you can also have an optional return statement and with this you can actually returna nother function 
or you can return something else
But with returning function you can be on the verge of creating something called a closure. Closures are functions within a 
function that is using locally scoped variables created in the outer function or uses the outser fucntions parameters 
inside of the inner function. This is the art of creating closures. YOu can have multiple closures within a function but 
an inner function can only have one closure no matter how many times the data is used inside of the inner function

Functions can also be assigned to a vairbale. The syntax is the same besides the beginning. We would need to use one of the delcariton
keywords used to create a variable then use the assignment operator to assign the variable to the function
this is where you would use the function keyword. Then everything else is the same as creating a named function 

But arrow functions is where it gets tricky for me but well save that for later when i get a hang of it because its not
a requirment on this projecct haha 

Oh wait I forgot! Theres one important part that needs to be discused. Without this your function is literally usesless code
Okay lets first talk about the arguments previously discussed. Arguments takes the place of the parameters throughoyt 
the code. Its like the car finally parking in the reserved parking spot. Without the car the spot is just empty 

But in order to pass these aruguments into the function you will need to call the function also known as implementing the 
fucntion. Here's the syntax for that!

Fisrt yuou will need the name of the function and this goes for named functions. Then you will need a set 
of parenthesis with the arguments passed to it insde of it spereated by a comma. You can have multple arguments or you 
can only have one OR you can have ZERO because arguments are optional but the parenthesis are not. This is neededto
actulay call the function and allow it to run its course 

In the below examples I will create a named function with parameters and an assigned function with no parameters 

*/

var great = 600;
var fail = 12;

function firstOne(a,b){
    return a + b;
}

firstOne(great, fail);

var secondOne = function(){
    return 55 + 70;
};

secondOne();


