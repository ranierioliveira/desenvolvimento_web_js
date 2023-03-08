/*Uma grande fábrica de carros elétricos está realizando melhorias no sistema de piloto automático e precisa da sua ajuda para implementar um programa que decida se um carro B, que está trafegando no meio de dois carros A e C, precisa acelerar, desacelerar ou manter a velocidade atual. Os carros são iguais e os sensores do piloto automático vão fornecer, como entrada, a posição atual da traseira dos três carros.
O carro B precisa ser acelerado se a distância da sua traseira para a traseira do carro A for menor do que a distância da sua traseira para a traseira do carro C. Se for maior, ele precisa ser desacelerado. Se for igual, precisa manter a velocidade atual.
Seu programa deve imprimir um número: 1 se o carro B precisa acelerar; -1 se precisa desacelerar; ou 0 se precisa manter a velocidade atual.
Restrições: 0 ≤ A < B < C ≤ 500.
*/


const a = Number(prompt("Digite a posição do carro A (min: 1, max: 500):"));
const b = Number(prompt("Digite a posição do carro B (min: 1, max: 500):"));
const c = Number(prompt("Digite a posição do carro C (min: 1, max: 500):"));

if (a < 1 || a > 500 || b < 1 || b > 500 || c < 1 || c > 500){
  alert("Os valores digitados estão fora dos limites estabelcidos!");
} else{
  if ((b - a) < (c-b)){
    alert("1");
  } else if ((b-a) > (c-b)){
    alert("-1");
  } else{
    alert("0");
  }
} 