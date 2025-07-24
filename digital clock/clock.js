// main div
const body = document.querySelector('#main')
body.style.width = "100vw"
body.style.height = "100vh"
body.style.backgroundColor = "#121212"
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflow = "hidden";
document.body.style.boxSizing = "border-box";
document.body.style.height = "100vh";

// nav bar design
const nav = document.querySelector('#nav')
nav.style.width = "100vw"
nav.style.height = "75px"
nav.style.letterSpacing = "1px"
nav.style.textAlign = "center"
nav.style.fontSize = "60px"
nav.style.fontWeight = "bold"
nav.style.fontFamily = "Helvetica Neue, sans-serif"
nav.style.color = "#FFEB3B"
nav.style.backgroundColor = "#1E88E5"


// main1 child div of main div
const main = document.querySelector('#main1')
main.style.height = "390px"
main.style.display = "flex"
main.style.flexDirection = "column"
main.style.alignItems = "center";
main.style.borderBottom = "1px solid #444"

// digital div(clock)
const clock = document.querySelector('#digital')
clock.style.width = "700px";
clock.style.height = "150px";
clock.style.marginTop = "80px";
clock.style.backgroundColor = "#1F1F1F"
clock.style.display = "flex"
clock.style.justifyContent = "center"
clock.style.alignItems = "center"
clock.style.fontSize = "70px"
clock.style.fontWeight = "bold"
clock.style.color = "#FFFFFF"
clock.style.fontFamily = "Orbitron, sans-serif"
clock.style.border = "10px solid #444"
clock.style.borderRadius = "40px";

// date and time zone(paragraph) class name  = date
const timezone = document.querySelectorAll('.date')
timezone.forEach(element => {
    element.style.width = "700px"
    element.style.overflow = "hidden"
    element.style.margin = "13px 0"
    element.style.textAlign = "left"
    element.style.color = "#FFFFFF"
    element.style.fontSize = "24px"
    element.style.fontWeight = "500"
    element.style.fontFamily = "Orbitron, sans-serif"
});

// time zone qand date selector
const dtext = document.querySelector('#currdate')
const tztext = document.querySelector('#timezone')

// real time date and time function in js
setInterval(() => {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString('en-US', { hour12: !is24Hour });
    dtext.innerText = "Date: " + date.toDateString();
    tztext.innerText = "Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;

}, 1000);

// control div contains 3 toggle div
const control = document.querySelectorAll('.controls')
control.forEach(element => {

    element.style.height = "10vw"
    element.style.padding = "30px"
    element.style.backgroundColor = "#1f1f1f"; // Dark grey (almost black)
    element.style.color = "#ffffff";           // Bright white text
    element.style.margin = "100px 20px 0px 20px"
    element.style.display = "flex"
    element.style.border = "10px solid #444"
    element.style.borderRadius = "100px"

});

// Ist child of control
const theme = document.querySelector("#day-night")
theme.style.width = "33%"
theme.style.display = "flex"
theme.style.flexDirection = "column"
theme.style.justifyContent = "center"
theme.style.alignItems = "center"
theme.style.fontSize = "30px"
theme.style.color = "#fff"
theme.style.fontWeight = "bold"
theme.style.fontFamily = "Orbitron, sans-serif"
theme.style.borderRight = "5px solid #444"

// IInd child of control
const format = document.querySelector("#tformat")
format.style.width = "33%"
format.style.display = "flex"
format.style.flexDirection = "column"
format.style.justifyContent = "center"
format.style.alignItems = "center"
format.style.fontSize = "30px"
format.style.color = "#fff"
format.style.fontWeight = "bold"
format.style.fontFamily = "Orbitron, sans-serif"
format.style.borderRight = "5px solid #444"

// IIIrd child of control div
const d_toggle = document.querySelector("#datetoggle")
d_toggle.style.width = "33%"
d_toggle.style.display = "flex"
d_toggle.style.flexDirection = "column"
d_toggle.style.justifyContent = "center"
d_toggle.style.alignItems = "center"
d_toggle.style.fontSize = "30px"
d_toggle.style.color = "#fff"
d_toggle.style.fontWeight = "bold"
d_toggle.style.fontFamily = "Orbitron, sans-serif"

// event on buttons of all 3child div of control when clicked
let isDark = false;
let isDateVisible = true;
let is24Hour = false;


const button = document.querySelectorAll("button")
button.forEach(element => {
    element.style.width = "80px"
    element.style.height = "35px"
    element.style.color = "#fff"
    element.style.backgroundColor = "#333"
    element.style.borderRadius = "12px"


    element.addEventListener("click", () => {
        const id = element.id;

        if (id === "theme") {
            isDark = !isDark;
            body.style.backgroundColor = isDark ? "#121212" : "#F5F5F5";
            body.style.color = isDark ? "#ffffff" : "#212121";

            main.style.borderBottom = isDark ? "1px solid #BDBDBD" : "0px solid #BDBDBD";

            //sets nav bar when event is triggred
            nav.style.backgroundColor = isDark ? "#1E88E5" : "#1976D2";
            nav.style.color = isDark ? "#FFEB3B" : "#ffffff";

            //set clock bar when event is triggered
            clock.style.backgroundColor = isDark ? "#1F1F1F" : "#ffffff";
            clock.style.color = isDark ? "#ffffff" : "#000000";
            clock.style.border = isDark ? "10px solid #444" : "10px solid #BDBDBD";

            //changes timezone and date when event is triggered
            dtext.style.color = isDark ? "#ffffff" : "#000000";
            tztext.style.color = isDark ? "#ffffff" : "#000000";

            // Chnages control div when event is occured 
            control.style.backgroundColor = isDark ? "#1f1f1f" : "#ffffff";
            control.style.border = isDark ? "10px solid #444" : "10px solid #1976D2";

            // changed text of child paragraph of control div
            const paragraphs = control.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.style.color = isDark ? "#ffffff" : "#000000";
            });

            const btns = control.querySelectorAll('button');
            btns.forEach(btn => {
                btn.style.color = isDark ? "#ffffff" : "#000000";
                btn.style.backgroundColor = isDark ? "#333333" : "#eeeeee";
            });
        }

        else if (id === "t_format") {
            is24Hour = !is24Hour;
        }
        else if (id === "dtoggle") {
            isDateVisible = !isDateVisible;
            dtext.style.display = isDateVisible ? "block" : "none";
            tztext.style.display = isDateVisible ? "block" : "none";
        }

    });
});













