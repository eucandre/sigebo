var total_cabecas_dezembro = document.getElementById("id_total_cabecas_dezembro");
var cabecas_matrizes            = document.getElementById("id_nr_matriz_dezembro");
var cabecas_novilhos14          = document.getElementById("id_nr_novilhos_dezembror14Arrouba_dezembro");
var cabecas_novilhos1214        = document.getElementById("id_nr_novilhos_dezembror12_14Arrouba_dezembro");
var cabecas_novilhos12mais      = document.getElementById("id_nr_novilhos_dezembror_ate12Arrouba_dezembro");
var cabecas_novilhos12          = document.getElementById("id_nr_novilhas_ate12Arrouba_dezembro");
var cabecas_bezerros            = document.getElementById("id_nr_bezerros_dezembro");
var cabecas_outros              = document.getElementById("id_nr_outros_dezembro");
var cabecas_equideos            = document.getElementById("id_nr_equideos_dezembro");
function cabecas_dezembro(){
    total_cabecas_dezembro.innerHTML=
                          parseInt(cabecas_matrizes.value)+
                          parseInt(cabecas_bezerros.value)+
                          parseInt(cabecas_outros.value)+
                          parseInt(cabecas_equideos.value)+
                          parseInt(cabecas_novilhos12.value);

}

cabecas_dezembro();
cabecas_matrizes.addEventListener("keyup",cabecas_dezembro);
cabecas_novilhos14.addEventListener("keyup",cabecas_dezembro);
cabecas_novilhos1214.addEventListener("keyup",cabecas_dezembro);
cabecas_novilhos12mais.addEventListener("keyup",cabecas_dezembro);
cabecas_novilhos12.addEventListener("keyup",cabecas_dezembro);
cabecas_bezerros.addEventListener("keyup",cabecas_dezembro);
cabecas_outros.addEventListener("keyup",cabecas_dezembro);
cabecas_equideos.addEventListener("keyup",cabecas_dezembro);




