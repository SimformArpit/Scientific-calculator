let disp = document.querySelector("#disp");
let btn = document.querySelectorAll(".btn");
let memory = 0;
// Fetching Values Of Every Button Using Event Listners 

for (item of btn) {
    item.addEventListener('click', (e) => {   
        btnval = e.target.value;
        disp.value += btnval;
      
    });
}
// Function Of Calculation Operations
function calculate(){
    let x = disp.value;
    disp.value = eval(x);
}
// Function Of Clear Screen 
function clr(){
    disp.value = "";
    document.getElementById("trig").selected = true;
    document.getElementById("fun").selected = true;
}
// Function Of Backspace
function back() {
    disp.value = disp.value.substr(0, disp.value.length - 1);
}
// Function Of PI
function pi(){
    const pi = 3.14159265359;
    if(disp.value == ""){
        disp.value = pi;
    }else{
        disp.value *= pi;
    }    
}
// Function Of Euler's Number
function e(){
    const e = 2.71828182846;
    if(disp.value == ""){
        disp.value = e;
    }else{
        disp.value *= e;
    }
}
// Function Of 2 Power N
function twoIntoN(){
    disp.value = Math.pow(2, disp.value);
}
// Function Of X Square 
function xpow(){
    let xpow = disp.value;
    disp.value = xpow * xpow;
}
// Function Of One By Num
function oneByNum(){
    let num = disp.value;
    disp.value = 1 / num;
}
// Function Of Absolute
function abslt(){
    disp.value = Math.abs(disp.value);
}
// Function Of Exponent 
function expo(){
    disp.value = Math.exp(disp.value);
}
// Function Of Square Root 
function sqroot(){
    disp.value = Math.sqrt(disp.value);
}
// Function Of Factorial 
function fact(){
    let fact = 1;
    for(let num=1; num<=disp.value; num++){
        fact *= num;
    }
    disp.value = fact;
}
// Function Of 10 Power X
function powX(){
    disp.value = Math.pow(10, disp.value);
}
// Function Of Log
function log(){
    disp.value = Math.log10(disp.value);
}
// Function Of Natural Log 
function natLog(){
    disp.value = Math.log(disp.value);
}
// Function Of Plus/Minus Button
function plusMinus(){
    let x = disp.value;
    let y = x * -1;
    disp.value = y;
}
// Functionality Of Trignometry Button
function trignometry(){
    let x = document.getElementById("trigno").value;
    if(x == "sin"){
        let y = Math.sin(disp.value * Math.PI / 180);
        disp.value = y.toFixed(2);
    }
    else if(x == "cos"){
        let y = Math.cos(disp.value * Math.PI / 180);
        disp.value = y.toFixed(2);
    }
    else if(x == "tan"){
        let y = Math.tan(disp.value * Math.PI / 180);
        disp.value = y.toFixed(2);
    }
    
}
// Functionality Of Function Button
function func(){
    let x = document.getElementById("func").value;
    if(x == "abs"){
        disp.value = Math.abs(disp.value).toFixed(2);
    }
    else if(x == "floor"){
        disp.value = Math.floor(disp.value);
    }
    else if(x == "ceil"){
        disp.value = Math.ceil(disp.value);
    }
    else if(x == "trignometry"){
        disp.value = x;
    }
}
// Function To Calculate Degree to Radian
function deg(){
    disp.value = (180/disp.value * Math.PI ).toFixed(2);
}
// Function Of Fixed Exponent
function fixedExpo(){
    disp.value = Number(disp.value).toExponential();
}
// Memory Functions
// Clear Memory 
function mcFunc(){
    localStorage.clear();
}
// Read Memory
function mrFunc(){
    disp.value = memory;
    console.log(memory);
}
// Memory Plus 
function mpFunc(){
    memory = Number(localStorage.getItem("ms")) + Number(disp.value);
    // console.log(memory);
    localStorage.setItem("ms",memory);
    // localStorage.setItem("ms",memory) += disp.value;
}
// Memory Minus 
function mmFunc(){
    memory = Number(localStorage.getItem("ms")) - Number(disp.value);
    // console.log(memory);
    localStorage.setItem("ms",memory);
    // localStorage.setItem("ms",memory);
}
// Save Memory
function msFunc(){
    memory = eval(disp.value);
    console.log(memory);
    localStorage.setItem("ms",memory);
}