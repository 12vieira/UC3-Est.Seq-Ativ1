//Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. (C = 5 * ((F-32) / 9)).
const prompt = require('prompt-sync')();
const fahre = parseFloat(prompt('Informe a temperatura em Fahrenheit: '));

const celsius = 5*((fahre-32)/9);

console.log(`A temperatura informada em Celsius eh: ${celsius} graus`);