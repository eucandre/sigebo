/**
 * Created by Carlos on 15/01/2016.
 */
    //total 3
        var total3 = document.getElementById("id_total_compra3");
        var vacas_paridas3 = document.getElementById("id_Vacas_paridas_compra3");
        var vacas_solteiras3 = document.getElementById("id_Vacas_solteiras_compra3");
        var Novilhas_34_3 = document.getElementById("id_Novilhas_34_Compra3");
        var Novilhas_32_3 = document.getElementById("id_Novilhas_32_Compra3");
        var Novilhas_12_3 = document.getElementById("id_Novilhas_12_Compra3");
        var Bezerra_01_3 = document.getElementById("id_Bezerra_01_Compra3");
        var Bezerro_01_3 = document.getElementById("id_Bezerro_01_Compra3");
        var macho12_3 = document.getElementById("id_Machos_12_Compra3");
        var macho23_3 = document.getElementById("id_Machos_23_Compra3");
        var macho34_3 = document.getElementById("id_Machos_34_Compra3");
        var machos_4mais__3 = document.getElementById("id_Machos_4mais_Compra3");


function efetuaCalculo() {
    //Cálculo simples de potência só pra ilustrar
    total3.innerHTML = (parseInt(vacas_paridas3.value)+parseInt(vacas_solteiras3.value)+parseInt(Novilhas_34_3.value)+parseInt(Novilhas_32_3.value)+
    parseInt(Novilhas_12_3.value)+parseInt(Bezerra_01_3.value)+parseInt(Bezerro_01_3.value)+parseInt(macho12_3.value)+parseInt(macho23_3.value)
    +parseInt(macho34_3.value)+parseInt(machos_4mais__3.value)).toFixed(2);
}
vacas_paridas3.addEventListener("keyup", efetuaCalculo);
vacas_solteiras3.addEventListener("keyup", efetuaCalculo);
Novilhas_34_3.addEventListener("keyup", efetuaCalculo);
Novilhas_32_3.addEventListener("keyup", efetuaCalculo);
Novilhas_12_3.addEventListener("keyup", efetuaCalculo);
Bezerra_01_3.addEventListener("keyup", efetuaCalculo);
Bezerro_01_3.addEventListener("keyup", efetuaCalculo);
macho12_3.addEventListener("keyup", efetuaCalculo);
macho23_3.addEventListener("keyup", efetuaCalculo);
macho34_3.addEventListener("keyup", efetuaCalculo);
machos_4mais__3.addEventListener("keyup", efetuaCalculo);
