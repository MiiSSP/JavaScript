/*
Escrever um programa que receba vários números inteiros no teclado. E no
final imprimir a média dos números múltiplos de 3. Para sair digitar
0 (zero).
*/

const prompt = require("prompt-sync")()
let soma = 0
let cont = 0
let num = 0

console.log("Bem vinde!!\n")

do
    {
        num = Number (prompt("Informe o número inteiro aqui: "))

        if (num % 3 == 0 && num != 0)
        {
            cont ++
            soma = soma + num
        }
        
    } while (num != 0)


    if (soma == 0)
    {
        console.log ("Você não informou nenhum número inteiro multiplo de 3")

    } else (console.log(`\nA média dos números multiplos de 3 informados é ${soma / cont}`))
     