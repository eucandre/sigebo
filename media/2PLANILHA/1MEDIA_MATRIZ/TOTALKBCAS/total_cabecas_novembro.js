var total_cabecas_novembro = document.getElementById("id_total_cabecas_novembro");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_novembro");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_novembror14Arrouba_novembro");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_novembror12_14Arrouba_novembro");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_novembror_ate12Arrouba_novembro");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_novembro");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_novembro");
var cabecas_outros              = document.getElementById("id_nr_outros_novembro");
var cabecas_equideos            = document.getElementById("id_nr_equideos_novembro");
function cabecas_novembro(){
    total_cabecas_novembro.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_novembro();
cabecas_matrizes.addEventListener("keyup",cabecas_novembro);
cabecas_novilhos14.addEventListener("keyup",cabecas_novembro);
cabecas_novilhos1214.addEventListener("keyup",cabecas_novembro);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_novembro);
cabecas_novilhos12.addEventListener("keyup",cabecas_novembro);
cabecas_bezerros.addEventListener("keyup",cabecas_novembro);
cabecas_outros.addEventListener("keyup",cabecas_novembro);
cabecas_equideos.addEventListener("keyup",cabecas_novembro);




