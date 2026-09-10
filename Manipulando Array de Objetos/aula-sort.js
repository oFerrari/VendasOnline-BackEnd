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


lista.sort((a, b) => {
    if (a.idade < b.idade){
        return -1;
    }
    if (a.idade > b.idade){
        return 1;
    }

    return 0;

})

console.log(lista)


console.log(lista.sort((a, b) => {
    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
        return 1;
    }
    if(a.nome.toUpperCase() > b.nome.toUpperCase()){
        return -1;
    }
    return 0;
}))

/* console.log(lista) */