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

const pessoa = ((objeto) => objeto.idade > 30);
console.log(lista.find(pessoa));

const novaPessoa = lista.find((objeto) => objeto.idade > 25)
console.log(novaPessoa);