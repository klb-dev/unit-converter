/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
    convertLength();
    convertVolume();
    convertMass();
    inputEl.value = "";
});


function convertLength() {
    let feet = inputEl.value * 3.281;
    let meter =  inputEl.value / 3.281; 
    let total = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meter.toFixed(3)} meters`;
    lengthEl.innerHTML = total;
}

function convertVolume() {
    let gallon = inputEl.value * 0.264;
    let liter = inputEl.value / 0.264;
    let total = `${inputEl.value} liters = ${gallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${liter.toFixed(3)} liters`
    volumeEl.innerHTML = total;
}

function convertMass() {
    let kilo = inputEl.value * 2.204;
    let lb = inputEl.value / 2.204;
    let total = `${inputEl.value} kilograms = ${kilo.toFixed(3)} pounds | ${inputEl.value} pounds = ${lb.toFixed(3)} kilograms`
    massEl.innerHTML = total
}

const toggleBtn = document.getElementById("toggle-btn");



