const nome = ['Luis', 'Henrique', 'Mendes'];

for (let value of nome) {
    console.log(value);
}
console.log('-------');

nome.forEach(function(value, indice, array) {
    console.log(value, indice, array);
});