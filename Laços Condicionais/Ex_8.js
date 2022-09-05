/*
Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
for maior que 100, caso contrário imprimi-la com o valor zero.
*/

const prompt = require("prompt-sync")()
let n = Number(prompt("Insira a variavel númerica a ser analisada: "))

if (n > 100)
{
    console.log (`\nSua variavel númerica equivale á: ${n}`)
} 
else
{
    console.log("Sua variavel númerica equivale á: 0")
    console.log("\nLEMBRE-SE: Este sistema só reconhece valores acima de cem!!")
}