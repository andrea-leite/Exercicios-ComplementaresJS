// 2. Cálculo da média de números pares
// Crie uma função chamada calcularMediaPares que percorre os números de 1 a 50 e calcula a média de todos os números pares encontrados.

function calcularMediaPares() {
    let somaPares = 0;
    let quantidadePares = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            somaPares += i;
            quantidadePares++;
        }
    }

    const mediaPares = somaPares / quantidadePares;
    return mediaPares;
}

const resultado = calcularMediaPares();
console.log("A média dos números pares de 1 a 50 é:", resultado);

//2+4+6+8+10+12+14+16+18+20+22+24+26+28+30+32+34+36+38+40+42+44+46+48+50 = 650/25(quantidade de pares) = 26(resposta)