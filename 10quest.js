//Faça um algoritmo que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit
const prompt = require('prompt-sync')();
const celsius = parseFloat(prompt('Informe a temperatura em Celsius: '));

const fahre = (9*celsius/5) + 32;

console.log(`A temperatura informada em Fahrenheit eh: ${fahre} graus`);