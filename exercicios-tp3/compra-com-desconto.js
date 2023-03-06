let pagamentoValor = Number(prompt("Digite o valor da compra R$:"))
let formaPagamento = Number(prompt(" [Digite 1] Para pagamento à vista, no dinheiro.\n [Digite 2] Para pagamento à vista, no débito. \n [Digite 3 ] Para pagamento à vista, no crédito. \n [Digite 4] Para pagamento a prazo, até 3x, no débito sem juros. \n [Digite 5] Para pagamento a prazo, acima de 3x, no débito."));
let pagamentoComJuros = pagamentoValor + (pagamentoValor * 0.04);

switch (formaPagamento) {
  case 1:
    pagamentoValor = pagamentoValor - (pagamentoValor * 0.1)
    alert("Você recebeu um desconto de 10%, portanto vai pagar R$" + pagamentoValor);
    break
  case 2:
    pagamentoValor = pagamentoValor - (pagamentoValor * 0.08)
    alert("Você recebeu um desconto de 8%, portanto vai pagar R$" + pagamentoValor);
    break
  case 3:
    pagamentoValor = pagamentoValor - (pagamentoValor * 0.05)
    alert("Você recebeu um desconto de 5%, portanto vai pagar R$" + pagamentoValor);
    break
  case 4:
    let numeroDeParcelaSemJuros = Number(prompt('Digite o nº de parcelas'));
    if (numeroDeParcelaSemJuros > 0 && numeroDeParcelaSemJuros <= 3) {
      let pagamentoParcela = pagamentoValor / numeroDeParcelaSemJuros;
      alert("O valor das parcelas vai ser de R$" + pagamentoParcela.toFixed(2));
    } else {
      alert("Por favor escolha um número entre 1 e 3!");
    }
    break
  case 5:
    let numeroDeParcelasComJuros = Number(prompt("Digite o nº de parcelas: "));
    if (numeroDeParcelasComJuros > 3) {
      let valorTotal = pagamentoComJuros / numeroDeParcelasComJuros
      alert("O valor das parcelas vai ser de R$" + valorTotal.toFixed(2))
    } else {
      alert('Por favor escolha um número de parcelas maior que 3!')
    }
    break
}
