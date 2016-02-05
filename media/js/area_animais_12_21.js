/**
 * Created by Carlos on 17/12/2015.
 */

var area_animais_12_21 = document.getElementById("id_area_piquetes_animais12_21");
var animais_12_21 = document.getElementById("id_animais12_21");
var peso_animais_12_21 = document.getElementById("id_peso_animais12_21_kg");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  area_animais_12_21.innerHTML = (((parseInt(animais_12_21.value)*(parseInt(peso_animais_12_21.value)))/450)/1.5).tofixed(2);
}

animais_12_21.addEventListener("keyup", efetuaCalculo);
peso_animais_12_21.addEventListener("keyup", efetuaCalculo);
