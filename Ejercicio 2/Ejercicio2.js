const prompt = require('prompt-sync')();

let tempC = prompt("Ingresa tu temperatura en Celsius: ");

tempC = parseFloat(tempC)
if (isNaN(tempC)) {
    console.log("Error, debes ingresar un Número")
} else {
    let tempF = (tempC * (9 / 5) + 32);
    let tempK = (tempC + 273.15);

    console.log("La temperatura en grados Fahrenheit: " + tempF);
    console.log("La temperatura en grados Kelvin: " + tempK);
}


