/*
Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.
*/

const prompt = require("prompt-sync")()
console.log("Olá!! Vamos calcular a area do seu triangulo")
console.log("\nInforme os seguintes dados")

let b = Number(prompt("Valor da base do triangulo: "))

let h = Number(prompt("Valor da altura do triangulo: "))

if (h <= 0 || b <= 0)
{
    console.log("O valor informado esta invalido")
    console.log("ATENÇÃO os valores inseridos devem ser positivos e maiores que zero")
}
else (console.log(`\nA area do seu triangulo é ${(h * b) /2}`))
