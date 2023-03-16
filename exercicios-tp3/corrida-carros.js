/*ORDEM DE EXECUÇÃO DO PROGRMA*/

/*--------------------------------------------------------------------------------------- */
/*PARTE 1*/
const slider = 75;
const jester = 89;
const stinger = 76;
const goose = 75;
const iceman = 98;
const maverick = 90; 


const pilotos = {
  0: { id:0, nome:'slider', agilidade: slider }, 
  1: { id:1, nome:'jester', agilidade: jester },
  2: { id:2, nome:'stinger', agilidade: stinger },
  3: { id:3, nome:'goose', agilidade: goose },
  4: { id:4, nome:'iceman', agilidade: iceman },
  5: { id:5, nome:'maverick', agilidade: maverick }
}
let aleatorio = Math.floor(Math.random() * 6);/*Sorteou o id do 
 piloto*/
const piloto = prompt("Informe o nome do piloto: ");

console.log("Id do piloto máquina " + pilotos[aleatorio].id);/*encontrou o id do piloto a partir do número sorteado.*/
/*--------------------------------------------------------------------------------------- */


/*--------------------------------------------------------------------------------------- */
/*PARTE 3*/

/*A função executar() vai ser chamada no switch passando a variável "aleatorio" para o escopo da função*/
function executar(aleatorio){
  let obj = verificarPiloto(piloto);/*Vai chamar a função verificarPiloto() passando a varivel "piloto" para essa função com o nome "nome"*/
  if(obj !== null){ //Se a var obj não estiver vazia: 
    console.log("id piloto usuário: " + obj.id);
   if(pilotos[aleatorio].id !== obj.id){ /*Se os pilotos forem diferentes */
      if((pilotos[aleatorio].agilidade) > (obj.agilidade)){/*Compara as agilidades dos pilotos */
        console.log(pilotos[aleatorio].nome + ", escolha da máquina venceu!");
        console.log(pilotos[aleatorio].agilidade + "% de agilidade!");
      } else if((pilotos[aleatorio].agilidade) < (obj.agilidade)){
        console.log(obj.nome + " escolha do usuário venceu!");
        console.log(obj.agilidade + "% de agilidade")
      } else{ //Em caso de agilidades iguais:
        console.log(pilotos[aleatorio].nome + ", escolha da máquina");
        console.log(obj.nome + ", escolha do usuário");
        console.log("Empatou");
      }
    } else{ //Se os pilotos forem os mesmos:
      console.log("Escolha o piloto novamente!");
    }
  } else { //Se obj estiver vazio:
    console.log("Piloto não encontrado!");
  }
}

/*Essa função foi chamada na declaração de variável obj, a variável "piloto" passou a se chamar "nome" nessa função. O valor aqui vai ser guardado na variável obj lá em cima*/
function verificarPiloto(nome){
  for(let chave in pilotos) { /*Vai percorrer o obj "pilotos" " 0 1 2 3 4 5"*/
    if(pilotos[chave].nome === nome){/*Se o nome do piloto for igual ao digitado pelo usuário*/
      return pilotos[chave];/*Vai retornar a linha inteira de informações do piloto selecionado para a variável obj dentro da função executar */
    }
  }
}
/*--------------------------------------------------------------------------------------- */

/*--------------------------------------------------------------------------------------- */
/*PARTE 2*/
  
switch(aleatorio){ /*Vai chamar a função a partir do número sorteado no Math.random*/
  case 0:
    executar(aleatorio);
    break;
  case 1:
    executar(aleatorio);
    break;
  case 2:
    executar(aleatorio);
    break;
  case 3:
    executar(aleatorio);
    break;
  case 4:
    executar(aleatorio);
    break;
  case 5:
    executar(aleatorio);
    break;
  default:
    console.log("Erro na função Math.random");
}
/*--------------------------------------------------------------------------------------- */