/**
 * Created by Carlos on 05/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var dedoisatresanos = document.getElementById("id_dedoistresanos");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  dedoisatresanos.innerHTML = 0;

}

vacas.addEventListener("keyup", efetuaCalculo);
