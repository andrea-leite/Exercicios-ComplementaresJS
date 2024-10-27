
// 1. Soma dos múltiplos de 3 e 5 até 100
// Crie uma função chamada somarMultiplos que percorre os números de 1 a 100 e retorna a soma de todos os números que são múltiplos de 3 ou 5.

function somarMultiplos() {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
        }
    }

    return soma;
}

const resultado = somarMultiplos();
console.log("A soma dos múltiplos de 3 ou 5 entre 1 e 100 é:", resultado);