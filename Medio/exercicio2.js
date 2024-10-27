// 2. Verificação de maioridade
// Crie uma função chamada verificarMaioridade que recebe a idade de uma pessoa e retorna
// "Maior de idade" se a idade for maior ou igual a 18, ou "Menor de idade" caso contrário.

function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

let idade = 20;
console.log(verificarMaioridade(idade))