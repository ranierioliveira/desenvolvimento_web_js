function soma(a, b){
    return a + b;
  }
  function multiplicacao(a, b){
    return a * b;
  }
  function somaMultiplica(a, b, c){
    const resultadoSoma = soma(a, b);
    const resultadoMultiplicacao = multiplicacao(resultadoSoma, c);
    return resultadoMultiplicacao;
  }
  const res = somaMultiplica(2, 2, 2);
  console.log(res);
  