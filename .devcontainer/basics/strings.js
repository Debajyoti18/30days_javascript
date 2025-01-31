// str + str = str
//str + number =str "1"+2="12"
//number +number +str =(num +num)+str 1+2+"2"=32 

//Concatenation is when two or more strings are combined into one.
//Interpolation is when you put a variable inside of a string.${}

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