/**
 * Created by Carlos on 13/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var de23anos2 = document.getElementById("id_de23anos2");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  de23anos2.innerHTML = 0;

}

vacas.addEventListener("keyup", efetuaCalculo);
