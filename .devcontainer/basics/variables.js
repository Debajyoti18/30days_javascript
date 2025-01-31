/*variables var, const and let


What we need to know right now is just that var and let variables can be changed or updated, and const variables cannot.
In the early days of JavaScript, it was possible to create a variable without first declaring it, and the browser would just add the var on behalf of the user.
But they introduced a new mode into browsers named strict mode, which will throw an error if you try to do something like not declaring a variable properly.

1.scoping-var variables are scoped differently than let and const variables.

var variables are what we refer to as function scoped variables (they are only available within the parent function).
let and const variables are what we refer to as block scoped variables.
let and const were introduced as part of what is called es6, which is only a couple of years old. var has been around since JavaScript was invented.
  
He uses const by default. Anytime he is assigning a new variable, he just defaults it to const because he doesn't know if he'll need to update that value or not.
If he needs to change a value of a variable, he will use a let. Sometimes he will make a variable const and then realize he needs to update it so he will make it a let variable.
Wes almost never uses a var variable. There are some exceptions like when declaring a variable outside of a block but we will go into more detail about that shortly.

NAMING:
As a convention, variables should not start with a capital.Variables must start with either a letter (a,b,c,D,X, etc).
They can also start with or contain an underscore _ or dollar sign $.
They can also contain but may not start with a number.
Tip: the _ symbol is sort of synonymous with a library called lodash, and the $ symbol is sort of synonymous with a library called jQuery so you don't normally make your variables called $ or _ because they have sort of been taken as a convention. You can however certainly include them if you want.    const this-is-kebab-case; but this is not allowed in JavaScript.

Undefined - can be used to set a variable to nothing (we will discuss difference between undefined and null shortly)
Symbol - this is a new one to JavaScript, and it will always give us a guaranteed unique identifier. This is useful for when you are trying to come with a unique identifier inside of an object and you want to make sure you are not also overwriting something that already exists with that id.


eg:
const cher = {
  first: "Cher",
};
const teller = {
  first: "Raymond",	
  last: "Teller",
};
teller.first = "Teller";
teller.last = null;

In the console, if you type 
cher.last you will see the value of undefined returned. When you try teller.last, the value of null will be return.

*/

/*
PREFER NOT TO USE THE VAR .

*/

const name="debajyoti"
name="deepak"//not allowed
let n =10;
n=18;//can be reinitialized
email="debajoti12@gmail.com"//allowed



"use strict";//treat all js code as newer version
// alert() ue for alerting in browser

//datatypes number=> 2 power 53 , string ,boolean,null = empty value,undefind,symbol (for uniqueness),object,typeof()
console.log(typeof null)//object ,null is of object type
console.log(typeof undefined)//undefind

