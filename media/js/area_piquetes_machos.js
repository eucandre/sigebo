/**
 * Created by Carlos on 16/12/2015.
 */
var area_piquete_machos_hectare = document.getElementById("id_area_piquetes_machos_hectare");
var numero_machos = document.getElementById("id_n_machos");
var peso_machos_kg = document.getElementById("id_peso_machos_kg");
var capacidade_suporte = document.getElementById("id_cap_suporte");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  area_piquete_machos_hectare.innerHTML = ((parseInt(peso_machos_kg.value)*parseInt(numero_machos.value))/450)/parseInt(capacidade_suporte.value);

}

numero_machos.addEventListener("keyup", efetuaCalculo);
peso_machos_kg.addEventListener("keyup", efetuaCalculo);
capacidade_suporte.addEventListener("keyup", efetuaCalculo);
