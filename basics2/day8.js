console.log("jai shree jaganath");

// scope
function one(){
    const username = "rakesh"
    function two(){
        const website = "youtube"
        console.log(username)         //rakesh
    }
    // console.log(website) it returns error because website is out of its scope.
    two()

}
one()
// we can say that nested function can acces its main function variable but parent function cannot access its nested function variable.

// scope in if else
if(true){
    const username = "rakesh"
    if(username=="rakesh"){
        const website = "youtube"
        console.log(username + website)      //rakeshyoutube
    }
    // console.log(website)   error due to out of scope
}
// console.log(username)     error due to out of scope


/****************intresting ************* */
console.log(on1(5))                        // 6
// it is called hoisting in js that allowa us to call function before its declaration

function on1(num){
    return num+1
}
// this is a normal function

// val(5)                     error 
const val = function on2(num){              //function expression
    return num + 2
}
console.log(val(5))                        // 7

// arrow function and this keyword es6 version

// this keyword is used for current context
const obj = {
    username:"rakesh",
    price:99,
    welocome:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
obj.welocome()                  //rakesh, welcome to website
obj.username="monika"
obj.welocome()                  //monika, welcome to website

// here we konow that why "this" is useful in such cases for inner username "this".username  refer to current context (rakesh) and out of this scope it refer to new usename context monika

console.log(this)                //return an empty object {}

// fat arrow function
function chai(){
    let username = "mai"
    console.log(this)                //returns a object(global)
    console.log(this.username)       //undefined
}
chai()

// arrow function
const arrow = () => {
    let username = "rakesh"
    console.log(this)                //returns a object(global)
    console.log(this.username)       //undefined because it is accessible in object

}
arrow()

// syntax () => {}
// normal arrow function explicit return {}
const add = (a,b) => {
    return a+b
}
console.log(add(4,5))                     //9
// if we use {} in arrow function then  we have to use return keyword

// arrow function with implicit return ()

const add1 = (c,d) => (c+d)
console.log(add1(7,6))
// if we use () in arrow functon then we dont have to use return keyword

const add2 = (c,d) => ({name:"rakesh"})  //return an oject
console.log(add2(7,6)) ;                 //it is not used

// Immediately invoked function expression (iife) is used to prevent from global scope pollution

(function c1(){
    console.log("database connected");    //database connected

})();

( (name) => {
    console.log(`db connected two ${name}`) //db connected two monika
} )("monika")                              





