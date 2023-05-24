type Hero = {
    nome: string,
    vulgo: string
}
function printaObj(pessoa: Hero){
    console.log(pessoa)
}

printaObj({
    nome:"nath",
    vulgo:"super deprimida"
})

let ligado:boolean = true

let nome: string = "nathasha"
let altura: number = 1.7
let idade: number = 22

console.log(nome, altura, idade)

let nulo: null = null
let indefinido: undefined = undefined

let anyany: any = "qualquer coisa"
let voider: void 


//obejto - sem presibilidade
let objeto: object = { 
    name : nome, 
    idade: idade
}

//objeto TIPADO

type ProdutoLoja = {
    nome: string;
    codigo: number;
    preco: number;
    
}

 let prod: ProdutoLoja = {
    nome:" p1",
    codigo: 1234, 
    preco: 3
}


//arrays

let dados: string[] = ["nath", "jose"]
let dados2: Array<string> = ["nath", "jose"]

//array com mais de um tipo 

let tipos: (string | boolean)[] = ["nath", true]

//tupla tem que respeitar a ordem

let boleto: [string, number, number] = ["bb", 220, 242423]


