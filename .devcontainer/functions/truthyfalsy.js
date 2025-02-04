
//falsy values
//false , 0 ,-0,BigInt 0n,"",null,undefined,NaN
//truthy
//"0" ,'false' , " ",[] ,{}, function(){}
//Checking array and objects

let arr = []
//if(arr) wrong
 if(arr.length === 0){
    console.log("Array is Empty");
 }
const muobj = {}
 if(Object.keys(muobj).length === 0){
    console.log("OBJECT IS EMPTY")
 }

 //false==0,false=='',true ==0 true all
 //>>>>>>>Nullish Coalescing Operator (??): null undefined used to 
 //protect the value when coming from db for not occuring errors
 let val1 ;
// val1 = 5 ?? 10//5
// val1 = null ?? 10//10
// val1 = undefined ?? 17
val1 = undefined ?? 17 ??16
console.log(val1)


//??????????? Ternary operator ?????????
//condition ? true : false
