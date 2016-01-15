/**
 * Created by Carlos on 17/12/2015.
 */

var total_piquete = document.getElementById("id_area_piquetes_total_hectare");

var numero_machos = document.getElementById("id_n_machos");
var peso_machos_kg = document.getElementById("id_peso_machos_kg");
var capacidade_suporte = document.getElementById("id_cap_suporte");

var n_femeas = document.getElementById("id_n_femeas");
var peso_femea = document.getElementById("id_peso_femeas_kg");
var cap_sup = document.getElementById("id_cap_suporte");

var animais_12_21 = document.getElementById("id_animais12_21");
var peso_animais_12_21 = document.getElementById("id_peso_animais12_21_kg");

var animais_6_12 = document.getElementById("id_animais6_12");
var peso_animais_6_12 = document.getElementById("id_peso_animais6_12_kg");


function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  total_piquete.innerHTML =((((parseInt(peso_machos_kg.value)*parseInt(numero_machos.value))/450)/parseInt(capacidade_suporte.value))+
      (((parseInt(n_femeas.value)*parseInt(peso_femea.value))/450)/((1.5)))+(((parseInt(animais_6_12.value)*(parseInt(peso_animais_6_12.value)))/450)/1.5)+
      ((parseInt(animais_12_21.value)*(parseInt(peso_animais_12_21.value)))/450)/1.5);

}

numero_machos.addEventListener("keyup", efetuaCalculo);
peso_machos_kg.addEventListener("keyup", efetuaCalculo);
capacidade_suporte.addEventListener("keyup", efetuaCalculo);
peso_femea.addEventListener("keyup", efetuaCalculo);
n_femea.addEventListener("keyup", efetuaCalculo);
cap_sup.addEventListener("keyup", efetuaCalculo);
animais_12_21.addEventListener("keyup", efetuaCalculo);
peso_animais_12_21.addEventListener("keyup", efetuaCalculo);
animais_6_12.addEventListener("keyup", efetuaCalculo);
peso_animais_6_12.addEventListener("keyup", efetuaCalculo);
