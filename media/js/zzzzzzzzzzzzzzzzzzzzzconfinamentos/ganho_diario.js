/**
 * Created by Carlos on 28/12/2015.
 */

var ganho_diario = document.getElementById("id_ganho_diario");
var peso_final = document.getElementById("id_Peso_Final");
var peso_inicial = document.getElementById("id_Peso_inicial");
var duracao_confinamento = document.getElementById("id_tempo_confinamento");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  ganho_diario.innerHTML = (parseInt(peso_final.value)-parseInt(peso_inicial.value))/parseInt(duracao_confinamento.value);
//  matrizes.innerHTML = parseInt(vacas.value);
}

peso_final.addEventListener("keyup", efetuaCalculo);
peso_inicial.addEventListener("keyup", efetuaCalculo);
duracao_confinamento.addEventListener("keyup", efetuaCalculo);
