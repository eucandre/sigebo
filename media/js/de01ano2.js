/**
 * Created by Carlos on 11/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var de01ano2 = document.getElementById("id_de01ano2");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  de01ano2.innerHTML = parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100)));
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
