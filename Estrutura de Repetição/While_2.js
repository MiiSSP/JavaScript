/*
Uma empresa desenvolveu uma pesquisa para saber as características
psicológicas dos indivíduos de uma região. Para tanto, a cada uma das pessoas
era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções
(1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era
agressiva). Pede-se para elaborar um sistema que permita ler os dados de 150
pessoas, calcule e mostre: (WHILE)
 o número de pessoas calmas;
 o número de mulheres nervosas;
 o número de homens agressivos;
 o número de outros calmos;
 o número de pessoas nervosas com mais de 40 anos;
 o número de pessoas calmas com menos de 18 anos.
*/

const prompt = require("prompt-sync")()
let contgeral = 1
let cont1 = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
let cont5 = 0
let cont6 = 0

console.log("Olá, preencha as informações solicitadas abaixo")

while (contgeral <= 5) 
    {
        contgeral++

        let idade = Number(prompt("\nInforme sua idade: "))

        console.log("\nCom qual gênero você se identifica (1 - feminino / 2 - masculino / 3 - outros)")
        let genero = Number(prompt("Insira o número correspondente ao seu gênero: "))
    
        console.log("\nVocê se considera uma pessoa (1 - Calma / 2 - Nervosa / 3 - Agressiva)")
        let personalidade = Number(prompt("Insira o número correspondente a sua personalidade: "))

        if (personalidade == 1)
        {
            cont1++
        }
        if (genero == 1 && personalidade == 2)
        {
            cont2++
        }
        if (genero == 2 && personalidade == 3)
        {
            cont3++
        }
        if (genero == 3 && personalidade == 1)
        {
            cont4++
        }
        if (idade > 40 && personalidade == 2)
        {
            cont5++
        }
        if (idade < 18 && personalidade == 1)
        {
            cont6++
        }
    }

console.log (`\nA partir dos dados obtidos com a pesquisa, tem-se:`)
console.log (`O número de pessoas calmas é ${cont1}`)
console.log (`O número de mulheres nervosas é ${cont2}`)
console.log (`O número de homens agressivos é ${cont3}`)
console.log (`O número de outros calmos é ${cont4}`)
console.log (`O número de pessoas nervosas com mais de 40 anos é ${cont5}`)
console.log (`O número de pessoas calmas com menos de 18 anos é ${cont6}`)