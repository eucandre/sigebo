var total_cabecas_junho = document.getElementById("id_total_cabecas_junho");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_junho");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_junhor14Arrouba_junho");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_junhor12_14Arrouba_junho");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_junhor_ate12Arrouba_junho");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_junho");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_junho");
var cabecas_outros              = document.getElementById("id_nr_outros_junho");
var cabecas_equideos            = document.getElementById("id_nr_equideos_junho");
function cabecas_junho(){
    total_cabecas_junho.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_junho();
cabecas_matrizes.addEventListener("keyup",cabecas_junho);
cabecas_novilhos14.addEventListener("keyup",cabecas_junho);
cabecas_novilhos1214.addEventListener("keyup",cabecas_junho);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_junho);
cabecas_novilhos12.addEventListener("keyup",cabecas_junho);
cabecas_bezerros.addEventListener("keyup",cabecas_junho);
cabecas_outros.addEventListener("keyup",cabecas_junho);
cabecas_equideos.addEventListener("keyup",cabecas_junho);




