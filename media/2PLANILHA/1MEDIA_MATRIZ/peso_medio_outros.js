var peso_medio_outros           = document.getElementById("id_nr_outros_peso_medio_media");
var outros_peso_medio_janeiro   = document.getElementById("id_nr_outros_peso_medio_janeiro");
var outros_peso_medio_fevereiro = document.getElementById("id_nr_outros_peso_medio_fevereiro");
var outros_peso_medio_marco     = document.getElementById("id_nr_outros_peso_medio_marco");
var outros_peso_medio_abriu     = document.getElementById("id_nr_outros_peso_medio_abriu");
var outros_peso_medio_maio      = document.getElementById("id_nr_outros_peso_medio_maio");
var outros_peso_medio_junho     = document.getElementById("id_nr_outros_peso_medio_junho");
var outros_peso_medio_julho     = document.getElementById("id_nr_outros_peso_medio_julho");
var outros_peso_medio_agosto    = document.getElementById("id_nr_outros_peso_medio_agosto");
var outros_peso_medio_setembro  = document.getElementById("id_nr_outros_peso_medio_setembro");
var outros_peso_medio_outubro   = document.getElementById("id_nr_outros_peso_medio_outubro");
var outros_peso_medio_novembro  = document.getElementById("id_nr_outros_peso_medio_novembro");
var outros_peso_medio_dezembro  = document.getElementById("id_nr_outros_peso_medio_dezembro");

function peso_outros(){
        peso_medio_outros.innerHTML =
        parseInt(outros_peso_medio_janeiro.value)+
        parseInt(outros_peso_medio_fevereiro.value)+
        parseInt(outros_peso_medio_marco.value)+
        parseInt(outros_peso_medio_abriu.value)+
        parseInt(outros_peso_medio_maio.value)+
        parseInt(outros_peso_medio_junho.value)+
        parseInt(outros_peso_medio_julho.value)+
        parseInt(outros_peso_medio_agosto.value)+
        parseInt(outros_peso_medio_setembro.value)+
        parseInt(outros_peso_medio_outubro.value)+
        parseInt(outros_peso_medio_novembro.value)+
        parseInt(outros_peso_medio_dezembro.value);
}
peso_outros();

outros_peso_medio_janeiro.addEventListener("keyup",peso_outros);
outros_peso_medio_fevereiro.addEventListener("keyup",peso_outros);
outros_peso_medio_marco.addEventListener("keyup",peso_outros);
outros_peso_medio_abriu.addEventListener("keyup",peso_outros);
outros_peso_medio_maio.addEventListener("keyup",peso_outros);
outros_peso_medio_junho.addEventListener("keyup",peso_outros);
outros_peso_medio_julho.addEventListener("keyup",peso_outros);
outros_peso_medio_agosto.addEventListener("keyup",peso_outros);
outros_peso_medio_setembro.addEventListener("keyup",peso_outros);
outros_peso_medio_outubro.addEventListener("keyup",peso_outros);
outros_peso_medio_novembro.addEventListener("keyup",peso_outros);
outros_peso_medio_dezembro.addEventListener("keyup",peso_outros);