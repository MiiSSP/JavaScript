/*
Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
número é par ou ímpar, e se é positivo ou negativo.
*/

const prompt = require("prompt-sync")()
const num = Number(prompt("Insira seu número aqui: "))

if (num % 2 == 0 && num >= 0)
{
    console.log("\nO número inserido é par e positivo")
}

if (num % 2 == 1)
{
    console.log("\nO número inserido é impar e positivo")
}

if (num % 2 == 0 && num < 0)
{
    console.log("\nO número inserido é par e negativo")
}

if  (num % 2 != 0 && num < 0)
{
    console.log("\nO número inserido é impar e negativo")
}
