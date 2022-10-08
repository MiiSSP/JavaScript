import { Animais } from "./animais"
export class Cavalo extends Animais 
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
        console.log (" Nomes: Também são conhecidos como Potro, Potranca, Égua, Garanhão e Capão.")
    }
    
    inidade(): void 
    {
        console.log (" Tempo de Vida: Eles possuem uma expectativa de vida de 25 a 30 anos.")
    }
    
    incomunic(): void 
    {
        console.log (" Comunicação: Sua comunicação é feita através de relinchos, rinchos e bufos.")
    }
    
    onomatopeia(): void 
    {
        console.log (" Onomatopeia: Os sons que os cavalos emitem são iiirrrrí, rilinchin.")
    }
        
    movimento(): void
    {
        console.log (" Locomoção: Eles se movimentam através do passo, trote, cânter ou galope.")
        console.log (" Velocidade: Sua velocidade média de galope é de 40 a 48 km/h. ")
    }
    
    apresentar()
    {
        console.log("\n---------CAVALO---------")
        this.innome()
        this.inidade()
        this.incomunic()
        this.onomatopeia()
        this.movimento()
    }
}