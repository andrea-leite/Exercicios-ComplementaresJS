// 5. Soma dos dígitos de um número
// Crie uma função chamada somarDigitos que recebe um número e retorna a soma de seus dígitos. Por exemplo, ao passar o número 123, a função deve retornar 6 (1 + 2 + 3). Use um
// laço while para dividir o número e somar os dígitos. 

function somarDigitos(numero) {
    let soma = 0;
    
    while (numero > 0) {
        const resto = numero % 10;
        soma += resto;
        numero = Math.floor(numero / 10);
    }
    
    return soma;
}

const numero = 2857;
console.log(somarDigitos(numero));
