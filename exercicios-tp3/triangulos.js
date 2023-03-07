/*Um triângulo é chamado de equilátero se todos os lados possuem a mesma medida. Um triângulo é chamado de isósceles se dois lados possuem a mesma medida. Um triângulo é chamado de escaleno se todos os lados possuem medidas diferentes.*/

let l1 = Number(prompt("Informe o tamanho do primeiro lado: "));
let l2 = Number(prompt("Informe o tamanho do segundo lado: "));
let l3 = Number(prompt("Informe o tamanho do terceiro lado: "));

if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2){
  if(l1 === l2 && l1 === l3){
    alert("Os valores informados formam um triângulo equilátero!")
  } else if(l1 === l2 && l1 !== l3 || l1 !== l2 && l1 === l3 || l2 === l3 && l2 !== l1){
    alert("Os valores informados formam um triângulo isósceles!")
  } else{
    alert("Os valores informados formam um triângulo escaleno!")
  }
} else{
  alert("Os valores informados não podem formar um triângulo!");
}