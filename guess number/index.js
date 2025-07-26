document.documentElement.style.height = "100%"
document.body.style.height = "100%"
document.body.style.width = "100%"
document.body.style.margin = "0"

const main = document.querySelector('#main')
main.style.width = "100%";
main.style.height = "100%";
main.style.backgroundColor = "#f8f8ff";

const nav = document.querySelector('#nav')
nav.style.width = "100vw";
nav.style.height = "11vh"
nav.style.backgroundColor = "#1c1c1c"
nav.style.color = "pink"
nav.style.display = "flex"
nav.style.justifyContent = "center"
nav.style.alignItems = "center"
nav.style.fontSize = "6vw"
nav.style.fontFamily = "Bungee, cursive"
nav.style.fontWeight = "bold"
nav.style.letterSpacing = "1px"

const guess = document.querySelector('#guess-box')
guess.style.padding = "90px 50px 85px 50px"
guess.style.display = "flex"
guess.style.justifyContent = "center"
guess.style.alignItems = "center"

const input = document.querySelector('#guess')
let random = Math.floor(Math.random() * 100) + 1
let counter = 0
input.style.width = "35vw"
input.style.height = "8.4vh"
input.style.backgroundColor = "#fff"
input.style.color = "#444"
input.style.border = "5px solid #444"
input.style.borderRadius = "20px"
input.style.fontSize = "2.4vw"
input.style.fontFamily = "Roboto, sans-serif"
input.style.fontWeight = "600"

//parent of both button named as buttons it is a div
const buttons = document.querySelector('#buttons');
buttons.style.width = "100vw";
buttons.style.height = "12vh";
buttons.style.display = "flex";
buttons.style.justifyContent = "center";
buttons.style.alignItems = "center";
buttons.style.gap = "7vw"



const button = document.querySelectorAll('button')
button.forEach(element => {
    element.style.padding = "0.5vw 1vw"
    element.style.backgroundColor = "#ff69b4 "
    element.style.color = "#fff"
    element.style.border = "5px solid #444"
    element.style.borderRadius = "15px"
    element.style.fontSize = "1.8vw"
    element.style.fontFamily = "Roboto, sans-serif"

    element.addEventListener("click", () => {
        const id = element.id
        const userguess = parseInt(document.getElementById('guess').value)
        const message = document.querySelector('#message')
        message.style.backgroundColor = "#e0f7fa";
        message.style.color = "#006064";
        message.style.width = "30vw";
        message.style.height = "8vh";
        message.style.fontSize = "20px";
        message.style.fontFamily = "Poppins, sans-serif";
        message.style.border = "4px solid #444";
        message.style.borderRadius = "10px";
        message.style.display = "flex";
        message.style.alignItems = "center";
        message.style.justifyContent = "center";
        message.style.margin = "30px auto";

        const attempts = document.querySelector('#attempts')
        attempts.style.color = "#ff69b4"
        attempts.style.fontSize = "15px"
        attempts.style.fontFamily = "Open Sans, sans-serif"

        const successSound = document.getElementById('success');
        const failSound = document.getElementById('fail');
        if (id === "check") {
            if (isNaN(userguess) || userguess <= 0) {
                message.textContent = "❗Please enter a valid number."
            }
            else {
                counter += 1;
                attempts.innerText = `Attempts: ${counter}`;

                if (userguess === random) {

                    message.textContent = "🎉 Correct! You guessed it!";
                    successSound.play();
                }

                else if (userguess > random) {
                    message.textContent = "📈 Too high! Try a lower number."
                    failSound.play();
                }

                else {
                    message.textContent = "📉 Too low! Try a higher number."
                    failSound.play();
                }

            }
        }
        else if (id == "restart") {
            random = Math.floor(Math.random() * 100) + 1;
            counter = 0;
            document.querySelector("#guess").value = "";
            message.textContent = "Game restarted! Guess the new number.";
            attempts.innerText = "Attempts: 0";
        }

    });
})

const p = document.querySelector('p')
p.style.paddingLeft = "33vw"
p.style.marginTop = "5vh"
p.style.color = "Black"
p.style.fontSize = "1.6vw"
p.style.fontFamily = "Open Sans, sans-serif"
p.style.fontWeight = "600"



