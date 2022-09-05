/*
Ler 10 números e imprimir quantos são pares e quantos são ímpares.
*/

const prompt = require("prompt-sync")()
let par = 0
let impar = 0

console.log("Bem vinde!!\n")

for (cont = 1; cont >= 1 && cont <= 10; cont ++)
    {
        let num = Number(prompt(`Insira o ${cont}º número: `))

        if (num % 2 == 0)
        {
            par ++
        }
        else if (num % 2 == 1)
        {
            impar ++
        }
    }
console.log(`\nVocê inseriu ${par} números pares e ${impar} números impares `)