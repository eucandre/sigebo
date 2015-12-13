/**
 * Created by Carlos on 13/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var de23anos3 = document.getElementById("id_de23anos3");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  de23anos3.innerHTML = 0;

}

vacas.addEventListener("keyup", efetuaCalculo);
