// str + str = str
//str + number =str "1"+2="12"
//number +number +str =(num +num)+str 1+2+"2"=32 

//Concatenation is when two or more strings are combined into one.
//Interpolation is when you put a variable inside of a string.${}

// console.log(`hello my name is ${name} and my address is ${address}`)

//  const gmae = new String("Debajyoti") here game is a String object contains the Debajyoti in key-value pair such as 
// {0:D,1:e,2:b,3:a,4:j,5:y,6:0,7:t,8:i} so we can access them.console.log(name[0])//D

//follow mdn for String objects methods
 const st = "Debajyoti";
 const nm = st.substring(0,4);
 console.log(nm);//substring always start from zero if -ve start index make it to 0
 
 const mn = st.slice(-6,8);
 console.log(mn);//slice can take -ve values

 "cat".charAt(1); // gives value "a"
 "cat"[1]; // gives value "a"

//  trim()//used to trim start or end space characters trimStart() trimend()
const url = "sdeebkbk@10gmail-com"
console.log(url.replace("-","."));//replace(target ,target to be replace with)

// Note that all comparison operators, including === and ==, compare strings case-sensitively.
//  A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.


// String primitives and String objects also give different results when using eval(). Primitives
//  passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object.
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4
//split()
const str = `hello-i-am-dj`
console.log(str.split("-"));
//CONSTRUCTOR-String()
// Creates String objects. When called as a function, it returns primitive values of type String.
// .slice()
// Extracts a section of a string and returns a new string.



