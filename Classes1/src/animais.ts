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

    abstract innome(nome: string)

    abstract inidade(idade: string)

    abstract incomunic(comunicacao: string)

    abstract movimento(mov: string)

    onomatopeia (som: string){}
}