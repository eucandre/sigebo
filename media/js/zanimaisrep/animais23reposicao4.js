/**
 * Created by Carlos on 13/11/2015.
 */
var vacas = document.getElementById("id_vacas");

var reposicao = document.getElementById("id_reposicao");
var animais23reposicao4 = document.getElementById("id_animais_23_reposicao4");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  animais23reposicao4.innerHTML = ((parseInt(reposicao.value)/100)*parseInt(vacas.value)).toFixed(2);
//  matrizes.innerHTML = parseInt(vacas.value)).tofixed(2);
}

vacas.addEventListener("keyup", efetuaCalculo);
reposicao.addEventListener("keyup", efetuaCalculo);
