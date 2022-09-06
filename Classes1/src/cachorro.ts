import { Animais } from "./animais"
export class Cachorro extends Animais 
{
    innome()
    {
        this.nome = "Também são conhecidos como cão ou cadela"
    }

    inidade() 
    {
        this.idade = "Eles possuem uma expectativa de vida de 8 a 12 anos"
    }

    incomunic() 
    {
        this.comunicacao = "Sua comunicação é feita através de latidos, uivos e rosnados"
    }

    onomatopeia() 
    {
        this.som = "Os sons que os cachorros emitem são au au au"
    }
    
    movimento()
    {
        this.mov = `Eles se movimentam através da andadura, trote ou galope.
        Sua velocidade média de corrida é de 35 km/h`
    }

    apresentar()
    {
        console.log("-----CACHORRO-----")
        console.log(`Nomes:${this.nome}
        Tempo de Vida: ${this.idade}
        Comunicação: ${this.comunicacao}
        Onomatopeia: ${this.som}
        Locomoção: ${this.mov}`)
    }
}