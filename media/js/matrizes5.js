/**
 * Created by Carlos on 06/11/2015.
 */
var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var matrizes5 = document.getElementById("id_matrizes5");

//(matrizes-descarte)+comprafemearepro
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  matrizes5.innerHTML = (parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*parseInt(fertilidade.value)/100))+(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100)))).fixed(2);
//  matrizes.innerHTML = parseInt(vacas.value);
}

vacas.addEventListener("keyup", efetuaCalculo);
