/**
 * Created by Carlos on 15/01/2016.
 */
//total 2
        var total2 = document.getElementById("id_total_compra2");
        var vacas_paridas2 = document.getElementById("id_Vacas_paridas_compra2");
        var vacas_solteiras2 = document.getElementById("id_Vacas_solteiras_compra2");
        var Novilhas_34_2 = document.getElementById("id_Novilhas_34_Compra2");
        var Novilhas_32_2 = document.getElementById("id_Novilhas_32_Compra2");
        var Novilhas_12_2 = document.getElementById("id_Novilhas_12_Compra2");
        var Bezerra_01_2 = document.getElementById("id_Bezerra_01_Compra2");
        var Bezerro_01_2 = document.getElementById("id_Bezerro_01_Compra2");
        var macho12_2 = document.getElementById("id_Machos_12_Compra2");
        var macho23_2 = document.getElementById("id_Machos_23_Compra2");
        var macho34_2 = document.getElementById("id_Machos_34_Compra2");
        var machos_4mais__2 = document.getElementById("id_Machos_4mais_Compra2");


function efetuaCalculo() {
    //Cálculo simples de potência só pra ilustrar
    total2.innerHTML = (parseInt(vacas_paridas2.value) + parseInt(vacas_solteiras2.value) + parseInt(id_Novilhas_34_Compr2.value)+
    parseInt(Novilhas_32_2.value)+parseInt(id_Novilhas_12_Compr2.value)+parseInt(Bezerra_02_2.value)+parseInt(Bezerro_02_2.value)+
    parseInt(macho12_2.value)+parseInt(macho23_2.value)+parseInt(macho34_2.value)+parseInt(machos_4mais__2.value)).fixed(2);
}
vacas_paridas2.addEventListener("keyup", efetuaCalculo);
vacas_solteiras2.addEventListener("keyup", efetuaCalculo);
Novilhas_34_2.addEventListener("keyup", efetuaCalculo);
Novilhas_32_2.addEventListener("keyup", efetuaCalculo);
Novilhas_12_2.addEventListener("keyup", efetuaCalculo);
Bezerra_01_2.addEventListener("keyup", efetuaCalculo);
Bezerro_01_2.addEventListener("keyup", efetuaCalculo);
macho12_2.addEventListener("keyup", efetuaCalculo);
macho23_2.addEventListener("keyup", efetuaCalculo);
macho34_2.addEventListener("keyup", efetuaCalculo);
machos_4mais__2.addEventListener("keyup", efetuaCalculo);
