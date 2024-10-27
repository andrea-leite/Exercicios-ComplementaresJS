// 4. Multiplicação de todos os números de 1 a N
// Crie uma função chamada multiplicarAteN que recebe um número N como parâmetro e retorna a multiplicação de todos os números de 1 até N. Use um laço for.

function multiplicarAteN(N){
    let resultado = 1;
    for(let numero = 2; numero <= N; numero++){
        resultado *= numero;
    }
    return resultado;
}

const resultado = multiplicarAteN(5);
console.log(resultado);