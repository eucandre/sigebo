/**
 * Created by Carlos on 17/12/2015.
 */
var area_animais_6_12 = document.getElementById("id_area_piquetes_animais6_12");
var animais_6_12 = document.getElementById("id_animais6_12");
var peso_animais_6_12 = document.getElementById("id_peso_animais6_12_kg");


function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  area_animais_6_12.innerHTML = (((parseInt(animais_6_12.value)*(parseInt(peso_animais_6_12.value)))/450)/1.5).tofixed(2);
}


animais_6_12.addEventListener("keyup", efetuaCalculo);
peso_animais_6_12.addEventListener("keyup", efetuaCalculo);

