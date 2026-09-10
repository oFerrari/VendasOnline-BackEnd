let lista = [
    { nome: 'andrei', idade: 23, exibir: true },
    { nome: 'joao', idade: 20 },
    { nome: 'heitor', idade: 29 },
    { nome: 'maria', idade: 25 },
    { nome: 'carlos', idade: 32 },
    { nome: 'ana', idade: 19 },
    { nome: 'lucas', idade: 27 },
    { nome: 'fernanda', idade: 30 },
    { nome: 'bruno', idade: 22 },
    { nome: 'juliana', idade: 28 }
];

const pessoa = {
    jose: {
        idade: 54,
    },
    joao: {
        idade:26
    },
    maria: {
        idade:18
    }
}

console.log(pessoa.jose.idade)


const pessoas = lista.reduce((acumulador, objeto) =>{
    return {...acumulador,
            [objeto.nome]: {
                idade: objeto.idade
            }
    }
},{});

console.log(pessoas.maria.idade)

const pessoa_com_shelby = lista.reduce((acumulador, objeto) =>{
    return {...acumulador,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
},{ shelby: {idade: 23}});

console.log(pessoa_com_shelby)


const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade)
    return acc;
},[])

console.log(pessoasArray)