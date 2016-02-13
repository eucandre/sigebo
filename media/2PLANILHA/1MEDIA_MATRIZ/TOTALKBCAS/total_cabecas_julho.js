var total_cabecas_julho = document.getElementById("id_total_cabecas_julho");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_julho");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_julhor14Arrouba_julho");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_julhor12_14Arrouba_julho");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_julhor_ate12Arrouba_julho");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_julho");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_julho");
var cabecas_outros              = document.getElementById("id_nr_outros_julho");
var cabecas_equideos            = document.getElementById("id_nr_equideos_julho");
function cabecas_julho(){
    total_cabecas_julho.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_julho();
cabecas_matrizes.addEventListener("keyup",cabecas_julho);
cabecas_novilhos14.addEventListener("keyup",cabecas_julho);
cabecas_novilhos1214.addEventListener("keyup",cabecas_julho);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_julho);
cabecas_novilhos12.addEventListener("keyup",cabecas_julho);
cabecas_bezerros.addEventListener("keyup",cabecas_julho);
cabecas_outros.addEventListener("keyup",cabecas_julho);
cabecas_equideos.addEventListener("keyup",cabecas_julho);




