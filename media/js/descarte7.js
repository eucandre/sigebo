/**
 * Created by Carlos on 11/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var descarte7 = document.getElementById("id_descarte7");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  descarte7.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)*parseInt(fertilidade.value)/100)).toFixed(2);

}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
