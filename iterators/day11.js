for (let i = 0; i < 10; i++) {
    console.log(`number: ${i}`)
}

// for with if
for (let i = 0; i < 30; i++) {
    const element = i;
    if(element==24){
        console.log("happy birthday rakesh");
    }
    console.log(`days count: ${element}`)
    
}

// nested loop
for (let i = 0; i < 10; i++) {
    console.log(`outer loop: ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop: ${j} and outer loop ${i}`) 
    }
}

// print table using nested loop
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
        
    }
}

// for loop on array 
const myarray = ["superman","batman","ironman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(`he is ${element}`);

}

// break and continue
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected");
        break;                              //it breaks control flow and terminate the code 
    }
    console.log(`value: ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected");
        continue;                              //it skips 5 and print all others
    }
    console.log(`value: ${i}`);
    
}

// while 
let k  = 0
while(k<=10){
    console.log(`value:${k}`)
    // k = k + 1                           this is wrong beacuse const k it cannot be reassigned here so we should use let
    k++

}

let myarray1 = ["rakesh","monika","madhu"]
let i = 0
while(i < myarray1.length){      
    console.log(myarray1[i])
    i++
}

// do while
let score = 1
do{
    console.log(`score is ${score}`)
    score++
}
while (score<15 )

let core = 11
do{
    console.log(`score is ${core}`)    //just 11 because it execute do block first then checks condition
    core++
}
while (core<=10 )

// higher order loop

//  1. for of loop   prints value directly 

const arr = [ 1,2,3,4,5,6,7]
for (const num of arr) {
    console.log(num)       //num works as i index satry from 0 and increment itself
}

const a = "rakesh"
for (const index of a) {
    console.log(`each character  is ${index}`);
}

// maps have only unique values

const map = new Map()
// to initaliize map with value we use set function we insert key and its corresponding value
map.set("IN","India")
map.set("US","United States of America")
map.set("Nep","Nepal")
console.log(map);

// loop on map
for (const key of map) {
    console.log(key);    
}

/* output
[ 'IN', 'India' ]
[ 'US', 'United States of America' ]
[ 'Nep', 'Nepal' ]
*/

// better way
for (const [key,value] of map) {
    console.log(key, ':-', value);    
}

/* output does give a simple and cleaner output

IN :- India
US :- United States of America
Nep :- Nepal

// forof loop is not iteratable on objects

const obj ={
    rakesh:"1",
    rohan:"2",
    monika:"3"
}
for (const [key,value] of obj) {
    console.log(key, ':-', value);   
}

*/


// for in loop key prints keys not value pair initially
const lang ={
    js:"javascript",
    rb:"ruby",
    py:"python",
    cpp:"c++"
}

for (const key in lang) {
    console.log(key);      //prints all keys
}

for (const key in lang) {
    console.log(`${key} shortcut is for ${lang[key]}`);    //it prints both  
}

const prog = ["js","python","ruby"]
for (const key in prog) {
    console.log(prog[key]);                //it prints both
    
}


/* for in on map
const map1 = new Map()

map.set("IN","India")
map.set("US","United States of America")
map.set("Nep","Nepal")

for (const key in map) {
    console.log(key);
    
}
map cannot be iteratable */

// for each  loop
const b = ["a","b","c","d","e"]
b.forEach(function (item){
    console.log(item);
//b array name it has a callback function so it do not have any name item works herea sasa iterator   

});

// callabck as arrow function
b.forEach( (item) => {
    console.log(item);
});

// passing function in for each
function print(item){
    console.log(item);
}
b.forEach(print)

// for each also contains index and arr parameters within itself

// object inside an array is iterated using foreach loop
const mycoding = [
    {
        lang:"java",
        file:"java"
    },
    {
        lang:"python",
        file:"py"
    },

    {
        lang:"c++",
        file:"cpp"
    }
]
mycoding.forEach( (item) => {
    console.log(item.lang)
    console.log(item.file)
});

// filter isa amethod that is used to return values which satisfies a condition

const num1 = [1,2,3,4,56]
const newnum = num1.filter((index) => (index>3))
console.log(newnum);  //[ 4, 56 ]         //we use variable newnum to store return value by filter
//here we use  paranthesis that why we have dont have to use explicit return keyword

const num2 = [1,2,3,4,56]
const newnum1 = num2.filter((index) => {  //here we use curly braces that why we have to use explicit return keyword
    return index>3
})
console.log(newnum);           //[ 4, 56 ]

const newnum2 = []
num1.forEach( (num) => {          //num1 declared upper
    if(num>4){
        newnum2.push(num)
    }
})
console.log(newnum2)             //[ 56 ]

// question 
const users = [
  { name: "Rakesh", age: 22, birthYear: 2003 },
  { name: "Priya", age: 17, birthYear: 2008 },
  { name: "Aman", age: 19, birthYear: 2006 },
  { name: "Neha", age: 16, birthYear: 2009 },
  { name: "Vikram", age: 25, birthYear: 2000 }
];


let teen = users.filter( (a) => (a.age>18))
console.log(teen)    
/*
[
  { name: 'Rakesh', age: 22, birthYear: 2003 },
  { name: 'Aman', age: 19, birthYear: 2006 },
  { name: 'Vikram', age: 25, birthYear: 2000 }
]
*/

teen = users.filter( (a) => (a.birthYear>2000))
console.log(teen)
/*
[
  { name: 'Rakesh', age: 22, birthYear: 2003 },
  { name: 'Priya', age: 17, birthYear: 2008 },
  { name: 'Aman', age: 19, birthYear: 2006 },
  { name: 'Neha', age: 16, birthYear: 2009 }
]
*/

// "map" is a method it is different from "Map" also return value so we have to store it in a variable

// add 10 to every value of an array
const r = [1,2,3,4,5,6,7,8,9,10]
let res = r.map( (access) => access+10)
console.log(res);   //[ 11, 12, 13, 14, 15, 16, 17,18, 19, 20 ]

// chaining using map
res = r
.map( (acc) => acc*10)   //[10, 20, 30, 40,  50,60, 70, 80, 90, 100]
.map( (acc) => acc+1)    //[11, 21, 31, 41,  51,61, 71, 81, 91, 101]
.filter( (acc) => acc>60) //[ 61, 71, 81, 91, 101 ]
console.log(res);

// reduce this is practically used in shpping cart total calculation ex on flipkart
let r1 = [1,2,3,4,5,6]
let res2 = r1.reduce(function (acc,currval){
    console.log(`acc;${acc} and currval:${currval}`);
    return acc + currval
},0)
console.log(res2);

// using arrow function
res2 = r1.reduce( (acc,currval) => (acc+currval),0)
console.log(res2)

// question 
const products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 15000 },
  { name: "Smartwatch", price: 10000 }
];
const total = products.reduce( (acc,item) => (acc+item.price),0)
console.log(`grand total: ${total}rs`);





