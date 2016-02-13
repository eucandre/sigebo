var numero_outros                = document.getElementById("id_nr_outros_media");
var numero_outros_janeiro        = document.getElementById("id_nr_outros_janeiro");
var numero_outros_fevereiro      = document.getElementById("id_nr_outros_fevereiro");
var numero_outros_marco          = document.getElementById("id_nr_outros_marco");
var numero_outros_abril          = document.getElementById("id_nr_outros_abril");
var numero_outros_maio           = document.getElementById("id_nr_outros_maio");
var numero_outros_junho          = document.getElementById("id_nr_outros_junho");
var numero_outros_julho          = document.getElementById("id_nr_outros_julho");
var numero_outros_agosto         = document.getElementById("id_nr_outros_agosto");
var numero_outros_setembro       = document.getElementById("id_nr_outros_setembro");
var numero_outros_outubro        = document.getElementById("id_nr_outros_outubro");
var numero_outros_novembro       = document.getElementById("id_nr_outros_novembro");
var numero_outros_dezembro       = document.getElementById("id_nr_outros_dezembro");

function novilhos(){
    numero_outros.innerHTML =
        parseInt(numero_outros_janeiro.value);
        parseInt(numero_outros_fevereiro.value);
        parseInt(numero_outros_marco.value);
        parseInt(numero_outros_abril.value);
        parseInt(numero_outros_maio.value);
        parseInt(numero_outros_junho.value);
        parseInt(numero_outros_julho.value);
        parseInt(numero_outros_agosto.value);
        parseInt(numero_outros_setembro.value);
        parseInt(numero_outros_outubro.value);
        parseInt(numero_outros_novembro.value);
        parseInt(numero_outros_dezembro.value);


}

novilhos();

numero_outros_janeiro.addEventListener("keyup",novilhos);
numero_outros_fevereiro.addEventListener("keyup",novilhos);
numero_outros_marco.addEventListener("keyup",novilhos);
numero_outros_abril.addEventListener("keyup",novilhos);
numero_outros_maio.addEventListener("keyup",novilhos);
numero_outros_junho.addEventListener("keyup",novilhos);
numero_outros_julho.addEventListener("keyup",novilhos);
numero_outros_agosto.addEventListener("keyup",novilhos);
numero_outros_setembro.addEventListener("keyup",novilhos);
numero_outros_outubro.addEventListener("keyup",novilhos);
numero_outros_novembro.addEventListener("keyup",novilhos);
numero_outros_dezembro.addEventListener("keyup",novilhos);




