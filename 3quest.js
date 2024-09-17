// Faça um algoritmo que peça dois números e imprima a soma.
const prompt = require('prompt-sync')();
let number1 = parseInt(prompt("Digite um número: "));
let number2 = parseInt(prompt("Digite outro número: "));
let soma = number1 + number2;
console.log(`A soma dos números informados eh: ${soma}`);