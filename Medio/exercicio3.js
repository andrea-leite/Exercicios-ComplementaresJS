// 3. Classificação de notas
// Crie uma função chamada classificarNota que recebe uma nota (entre 0 e 100) e retorna:
// - "Aprovado" se a nota for maior ou igual a 60.
// - "Em recuperação" se a nota estiver entre 40 e 59.
// - "Reprovado" se a nota for menor que 40.

function classificarNota(nota) {
  if (nota >= 60) {
    return "Aprovado";
  } else if (nota >= 40) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

const notaAluno = 39;
const resultado = classificarNota(notaAluno);
console.log(resultado);
