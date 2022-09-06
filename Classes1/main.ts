import PromptSync from "prompt-sync";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let dog = new Cachorro ("","","","","")
let cavalo = new Cavalo ("","","","","")
let preguica = new Preguica ("","","","","")
const prompt = PromptSync()

while (true)
{
    console.log("\n............BICHINHOS DO CORAÇÃO............")
    console.log("\n....................MENU....................")

    console.log("\n1 - Apresentar dados de cachorros")
    console.log("2 - Apresentar dados de cavalos")
    console.log("3 - Apresentar dados de bichos preguiça")
    console.log("4 - Apresentar lista de dados de todos os animais")
    console.log("5 - Sair do sistema")

    let opcao = Number(prompt("\nInsira o número correspondente a opção escolhida: "))

    switch (opcao) 
    {
        case 1:
        dog.apresentar()
        break
        case 2:
        cavalo.apresentar()
        break
        case 3:
        preguica.apresentar()
        break
        case 4:
        dog.apresentar(), cavalo.apresentar(), preguica.apresentar()
        break
        case 5:
        break
        default:
        console.log("Opção Invalida!!")
        break
    }
}