function tecla(caracter){
  let ecra = document.querySelector(".ecra");

  ecra.innerHTML += caracter;

  converter();
}


function limpar(){
  let ecra = document.querySelector(".ecra");
  ecra.innerHTML = "";
  saida.innerHTML = "";
}



function converter(){
  //Variáveis
  let ecra = document.querySelector(".ecra");
  let saida = document.querySelector("#saida");

  //Executar
  let resultado = parseFloat(ecra.innerHTML) * 0.041;
  saida.innerHTML = resultado.toFixed(2) + "(€).";
}
