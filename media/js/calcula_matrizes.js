/**
 * Created by Carlos on 05/11/2015.
 */
var vacas = document.getElementById("id_vacas");
var matrizes = document.getElementById("id_matrizes");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  matrizes.innerHTML = parseInt(vacas.value);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
