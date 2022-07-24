// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcionario = {
    codigo: 10,
    nome: 'Jhon'
};

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'jhon'
}

interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 30,
    nome: 'Jhon'
}