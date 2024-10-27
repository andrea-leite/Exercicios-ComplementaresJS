// 2. Função de saudação
// Crie uma função chamada saudar que recebe um nome como parâmetro e retorna a frase
// "Olá, [nome]!".

function saudar(nome) {
  return "Olá, " + nome + "!";
}

let nomeUsuario = "Guilherme";
let saudacao = saudar(nomeUsuario);
console.log(saudacao);


function saudar(nome){
    return (`Olá, ${nome}`)
}
let nome = "Judite"
console.log(saudar(nome))
