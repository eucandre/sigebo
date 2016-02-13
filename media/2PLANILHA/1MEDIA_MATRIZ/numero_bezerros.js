var numero_bezerros                = document.getElementById("id_nr_bezerros_media");
var numero_bezerros_janeiro        = document.getElementById("id_nr_bezerros_janeiro");
var numero_bezerros_fevereiro      = document.getElementById("id_nr_bezerros_fevereiro");
var numero_bezerros_marco          = document.getElementById("id_nr_bezerros_marco");
var numero_bezerros_abril          = document.getElementById("id_nr_bezerros_abril");
var numero_bezerros_maio           = document.getElementById("id_nr_bezerros_maio");
var numero_bezerros_junho          = document.getElementById("id_nr_bezerros_junho");
var numero_bezerros_julho          = document.getElementById("id_nr_bezerros_julho");
var numero_bezerros_agosto         = document.getElementById("id_nr_bezerros_agosto");
var numero_bezerros_setembro       = document.getElementById("id_nr_bezerros_setembro");
var numero_bezerros_outubro        = document.getElementById("id_nr_bezerros_outubro");
var numero_bezerros_novembro       = document.getElementById("id_nr_bezerros_novembro");
var numero_bezerros_dezembro       = document.getElementById("id_nr_bezerros_dezembro");

function novilhos(){
    numero_bezerros.innerHTML =
        parseInt(numero_bezerros_janeiro.value);
        parseInt(numero_bezerros_fevereiro.value);
        parseInt(numero_bezerros_marco.value);
        parseInt(numero_bezerros_abril.value);
        parseInt(numero_bezerros_maio.value);
        parseInt(numero_bezerros_junho.value);
        parseInt(numero_bezerros_julho.value);
        parseInt(numero_bezerros_agosto.value);
        parseInt(numero_bezerros_setembro.value);
        parseInt(numero_bezerros_outubro.value);
        parseInt(numero_bezerros_novembro.value);
        parseInt(numero_bezerros_dezembro.value);


}

novilhos();

numero_bezerros_janeiro.addEventListener("keyup",novilhos);
numero_bezerros_fevereiro.addEventListener("keyup",novilhos);
numero_bezerros_marco.addEventListener("keyup",novilhos);
numero_bezerros_abril.addEventListener("keyup",novilhos);
numero_bezerros_maio.addEventListener("keyup",novilhos);
numero_bezerros_junho.addEventListener("keyup",novilhos);
numero_bezerros_julho.addEventListener("keyup",novilhos);
numero_bezerros_agosto.addEventListener("keyup",novilhos);
numero_bezerros_setembro.addEventListener("keyup",novilhos);
numero_bezerros_outubro.addEventListener("keyup",novilhos);
numero_bezerros_novembro.addEventListener("keyup",novilhos);
numero_bezerros_dezembro.addEventListener("keyup",novilhos);




