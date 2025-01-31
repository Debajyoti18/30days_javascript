let n = "20";
let intVal = Number(n);
console.log(typeof intVal);//number
let m = "20abe"
let intVal1 = Number(m)
console.log(typeof intVal1);//number
console.log(intVal1);//Nan
n = null;
intVal = Number(n)
console.log(intVal);//0
n = undefined;
intVal = Number(n)
console.log(intVal);//Nan

let bool = true;
intVal = Number(bool)
console.log(intVal);

//"20"=>20
//"20abe"=>Nan
//true => 1,false=0
   let loggedin = 1
   let isloggedin = Boolean(loggedin)
   console.log(isloggedin)//true
//1=>true 0=>false ""-emptystring => false nonemptystring = true
//number to string-String
//********************************OPERATIONS**************************** */
//+ - * ** / %
// str + str = str
//str + number =str "1"+2="12"
//number +number +str =(num +num)+str 1+2+"2"=32 
//console.log(+true)//1
//Concatenation is when two or more strings are combined into one.
//Interpolation is when you put a variable inside of a string.${}

// const name = 'Wes';
// const hello = `hello my name is ${name}. Nice to meet you`;
//console.log(null > 0)//false
//console.log(null == 0)//false
//console.log(null >= 0)//true Comparisons make null as a number and treatibg as a zero
//console.log(undefind == > >=)// all gives false

// strict check === should be same datattypes
// What if you were to do "10" == 10?
// The console would return true. Why?
// Because the value is the same, but the types are not.
// If you did "10" === 10, it would return false. 

let a = NaN;
let b = NaN;
console.log(a == b);//false
console.log(a === b);//false
console.log(Object.is(NaN,NaN))//true

//According to memory location datatypes are two types PRIMITIVE NONPRIMITIVE
// //1.PRIMITIVE  7TYPES-aLL BY CALL BY VALUE(COPY IS SEND)
// 1.STRING nUMBER Boolean null undefined SYMBOL BigInt
//2.Reference non-premitive(memory me direct)
// Array Objects Functions
//JavaScript is a dynamically typed language. This means:
// 1.Variable types are checked at runtime, not compile time
//2. Variables can hold different types during execution
//3. You don't need to declare variable types explicitly

const id = Symbol('123')
const ids = Symbol('123')
console.log(id === ids)//false
// Every time you call the Symbol() function, it creates a new, unique Symbol value - regardless of the description string you pass to it. 
// The description string ('123') is just a label for debugging purposes. It doesn't affect the Symbol's uniqueness.
// These are two different Symbols
const person1 = Symbol('John')
const person2 = Symbol('John')
console.log(person1 === person2) // false

// This is how you can create references to the same Symbol
const originalSymbol = Symbol('test')
const reference = originalSymbol
console.log(originalSymbol === reference) // true
// If you need to create Symbols that are equal to each other, you can use the Symbol.for() method:
const sym1 = Symbol.for('123')
const sym2 = Symbol.for('123')
   console.log(sym1 === sym2) // true


//****************************** */
//typeof(all the non-primitives like arrays functions object ) are the object-function
// // Numbers
// typeof 42;           // "number"
// typeof 3.14;         // "number"
// typeof NaN;          // "number"

// // Strings
// typeof "";           // "string"
// typeof "hello";      // "string"

// // Booleans
// typeof true;         // "boolean"
// typeof false;        // "boolean"

// // Undefined
// typeof undefined;    // "undefined"

// // Null (this is a known JavaScript quirk!)
// typeof null;         // "object"  

// // Objects
// typeof {};           // "object"
// typeof [];           // "object"
// typeof new Date();   // "object"

// // Functions
// typeof function(){}; // "function"
// typeof (() => {});   // "function"

// // Symbols (added in ES6)
// typeof Symbol();     // "symbol"

// // BigInt (added in ES2020)
// typeof 42n;          // "bigint"