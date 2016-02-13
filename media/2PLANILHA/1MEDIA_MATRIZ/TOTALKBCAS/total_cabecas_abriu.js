var total_cabecas_abril = document.getElementById("id_total_cabecas_abril");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_abril");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_maior14Arrouba_abril");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_maior12_14Arrouba_abril");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_abril");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_abril");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_abril");
var cabecas_outros              = document.getElementById("id_nr_outros_abril");
var cabecas_equideos            = document.getElementById("id_nr_equideos_abril");
function cabecas_abril(){
    total_cabecas_abril.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_novilhos14.value)+
                          parseInt(cabecas_novilhos1214.value)+
                          parseInt(cabecas_novilhos12mais.value)+
                          parseInt(cabecas_novilhos12.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value);

}

cabecas_abril();
cabecas_matrizes.addEventListener("keyup",cabecas_abril);
cabecas_novilhos14.addEventListener("keyup",cabecas_abril);
cabecas_novilhos1214.addEventListener("keyup",cabecas_abril);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_abril);
cabecas_novilhos12.addEventListener("keyup",cabecas_abril);
cabecas_bezerros.addEventListener("keyup",cabecas_abril);
cabecas_outros.addEventListener("keyup",cabecas_abril);
cabecas_equideos.addEventListener("keyup",cabecas_abril);




