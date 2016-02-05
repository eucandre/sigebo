/**
 * Created by Carlos on 15/01/2016.
 */
var total = document.getElementById("id_total");
var vacas_paridas1 = document.getElementById("id_Vacas_paridas_compra");
var vacas_solteiras1 = document.getElementById("id_Vacas_solteiras_compra");


function efetuaCalculo() {
    //Cálculo simples de potência só pra ilustrar
    total.innerHTML = (parseInt(vacas_paridas1.value) + parseInt(vacas_solteiras1.value)).fixed(2);
}
vacas_paridas1.addEventListener("keyup", efetuaCalculo);
vacas_solteiras1.addEventListener("keyup", efetuaCalculo);
