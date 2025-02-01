//1.singletonobject when created from constructor
// Object.create

//Symbol declaration
 const mySym = Symbol("key1")
// Here, Symbol("key1") creates a new unique symbol. The string "key1" is just a description or label - it's for debugging purposes and doesn't affect the symbol's uniqueness. Two symbols with the same description are still different symbols:
// javascriptCopyconst sym1 = Symbol("key1")
// const sym2 = Symbol("key1")
// console.log(sym1 === sym2) // false
// Now looking at your object creation:
// const pens = {
//     name: "elkos",
//     price: 25,
//     color: "red",
//     isgood: false,
//     // mySym: "mykey1" // This would treat mySym as a string key
//     [mySym]: "mykey1"  // This correctly uses the symbol as a key
// }
// The key difference is in how you add a symbol as an object property:
// If you write mySym: "mykey1", JavaScript treats mySym as a string key
// Using square brackets [mySym]: "mykey1" tells JavaScript to use the actual symbol as the key
// To access the symbol property:
// javascriptCopyconsole.log(pens[mySym])  // "mykey1"
// // NOT pens.mySym - this won't work

//2.object litrals 
const pens ={
    name:"elkos",
    price:25,
    color:"red",
    isgood :false,
    // mySym:"mykey1"//error in  declaration of symbol inside the object//gives a string
    [mySym] : "mykey1"//correct represent of symbol

}
//>>>>>>>>>> Accesing the object members>>>
console.log(pens.color)//red
// console.log(pens[color])//error
console.log(pens["color"])//give with string//red
//if inside the object = "name": "elkos" i.e the key is in the string 
// format then it cannt never be accessed
//console.log(pens.name)//give //error
//accessing symbol
console.log(pens[mySym])//mykey1
//change values of object by override
pens.color="blue"
console.log(pens.color)//blue
//Freeze object to fixed vales
// Object.freeze(pens)
pens.color="white"//cann't change the values of the object after freeze

//functions are treat as variables in js
pens.greeting = function(){
    console.log(`Hello ji, ur pen is ${this.name}`);
}
console.log(pens.greeting)//[Function (anonymous)]
//Function not executed but the reference is came as above op
console.log(pens.greeting())//print hello ji 







