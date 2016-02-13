var total_cabecas_setembro = document.getElementById("id_total_cabecas_setembro");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_setembro");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_setembror14Arrouba_setembro");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_setembror12_14Arrouba_setembro");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_setembror_ate12Arrouba_setembro");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_setembro");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_setembro");
var cabecas_outros              = document.getElementById("id_nr_outros_setembro");
var cabecas_equideos            = document.getElementById("id_nr_equideos_setembro");
function cabecas_setembro(){
    total_cabecas_setembro.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_setembro();
cabecas_matrizes.addEventListener("keyup",cabecas_setembro);
cabecas_novilhos14.addEventListener("keyup",cabecas_setembro);
cabecas_novilhos1214.addEventListener("keyup",cabecas_setembro);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_setembro);
cabecas_novilhos12.addEventListener("keyup",cabecas_setembro);
cabecas_bezerros.addEventListener("keyup",cabecas_setembro);
cabecas_outros.addEventListener("keyup",cabecas_setembro);
cabecas_equideos.addEventListener("keyup",cabecas_setembro);




