//Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const prompt = require('prompt-sync')();
const lado = parseFloat(prompt("Informe o lado do quadrado: "));
let area = lado*lado;
let dobroarea = 2*area;

console.log(`A área do quadrado eh: ${area} e o dobro da area eh: ${dobroarea}`);