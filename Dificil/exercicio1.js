// 1. Soma de números de 1 a N
// Crie uma função chamada somarAteN que recebe um número N como parâmetro e retorna a soma de todos os números de 1 até N. Use um laço for.

function somarAteN(N){
    let soma = 0;
    for(let i = 1; i <= N; i++){
        soma += i; 
    }
    return soma
}
const resultado = somarAteN(10);
console.log(resultado); // Imprime 55 (1 + 2 + 3 + ... + 10)