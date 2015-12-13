/**
 * Created by Carlos on 06/11/2015.
 */

var vacas = document.getElementById("id_vacas");

var reposicao = document.getElementById("id_reposicao");
var animais23reposicao3 = document.getElementById("id_animais_23_reposicao3");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  animais23reposicao3.innerHTML = (parseInt(reposicao.value)/100)*parseInt(vacas.value);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
reposicao.addEventListener("keyup", efetuaCalculo);
