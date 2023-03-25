const numA = Number(prompt("Digite um número: "));
const numB = Number(prompt("Digite outro número: "));

const resultado = executaOperacaoMatematica(subtrai, numA, numB);
alert(resultado);

function executaOperacaoMatematica(operacao, a, b){
  const resultadoOperacao = operacao(a, b);
  return resultadoOperacao;
}


function soma(a, b){
  return a + b;
}
function subtrai(a, b){
  return a - b;
}
function multiplica(a, b){
  return a * b;
}
function divide(a, b){
  return a / b;
}