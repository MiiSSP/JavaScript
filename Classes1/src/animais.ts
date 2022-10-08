export abstract class Animais
{
    nome: string
    idade: string
    comunicacao: string
    mov: string
    som: string

    constructor 
    (
        nome: string,
        idade: string,
        comunicacao: string,
        mov: string,
        som: string
    )
    {
        this.nome = nome
        this.idade = idade
        this.comunicacao = comunicacao
        this.mov = mov
        this.som = som
    }
    
    innome(){}
    inidade(){}
    incomunic(){}
    movimento(){}
    onomatopeia (){}
    
}