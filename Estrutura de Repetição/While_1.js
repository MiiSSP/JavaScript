/*
Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de
21 anos. Total de pessoas com mais de 50 anos. O programa termina quando
idade for =-99.
*/

const prompt = require("prompt-sync")()
let cont = 1
let idade = 0
let soma1 = 0
let soma2 = 0
let soma3 = 0

console.log("Bem Vinde!!\n")

while (idade >= 0 && idade <= 98)
    {
        idade = Number(prompt(`Informe a idade da ${cont++}ª pessoa: `))
    
        if (idade < 21)
        {
            soma1 ++
        }
        else if (idade > 50)
        {
            soma2 ++
        }
        else
        {
            soma3 ++
        }
    }

console.log(`\nTotal de pessoas com menos de 21 anos é ${soma1}`)
console.log(`Total de pessoas com mais de 50 anos é ${soma2}`)
console.log(`Total de pessoas com idade entre 21 e 50 anos é ${soma3}`)