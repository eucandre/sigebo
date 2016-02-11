/**
 * Created by Carlos on 06/11/2015.
 */
var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var venda_vacas_ano_arrouba3 = document.getElementById("id_vendas_vacas_ano_arrouba3");
var peso_medio_vacas_arrouba = document.getElementById("id_peso_medio_arrouba_vacas");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  venda_vacas_ano_arrouba3.innerHTML = ((parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100)))*parseInt(peso_medio_vacas_arrouba.value)).toFixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
peso_medio_vacas_arrouba.addEventListener("keyup", efetuaCalculo);

