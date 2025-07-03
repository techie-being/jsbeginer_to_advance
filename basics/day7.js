/* function syntax */
function srimandir(){    //function declaration using function keyword
    console.log("jai shree jagananth")
}
srimandir()         //function call

// function to add two number
function prasad(bhog1,bhog2){   //bhog1 and bhog2 are parameter
    console.log(bhog1+bhog2)
}
const res = prasad(1,2)                  
 //1,2 are arguemnt parameter recieves a copy of argument to perform calculations known as call by value

console.log(res)     
//undefined because res does not return by functionit just instructed to print console

// better method to add two number using function

function mahaprasad0(bhog3,bhog4){
    let sum = bhog3 + bhog4                //block scope sum
    return sum
}  
    
const sum = mahaprasad0(4,5)               //global scope sum
console.log("sum:",sum)                    //sum: 9 because copy of argument sent to paramaeter ,perform defined opreation and return sum(value) stored in sum (global scope variable)

// more clean version
function mahaprasad1(bhog3,bhog4){
    return bhog3 + bhog4            //implicit return
} 
const res1 = mahaprasad1(6,7)
console.log("result",res1)
    
// function with if - else condition
function puri(bhakt){
    if(bhakt === undefined){
        console.log("please enter a username")
        return
    }
    return `${bhakt} just reached jaganath dham`
}

console.log(puri())                     //undefined just reached jaganath dham

console.log(puri("bhaktgan"))           //bhaktgan just reached jaganath dham

// function without if else
function puri(bhakt){
    if(!bhakt){
        console.log("please enter a username")
        return
    }
    return `${bhakt} just reached jaganath dham`
}

console.log(puri())                       //please enter a username in js undefined inside if is false !undefined converts it in to true inside if and if block statement is printed

// function with default values
function puri1(bhakt="rakesh"){
    if(!bhakt){
        console.log("please enter a username")
        return
    }
    return `${bhakt} just reached jaganath dham`
}

console.log(puri1())   

// function with rest ...operator
function calcfeni_price(val1,val2,...num1){
    return num1
}
console.log(calcfeni_price(100,200,500,30,400,300))  //[ 500, 30, 400, 300 ]
//rest operator is used to store multiple arguments in one parameter as an array val1 = 100 ,val2=200,num1 = [ 500, 30, 400, 300 ]

// passing an object in a function
const mitha = {
    name:"feni",
    price:"200"
}

function handle(anyObject){
    console.log(`${anyObject.name} is ${anyObject.price} per piece`)
}
// handle(mitha)                  //feni is 200 per kg (passing object in function)

handle({
    name:"rasogolla",
    price:30
})                                //rasogolla is 30 per piece

// passing an array in function
const mithai = [100,200,500,800,30]
function Return(getArray){
    return getArray
}
// console.log(Return(mithai))             //[ 100, 200, 500, 800, 30 ]

console.log(Return([100, 200, 500, 800, 30]))    //[ 100, 200, 500, 800, 30 ]

//functions scope
// scope in browser and scope in node js both are different scope

const a = 100
var b  = 200
let c = 300

if(true){
    const a = 10
    var b = 20
    let c = 30
    console.log("inner:",a);     //inner: 10
    console.log("inner:",b);     //inner: 20
    console.log("inner:",c);     //inner: 30
// inside this block a,b,c values defined inside it woulsnot work outside except var(global space),that is called block space .
}

console.log(a);  //a=100
console.log(b);  //b=20 because it is a global scope
console.log(c);  //c=300

