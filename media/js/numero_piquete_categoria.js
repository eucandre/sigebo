/**
 * Created by Carlos on 16/12/2015.
 */

var n_piquetes_categoria= document.getElementById("id_n_piquetes_categoria");
var tempo_pastejo= document.getElementById("id_tempo_pastejo");
var tempo_descanso= document.getElementById("id_tempo_descanso");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  n_piquetes_categoria.innerHTML = ((parseInt(tempo_descanso.value)/parseInt(tempo_pastejo.value))+1).fixed(2);

}

tempo_descanso.addEventListener("keyup", efetuaCalculo);
tempo_pastejo.addEventListener("keyup", efetuaCalculo);
