var total_cabecas_outubro = document.getElementById("id_total_cabecas_outubro");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_outubro");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_outubror14Arrouba_outubro");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_outubror12_14Arrouba_outubro");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_outubror_ate12Arrouba_outubro");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_outubro");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_outubro");
var cabecas_outros              = document.getElementById("id_nr_outros_outubro");
var cabecas_equideos            = document.getElementById("id_nr_equideos_outubro");
function cabecas_outubro(){
    total_cabecas_outubro.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_outubro();
cabecas_matrizes.addEventListener("keyup",cabecas_outubro);
cabecas_novilhos14.addEventListener("keyup",cabecas_outubro);
cabecas_novilhos1214.addEventListener("keyup",cabecas_outubro);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_outubro);
cabecas_novilhos12.addEventListener("keyup",cabecas_outubro);
cabecas_bezerros.addEventListener("keyup",cabecas_outubro);
cabecas_outros.addEventListener("keyup",cabecas_outubro);
cabecas_equideos.addEventListener("keyup",cabecas_outubro);




