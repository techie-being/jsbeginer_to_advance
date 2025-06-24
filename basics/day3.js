/* memory in javascript    */

// stack memory (primitive) it gives a copy of original value

let person1 = "rakesh"
let person2 = person1
console.log(person1)    /*output:rakesh*/
console.log(person2)    /*output:rakesh*/
person2 = "meghna"
console.log(person1)    /*output:rakesh*/
console.log(person2)    /*output:meghna*/

// heap memory  (non-primitive) it gives a reference of a value
let user1 = {
    email:"vjnvej@.com",
    upi:"cwbhbbc60@"
}
let user2 = user1
console.log(user1.email)    /*vjnvej@.com*/
console.log(user2.email)    /*vjnvej@.com*/
user2.email="whbiwicij "
console.log(user1.email)    /*whbiwicij */
console.log(user2.email)    /*whbiwicij */

/******************** strings */
// outdated method
let age  = 19
let name = "rohan"
console.log("hello" + "rakesh age is" + age )

// modern and cleaned method
console.log(`his name is ${name}, and he is ${age} years old.`)
console .log(name[0])           /* r */

// methods
const gamename = new String("prakesh")
console.log(gamename)
console.log(gamename.__proto__)    /* this consists all amethods of string datatype*/

console.log(gamename.length)         /*output:7*/
console.log(gamename.toUpperCase())  /*PRAKESH*/
console.log(gamename.charAt(3))       /*k*/
console.log(gamename.indexOf('k'))   /*3*/

const newstring = gamename.substring(0,4)
console.log(newstring)

const anotherstring = gamename.slice(-7,4)  /* same s substring take -ve val */
console.log(anotherstring)

const s1 = "  rakesh    "
console.log(s1)
console.log(s1.trim())    /*remove spaces*/

const s2 = "https://rakesh.com/rs-maity"
console.log(s2)
console.log(s2.replace('-','.'))     /*replace - with .*/
console.log(s2.includes('maity'))    /*checks maity is present in s2 or not*/

console.log(s2.split('/'))  /*split string on bases of a argument in an array*/