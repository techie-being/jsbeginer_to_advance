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



/****************** date AND TIME **************** */
// date and time important methods
let date = new Date()
console.log(date)  //2025-06-27T16:09:05.035Z
console.log(date.toDateString()) //Fri Jun 27 2025
console.log(date.toLocaleString())  //6/27/2025, 4:09:05 PM
console.log(date.toTimeString())  //16:09:05 GMT+0000 (Coordinated Universal Time)
console.log(date.toISOString())  //2025-06-27T16:09:05.035Z
console.log(date.toString())   //Fri Jun 27 2025 16:09:05 GMT+0000 (Coordinated Universal Time)
console.log(date.toJSON()) //2025-06-27T16:09:05.035Z  
// example
let date1 = new Date(2025, 5, 27 )
console.log(date1)
console.log(date1.toDateString())   //Fri Jun 27 2025

let date2 = new Date("2025-06-27")   //yyyy-mm-dd format date
console.log(date2.toLocaleString())  //6/27/2025, 12:00:00 AM

let date3 = new Date("06-27-2025")   //mm-dd-yyyy format date
console.log(date3.toLocaleString())  //6/27/2025, 12:00:00 AM




/****************************time stamp */
let mystamp = Date.now() // returns the number of milliseconds since January 1, 1970
console.log(mystamp) // 1719510545035 it returns the number of milliseconds since January 1, 1970

console.log(date3.getTime()) // 1719446400000 it returns the number of milliseconds since January 1, 1970 to date3

// time satmp is used to compare two dates
// comparison in seconds
console.log(Math.floor(mystamp / 1000)) // 1719510545 it returns the number of seconds since January 1, 1970

console.log(Math.floor(date3.getTime() / 1000)) // 1719446400  it returns the number of seconds since January 1, 1970 to date3 

// comparison in minutes
console.log(Math.floor(mystamp / (1000 * 60))) // 28658509 it returns the number of minutes since January 1, 1970
console.log(Math.floor(date3.getTime() / (1000 * 60))) // 28657440 it returns the number of minutes since January 1, 1970 to date3

let newdate = new Date()
console.log(newdate.getMonth() + 1) //returns month of today date
console.log(newdate.getDay())       // return current day no of present week

// localestring methods used to customize date values
newdate.toLocaleString('default',{
    weekday:"long"
})


