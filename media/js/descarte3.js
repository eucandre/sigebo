/**
 * Created by Carlos on 11/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var descarte3 = document.getElementById("id_descarte3");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  descarte3.innerHTML = parseInt(vacas.value)-(parseInt(vacas.value)*parseInt(fertilidade.value)/100);

}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
