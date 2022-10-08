
import { Animais } from "./animais"
export class Cachorro extends Animais
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
        console.log (" Nomes: Também são conhecidos como cão ou cadela.")
    }

    inidade(): void 
    {
        console.log (" Tempo de Vida: Eles possuem uma expectativa de vida de 8 a 12 anos.")
    }

    incomunic(): void 
    {
        console.log (" Comunicação: Sua comunicação é feita através de latidos, uivos e rosnados.")
    }

    onomatopeia(): void 
    {
        console.log (" Onomatopeia: Os sons que os cachorros emitem são au au au.")
    }
    
    movimento(): void
    {
        console.log (" Locomoção: Eles se movimentam através da andadura, trote ou galope.")
        console.log (" Velocidade: Sua velocidade média de corrida é de 35 km/h. ")
    }

    apresentar()
    {
        console.log("\n---------CACHORRO---------")
        this.innome()
        this.inidade()
        this.incomunic()
        this.onomatopeia()
        this.movimento()
    }
}