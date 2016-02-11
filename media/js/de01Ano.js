/**
 * Created by Carlos on 05/11/2015.
 */
var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var deZeroAUmAno = document.getElementById("id_deZeroAUmAno");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  deZeroAUmAno.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100)))).toFixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
