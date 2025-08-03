

//promise is a special object in javascript that is used to handle asynchronous operations. that will be executed in the future. and returns a value or an error.
//A promise can be in one of three states: pending, fulfilled, or rejected.
//1. Pending: The initial state of the promise, meaning the operation is still ongoing.
//2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
//3. Rejected: The operation failed, and the promise has a reason for the failure (usually an error).

//Creating a promise


const promise1 = new Promise((resolve, reject) => {
    //do asyn task
    //db calls, cryptography, network calls, etc.
    setTimeout(function () {
        console.log("task completed")
        resolve();
    }, 2000)
});

promise1.then(function () {
    console.log("promise consumed")
})

//practice  pro ise synrtax
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("async task2")
    }, 1000)
    resolve();
}).then(function () {
    console.log("2nd task is completed")
})

//Creating a promise with a value
//This promise will resolve with a user object after 1 second.
const promise2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "me", password: "ra" });
    }, 1000)
})

promise2.then(function (user) {
    console.log(user);
})

//creating a promise with an error
const promise4 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "main", password: "123" });
        }
        else {
            reject("Task failed due to an error");
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise execution completed");
})


const promise5 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "main", password: "123" });
        }
        else {
            reject("Task failed due to an error");
        }
    }, 1000)
})

promise5.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise execution completed");
})

//async await
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "rak", password: "21r" })
        }
        else {
            reject("error something went wrong1")
        }
    }, 1000)

})

async function consumepromise6() {
    try {
        const response = await promise6
        console.log(response)

    } catch (error) {
        console.log(error)

    }
}
consumepromise6();


//
async function getallusers() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error ocuured", error)
    }


}
getallusers()


//using then catch
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch(error => {
    console.log("error ocuured", error)
})

