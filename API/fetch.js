//✅ fetch('something') — What Really Happens Behind the Scenes

//The fetch() function is used to make HTTP requests in JavaScript. Here's a breakdown:

/*
🔹 1. fetch() Returns a Promise
Like all Promises, it has three possible states:
pending: The request is still in progress.

fulfilled: The request completed successfully (even if the response is a 404 or 500).

rejected: The request failed (e.g., no internet, DNS error, etc.).
*/


//2. Handling the Result (.then() / .catch())
// The result of a successful request is passed to the .then() block — this is called the fulfilled handler.

// Even if the server returns an error status like 404 or 500, fetch considers it fulfilled (because it successfully contacted the server).

// If the network request fails completely (e.g., no connection, invalid domain), it's passed to the .catch() block — this is the rejected handler.

// 🔹 3. How It Works Internally
// fetch() uses underlying browser or Node.js resources (like the HTTP module) to send the request.

// If the request can be sent, the Promise is fulfilled with a Response object.

// If the request cannot be sent at all, the Promise is rejected with an error.

// 🔹 4. The Role of the response Object
// The response object holds the result of the fetch() call.

// Whether fulfilled or rejected, the associated handlers (.then() or .catch()) receive the data/error.

// You can then process the response using:

// response.json(), response.text(), response.status, e

//task 1: Fetch GitHub Profile

//using fetch

fetch('https://api.github.com/users/techie-being')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data.avatar_url);
  console.log(data.name);
  console.log(data.bio);
  console.log(data.followers);
})
.catch((error)=>{
  console.log("something went wrong");
}) 

// using async await

//my version
async function api() {
  const response = await fetch('https://api.github.com/users/techie-being');
  response.json().then((data) => {
    console.log(data.avatar_url);
    console.log(data.name);
    console.log(data.bio);
    console.log(data.followers);
  })
  .catch((error) => {
    console.log("something went wrong");
  });
}

//try catch version
async function api() {
  try {
    const response = await fetch('https://api.github.com/users/techie-being');
    const data = await response.json();
    
    console.log(data.avatar_url);
    console.log(data.name);
    console.log(data.bio);
    console.log(data.followers);
  } catch (error) {
    console.log("something went wrong");
  }
}

api(); 

//task2 random joke generator
fetch('https://api.chucknorris.io/jokes/random')
.then((joke)=>{
  return joke.json();
})
.then((data)=>{
  console.log(data.value);
})
.catch((error)=>{
  console.log("OOps something went wrong");
})

// async await version
async function joke() {
  try {
    const url = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await url.json()
    console.log(data.value)
  } catch (error) {
    console.error("oops somethong went wrong")
  }
}
joke(); 

// task 3 delay function with promises
// my version
const a = function name(){
  console.log("rakesh");
}

async function delay(){
  console.log("start")
  setTimeout(a,2000)
  console.log("2 sec passed")
}
delay();

// otput:
start
2 sec passed
rakesh    

function name(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function delay(){
  console.log("its started");
  await name(2000);
  console.log("2 seconds passed");
}
delay()

//output: its started
// here before printing next console it would wait for 2sec then print next console.log statement
// 2 seconds passed    

// task:4 live weather using api

let weatherData;
fetch('https://wttr.in/kolkata?format=j1')
.then((response)=>{
  console.log(response.status)
  console.log(response.ok)
  return response.json();
  
})
.then((data)=>{
  weatherData = data;
  console.log(weatherData.current_condition[0].temp_C + "°C");
  console.log(weatherData.current_condition[0].FeelsLikeC + "°C");
  console.log(weatherData.current_condition[0].humidity + "%");
  console.log(weatherData.current_condition[0].weatherDesc[0].value);
  console.log(weatherData.current_condition[0].windspeedKmph + "KM/h");

})
.catch((error)=>{
  console.log("something went wrong")
})

const input = document.createElement('Input')
input.style.padding="25px 150px"
input.style.backgroundColor="green"
input.style.margin="20px"
input.placeholder="enter city";
document.body.appendChild(input)

const button = document.createElement('button')
button.style.padding="25px 60px"
button.style.backgroundColor="blue";
button.innerText="check weather";
button.style.margin="15px"
document.body.appendChild(button)  


// Create the container div
const res = document.createElement('div');
res.id = 'result';
res.style.padding = "100px";
res.style.fontSize = "25px";

// Add 5 <p> tags with different IDs (p1 to p5)
for (let i = 1; i <= 5; i++) {
  const p = document.createElement('p');
  p.id = `p${i}`; // Set unique ID like p1, p2, ...
  p.style.color="white"
  res.appendChild(p);
}

// Append the container to the body
document.body.appendChild(res);

const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const p3 = document.querySelector("#p3")
const p4 = document.querySelector("#p4")
const p5 = document.querySelector("#p5")

button.addEventListener("click",()=>{
  if (!weatherData.current_condition) {
    alert("Weather data not yet loaded.");
    return;
  }

  p1.textContent = "Temperature: " + weatherData.current_condition[0].temp_C + "°C";
  p2.textContent = "Feels Like: " + weatherData.current_condition[0].FeelsLikeC + "°C";
  p3.textContent = "Humidity: " + weatherData.current_condition[0].humidity + "%";
  p4.textContent = "Condition: " + weatherData.current_condition[0].weatherDesc[0].value;
  p5.textContent = "Wind Speed: " + weatherData.current_condition[0].windspeedKmph + " KM/h";

})
