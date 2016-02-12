var numero_novilhos_maior_14                = document.getElementById("id_nr_novilhos_maior14Arrouba_media");
var numero_novilhos_maior_14_janeiro        = document.getElementById("id_nr_novilhos_maior14Arrouba_janeiro");
var numero_novilhos_maior_14_fevereiro      = document.getElementById("id_nr_novilhos_maior14Arrouba_fevereiro");
var numero_novilhos_maior_14_marco          = document.getElementById("id_nr_novilhos_maior14Arrouba_marco");
var numero_novilhos_maior_14_abril          = document.getElementById("id_nr_novilhos_maior14Arrouba_abril");
var numero_novilhos_maior_14_maio           = document.getElementById("id_nr_novilhos_maior14Arrouba_maio");
var numero_novilhos_maior_14_junho          = document.getElementById("id_nr_novilhos_maior14Arrouba_junho");
var numero_novilhos_maior_14_julho          = document.getElementById("id_nr_novilhos_maior14Arrouba_julho");
var numero_novilhos_maior_14_agosto         = document.getElementById("id_nr_novilhos_maior14Arrouba_agosto");
var numero_novilhos_maior_14_setembro       = document.getElementById("id_nr_novilhos_maior14Arrouba_setembro");
var numero_novilhos_maior_14_outubro        = document.getElementById("id_nr_novilhos_maior14Arrouba_outubro");
var numero_novilhos_maior_14_novembro       = document.getElementById("id_nr_novilhos_maior14Arrouba_novembro");
var numero_novilhos_maior_14_dezembro       = document.getElementById("id_nr_novilhos_maior14Arrouba_dezembro");

function novilhos(){
    numero_novilhos_maior_14.innerHTML =
                parseInt(numero_novilhos_maior_14_janeiro.value)+
                parseInt(numero_novilhos_maior_14_fevereiro.value)+
                parseInt(numero_novilhos_maior_14_marco.value)+
                parseInt(numero_novilhos_maior_14_abril.value)+
                parseInt(numero_novilhos_maior_14_maio.value)+
                parseInt(numero_novilhos_maior_14_junho.value)+
                parseInt(numero_novilhos_maior_14_julho.value)+
                parseInt(numero_novilhos_maior_14_agosto.value)+
                parseInt(numero_novilhos_maior_14_setembro.value)+
                parseInt(numero_novilhos_maior_14_outubro.value)+
                parseInt(numero_novilhos_maior_14_novembro.value)+
                parseInt(numero_novilhos_maior_14_dezembro.value);


}

novilhos();

numero_novilhos_maior_14_janeiro.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_fevereiro.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_marco.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_abril.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_maio.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_junho.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_julho.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_agosto.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_setembro.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_outubro.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_novembro.addEventListener("keyup",novilhos);
numero_novilhos_maior_14_dezembro.addEventListener("keyup",novilhos);




