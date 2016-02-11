/**
 * Created by Carlos on 13/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");

var compra_f_reproduc3 = document.getElementById("id_compra_femeas_reproducao3");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  compra_f_reproduc3.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)*parseInt(fertilidade.value)/100)).toFixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
