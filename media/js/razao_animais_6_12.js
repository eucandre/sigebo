/**
 * Created by Carlos on 15/01/2016.
 */

var razao_animais_6_12 = document.getElementById("id_razao_area_piquete_categoria_piquete_animais6_12");
var animais_6_12 = document.getElementById("id_animais6_12");
var peso_animais_6_12 = document.getElementById("id_peso_animais6_12_kg");

var tempo_pastejo= document.getElementById("id_tempo_pastejo");
var tempo_descanso= document.getElementById("id_tempo_descanso");


function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  razao_animais_6_12.innerHTML = ((parseInt(animais_6_12.value)*(parseInt(peso_animais_6_12.value)))/450)/1.5/(parseInt(parseInt(tempo_descanso.value)/parseInt(tempo_pastejo.value))+1).value;
}

animais_6_12.addEventListener("keyup", efetuaCalculo);
peso_animais_6_12.addEventListener("keyup", efetuaCalculo);
tempo_descanso.addEventListener("keyup", efetuaCalculo);
tempo_pastejo.addEventListener("keyup", efetuaCalculo);
