// Object oriented programming in  javascript
// it is a part of ES6

// as we know object ias a collection of proprerties and maethods
const user = {
    username:"rakesh",
    logincount:9,
    signedin:true,
    getuserdetails: function(){
        console.log("print all user details")
        console.log(`username: ${this.username}`)
        console.log(this)
    }
}
console.log(user["username"])   //rakesh
console.log(user.getuserdetails()) //print all user details
 //username: rakesh
/* {
  username: 'rakesh',
  logincount: 9,
  signedin: true,
  getuserdetails: [Function: getuserdetails]
}*/

// this keyword refers to current context so when i console.log(this) it refers to current context object inside local scope
//in global context it returns a object

// constructor function: new keyword is a constructor function that is used to create a new instances/ new context

function user1(username,logincount,isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    this.greeting = function(){
        console.log("welcome to our repository")
    }
    return this;
}
const userone = new user1("rakesh",9,true);
const usertwo = new user1("Ayush",7,false);
const c = userone.username="Monika";
console.log(c)  //Monika
console.log(userone)  //user1 { username: 'Monika', logincount: 9, isloggedin: true, greeting: [Function (anonymous)] }
console.log(usertwo) // user1 { username: 'Ayush', logincount: 7, isloggedin: false, greeting: [Function (anonymous)] }
console.log(userone.constructor)  // it takes referrence of its self [Function: user1]

//here we can see that how this works on current context
// new keyword helped us to create a new object called  instance, everytime of same object without overridung it.

// 1. object is created
// 2. constructor function is called by using new keyword which is apck of all arguments.
// 3. this keyword injects the all argument on parameters.




