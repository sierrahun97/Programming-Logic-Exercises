import promptSync from 'prompt-sync'; //para usar el prompt en la terminal
const prompt = promptSync();


console.log("Ingresa 3 números");
let num1= parseInt(prompt("Ingresa el primer número:"));

let num2= parseInt(prompt("Ingresa el segundo número:"));

let num3= parseInt(prompt("Ingresa el tercer número:"));
let numbers = [num1, num2 , num3 ]


console.log("Estos son tus números: " , num1 , " - ", num2, " - ", num3)

let mayor, medio, menor;
if (num1 > num2) {
    if (num1 > num3) {
        mayor = num1;
        if (num2 > num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else {
        mayor = num3;
        medio = num1;
        menor = num2;
    }
} else {
    if (num2 > num3) {
        mayor = num2;
        if (num1 > num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        medio = num2;
        menor = num1;
    }
}

console.log("El número mayor es: ", mayor);
console.log("El número del medio es: ", medio);
console.log("El número menor es: ", menor);

numbers.sort((a, b) => a - b);
console.log(numbers)

numbers.sort((a, b) => b - a);
console.log(numbers)

if (num1 === num2) {
    console.log(num1, " y ",num2,  " son iguales.");
} else if (num1 === num3) {
    console.log(num1, " y ",num3 , "son iguales.");
} else if (num2 === num3) {
    console.log(num2, " y " ,num3, "son iguales.");
} else {
    console.log("Todos los números son diferentes.");
}


















