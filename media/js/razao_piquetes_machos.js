/**
 * Created by Carlos on 14/01/2016.
 */

var razao_area_piquete_categoria_piquete_machos = document.getElementById("id_razao_area_piquete_categoria_piquete_machos");
var numero_machos = document.getElementById("id_n_machos");
var peso_machos_kg = document.getElementById("id_peso_machos_kg");
var capacidade_suporte = document.getElementById("id_cap_suporte");


var tempo_pastejo= document.getElementById("id_tempo_pastejo");
var tempo_descanso= document.getElementById("id_tempo_descanso");


function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  razao_area_piquete_categoria_piquete_machos.innerHTML = ((((parseInt(peso_machos_kg.value)*parseInt(numero_machos.value))/450)/parseInt(capacidade_suporte.value))/
      (parseInt(parseInt(tempo_descanso.value)/parseInt(tempo_pastejo.value))+1).value).toFixed(2);

}

tempo_descanso.addEventListener("keyup", efetuaCalculo);
tempo_pastejo.addEventListener("keyup", efetuaCalculo);
numero_machos.addEventListener("keyup", efetuaCalculo);
peso_machos_kg.addEventListener("keyup", efetuaCalculo);
capacidade_suporte.addEventListener("keyup", efetuaCalculo);

