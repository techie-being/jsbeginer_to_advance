// variables
const account_id = 23
let account_email = "rakag@.com"
var password = "123"
account_city = "rohtak"
// account_id = 89

account_email = "njvnej.com"
password = "234"
account_city="gurugram"

console.table([account_id,account_email,account_city,password])
/*
┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ 0       │ 23           │
│ 1       │ 'njvnej.com' │ 
│ 2       │ 'gurugram'   │
│ 3       │ '234'        │
└─────────┴──────────────┘
*/

// data types
let name = "rakesh"
let age = 19
let isloggedin = false
console.table([name,age,isloggedin])

/*
primitive data types
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'rakesh' │  string
│ 1       │ 19       │  number
│ 2       │ false    │  boolean
└─────────┴──────────┘
null => standlone value
undefined=> value not assigned till yet
symbol => unique
bigint used for storing large number
*/

console.log(typeof null)
console.log(typeof undefined)    
/* null = object
undefined = undefined
*/ 

// conversion

/*let age = 45  cant use age here bcoz of let cannnot be redeclared again
let score  = "45"
console.log(typeof score)            string
let valueinnumber = Number(score)    conversion to number
console.log(typeof valueinnumber)    number
*/

/*let score  = "45ab"                string
console.log(typeof score)            
let valueinnumber = Number(score)    converting to number
console.log(typeof valueinnumber)    number
console.log(valueinnumber)           Nan(not a number)
*/

/*
let score  = null                 
console.log(typeof score)           object
let valueinnumber = Number(score)   conersion 
console.log(typeof valueinnumber)   number
console.log(valueinnumber)          0
*/ 

let score  = undefined
console.log(typeof score)                     /*undefined*/
let valueinnumber = Number(score)
console.log(typeof valueinnumber)            /*number*/
console.log(valueinnumber)                   /*NaN*/

/*true=> 1, false=>0 */

let logged = 1
let bool = Boolean(logged)
console.log(typeof bool)
console.log(bool)

/* ""=> false , "rakesh"=>true */
let l = ""
let boo = Boolean(l)
console.log(typeof boo)
console.log(boo)

let ln = 23
let stringnumber = String(ln)
console.log(stringnumber)
console.log(typeof stringnumber)

/***************        operations ******************** */

let str1 = "hello"
let str2 = " rakesh"
let str3 = str1 + str2
console.log(str3)

/* if sring is first then add it as string but if number are first then add numbers and then string */
console.log("1" + 2)               /*12*/
console.log(1 +"3")                /*13*/
console.log(1 +"3" + "4")          /*134*/
console.log(1 +3 + "4")            /*44*/

/*tricky conversion */
console.log(+true)                 /*1*/             
console.log(+"")                    /*0*/


// comparison

console.log("2">1)             /* true*/

console.log("2"===2)           /* false due to strict comparison */

console.log(null >= 0)         /* true because >= or <= convert to number*/

console.log(null == 0)         /*false*/