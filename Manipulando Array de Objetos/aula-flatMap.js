let lista = [
    { nome: 'andrei', idade: 23, cartões: [24643512, 89439345] },
    { nome: 'joao', idade: 20 },
    { nome: 'heitor', idade: 29, cartões: [45345345, 35235655]  },
    { nome: 'maria', idade: 25 },
    { nome: 'carlos', idade: 32 },
    { nome: 'ana', idade: 19 },
    { nome: 'lucas', idade: 27, cartões: [25412514, 72377472] },
    { nome: 'fernanda', idade: 30 },
    { nome: 'bruno', idade: 22 },
    { nome: 'juliana', idade: 28 }
];


const cartoes = lista.flatMap((objeto) => objeto.cartões);

console.log(cartoes);