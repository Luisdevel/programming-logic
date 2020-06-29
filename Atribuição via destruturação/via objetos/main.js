const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 24,
    endereco: {
        rua: 'Av Brasil',
        numero: 704
    },
};

// const { nome, idade } = pessoa;
// const { nome: teste = '', idade } = pessoa;
const { endereco } = pessoa;
console.log(endereco);