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


const acharVerdadeiro = ((objeto) => {
    return objeto.idade > 50
})

console.log(lista.some(acharVerdadeiro))

const todosVerdadeiros = lista.every((objeto) => objeto.idade > 18)

console.log(todosVerdadeiros);