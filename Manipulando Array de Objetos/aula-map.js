const lista = [
    {
        nome: 'andrei',
        idade: 23
    },
    {
        nome: 'joao',
        idade: 20
    },
    {
        nome: 'heitor',
        idade: 29
    }
]

// console.log(lista[0].nome);

const pessoa = {
    nome: 'Andrei',
    idade: 23
};

console.log(pessoa.nome);      // Andrei
console.log(pessoa['idade']);  // 23


const converterObjeto = (objeto) => {
    return objeto.nome
};

console.log(lista.map(converterObjeto));

console.log(lista.map(
    (objeto) => objeto.idade
));

const converterObjeto2 = (objeto) => {
    return { nome: objeto.nome,
             idade: objeto.idade,
             nomeIdade: `${objeto.nome} ${objeto.idade}`
    }
}

console.log(lista.map(converterObjeto2))

console.log(lista.map((objeto) => {return { nome: objeto.nome}}))

console.log(lista.map((objeto) => {return { ...objeto,
                                            nomeIdade: `${objeto.nome} ${objeto.idade}`}}))

const converterObjeto3 = (objeto) => {
    return {...objeto}
}

console.log("3° ", lista.map(converterObjeto3))