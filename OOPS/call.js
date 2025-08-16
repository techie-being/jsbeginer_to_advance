// call Calls a method of an object, substituting another object for the current object
function setusername(username){
    this.username = username; 
    console.log("called");
}

function createuser(username,email,password){
    setusername.call(this,username);
    this.eamil = email;
    this.password = password;
}
const me  = new createuser("rakesh","rak@gmail.com",123)
console.log(me);

