// 3. Imprimir números pares entre 1 e 100
// Crie uma função chamada imprimirPares` que imprime todos os números pares entre 1 e 100. Use um laço `for`.

function imprimirPares(){
    for(let numero = 2; numero <= 100; numero += 2){
        console.log(numero);
    }
}
imprimirPares()


/* segunda forma de fazer */


function imprimePares(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 === 0){
          console.log(i)
        } 
    }
}
imprimePares()