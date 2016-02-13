var total_cabecas_fevereiro = document.getElementById("id_total_cabecas_fevereiro");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_fevereiro");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_maior14Arrouba_fevereiro");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_maior12_14Arrouba_fevereiro");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_fevereiro");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_fevereiro");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_fevereiro");
var cabecas_outros              = document.getElementById("id_nr_outros_fevereiro");
var cabecas_equideos            = document.getElementById("id_nr_equideos_fevereiro");
function cabecas_fevereiro(){
    total_cabecas_fevereiro.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_novilhos14.value)+
                          parseInt(cabecas_novilhos1214.value)+
                          parseInt(cabecas_novilhos12mais.value)+
                          parseInt(cabecas_novilhos12.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value);

}

cabecas_fevereiro();
cabecas_matrizes.addEventListener("keyup",cabecas_fevereiro);
cabecas_novilhos14.addEventListener("keyup",cabecas_fevereiro);
cabecas_novilhos1214.addEventListener("keyup",cabecas_fevereiro);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_fevereiro);
cabecas_novilhos12.addEventListener("keyup",cabecas_fevereiro);
cabecas_bezerros.addEventListener("keyup",cabecas_fevereiro);
cabecas_outros.addEventListener("keyup",cabecas_fevereiro);
cabecas_equideos.addEventListener("keyup",cabecas_fevereiro);

