/*
A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.
*/

const prompt = require("prompt-sync")()
let p = Number(prompt("Informe o indice de poluição atual: "))

if (p >= 0.05 && p < 0.3)
{
    console.log("Todas as industrias devem manter seu funcionamento normalmente")
}

if (p >= 0.3 && p < 0.4)
{
    console.log("As industrias do grupo 01 devem interromper seu funcionamento imediatamente!!")
}

if (p >= 0.4 && p < 0.5)
{
    console.log("As industrias dos grupos 01 e 02 devem interromper seu funcionamento imediatamente!!")
}

if (p >= 0.5)
{
    console.log("Todas as industrias devem interromper seu funcionamento imediatamente!!")
}
else(console.log("O indice informado está incorreto!"))