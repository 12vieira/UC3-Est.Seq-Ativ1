//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const prompt = require('prompt-sync')();
const ganhohora = parseInt(prompt('Informe quanto ganha por hora: '));
const horasmes = parseInt(prompt('Informe quantas horas trabalhadas por mes: '));

let salario = ganhohora*horasmes;

console.log(`Seu salario total eh: R$${salario}.00`);