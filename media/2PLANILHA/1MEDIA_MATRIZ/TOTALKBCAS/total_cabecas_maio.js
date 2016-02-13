var total_cabecas_maio = document.getElementById("id_total_cabecas_maio");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_maio");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_maior14Arrouba_maio");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_maior12_14Arrouba_maio");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_maio");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_maio");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_maio");
var cabecas_outros              = document.getElementById("id_nr_outros_maio");
var cabecas_equideos            = document.getElementById("id_nr_equideos_maio");
function cabecas_maio(){
    total_cabecas_maio.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_novilhos14.value)+
                          parseInt(cabecas_novilhos1214.value)+
                          parseInt(cabecas_novilhos12mais.value)+
                          parseInt(cabecas_novilhos12.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value);

}

cabecas_maio();
cabecas_matrizes.addEventListener("keyup",cabecas_maio);
cabecas_novilhos14.addEventListener("keyup",cabecas_maio);
cabecas_novilhos1214.addEventListener("keyup",cabecas_maio);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_maio);
cabecas_novilhos12.addEventListener("keyup",cabecas_maio);
cabecas_bezerros.addEventListener("keyup",cabecas_maio);
cabecas_outros.addEventListener("keyup",cabecas_maio);
cabecas_equideos.addEventListener("keyup",cabecas_maio);




