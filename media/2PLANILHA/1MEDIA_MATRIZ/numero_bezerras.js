var numero_bezerras                = document.getElementById("id_nr_bezerras_media");
var numero_bezerras_janeiro        = document.getElementById("id_nr_bezerras_janeiro");
var numero_bezerras_fevereiro      = document.getElementById("id_nr_bezerras_fevereiro");
var numero_bezerras_marco          = document.getElementById("id_nr_bezerras_marco");
var numero_bezerras_abril          = document.getElementById("id_nr_bezerras_abril");
var numero_bezerras_maio           = document.getElementById("id_nr_bezerras_maio");
var numero_bezerras_junho          = document.getElementById("id_nr_bezerras_junho");
var numero_bezerras_julho          = document.getElementById("id_nr_bezerras_julho");
var numero_bezerras_agosto         = document.getElementById("id_nr_bezerras_agosto");
var numero_bezerras_setembro       = document.getElementById("id_nr_bezerras_setembro");
var numero_bezerras_outubro        = document.getElementById("id_nr_bezerras_outubro");
var numero_bezerras_novembro       = document.getElementById("id_nr_bezerras_novembro");
var numero_bezerras_dezembro       = document.getElementById("id_nr_bezerras_dezembro");

function novilhos(){
    numero_bezerras.innerHTML =
        parseInt(numero_bezerras_janeiro.value);
        parseInt(numero_bezerras_fevereiro.value);
        parseInt(numero_bezerras_marco.value);
        parseInt(numero_bezerras_abril.value);
        parseInt(numero_bezerras_maio.value);
        parseInt(numero_bezerras_junho.value);
        parseInt(numero_bezerras_julho.value);
        parseInt(numero_bezerras_agosto.value);
        parseInt(numero_bezerras_setembro.value);
        parseInt(numero_bezerras_outubro.value);
        parseInt(numero_bezerras_novembro.value);
        parseInt(numero_bezerras_dezembro.value);


}

novilhos();

numero_bezerras_janeiro.addEventListener("keyup",novilhos);
numero_bezerras_fevereiro.addEventListener("keyup",novilhos);
numero_bezerras_marco.addEventListener("keyup",novilhos);
numero_bezerras_abril.addEventListener("keyup",novilhos);
numero_bezerras_maio.addEventListener("keyup",novilhos);
numero_bezerras_junho.addEventListener("keyup",novilhos);
numero_bezerras_julho.addEventListener("keyup",novilhos);
numero_bezerras_agosto.addEventListener("keyup",novilhos);
numero_bezerras_setembro.addEventListener("keyup",novilhos);
numero_bezerras_outubro.addEventListener("keyup",novilhos);
numero_bezerras_novembro.addEventListener("keyup",novilhos);
numero_bezerras_dezembro.addEventListener("keyup",novilhos);




