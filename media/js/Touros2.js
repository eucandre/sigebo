/**
 * Created by Carlos on 06/11/2015.
 */
var vacas = document.getElementById("id_vacas");
var numero_vacas_touro = document.getElementById("id_numero_vacas_touro");//definicao inicial
var matrizes = document.getElementById("id_matrizes");
//var total = document.getElementById()
var touros2 = document.getElementById("id_touros2");//definicao inicial

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  touros2.innerHTML = parseInt(vacas.value)/parseInt(numero_vacas_touro.value);
//  matrizes.innerHTML = parseInt(vacas.value);
}

//function PegaValor(){
//    matrizes.innerHTML = parseInt(vacas.value);
//}

vacas.addEventListener("keyup", efetuaCalculo);
numero_vacas_touro.addEventListener("keyup", efetuaCalculo);
//matrizes.addEventListener("keyup", PegaValor);