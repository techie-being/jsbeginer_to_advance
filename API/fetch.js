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

fetch('https://api.example.com/data')
  .then(response => {
    // This runs even if status is 404, 500, etc.
    return response.json();
  })
  .then(data => {
    // Process the actual data
    console.log(data);
  })
  .catch(error => {
    // This only runs if fetch() couldn't make the request at all
    console.error('Network error:', error);
  });











