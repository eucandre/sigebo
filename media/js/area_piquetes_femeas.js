/**
 * Created by Carlos on 16/12/2015.
 */

var area_piquete_femeas_hectare = document.getElementById("id_area_piquetes_femeas_hectare");
var n_femeas = document.getElementById("id_n_femeas");
var peso_femea = document.getElementById("id_peso_femeas_kg");
var cap_sup = document.getElementById("id_cap_suporte");

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  area_piquete_femeas_hectare.innerHTML = ((parseInt(n_femeas.value)*parseInt(peso_femea.value))/450)/((1.5));
      //((parseInt(cap_sup.value)+parseInt(cap_sup2.value)+parseInt(cap_sup3.value)+parseInt(cap_sup4.value)+parseInt(cap_sup5.value)+parseInt(cap_sup6.value)+parseInt(cap_sup7.value)+parseInt(cap_sup8.value)+parseInt(cap_sup9.value)+parseInt(cap_sup10.value)+parseInt(cap_sup11.value))/11);

}

peso_femea.addEventListener("keyup", efetuaCalculo);
n_femea.addEventListener("keyup", efetuaCalculo);
cap_sup.addEventListener("keyup", efetuaCalculo);
