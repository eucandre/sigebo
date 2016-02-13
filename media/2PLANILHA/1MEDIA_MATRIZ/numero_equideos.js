var numero_equideos                = document.getElementById("id_nr_equideos_media");
var numero_equideos_janeiro        = document.getElementById("id_nr_equideos_janeiro");
var numero_equideos_fevereiro      = document.getElementById("id_nr_equideos_fevereiro");
var numero_equideos_marco          = document.getElementById("id_nr_equideos_marco");
var numero_equideos_abril          = document.getElementById("id_nr_equideos_abril");
var numero_equideos_maio           = document.getElementById("id_nr_equideos_maio");
var numero_equideos_junho          = document.getElementById("id_nr_equideos_junho");
var numero_equideos_julho          = document.getElementById("id_nr_equideos_julho");
var numero_equideos_agosto         = document.getElementById("id_nr_equideos_agosto");
var numero_equideos_setembro       = document.getElementById("id_nr_equideos_setembro");
var numero_equideos_outubro        = document.getElementById("id_nr_equideos_outubro");
var numero_equideos_novembro       = document.getElementById("id_nr_equideos_novembro");
var numero_equideos_dezembro       = document.getElementById("id_nr_equideos_dezembro");

function novilhos(){
    numero_equideos.innerHTML =
        parseInt(numero_equideos_janeiro.value);
        parseInt(numero_equideos_fevereiro.value);
        parseInt(numero_equideos_marco.value);
        parseInt(numero_equideos_abril.value);
        parseInt(numero_equideos_maio.value);
        parseInt(numero_equideos_junho.value);
        parseInt(numero_equideos_julho.value);
        parseInt(numero_equideos_agosto.value);
        parseInt(numero_equideos_setembro.value);
        parseInt(numero_equideos_outubro.value);
        parseInt(numero_equideos_novembro.value);
        parseInt(numero_equideos_dezembro.value);


}

novilhos();

numero_equideos_janeiro.addEventListener("keyup",novilhos);
numero_equideos_fevereiro.addEventListener("keyup",novilhos);
numero_equideos_marco.addEventListener("keyup",novilhos);
numero_equideos_abril.addEventListener("keyup",novilhos);
numero_equideos_maio.addEventListener("keyup",novilhos);
numero_equideos_junho.addEventListener("keyup",novilhos);
numero_equideos_julho.addEventListener("keyup",novilhos);
numero_equideos_agosto.addEventListener("keyup",novilhos);
numero_equideos_setembro.addEventListener("keyup",novilhos);
numero_equideos_outubro.addEventListener("keyup",novilhos);
numero_equideos_novembro.addEventListener("keyup",novilhos);
numero_equideos_dezembro.addEventListener("keyup",novilhos);




