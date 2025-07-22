const div = document.querySelector('#main')
div.style.display = "flex"
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.gap = "70px";

const nav = document.querySelector('#nav')
nav.style.width="100%"
nav.style.height="100px"
nav.style.backgroundColor="#0077b6" 
nav.style.color="white"
nav.style.textAlign="center"
nav.style.fontSize="85px"
nav.style.fontWeight="bold"
nav.style.letterSpacing="1px"
nav.style.boxShadow="0 2px 8px rgba(0, 0, 0, 0.15)"
nav.style.fontFamily="'Poppins', sans-serif"

const w_input = document.querySelector('#weightinput');
w_input.style.padding="10px"
w_input.style.fontSize="15px"
w_input.style.fontWeight="560"
w_input.style.border="2px solid #ccc"
w_input.style.borderRadius="10px" 
w_input.style.backgroundColor="#ffffff" 


const h_input = document.querySelector('#heightinput');
h_input.style.padding="10px"
h_input.style.fontSize="15px"
h_input.style.fontWeight="560"
h_input.style.border="2px solid #ccc"
h_input.style.borderRadius="10px"
h_input.style.backgroundColor="#ffffff" 


const calc = document.querySelector('button');
calc.style.display="flex"
calc.style.justifyContent="center"

calc.style.padding="10px"
calc.style.fontSize="15px"
calc.style.fontWeight="560"
calc.style.border="2px solid black"
calc.style.borderRadius="10px"
calc.style.backgroundColor="#0077b6"
calc.style.color="#ffffff"

calc.addEventListener("mouseenter", function () {
    calc.style.backgroundColor = "#005f87";
    calc.style.color = "#ffffff";
    calc.style.transform = "scale(1.05)";
});

calc.addEventListener("mouseleave", function () {
    calc.style.backgroundColor = "#0077b6";
    calc.style.transform = "scale(1)";
});


const res = document.querySelector("#box4")
res.style.width="40%"
res.style.height="100px"
res.style.color="#333333"
res.style.fontSize="15px"
res.style.borderRadius="15px"
res.style.fontFamily="Poppins,sans-serif"
res.style.backgroundColor="#f0f4f8"

document.querySelector('button').addEventListener("click",calculatebmi);
function calculatebmi() {
    const weight = parseFloat(document.getElementById('weightinput').value);
    const height = parseFloat(document.getElementById('heightinput').value);
    const result = document.getElementById('box4')

    if (isNaN(weight) || weight<=0 || isNaN(height) || height <= 0) {
        result.style.backgroundColor="#ffffff"
        result.innerText = "Please enter a valid value";
        console.log("Weight:", weight, "Height:", height);
        return;
    }

    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        result.style.backgroundColor="#ffffff"
        result.innerText = `Your BMI(Body Mass Index) is  ${bmi.toFixed(2)}.
        This indicates that you are underweight.`
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        result.style.backgroundColor="#ffffff"
        result.innerText = `Your BMI(Body Mass Index) is  ${bmi.toFixed(2)}.
        Your BMI falls within the normal range, indicating a healthy weight for your height.`
    }
    else if (bmi == 25.0 && bmi <= 29.9) {
        result.style.backgroundColor="#ffffff"
        result.innerText = `Your BMI(Body Mass Index) is  ${bmi.toFixed(2)}.
        Your BMI suggests that you are overweight. `
    }
    else if (bmi >= 30.0) {
        result.style.backgroundColor="#ffffff"
        result.innerText = `Your BMI(Body Mass Index) is  ${bmi.toFixed(2)}.
        Your BMI falls in the obese range.`
    }
}
