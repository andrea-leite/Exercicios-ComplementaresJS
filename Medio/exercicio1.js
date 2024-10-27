// 1. Verificação de número par ou ímpar
// Crie uma função chamada verificarParOuImpar que recebe um número como parâmetro e
// verifica se o número é par ou ímpar. Retorne "Par" ou "Ímpar"

function verificarParOuImpar(numero) {
    if (numero % 2 == 0) {
        return "Par";
    }else {
        return "Ímpar";
    }
}
let numero = 13

console.log(verificarParOuImpar(numero))