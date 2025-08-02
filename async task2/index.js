//generates a unique hex color code everytime
const random = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]    
    }
    return color
    
};
console.log(random());
/*

// my code code is correct and aworking but when a button is clicked then
//it call multiple event listeners due to nesting of events

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let interval;
start.addEventListener('click',()=>{
    const body  = ()=>{
        console.log("start clicked")
        const body = document.querySelector('body')
        body.style.background = random()
    }
    interval = setInterval(body, 500)

    stop.addEventListener('click',()=>{
        console.log("stop clicked")
        clearInterval(interval)
        interval  = null
    })
})
*/


//clear and efficent version is this 
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let interval = null;

// Changes background color
const changeBackground = () => {
    console.log("changing color");
    document.body.style.background = random();
};

// Start event
start.addEventListener('click', () => {
    if (!interval) { // prevent multiple intervals
        console.log("start clicked");
        interval = setInterval(changeBackground, 500);
    }
});

// Stop event
stop.addEventListener('click', () => {
    console.log("stop clicked");
    clearInterval(interval);
    interval = null;
});

