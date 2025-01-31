let n = "20";
let intVal = Number(n);
console.log(typeof intVal);//number
let m = "20abe"
let intVal1 = Number(m)
console.log(typeof intVal1);//number
console.log(intVal1);//Nan
n = null;
intVal = Number(n)
console.log(intVal);//0
n = undefined;
intVal = Number(n)
console.log(intVal);//Nan

let bool = true;
intVal = Number(bool)
console.log(intVal);

//"20"=>20
//"20abe"=>Nan
//true => 1,false=0
   let loggedin = 1
   let isloggedin = Boolean(loggedin)
   console.log(isloggedin)//true
//1=>true 0=>false ""-emptystring => false nonemptystring = true
//number to string-String
//
