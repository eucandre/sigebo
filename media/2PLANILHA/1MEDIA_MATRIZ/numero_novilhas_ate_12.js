var numero_novilhas_ate_12                = document.getElementById("id_nr_novilhas_maior_ate12Arrouba_media");
var numero_novilhas_ate_12_janeiro        = document.getElementById("id_nr_novilhas_ate12Arrouba_janeiro");
var numero_novilhas_ate_12_fevereiro      = document.getElementById("id_nr_novilhas_ate12Arrouba_fevereiro");
var numero_novilhas_ate_12_marco          = document.getElementById("id_nr_novilhas_ate12Arrouba_marco");
var numero_novilhas_ate_12_abril          = document.getElementById("id_nr_novilhas_ate12Arrouba_abril");
var numero_novilhas_ate_12_maio           = document.getElementById("id_nr_novilhas_ate12Arrouba_maio");
var numero_novilhas_ate_12_junho          = document.getElementById("id_nr_novilhas_ate12Arrouba_junho");
var numero_novilhas_ate_12_julho          = document.getElementById("id_nr_novilhas_ate12Arrouba_julho");
var numero_novilhas_ate_12_agosto         = document.getElementById("id_nr_novilhas_ate12Arrouba_agosto");
var numero_novilhas_ate_12_setembro       = document.getElementById("id_nr_novilhas_ate12Arrouba_setembro");
var numero_novilhas_ate_12_outubro        = document.getElementById("id_nr_novilhas_ate12Arrouba_outubro");
var numero_novilhas_ate_12_novembro       = document.getElementById("id_nr_novilhas_ate12Arrouba_novembro");
var numero_novilhas_ate_12_dezembro       = document.getElementById("id_nr_novilhas_ate12Arrouba_dezembro");

function novilhos(){
    numero_novilhas_ate_12.innerHTML =
        parseInt(numero_novilhas_ate_12_janeiro.value);
        parseInt(numero_novilhas_ate_12_fevereiro.value);
        parseInt(numero_novilhas_ate_12_marco.value);
        parseInt(numero_novilhas_ate_12_abril.value);
        parseInt(numero_novilhas_ate_12_maio.value);
        parseInt(numero_novilhas_ate_12_junho.value);
        parseInt(numero_novilhas_ate_12_julho.value);
        parseInt(numero_novilhas_ate_12_agosto.value);
        parseInt(numero_novilhas_ate_12_setembro.value);
        parseInt(numero_novilhas_ate_12_outubro.value);
        parseInt(numero_novilhas_ate_12_novembro.value);
        parseInt(numero_novilhas_ate_12_dezembro.value);


}

novilhos();

nr_novilhas_maior_ate12Arrouba_janeiro.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_fevereiro.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_marco.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_abril.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_maio.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_junho.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_julho.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_agosto.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_setembro.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_outubro.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_novembro.addEventListener("keyup",novilhos);
nr_novilhas_maior_ate12Arrouba_dezembro.addEventListener("keyup",novilhos);




