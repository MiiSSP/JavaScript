/*
Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for = 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.
*/
const prompt = require("prompt-sync") ()

console.log("Encontrando o quadrado do seu número")
console.log("\nInsira quatro números nos espaços abaixo:")

  let n1 = Number(prompt("Primeiro número: "))

  let n2 = Number(prompt("Segundo número: "))

  let n3 = Number(prompt("Terceiro número: "))

  let n4 = Number(prompt("Quarto número: "))

  n1 = Math.pow(n1, 2)
  n2 = Math.pow(n2, 2)
  n3 = Math.pow(n3, 2)
  n4 = Math.pow(n4, 2)

if (n3 >= 1000)
{
    console.log(`\nO seu terceiro número elevado ao quadrado é: ${n3}`)
}
else
{
    console.log("\nEstes são seus números elevados ao quadrado:")
    console.log(`Primeiro número: ${n1}`)
    console.log(`Segundo número: ${n2}`)
    console.log(`Terceiro número: ${n3}`)
    console.log(`Quarto número: ${n4}`)
}