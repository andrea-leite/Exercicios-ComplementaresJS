// 2. Contagem regressiva
// Crie uma função chamada contagemRegressiva que recebe um número como parâmetro e exibe uma contagem regressiva a partir desse número até 0, usando um laço while.

let numero = 10

function contagemRegressiva(numero){
    while(numero >= 0) {
        console.log(numero)
        numero --;        
    }
}
contagemRegressiva(numero)