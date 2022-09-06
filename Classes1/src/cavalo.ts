import { Animais } from "./animais"
export class Cavalo extends Animais 
{
    innome()
    {
        this.nome = "Também são conhecidos como Potro, Potranca, Égua, Garanhão e Capão"
    }

    inidade() 
    {
        this.idade = "Eles possuem uma expectativa de vida de 25 a 30 anos"
    }

    incomunic() 
    {
        this.comunicacao = "Sua comunicação é feita através de relinchos, rinchos e bufos"
    }

    onomatopeia() 
    {
        this.som = "Os sons que os cavalos emitem são iiirrrrí, rilinchin"
    }
    
    movimento()
    {
        this.mov = `Eles se movimentam através do passo, trote, cânter ou galope.
        Sua velocidade média de galope é de 40 a 48 km/h`
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