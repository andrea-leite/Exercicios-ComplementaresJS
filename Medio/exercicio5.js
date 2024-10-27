// 5. Verificação de divisibilidade
// Crie uma função chamada verificarDivisibilidade que recebe um número e verifica se ele é divisível por 3, 5 ou ambos. Retorne:
// - "Divisível por 3" se o número for divisível por 3.
// - "Divisível por 5" se o número for divisível por 5.
// - "Divisível por 3 e 5" se for divisível por ambos.
// - "Não divisível por 3 nem por 5" caso contrário.


function verificarDivisibilidade(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "Divisível por 3 e 5";
    } else if (numero % 3 === 0) {
        return "Divisível por 3";
    } else if (numero % 5 === 0) {
    return "Divisível por 5";
    } else {
        return "Não divisível por 3 nem por 5";
    }
}

let numero = 1321;

console.log(verificarDivisibilidade(numero));