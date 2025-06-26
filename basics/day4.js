/******************* numbers    **************/
const score = 100
console.log(score)
 
// In JS we use new  keyword for creating instance of a object
const balance = new Number(1100.468290)
console.log(balance)
console.log(balance.toString()) //converts to string
console.log(balance.toFixed(2)) // 1100.47 it converts to string with 0-21 inclusive decimal places
console.log(balance.toPrecision(4)) // 1100.5 it converts to string with 1-21 inclusive significant digits
 

const balance2 = 12347349864
console.log(balance2.toLocaleString('en-IN')) // 12,347,349,864  it converts to string with 0-21 inclusive significant digits
console.log(balance2.toLocaleString())  // 12,347,349,864 it converts to string with 0-21 inclusive significant digits

/******************* math library    **************/
console.log(Math)  // Math object in js
console.log(Math.abs(-4))    //it converts any negative value to positive
console.log(Math.ceil(4.2)) // 5 it rounds up to the nearest upper integer
console.log(Math.floor(4.8)) // 4 it rounds down to the nearest lower integer
console.log(Math.round(4.5)) // 5 it rounds to the nearest integer
console.log(Math.max(4, 5, 6, 7, 8)) // 8 it returns the maximum value in array
console.log(Math.min(4, 5, 6, 7, 8)) // 4 it returns the minimum value in array
console.log(Math.random()) // 0.123456789 it returns a random number between 0 and 1
console.log((Math.random() * 10) + 1)// 0.123456789 it returns a random number between 1 and 10  
console.log(Math.floor(Math.random() * 10) + 1)// 1 it returns a random integer between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 it returns a random integer between 10 and 20 wherw min is inclusive and max is inclusive
