var numero_novilhos_ate_12                = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_media");
var numero_novilhos_ate_12_janeiro        = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro");
var numero_novilhos_ate_12_fevereiro      = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_fevereiro");
var numero_novilhos_ate_12_marco          = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_marco");
var numero_novilhos_ate_12_abril          = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_abril");
var numero_novilhos_ate_12_maio           = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_maio");
var numero_novilhos_ate_12_junho          = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_junho");
var numero_novilhos_ate_12_julho          = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_julho");
var numero_novilhos_ate_12_agosto         = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_agosto");
var numero_novilhos_ate_12_setembro       = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_setembro");
var numero_novilhos_ate_12_outubro        = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_outubro");
var numero_novilhos_ate_12_novembro       = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_novembro");
var numero_novilhos_ate_12_dezembro       = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_janeiro_dezembro");

function novilhos(){
    numero_novilhos_ate_12.innerHTML =
                parseInt(numero_novilhos_ate_12_janeiro.value);



}

novilhos();

nr_novilhos_maior_ate12Arrouba_janeiro.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_fevereiro.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_marco.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_abril.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_maio.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_junho.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_julho.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_agosto.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_setembro.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_outubro.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_novembro.addEventListener("keyup",novilhos);
nr_novilhos_maior_ate12Arrouba_dezembro.addEventListener("keyup",novilhos);




