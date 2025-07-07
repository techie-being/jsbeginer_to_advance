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
});

















