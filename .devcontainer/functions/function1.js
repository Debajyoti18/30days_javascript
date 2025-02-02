// function add(num1 , num2){
//     console.log(num1 + num2);
// }
// add//referncing a function
// add()//execute a function gives output NaN as no arguments
// add(3,"4")//34
// add(4,null)
// const res = add(6,8)
// console.log("Result :",res)//undefined

function add(num1 , num2){
    return (num1 + num2);
    console.log(res)//nothing print after the return
}
const res = add(6,8)
console.log(res)//14

// if nothing is passed as arguments to the function then parameter shows undefined


function userName(user){//we can give default value
    if(!user){
        console.log("No aragument passed");
        return;
    }
    console.log(`${user} is logged in`)
}
userName("")//No aragument passed undefined if nno if statement
userName("Debajyoti")//Debajyoti is logged in

function calculateCartPrice(...num1){//rest operator gives array take multiple values
    return num1;

}
console.log(calculateCartPrice(22,33,44,22,434))//[ 22, 33, 44, 22, 434 ]

// function calculateCartPrice(val1,val2,...num1){//rest operator gives array take multiple values
//     return num1;

// }
// console.log(calculateCartPrice(22,33,44,22,434))//[44, 22, 434 ]

const user = {
    username:"devba",
    price:12
}
function handleObject(anyobject){
   
    console.log(`${anyobject.username} is the object passed `)
}
//decalred object is paaed
handleObject(user)
//direct object can be passed
handleObject({
    username:"sam"
})


const myar = [2726,272,927]
function returnArray(getarray){
    return getarray[2];
}
console.log(returnArray(myar))
console.log(returnArray([1,2,3,4]))
