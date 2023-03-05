/*necessário que o número do ano seja divisível por 4, mas não por 100, a exemplo de 2020. Mas, caso seja divisível por 100 e for também por 400, ainda será bissexto. "2400 é divisível por 4 e por 100, aí normalmente diríamos que ele não seria bissexto. Porém 2400 é divisível também por 400 e, portanto, sim, é ano bissexto*/

const ano = Number(prompt("Digite um ano: "));

if (ano % 4 === 0) {
  if (ano % 100 === 0) {
    if (ano % 400 === 0) {
      alert("Ano bissexto");
    } else {
      alert("Não é ano bissexto");
    }
  } else {
    alert("Ano bissexto!");
  }
} else {
  alert("Não é ano bissexto");
}