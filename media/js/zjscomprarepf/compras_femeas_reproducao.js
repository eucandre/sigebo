/**
 * Created by Carlos on 06/11/2015.
 */
var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
//var descarte = document.getElementById("id_descarte");
var compra_f_reproduc = document.getElementById("id_compra_femeas_reproducao");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  compra_f_reproduc.innerHTML = parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100));
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);

