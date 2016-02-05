/**
 * Created by Carlos on 05/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var deUmADoisAnos = document.getElementById("id_deUmADoisAnos");
var mortalidade01anos = document.getElementById("id_mortalidade01");
function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  deUmADoisAnos.innerHTML = ((parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))))
      -((parseInt(vacas.value)-(parseInt(vacas.value)-(parseInt(vacas.value)*(parseInt(fertilidade.value)/100))))*parseInt(mortalidade01anos.value))).fixed(2);

}

vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
mortalidade01anos.addEventListener("keyup", efetuaCalculo);
