//>>>>>>>>>>>>>>>>> Objects in depth ==Singleton objects<<<<<<<<<<<<<<<<<<<<<

// const pencils = new Object()
// console.log(pencils)//{} sinleton  empty object 
const pencils = {} //nonsingleton object
console.log(pencils)//{} sinleton  empty object 
//adding  key values in empty object
pencils.id = "123ab"
pencils.name = "Natraj"
pencils.isred = false
console.log(pencils)
//>>>>>>>>>>>>>>> Object inside objects >>>>>>>>>>>>>>>>>>>>
const marker = {
    name : "camlin",
    color:{
        red:{
            id :1,
            firstname:"Debajyoti"
        }
    }
}
// marker.name → "camlin"
// marker.color → gets you the color object
// marker.color.red → gets you the red object
// marker.color.red.firstname → finally gets you "Debajyoti"
//>>>>>>>>>>  CHAINING <<<<<<<<<<<<
// If you want to check if a path exists before accessing it (to avoid errors), you could use optional chaining:
// javascriptCopyconsole.log(marker?.color?.red?.firstname)
console.log(marker.color.red.firstname)
//>>>>>>>>>>>>>>>>> cOMBINING OBJECTS >>>>>>>>>
const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}
// const obj3 = {obj1,obj2}
// console.log(obj3)//{ obj1: { a: 1, b: 2 }, obj2: { a: 3, b: 4 } } nested problem
// const obj4 =Object.assign(obj1,obj2)//{ a: 1, b: 2, c: 3, d: 4 }
// console.log(obj4)
const obj4 = Object.assign( {}, obj1, obj2)//most prefer to adding objects together
    console.log(obj4)//{ a: 1, b: 2, c: 3, d: 4 }
    //>>>>>>>>>>>>>>>>> Object.assign()
    // Object.assign() in JavaScript - it's a method used to copy properties from one or more source objects into a target object.
    // Basic syntax:
    // javascriptCopyObject.assign(target, ...sources)
    // Here are some practical examples:
    // Basic Object Copying:
    // javascriptCopyconst target = {};
    // const source = { name: "John", age: 25 };
    // Object.assign(target, source);
    // console.log(target); // { name: "John", age: 25 }
    
    // Merging Multiple Objects:
    
    // javascriptCopyconst object1 = { a: 1 };
    // const object2 = { b: 2 };
    // const object3 = { c: 3 };
    
    // const merged = Object.assign({}, object1, object2, object3);
    // console.log(merged); // { a: 1, b: 2, c: 3 }
    
    // Property Overwriting:
    
    // javascriptCopyconst target = { a: 1, b: 2 };
    // const source = { b: 3, c: 4 };
    
    // Object.assign(target, source);//all src to target
    // console.log(target); // { a: 1, b: 3, c: 4 }
    // Important things to note:
    
    // Shallow Copy:
    
    // javascriptCopyconst original = { 
    //     name: "John",
    //     address: { city: "New York" }
    // };
    
    // const copy = Object.assign({}, original);
    // copy.address.city = "Boston";
    // console.log(original.address.city); // "Boston" - nested objects are referenced, not copied
    
    // Multiple Sources:
    
    // javascriptCopyconst result = Object.assign({},
    //     { a: 1 },
    //     { b: 2 },
    //     { b: 3 }  // Later sources override earlier ones
    // );
    // console.log(result); // { a: 1, b: 3 }
    
    // Using with Arrays:
    
    // javascriptCopyconst array = Object.assign([], [1, 2, 3]);
    // console.log(array); // [1, 2, 3]
    // Common Use Cases:
    // javascriptCopy// Creating object copies
    // const original = { x: 1 };
    // const copy = Object.assign({}, original);
    
    // // Merging configurations
    // const defaultConfig = { theme: 'light', fontSize: 12 };
    // const userConfig = { theme: 'dark' };
    // const finalConfig = Object.assign({}, defaultConfig, userConfig);
    
    // // Adding methods to objects
    // const person = { name: 'John' };
    // Object.assign(person, {
    //     sayHi() {
    //         return `Hi, I'm ${this.name}`;
    //     }
    // });
    // Remember:
    
    // It performs a shallow copy
    // Properties with the same name are overwritten
    // The target object is modified and also returned
    // Non-string properties are automatically converted to strings
//"""""""""""""""""""""""" SPREAD OPERATOR  for combining """""""""
const obj5 = {...obj1,...obj2}
console.log(obj5)//{ a: 1, b: 2, c: 3, d: 4 }

//>>>>>>>>>>> Database array of objects >>>>>>>>>
const users = [
    {
        id:1,
        email:"debaljk@gmail.com"
    },
    {
        id:1,
        email:"debaljk@gmail.com"
    },
    {
        id:1,
        email:"debaljk@gmail.com"
    }
]
//for accesing
console.log(users[1].email)
const pens ={
    name:"elkos",
    price:25,
    color:"red",
    isgood :false,
  

}
console.log(Object.keys(pens))//[ 'name', 'price', 'color', 'isgood' ] of type array
console.log(Object.values(pens))//values in array
console.log(Object.entries(pens))
//[
//     [ 'name', 'elkos' ],
//     [ 'price', 25 ],
//     [ 'color', 'red' ],
//     [ 'isgood', false ]
//   ]
console.log(pens.hasOwnProperty('isLogged'))//false usefulin database integration

