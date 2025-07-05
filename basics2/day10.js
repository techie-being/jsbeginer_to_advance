/************control flow/logic floe************* */

/* if else statement
syntax
if("condition"){

}
else{

}

*/

/* else if syntax

if first if is not executed then else if will be executed if it also fails then else will be executed

if("condition1"){

}
else if{

}
else{

}

*/

/*  wrong practice

let age = 20;
if (age >= 18) console.log("You can vote"), elseconsole.log("You can drive");

*/


/* operators

// comparison operators
== equal to
=== equal to and data type
!= not equal to
!== not equal to and type
> greater than
< less than
>= greater than or equal to
<= less than or equal to

*/

/* 
logical operators

&& and
|| or
! not   
*/

// find greatest number between 3 numbers
function greatest(a,b,c){
    if(a>b && a>c){
        console.log(`${a} is greatest number among ${a} ${b} ${c} `)
    }
    else if(b>c && b>a){
        console.log(`${b} is greatest number among ${a} ${b} ${c} `)
    }
    else{
        console.log(`${c} is greatest number among ${a} ${b} ${c} `)
    }
}
greatest(40,50,60)


// switch case
const day = 4
switch(day){
    case 1:
        console.log("monday")
        break;
    case 4:
        console.log("thursday")
        break;
}

const month = "may"
switch(month){
    case "may":
        console.log(" 4th month")
        // break; it is neccessary to prevent default conditions from execution
    default:
        console.log("months name")
}

// truthy ansd falthy values

// falsy value

/*
(
    false, 0, -0,Bigint , 0n,"",undefined ,NaN
)
*/

// truthy value
/*
(
    "0",'false',"",[],{},funciton(){},

)

*/

// thow to check an arrray or object is empty
const useremail = []
if(useremail.length===0){
    console.log("array is empty")
}

const obj = {}
if(Object.keys(obj).length===0){
    console.log("object is empty")
}

const string = "rakesh"
if(string.length!=0){
    console.log("string not empty")
}


//  false == 0      //true
//  false == ""  //true
//  0 == ""      //true

/* nullish coalescing operator(??): null undefined  */
// it used to prevent codebase from crash, due to an unexpected value like null and undefined 

// if null or undefined occured then asiign null if  value is returned then assgin that value

let val1; 
val1 = null ?? 100                  // 100
val1 = undefined ?? 200             // 200
console.log(val1)

/* ternary operator */
const iceteaprice = 100
iceteaprice < 80 ? console.log("decent price") : console.log("expensive")          //expensive as icetea > 80

// in if else variable defined inside {} cannot be accesed from otside  scope issues
// break disrupt the control flow and redirect to start
