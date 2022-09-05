/*
Crie um programa que leia um número do teclado até que encontre um
número igual a zero. No final, mostre a soma dos números
digitados.
*/

const prompt = require("prompt-sync")()
let num = 0
let soma = 0

console.log ("Bem Vinde!!\n")

do
    { 
    num = Number(prompt("Digite seu número: "))
    soma = soma + num
    } while (num != 0)

console.log(`\nA soma dos números informados é ${soma}`)