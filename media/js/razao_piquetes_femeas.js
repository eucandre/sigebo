/**
 * Created by Carlos on 14/01/2016.
 */

/**
 * Created by Carlos on 14/01/2016.
 */

var razao_area_piquete_categoria_piquete_femeas = document.getElementById("id_razao_area_piquete_categoria_piquete_femeas");
var n_femeas = document.getElementById("id_n_femeas");
var peso_femea = document.getElementById("id_peso_femeas_kg");
var cap_sup = document.getElementById("id_cap_suporte");


var tempo_pastejo= document.getElementById("id_tempo_pastejo");
var tempo_descanso= document.getElementById("id_tempo_descanso");


function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  razao_area_piquete_categoria_piquete_femeas.innerHTML = (((parseInt(n_femeas.value)*parseInt(peso_femea.value))/450)/((1.5))/
      (parseInt(parseInt(tempo_descanso.value)/parseInt(tempo_pastejo.value))+1).value).toFixed(2);

}

tempo_descanso.addEventListener("keyup", efetuaCalculo);
tempo_pastejo.addEventListener("keyup", efetuaCalculo);
n_femeas.addEventListener("keyup", efetuaCalculo);
peso_femea.addEventListener("keyup", efetuaCalculo);
cap_sup.addEventListener("keyup", efetuaCalculo);

