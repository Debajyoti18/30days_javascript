//array of objects extracting from objects
const myarr= [
    {
        lang : "JavaScript",
        file :"js"
    },
    {
        lang : "Java",
        file :"java"
    },
    {
        lang : "Python",
        file :"py"
    },
    {
        lang : "Ruby",
        file :"js"
    }
]
// myarr.forEach( (x)=> {
//     console.log(x.file)
// })

// const coding = ["js","java","ruby"]
// const val = coding.forEach(element => {
    //for-each doesnot return anything  
//        // console.log(element)
//         return element
//     });
// console.log(val)



const mynums = [1,2,3,4,5,6,7,8,9]
//const newnum=mynums.filter((num)=>num > 4)
const newnum=mynums.filter((num)=>{return num > 4})
console.log(newnum)


//mynums.map((num)=> num+10)
const x = mynums.map((num)=> {return num+10})
console.log(x)



//??????????? Chaining ?????????
// const myx = mynums.map((x)=> x*10)
//                   .map((x)=> x+1)
//                   .filter((x) => x >40)
// console.log(myx)



//?????????? Reduce method ???????????
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

const varr = [1,2,3]
let ini =10;
const n =varr.reduce(function (acc ,currentValue){
    console.log(`acc is ${acc} and current value is ${currentValue}`)
    return acc+currentValue
},ini)
console.log(n)
//acc is 10 and current value is 1
// acc is 11 and current value is 2
// acc is 13 and current value is 3
// 16
const n1 = varr.reduce((acc,currval)=>{return acc+currval},ini);
const n2 = varr.reduce((acc,currval)=> acc+currval,98);
console.log(n1)//16
console.log(n2)//104


// >>>>>>>>>> Real example >>>>>>>>>>>>>>>>
const shoppingCart = [
    { name: "Apple", price: 1.2, quantity: 5, category: "Fruits" },
    { name: "Milk", price: 2.5, quantity: 2, category: "Dairy" },
    { name: "Bread", price: 1.8, quantity: 1, category: "Bakery" },
    { name: "Eggs", price: 3.0, quantity: 12, category: "Dairy" },
    { name: "Chicken", price: 8.5, quantity: 1, category: "Meat" },
    { name: "Rice", price: 4.0, quantity: 2, category: "Grains" },
    { name: "Tomato", price: 0.9, quantity: 6, category: "Vegetables" },
];

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price,0)
console.log(priceToPay);//22.9






