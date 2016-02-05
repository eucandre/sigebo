/**
 * Created by Carlos on 05/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var descarte = document.getElementById("id_descarte");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  descarte.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)*parseInt(fertilidade.value)/100)).fixed(2);

}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);

