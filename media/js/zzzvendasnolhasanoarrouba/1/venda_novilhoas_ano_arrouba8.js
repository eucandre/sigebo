/**
 * Created by Carlos on 06/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var venda_novilhoas_ano_arrouba8 = document.getElementById("id_vendas_novilhoas_ano_arrouba8");
var mortalidade01anos = document.getElementById("id_mortalidade01");
var reposicao = document.getElementById("id_reposicao");
var peso_medio_arrouba = document.getElementById("id_peso_medio_arrouba_novilho");


function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  venda_novilhoas_ano_arrouba8.innerHTML = ((parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))))
      -((parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))))*parseInt(mortalidade01anos.value)))-
      ((parseInt(reposicao.value)/100)*parseInt(vacas.value)) * parseInt(peso_medio_arrouba.value);
    if (venda_novilhoas_ano_arrouba.innerHTML < 0){
        venda_novilhoas_ano_arrouba.innerHTML = 0;
    }

}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
mortalidade01anos.addEventListener("keyup", efetuaCalculo);
reposicao.addEventListener("keyup", efetuaCalculo);
peso_medio_arrouba.addEventListener("keyup", efetuaCalculo);
