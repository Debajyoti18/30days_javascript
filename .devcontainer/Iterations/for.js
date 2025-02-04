//for
// for (let index = 0; index < 20; index++) {
//     if(index == 5){
//         // break;//after break out of loop
//         continue;//skip once out of loops
//     }
//     console.log(index)
    
// }

// for of in arrays strings 
const arr = [1,2,3,4,5,6]
for(const num of arr){
   // console.log(num)
}
const st = "hello mama"
for(const g of st){
    //console.log(g)
}

const map =new  Map()//mps having unique values and maintain insertion ordre
//maps are not iterable so  not iterable by for-in
map.set('in',"india")
map.set('ca',"Canada")
// console.log(map)//{ 'in' => 'india', 'ca' => 'Canada' }

for(const key of map){
   // console.log(key)//[ 'in', 'india' ]
    // [ 'ca', 'Canada' ]

}

// for(const [key,value] of map){
//    console.log(key,":",value)//in : india ca : Canada
 
//  }


// const myobj = {
//     name : "deba",
//     id :1
// }
// for(const [key,value] of myobj){
//        //console.log(key,":",value)//myobj is not iterable by for of 
     
//      }


     //for in - objects ,for in -gives keys of arrays only
     const lang = {
        name : "js",
        id :1,
        price :343
    }
for(const key in lang){
    //console.log(key)//name
    // id
    // price
    //console.log(lang[key])//values of objects
}
    //for in -in arrays
 const arr1 = ["sibghbdei","kjbue","dejheo",4,5,"deba"]
for(const key in arr1){
  //console.log(key)//all keys
  //console.log(arr1[key])//all values of arrays
}

//for-each loop
 const coding = ["js","java","ruby"]
// coding.forEach(element => {
//     console.log(element)
// });
// function printA(item){
//     console.log(item)
// }
// coding.forEach(printA)

coding.forEach((i , index ,arr)=>{
        console.log(i,index,arr)
})
//js 0 [ 'js', 'java', 'ruby' ]
//java 1 [ 'js', 'java', 'ruby' ]
//ruby 2 [ 'js', 'java', 'ruby' ] 

