/*
Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.
*/

const prompt = require("prompt-sync")()
console.log("Olá, você esta na seção de preenchimento de dados")
console.log("Insira os dados do(a) funcionario(a) abaixo:")

let nome = prompt("\nNome: ")
let cod = Number(prompt("Código: "))
let horas = Number(prompt("Horas trabalhadas: "))

console.log ("\nVerificação de Dados")
console.log(`Funcionario(a): ${nome}`)
console.log(`Código: ${cod}`)
console.log(`Horas trabalhadas: ${horas}`)

if (horas <= 50)
{
    let soma = (horas * 10)
    console.log(`\nRealizar pagamento de salario no valor de: R$ ${soma}`)
    console.log("Este(a) funcionario(a) não possui horas extras")
}
else
{
    let e = ((horas - 50)*20)
    console.log(`\nRealizar pagamento de salario no valor de: R$ ${50 * 10}`)
    console.log(`Realizar pagamento de horas extras no valor de: ${e}`)
}