/**
 * Created by Carlos on 11/11/2015.
 */

var vacas = document.getElementById("id_vacas");
var fertilidade = document.getElementById("id_fertilidade");
var mortalidade01anos = document.getElementById("id_mortalidade01");
var de12anos3 = document.getElementById("id_de12anos3");
function efetuaCalculo() {
    de12anos3.innerHTML = (parseInt(vacas.value) - (parseInt(vacas.value) - (parseInt(vacas.value) * (parseInt(fertilidade.value) / 100))) -
        (parseInt(vacas.value) - (parseInt(vacas.value) - (parseInt(vacas.value) * (parseInt(fertilidade.value) / 100)))
            * parseInt(mortalidade01anos.value))).toFixed(2);
}
vacas.addEventListener("keyup", efetuaCalculo);
fertilidade.addEventListener("keyup", efetuaCalculo);
mortalidade01anos.addEventListener("keyup", efetuaCalculo);