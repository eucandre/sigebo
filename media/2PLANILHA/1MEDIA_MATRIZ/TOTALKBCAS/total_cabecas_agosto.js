var total_cabecas_agosto = document.getElementById("id_total_cabecas_agosto");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_agosto");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_agostor14Arrouba_agosto");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_agostor12_14Arrouba_agosto");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_agostor_ate12Arrouba_agosto");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_agosto");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_agosto");
var cabecas_outros              = document.getElementById("id_nr_outros_agosto");
var cabecas_equideos            = document.getElementById("id_nr_equideos_agosto");
function cabecas_agosto(){
    total_cabecas_agosto.innerHTML=
                         parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_agosto();
cabecas_matrizes.addEventListener("keyup",cabecas_agosto);
cabecas_novilhos14.addEventListener("keyup",cabecas_agosto);
cabecas_novilhos1214.addEventListener("keyup",cabecas_agosto);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_agosto);
cabecas_novilhos12.addEventListener("keyup",cabecas_agosto);
cabecas_bezerros.addEventListener("keyup",cabecas_agosto);
cabecas_outros.addEventListener("keyup",cabecas_agosto);
cabecas_equideos.addEventListener("keyup",cabecas_agosto);




