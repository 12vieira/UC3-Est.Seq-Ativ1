//Faça um algoritmo que converta metros para centímetros.

const prompt = require('prompt-sync')();

const metros = parseInt(prompt("Digite o valor em metros: "));
const cent = metros*100;

console.log(`A medida desejada em centimetros eh: ${cent} cm`);