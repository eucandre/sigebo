/**
 * Created by Carlos on 06/11/2015.
 * id_vendas_vacas_descarte_ano
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var vendas_vacas_descarte_ano8 = document.getElementById("id_vendas_vacas_descarte_ano8");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  vendas_vacas_descarte_ano8.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))).toFixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
    