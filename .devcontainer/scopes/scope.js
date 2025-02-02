// if(true){
//     let a =18;
//     const b = 25;
//     var n =90;
// }
// console.log(a)//not access
// console.log(b)//not acess
// console.log(n)//accessed 90
//global are accessed inside but inside should not be leaked
//scope in node and window is not same 
//>>>>>>>>>>>>> Closures >>>>>>>>
// CLOSURES:-
// A closure is the ability to access a parent level scope from a child scope, even after the parent function has been terminated.
// Eg.
//  function createCounter() {
//   let count = 0; // Variable in the parent function's scope
//   return function () {
//     count++; // Increment the count
//     console.log(count); // Log the current count
//   };
// }
// const counter1 = createCounter(); // Create a new counter
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// const counter2 = createCounter(); // Create another counter
// counter2(); // 1 (starts fresh because it's a new closure)
// counter2(); // 2
// It "remembers" the count variable from its parent scope, even after createCounter has finished running. Each time you call the returned function, it still has access to the count variable.
// Eg.
// function outer() {
//   const outerVar = "Hey I am the outer Var";
//   function inner() {
//     const innerVar = "hey I am an inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }
// const innerFn = outer();
// innerFn();
// Closure: When the outer() function returned the inner() function, JavaScript didn’t destroy the outerVar. Instead, it kept it in memory because the inner() function still needed access to it.This is what makes closures so powerful — the inner() function can access the variables of outer() even after outer() has finished executing.
// The variable is not cleaned up or "garbage collected" which is a term that is often used.
// Eg.in Private variable
// function createGreeting(greeting = "") {
//  const myGreet = greeting.toUpperCase(); 
// return function(name) {
//  return ${myGreet} ${name}; 				op: HELLO wes HELLO kait HEY kait
// };
//  }

// const sayHello = createGreeting('hello');
//  const sayHey = createGreeting('hey'); c
// onsole.log(sayHello('wes')); 
// console.log(sayHello('kait')); console.log(sayHey('kait'));
// Closures are the ability of a child function, or an inner function, to access variables from a higher level scope even after the functions have been called or closed or closed over.
// Uses:
// 1.Preserve Data: They allow functions to "remember" and access variables after their parent scope is gone.
// 2.  Modularity: Help in structuring code and keeping it clean.
// 3.  Avoid Global Scope Pollution: Encapsulate variables and prevent unnecessary global variables.
// 4.  Flexibility: Enable dynamic and reusable function creation.
// 5. Event Listeners and Callbacks
// function addClickListener(buttonId, message) {
//   const button = document.getElementById(buttonId);
//   button.addEventListener("click", function () {
//     console.log(message); // Closure retains access to "message"
//   });
// }
//>>>>>>>>>> HOISTING >>>>>>>>>>>>>>>>>
console.log(addTwo(2))//execute  no error
function addTwo(num){
    return num+2;
}

console.log(addOne(2))// error due to function binds with a variable
const addOne = function(num){
    return num+2;
}
