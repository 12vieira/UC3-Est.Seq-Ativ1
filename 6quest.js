// Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área.

const prompt = require('prompt-sync')();

const raio = parseFloat(prompt("Digite o raio: "));
const area = (3.14*raio*raio);

console.log(`A area do circulo eh: ${area}`)