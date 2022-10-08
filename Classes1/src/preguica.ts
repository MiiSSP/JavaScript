import { Animais } from "./animais"
export class Preguica extends Animais
{

    constructor 
(
    nome: string,
    idade: string,
    comunicacao: string,
    mov: string,
    som: string
){
    super(nome, idade, comunicacao, mov, som)
}


    innome(): void
    {
        console.log (" Nomes: Também são conhecidos como Folivora, Preguiça, Aí, Aígue e Cabeluda.")
    }

    inidade(): void 
    {
        console.log (" Tempo de Vida: Eles possuem uma expectativa de vida de 30 a 40 anos.")
    }

    incomunic(): void 
    {
        console.log (" Comunicação: Sua forma de comunicação é desconhecida.")
    }

    onomatopeia(): void 
    {
        console.log (" Onomatopeia: Os sons que os bichos preguiça emitem são desconhecidos.")
    }
    
    movimento(): void
    {
        console.log (" Locomoção: Eles se movimentam através escaladas e nados.")
        console.log (" Velocidade: Sua velocidade de movimentação terrestre é muito lenta, mas na agua eles são ageís.")
    }

    apresentar()
    {
        console.log("\n---------PREGUIÇA---------")
        this.innome()
        this.inidade()
        this.incomunic()
        this.onomatopeia()
        this.movimento()
    }
}    