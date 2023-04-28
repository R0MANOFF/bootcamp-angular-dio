class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade
        this.anoNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Nome ${this.nome} e idade ${this.idade}`)
    }
}

const nath = new Pessoa('nathasha', '22')



console.log(nath.descrever())

