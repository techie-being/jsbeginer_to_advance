// javascript has a prototypical behaviour, means it follows prototypical inheritance 
// due to this behaviour we can use this, new, and inheritance , classes concepts in javascript.

function a(num){
    return num*5
}

a.power = 2;
console.log(a(5)); //25
console.log(a.power); //2
console.log(a.prototype); //{}

// so as we know js follows prototypical behaviour means in js everthing has an ability to behave an object it may be string. array and
// in recent example function in js arrays, strings, function all are object so every property or method object have, due to its prorto behaviour all its child can use it 
// as well, following prototypical inheritance.

// new keyword function as object
function  createuser(user,id){
    this.user=user;
    this.id = id;
}

createuser.prototype.me = function(){
    this.id++;
}

createuser.prototype.printme = function(){
    console.log(`id: ${this.id}`);
}

const one = new createuser("rakesh",10);
const two = new createuser("ayush",11);
console.log(one)   //createuser { user: 'rakesh', id: 10 }
console.log(two)   //createuser { user: 'ayush', id: 11 }

one.me()
one.printme()  //11 because one.me() increased it by 1 without one.me it is 10.

// this example is a old approch of making a class as we know technically function is a object this creates an empty object, then we use function.protoype.(func_name) to crate methods inside a class. then we make object using new keyword and pass them arguments same as oops programming in c++ just different Syntax.
// this provides the current context of that function/object and new keyword works as constructor

// prototype
let heros = ["ironman","spiderman","thor"]
let s = "rakesh"
let powers = {
    ironman:"suit",
    spiderman:"web",
    thor:"hammer",
    getpower:function(){
        console.log(`spiderman power: ${this.spiderman}`)
    }
}

// here i give this rakesh method to global object so every other object such as Array, strings, functions all have this function acces due to prototypical inheritance
Object.prototype.rakesh = function(){
    console.log("this method is present for all.")
}

// if we provide method to global object then every object can access it but if we provide access to an individual object such as  array or strings or functions then it is for only them self
Array.prototype.gobindo = function(){
    console.log("only for this array individual")
}
heros.gobindo()       //only for this array individual
// powers.gobindo()   //error


heros.rakesh()       //this method is present for all.
powers.rakesh()      //this method is present for all.
s.rakesh()           //this method is present for all.

//inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
// this  is how prototypical inheritance looks like 
// TASupport → TeachingSupport → Teacher → User → Object.prototype → null

// task 1: give all strings a function to tell the cexact string valuse when when  true length function is used
let username = "rakesh     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`); this ias old property not neccesaary
    console.log(`true length is: ${this.trim().length}`);
}
username.truelength();
"Monika".truelength();
"Sapna        ".truelength();






