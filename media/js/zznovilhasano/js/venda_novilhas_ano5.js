/**
 * Created by Carlos on 06/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var venda_novilhoas_ano5 = document.getElementById("id_vendas_novilhoas_ano5");
var mortalidade01anos = document.getElementById("id_mortalidade01");
var reposicao = document.getElementById("id_reposicao");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  venda_novilhoas_ano5.innerHTML = ((parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))))
      -((parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))))*parseInt(mortalidade01anos.value)))-
      ((parseInt(reposicao.value)/100)*parseInt(vacas.value));
    if (venda_novilhoas_ano.innerHTML < 0){
        venda_novilhoas_ano.innerHTML = 0;
    }

}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
mortalidade01anos.addEventListener("keyup", efetuaCalculo);
reposicao.addEventListener("keyup", efetuaCalculo);
