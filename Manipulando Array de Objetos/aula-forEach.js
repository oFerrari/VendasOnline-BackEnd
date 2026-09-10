let lista = [
    { nome: 'andrei', idade: 23 },
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

for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

lista.forEach(objeto => console.log(objeto) )

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
}
lista.forEach(somaIdade)

console.log('Soma: ', soma);