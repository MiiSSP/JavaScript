import { Animais } from "./animais"
export class Preguica extends Animais
{
    innome()
    {
        this.nome = "Também são conhecidos como Folivora, preguiça, aí, aígue e cabeluda."
    }

    inidade() 
    {
        this.idade = "Eles possuem uma expectativa de vida de 30 a 40 anos"
    }

    incomunic() 
    {
        this.comunicacao = "Sua forma de comunicação é desconhecida"
    }

    onomatopeia() 
    {
        this.som = "Os sons que os bichos preguiça emitem são desconhecidos"
    }

    movimento()
    {
        this.mov = `Eles se movimentam através escaladas e nados.
        Sua velocidade de movimentação terrestre é muito lenta
        Na agua os bichos preguiça são extremamentes ageís `
    }

    apresentar()
    {
        console.log("-----CAVALO-----")
        console.log(`Nomes:${this.nome}
        Tempo de Vida: ${this.idade}
        Comunicação: ${this.comunicacao}
        Onomatopeia: ${this.som}
        Locomoção: ${this.mov}`)
    }
}