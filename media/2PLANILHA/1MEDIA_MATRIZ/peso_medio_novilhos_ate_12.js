var peso_medio                            = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_media");
var peso_medio_novilho_ate_12_janeiro   = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_janeiro");
var peso_medio_novilho_ate_12_fevereiro = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_fevereiro");
var peso_medio_novilho_ate_12_marco     = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_marco");
var peso_medio_novilho_ate_12_abril     = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_abriu");
var peso_medio_novilho_ate_12_maio      = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_maio");
var peso_medio_novilho_ate_12_junho     = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_junho");
var peso_medio_novilho_ate_12_julho     = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_julho");
var peso_medio_novilho_ate_12_agosto    = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_agosto");
var peso_medio_novilho_ate_12_setembro  = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_setembro");
var peso_medio_novilho_ate_12_outubro   = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_outubro");
var peso_medio_novilho_ate_12_novembro  = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_novembro");
var peso_medio_novilho_ate_12_dezembro  = document.getElementById("id_nr_novilhos_maior_ate12Arrouba_peso_medio_dezembro");
function  medio_ate_12(){

    peso_medio.innerHTML =
     parseInt(peso_medio_novilho_ate_12_janeiro.value)+
     parseInt(peso_medio_novilho_ate_12_fevereiro.value)+
     parseInt(peso_medio_novilho_ate_12_marco.value)+
     parseInt(peso_medio_novilho_ate_12_abril.value)+
     parseInt(peso_medio_novilho_ate_12_maio.value)+
     parseInt(peso_medio_novilho_ate_12_junho.value)+
     parseInt(peso_medio_novilho_ate_12_julho.value)+
     parseInt(peso_medio_novilho_ate_12_agosto.value)+
     parseInt(peso_medio_novilho_ate_12_setembro.value)+
     parseInt(peso_medio_novilho_ate_12_outubro.value)+
     parseInt(peso_medio_novilho_ate_12_novembro.value)+
     parseInt(peso_medio_novilho_ate_12_dezembro.value);

}
medio_ate_12();
peso_medio_novilho_ate_12_janeiro.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_fevereiro.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_marco.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_abril.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_maio.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_junho.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_julho.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_agosto.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_setembro.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_outubro.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_novembro.addEventListener("keyup",medio_ate_12);
peso_medio_novilho_ate_12_dezembro.addEventListener("keyup",medio_ate_12);



