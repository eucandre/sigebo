/**
 * Created by Carlos on 28/10/2015.
 */
var vacas = document.getElementById("id_vacas");
var numero_vacas_touro = document.getElementById("id_numero_vacas_touro");//definicao inicial
var matrizes = document.getElementById("id_matrizes");
//var total = document.getElementById()
var tourosR = document.getElementById("id_tourosR");//definicao inicial

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  tourosR.innerHTML = (parseInt(vacas.value)/parseInt(numero_vacas_touro.value)).toFixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

//function PegaValor(){
//    matrizes.innerHTML = parseInt(vacas.value);
//}

vacas.addEventListener("keyup", efetuaCalculo);
numero_vacas_touro.addEventListener("keyup", efetuaCalculo);
//matrizes.addEventListener("keyup", PegaValor);