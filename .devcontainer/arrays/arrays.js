// //
// // JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
//  but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, 
// and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies,
//  rather than deep copies).
//new array define
const arr1 = new Array(1,2,2,521);//array prototype object methods 
arr1.push(9);
arr1.pop();
// Creating/Modifying Arrays
let arr = [1, 2, 3,4,5,6,7,8];
// arr.push(4);    // Add to end
// arr.pop();      // Remove from end
// arr.unshift(0); // Add to beginning
// arr.shift();    // Remove from beginning

// // Transforming
// let doubled = arr.map(x => x * 2);
// let filtered = arr.filter(x => x > 2);
// let reduced = arr.reduce((sum, x) => sum + x, 0);

// // Searching
// arr.includes(2);    // Boolean check
// arr.indexOf(3);     // Index or -1
// arr.find(x => x>2); // First matching element

// // Information
// arr.length;         // Array size
// arr.some(x => x>2); // Any match
// arr.every(x => x>2);// All match

// // Sorting
// arr.sort((a, b) => a - b);  // Numeric ascending
// arr.reverse();      // Reverse order

// // Combining
// let combined = arr.concat([4, 5]);
// let sliced = arr.slice(1, 3);


// //join returns a string not a array
// const arr3 = arr.join()
// console.log(typeof arr)//array object [1,2,3,4,5,6,7,8]
// console.log(typeof arr3)//string 8,7,6,5,4,3,2,1


// splice(): Modifies original array
// slice(): Returns new array without changing original
// console.log("original array",arr);
// const m1 = arr.slice(2,5);
// console.log("Sliced array",m1);//first not included[3,4,5]
// console.log("original array",arr);
// const m2 = arr.splice(2,5);
// console.log("Spliced array",m2);//5 from 2 [3,4,5,6,7]
// console.log("original array",arr);//[1,2,8]

// array.splice(startIndex, deleteCount, item1, item2, ...)
// Key parameters:

// startIndex: Where to begin modifying the array
// deleteCount: Number of elements to remove
// item1, item2, ...: Optional elements to add at the specified position
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// fruits.splice(1, 2); // Removes 2 elements starting at index 1
// // Result: ['apple', 'date']
// let colors = ['red', 'green', 'blue'];
// colors.splice(1, 1, 'yellow'); // Replaces 1 element at index 1
// // Result: ['red', 'yellow', 'blue']
//++++++++++++++++++++++++++++(PUSH)+++++(CONCAT)+++++++++++++(SPREAD)+++++++++++++++++++
const myarr = [1 , 2, 3 ,"hello","dj"]
const urarr = [9 , 5, 8 ,"hii","baby"]
//  myarr.push(urarr)
// console.log(myarr)//[ 1, 2, 3, 'hello', 'dj', [ 9, 5, 8, 'hii', 'baby' ] ]  add up in the same array
// const conarr = myarr.concat(urarr)
// console.log(conarr)//[ 1, 2, 3, 'hello', 'dj',  9, 5, 8, 'hii', 'baby'  ] return a new array

const spreadarr = [...myarr,...urarr]//spread operator is used to expand the array elemnts to single elements
console.log(spreadarr)//[
//     1,       2,    3,
//     'hello', 'dj', 9,
//     5,       8,    'hii',
//     'baby'
//   ]

//>>>>>>>>>>>>>>>>>>>>>>>Flat array >>>>>>>>>>>>>>>>>>>>>>>>>
const a1 = [1,2,3,[2,3,4],[3,4,5,[3,4]]];
const a12= a1.flat(Infinity);//Returns a new array with all sub-array elements concatenated
//  into it recursively up to the specified depth.and infinity means all make to one array
console.log(a12);

//>>>>>>>>>>> Arrays queries>>>>>>>>>>>>>
console.log(Array.isArray("dEBAJYOTI"))//STRING IS NOT AN ARRAY
console.log(Array.from("dEBAJYOTI"))//make string to an array also object to array by from()
// // /[
//   'd', 'E', 'B',
//   'A', 'J', 'Y',
//   'O', 'T', 'I']
//<<<<<<<<<<<<< Important >>>>>>>>>>>>>>>>>>>>>>>>>
console.log(Array.from({name:"dEBAJYOti"}))//object is passed in the from()
//returns [] empty array bcz it confuse to make the array of keys or values

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
let m1 = 12;
let m2 = 13;
let m3 = 122;
console.log(Array.of(m1,m2,m3))







