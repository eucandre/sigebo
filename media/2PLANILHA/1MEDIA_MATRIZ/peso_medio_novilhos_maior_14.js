var peso_medio                            = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_media");
var peso_medio_novilho_maior_14_janeiro   = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_janeiro");
var peso_medio_novilho_maior_14_fevereiro = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_fevereiro");
var peso_medio_novilho_maior_14_marco     = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_marco");
var peso_medio_novilho_maior_14_abril     = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_abriu");
var peso_medio_novilho_maior_14_maio      = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_maio");
var peso_medio_novilho_maior_14_junho     = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_junho");
var peso_medio_novilho_maior_14_julho     = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_julho");
var peso_medio_novilho_maior_14_agosto    = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_agosto");
var peso_medio_novilho_maior_14_setembro  = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_setembro");
var peso_medio_novilho_maior_14_outubro   = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_outubro");
var peso_medio_novilho_maior_14_novembro  = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_novembro");
var peso_medio_novilho_maior_14_dezembro  = document.getElementById("id_nr_novilhos_maior14Arrouba_peso_medio_dezembro");
function  medio_maior_14(){

    peso_medio.innerHTML =  parseInt(peso_medio_novilho_maior_14_janeiro.value)+
    parseInt(peso_medio_novilho_maior_14_fevereiro.value)+
     parseInt(peso_medio_novilho_maior_14_marco.value)+
     parseInt(peso_medio_novilho_maior_14_abril.value)+
     parseInt(peso_medio_novilho_maior_14_maio.value)+
     parseInt(peso_medio_novilho_maior_14_junho.value)+
     parseInt(peso_medio_novilho_maior_14_julho.value)+
     parseInt(peso_medio_novilho_maior_14_agosto.value)+
     parseInt(peso_medio_novilho_maior_14_setembro.value)+
     parseInt(peso_medio_novilho_maior_14_outubro.value)+
     parseInt(peso_medio_novilho_maior_14_novembro.value)+
     parseInt(peso_medio_novilho_maior_14_dezembro.value);

}
medio_maior_14();
peso_medio_novilho_maior_14_janeiro.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_fevereiro.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_marco.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_abril.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_maio.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_junho.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_julho.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_agosto.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_setembro.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_outubro.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_novembro.addEventListener("keyup",medio_maior_14);
peso_medio_novilho_maior_14_dezembro.addEventListener("keyup",medio_maior_14);



