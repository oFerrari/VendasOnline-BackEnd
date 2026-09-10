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


const funcaoReduce = (acumulador, objeto) => {
    return {
        ...acumulador,
        [objeto.nome]: {
            idade: objeto.idade
        }
    };
};

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

console.log(pessoas);

console.log(chaves);

console.log(Object.keys(lista[0]));

const listaDeVolta = chaves.map((chave) => ({nome: chave, idade: pessoas[chave].idade}))

console.log(listaDeVolta)