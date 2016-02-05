/**
 * Created by Carlos on 11/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var de01ano4 = document.getElementById("id_de01ano4");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  de01ano4.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100)))).fixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
