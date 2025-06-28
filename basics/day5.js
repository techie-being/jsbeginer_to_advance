/***************  Arrays ************ */
// array is object in javascript. in js arrays are resizable and dynamic in nature.
// arrays are used to store multiple values in a single variable.

let myarray = [1, "jaganath", 2, 3, 4, 5]
console.log(myarray) // [ 1, 'jaganath', 2, 3, 4, 5 ]
console.log(myarray[0]) // 1

let array = new Array(1, "jaganath", 2, 3, 4, 5)
console.log(array) // [ 1, 'jaganath', 2, 3 , 4, 5 ]
console.log(array[0]) // 1

// array methods
myarray.push(6) // adds an element to the end of the array
console.log(myarray)    // [ 1, 'jaganath', 2, 3, 4, 5, 6 ]
myarray.pop() // removes the last element of the array
console.log(myarray)    // [ 1, 'jaganath', 2, 3, 4, 5 ]

myarray.unshift(24) // adds an element to the beginning of the array
console.log(myarray)    // [ 24, 1, 'jaganath', 2, 3, 4, 5 ]

myarray.shift() // removes the first element of the array
console.log(myarray)    // [ 1, 'jaganath', 2, 3, 4, 5 ]

console.log(myarray.length) // 6 it returns the length of the array

console.log(myarray.indexOf("jaganath")) // 1 it returns the index of the element in the array

console.log(myarray.lastIndexOf("jaganath")) // 1 it returns the last index of the element in the array when there are multiple occurrences of the element

console.log(myarray.includes("jaganath")) // true it returns true if the element is present in the array, otherwise false

// join method it joins all the elements of the array into a string with the specified separator

const arr =  myarray.join(" - ") // it joins all the elements of the array into a string with the specified separator

console.log(arr) // 1 - jaganath - 2 - 3 - 4 - 5 it returns a string with the elements of the array separated by the specified separator  arr is a string, not an array
console.log(typeof arr) // string   

console.log(myarray) // [ 1, 'jaganath', 2, 3, 4, 5 ] it does not modify the original array

// The slice() method returns a shallow copy of a portion of an array into a new array
const newarray = myarray.slice(1, 4) // it returns a shallow copy of the array from index 1 to index 4 (not inclusive)

console.log(newarray) // [ 'jaganath', 2, 3 ] it returns a new array with the elements from index 1 to index 4 (not inclusive)          

console.log(myarray) // [ 1, 'jaganath', 2, 3, 4, 5 ] it does not modify the original array     

const newarray1 = myarray.slice(1) // it returns a shallow copy of the array from index 1 to the end of the array

console.log(newarray1) // [ 'jaganath', 2, 3, 4, 5 ] it returns a new array with the elements from index 1 to the end of the array

console.log(myarray) // [ 1, 'jaganath', 2, 3, 4, 5 ] it does not modify the original array 

const newarray2 = myarray.slice() // it returns a shallow copy of the entire array

console.log(newarray2) // [ 1, 'jaganath', 2, 3, 4, 5 ] it returns a new array with all the elements of the original array

console.log(myarray) // [ 1, 'jaganath', 2, 3, 4, 5 ] it does not modify the original array

/*****************************splice method   ***/
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The first argument is the index at which to start changing the array,
// the second argument is the number of elements to remove, and the rest of the arguments are the elements to add to the array.

console.log(myarray) // [ 1, 'jaganath', 2, 3, 4, 5 ] it is the original array

const myarray4 = myarray.splice(1, 2, "new", "element") // it removes 2 elements from index 1 and adds "new" and "element" to the array

console.log(myarray4) // [ 'jaganath', 2 ] it returns the removed elements as a new array

console.log(myarray) // [ 1, 'new', 'element', 3, 4, 5 ] it modifies the original array by removing the elements and adding the new elements

// 
const marvel = ["ironman", "captain america", "thor", "hulk","black" ]
const dc = ["superman", "batman", "wonder"]

marvel.push(dc) // it adds the dc array as a single element to the marvel array  

console.log(marvel) // [ 'ironman', 'captain america', 'thor', 'hulk',  [ 'superman', 'batman', 'wonder' ] ]

console.log(marvel[5][1]) // batman it accesses the second element of the dc array which is added as a single element to the marvel array   

// to avoid this 

const allheros = marvel.concat(dc); 
// it adds the elements of the dc array to the marvel array without adding the dc array as a single element

console.log(allheros); 
// [ 'ironman', 'captain america', 'thor', 'hulk', 'black', 'superman', 'batman', 'wonder' ]

// spread operator

const allheros2 = [...marvel, ...dc];
// it adds the elements of the dc array to the marvel array without adding the dc array as      

console.log(allheros2);
// [ 'ironman', 'captain america', 'thor', 'hulk', 'black', 'superman', 'batman', 'wonder' ]

const another = [1,2,3, [4,5,6], 7,[8, 9, [4 , 5, 6]]]
const another2 = another.flat(Infinity)
console.log(another2) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6 ] it flattens the array to a single level

console.log(another) // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 4, 5, 6 ] ] ] it does not modify the original array        

// is array and from intresting interview

console.log(Array.isArray("rakesh")) // false it checks if the value is an array

console.log(Array.from("rakesh"))
// [ 'r', 'a', 'k', 'e', 's', 'h' ] it converts the string to an array of characters

console.log(Array.isArray([1,2,3])) // true it checks if the value is an array

console.log(Array.from({name: "jaganath"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ] it creates an array with the given values






























