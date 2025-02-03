// //this refers to current context or variables
// const user = {
//     username : "debajyoti",
//     id: 1,
//     welcomemsg: function(){
//         console.log(`${this.username} is logged in`)
//         console.log(this)//{ username: 'debajyoti', id: 1, welcomemsg: [Function: welcomemsg] }
//     }
// }
// user.welcomemsg//nothing print
// user.welcomemsg()//debajyoti is logged in
// // console.log(this)//inside node this refers to global object if not then empty object //{}

// //but in the browser console this refers to global "window "

// // function one(){
// //     let name = "Adyasha"
// //     console.log(this)//many values associated
// //     console.log(this.name)//undefined
    
// // }
// // one()
// // In a regular function (not an arrow function or method), when called normally,
// //  this refers to the global object (window in browsers or global in Node.js).
// // The variable name you declared with let is block-scoped within the function. 
// // It's not added as a property to the global object. That's why this.name is undefined.
// const  one = () => {
//     let name = "Adyasha"
//     console.log(this)//{}
//     console.log(this.name)//undefined
    
// }
//  one()
// // When you log this, you see {} (an empty object) because arrow functions inherit this
// //  from their enclosing scope. In the global scope (where your arrow function is defined), 
// // this is an empty object in the module scope.
// // this.name is undefined because:

// // The variable name is declared with let inside the function scope
// // It's not attached to this
// // The inherited this is an empty object


// // const add = (n1,n2)=>{
// //     return n1+n2;
// // }
// // const add = (n1,n2) => n1+n2
// // const add = (n1,n2) => (n1+n2)
// // const add = (n1,n2) => (username:"debajyoti")//error in passing object
// const add = (n1,n2) => ({username:"deba"})//{ username: 'deba' }
// // () => {} ()=> ()

// console.log(add(2,3))
//>>>>>>>>>>>>> IFFE Immidiately Invoked Function epression ()()
(function one(name){
    console.log(`DB connected ${name}`);
})('debajyoti');


// Or if you still need an IIFE, using arrow function 
// (() => {
//     console.log(`DB connected`);
// })();
// The function is:

// Defined (using function one(){})
// Wrapped in parentheses (function(){}) to make it an expression
// Immediately called using the trailing ()

// This pattern was very common in older JavaScript to:

// Create a private scope for variables before let and const existed
// Avoid polluting the global namespace******important use of iife
// Create modules before ES6 modules

// Modern alternatives:
// javascriptCopy// Using regular modules
// export function connectDB() {
//     console.log(`DB connected`);
// }

// // Or if you still need an IIFE, using arrow function
(() => {
    console.log(`DB connected`);
})();
// IIFEs are less common in modern JavaScript due to the introduction of block scoping (let/const) 
// and proper module systems, but they're still useful to understand as you'll see them in older code.