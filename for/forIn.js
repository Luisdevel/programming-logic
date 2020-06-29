const pessoa = {
    nome: 'Luis',
    Sobrenome: 'Henrique',
    idade: 30
};

for (let chave in pessoa) {
    console.log( chave, pessoa[chave]);
}