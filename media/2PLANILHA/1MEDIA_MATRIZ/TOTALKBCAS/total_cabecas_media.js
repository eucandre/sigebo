var total_cabecas_media = document.getElementById("id_total_cabecas_media");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_media");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_mediar14Arrouba_media");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_mediar12_14Arrouba_media");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_mediar_ate12Arrouba_media");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_media");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_media");
var cabecas_outros              = document.getElementById("id_nr_outros_media");
var cabecas_equideos            = document.getElementById("id_nr_equideos_media");
function cabecas_media(){
    total_cabecas_media.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_media();
cabecas_matrizes.addEventListener("keyup",cabecas_media);
cabecas_novilhos14.addEventListener("keyup",cabecas_media);
cabecas_novilhos1214.addEventListener("keyup",cabecas_media);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_media);
cabecas_novilhos12.addEventListener("keyup",cabecas_media);
cabecas_bezerros.addEventListener("keyup",cabecas_media);
cabecas_outros.addEventListener("keyup",cabecas_media);
cabecas_equideos.addEventListener("keyup",cabecas_media);




