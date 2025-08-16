const descriptor = Object.getOwnPropertyDescriptors(Math,"PI")
console.log(descriptor)
/*
PI: {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  },   */

// Math is a module in js which has many properties that have a hard coded value we cannot manipulate them 

// how we can create such objects that can not be manipulated
const chai  = {
    name: "rakesh",
    class:'ml',
    rollno:"234"
}
console.log(chai)                //{ name: 'rakesh', class: 'ml', rollno: '234' }
console.log(Object.getOwnPropertyDescriptor(chai,"name"))  
/*{
  value: 'rakesh',
  writable: true,
  enumerable: true,
  configurable: true
}*/ 


// here we can iterate on object no property is disabled look 
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

//but after enumerable set to false loop wouldnot run on object
Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*{
  value: 'rakesh',
  writable: false,
  enumerable: false,
  configurable: false
}*/ 

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}
/*
output : class : ml
rollno : 234, because we have defined getownproperrtydescriptor  for only name property not for all so thats why this happens
if we want ot apply this on all property we should use "Object.definedproperties"
*/





