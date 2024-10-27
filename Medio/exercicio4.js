// 4. Calculadora com switch
// Crie uma função chamada calculadoraSimples que recebe três parâmetros: dois números e
// uma string com o tipo de operação (`+`, `-`, `*`, `/`). Utilize o `switch` para retornar o
// resultado da operação escolhida.

function calculadoraSimples(numero1, numero2, numero3){
  const operaçoes = ["+", "-", "*", "/"];
  let i = 0;

  while(i <= (operaçoes.length - 1)){
    switch(operaçoes[i]){
      case "+":
        console.log(numero1 + numero2 + numero3);
        break;
      case "-":
        console.log(numero1 - numero2 - numero3);
        break;
      case "*":
        console.log(numero1 * numero2 * numero3);
        break;
      case "/":
        console.log(numero1 / numero2 /numero3);
        break;
      default:
        console.log("opção invalida");
    }
    i++;
  }
}

calculadoraSimples(8, 20, 6);
