const numA = Number(prompt("Digite um número: "));
const numB = Number(prompt("Digite outro número: "));


(function(){
  if(numA <= 0 || numB <=0){
    alert("Números necessitam ser maiores que zero.");
    return;
  } else {
    const res = soma(numA, numB);
    alert(res)
  }
})();

function soma(a, b){
  return a+b;
}