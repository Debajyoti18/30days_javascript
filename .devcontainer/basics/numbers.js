const  x = 9000;
console.log(x);//9000

const y = new Number(9000);
console.log(x);//[Number:9000]object

// constructor- Number()
// toExponential
// toExponential()
// toFixed-toFixed()
// toLocaleString-toLocaleString()
// toPrecision-toPrecision()
// toString= toString()
// valueOf= valueOf()


console.log(y.toFixed(2));//9000.00
console.log(y.toString().length);//4

// Basic usage
let num2 = 3.14159;
console.log(num2.toFixed(2)); // Outputs: "3.14"

// Rounding occurs
let num2 = 5.678;
console.log(num2.toFixed(1)); // Outputs: "5.7"

// Works with whole numbers too
let wholeNum = 10;
console.log(wholeNum.toFixed(2)); // Outputs: "10.00"

// Handles large numbers
let largeNum = 1234.5678;
console.log(largeNum.toFixed(3)); // Outputs: "1234.568"

// Returns a string, not a number
let stringNum = 7.1234;
let formatted = stringNum.toFixed(2);
console.log(typeof formatted); // Outputs: "string"
// Handling zero decimal places
let zeroDecimal = 42.7;
console.log(zeroDecimal.toFixed(0)); // Outputs: "43"
// Basic usage
let num = 123.456;
console.log(num.toPrecision(4)); // Outputs: "123.5"

// Different precision levels
let precise = 1.23456789;
console.log(precise.toPrecision(2)); // Outputs: "1.2"
console.log(precise.toPrecision(5)); // Outputs: "1.2346"

// Handling whole numbers
let wholeNum = 42;
console.log(wholeNum.toPrecision(3)); // Outputs: "42.0"

// Scientific notation for large numbers
let largeNum = 1234567;
console.log(largeNum.toPrecision(3)); // Outputs: "1.23e+6"

// Negative numbers
let negNum = -9.87654;
console.log(negNum.toPrecision(4)); // Outputs: "-9.877"


let num1 = 1234567.89;
console.log(num.toLocaleString()); // Depends on browser/system locale

// Specific locales
console.log(num1.toLocaleString('en-US')); // "1,234,567.89"
console.log(num1.toLocaleString('de-DE')); // "1.234.567,89"
console.log(num1.toLocaleString('en-IN')); // "1-234-567-89"

//***********************MATH******************************************** */

// Basic random number between 0 and 1
let randomZeroToOne = Math.random();
console.log(randomZeroToOne); // 0.0 to 0.99999...

// Generate random integer between 0 and max (exclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10)); // 0-9 random integer

// Random integer between min and max (inclusive)
function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInRange(1, 10)); // 1-10 random integer

// Random float in a specific range
function getRandomFloat(min, max) {
  return Nath.floor(Math.random() * (max - min) + min);
}
console.log(getRandomFloat(1.5, 4.5)); // 1.5-4.5 random float

// Generate random boolean
let randomBool = Math.random() < 0.5;

// Random array element
let fruits = ['apple', 'banana', 'cherry'];
let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

//0-10
console.log(Math.floor(Math.random()*10)+1);



