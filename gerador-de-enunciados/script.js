function gerarEnunciado(){
    let numeroTp = document.getElementById("itp");
    let numeroExe = document.getElementById("iexe");
    let mostrar = document.getElementById("mostrar");

    mostrar.innerHTML = "";
    if (numeroTp.value.length == 0 || numeroExe.value.length == 0){
        alert("Digite os números para gerar o enunciado!");
    } else {
        let tp = Number(numeroTp.value);
        let exe = Number(numeroExe.value);
        if(tp < 1 || tp > 10 || exe < 1 || exe > 20){
            alert("Número do tp deve ser entre 1 e 10 e o número do exercício de 1 até 20!")
        } else {
            for(let c = 0; c <= exe; c++){
                mostrar.innerHTML += `Exercício ${tp}.${c} - <br> <br>`
            }
        }
    }
}