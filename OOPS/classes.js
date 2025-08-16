// class in ES6

class user{
    constructor(username,email,password){   //parameters email
        this.username = username;           // properties
        this.email = email;
        this.password = password;
    }
    encryptpassword(){                  
        return `${this.password}`;
    }    
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const rakesh = new user("Ayush","rrcn@gmail.com","1r3")  //object created named as rakesh
console.log(rakesh.encryptpassword());   //1r3 
console.log(rakesh.changeusername());   //AYUSH

//behind the scene how this syntax is working before Es6
function user1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptpassword = function(){
    return `${this.password}`;
}

user.prototype.change = function(){
    return `${this.username.toUpperCase()}`;
}

const monika = new user("rakesh","lo@gmail.com","ill");
console.log(monika.encryptpassword());
console.log(monika.change());

//inheritance
class user2{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log("i am a user not teacher")
    }
}

class teacher extends user2{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addcourse(){
        console.log(`Anew course is added by ${this.useraname}`)
 
    }

}

const jagan = new teacher("hitesh","abc@gmail.com","12r")
jagan.logme()                  //i am a user not teacher beacuse teacher inheits user so it access child methods
console.log(jagan.username)   // hitesh because it is call by teacher object named as jagan

const balram = new user2("rakesh","kill@gmail.com","23d");
balram.logme()                 //i am a user not teacher
console.log(balram.username)   //rakesh because it is called by user2 object 

console.log(balram instanceof user2) //true
console.log(jagan instanceof teacher)//true

//static props thse methods cannpt be accessed using instance os a class it only belonggs to class itself or belongs to inherited class
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.logMe())      //Username: hitesh
                                 //undefined because function just prints not return anything
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());
console.log(iphone.logMe())      //undefined because function just prints not return anything



