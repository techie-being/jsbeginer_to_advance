// objects



// two types of object in javascript object literal and object constructor.

// object constructor object is called singleton 
/*        Object.create    */

// object literal (keys left side, values right side)
// all meys in behind treated as string due to  json object parsing and stringfy

// accessing methods
const mysym = Symbol("key1")   //symbol a special datatype
const user = {
    name:"rakesh",
    [mysym]:"mickey",
    class: "btech",
    rollnumber: 2311,
    address:"kendarapara",
    state: "odisha",
    age:"young",
    height :"5ft",
    "fullname":"rakeshm"
}

console.log(user.name) //rakesh
console.log(user["class"])  //btech this is method ver useful for accessing any instance 
console.log(user["fullname"]) //rakesham
console.log(user[mysym])     //mickey  for symbol it is mandatory syntax
console.log(typeof(mysym))  //symbol

// changing values
user.name = "Monika"
// Object.freeze(user)
user.name = "kanika"
console.log(user)

// function in objects
user.greeting = function(){
    console.log("hello! user")
}

user.greeting1 = function(){
    console.log(`hello user, ${this.name}`)
}

console.log(user.greeting)    //[Function (anonymous)]
console.log(user.greeting1)   //[Function (anonymous)]

console.log(user.greeting())   //hello! user
console.log(user.greeting1())  //hello user, kanika

// nested object

const d = {
    puranaam:{
        userfullname:{
            firstname:"monika",
            lastname:"singh"
        }
    }
}

console.log(d.puranaam.userfullname.firstname)  //monika
console.log(d.puranaam)   //{ userfullname: { firstname: 'monika', lastname: 'singh' } }

// merging objects

const o1  = {
    a:"1",
    b:"2"
}

const o2 = {
    c:"3",
    d:"4"
};

console.log({o1,o2});  //{ o1: { a: '1', b: '2' }, o2: { a: '3', b: '4' } }   same array like problem

/** object.assign(target,source)*/ 
const o3 = Object.assign(o1,o2)  //{ a: '1', b: '2', c: '3', d: '4' }
const ob3 = Object.assign({},o1,o2)  //{ a: '1', b: '2', c: '3', d: '4' }
console.log(o3)
console.log(ob3)

const obj3 = {...o1,...o2}   
console.log(obj3)    //{ a: '1', b: '2', c: '3', d: '4' } 


const user2 = {name:"rakesh",relationship:"single",graduated:"no"}

console.log(Object.keys(user2))  //[ 'name', 'relationship', 'graduated' ]

console.log(Object.values(user2))  //[ 'rakesh', 'single', 'no' ]

console.log(Object.entries(user2)) 
/*[
  [ 'name', 'rakesh' ],
  [ 'relationship', 'single' ],
  [ 'graduated', 'no' ]
] */

console.log(user2.hasOwnProperty('isloggedin'))   //false







