var peso_medio_equideos           = document.getElementById("id_nr_equideos_peso_medio_media");
var equideos_peso_medio_janeiro   = document.getElementById("id_nr_equideos_peso_medio_janeiro");
var equideos_peso_medio_fevereiro = document.getElementById("id_nr_equideos_peso_medio_fevereiro");
var equideos_peso_medio_marco     = document.getElementById("id_nr_equideos_peso_medio_marco");
var equideos_peso_medio_abriu     = document.getElementById("id_nr_equideos_peso_medio_abriu");
var equideos_peso_medio_maio      = document.getElementById("id_nr_equideos_peso_medio_maio");
var equideos_peso_medio_junho     = document.getElementById("id_nr_equideos_peso_medio_junho");
var equideos_peso_medio_julho     = document.getElementById("id_nr_equideos_peso_medio_julho");
var equideos_peso_medio_agosto    = document.getElementById("id_nr_equideos_peso_medio_agosto");
var equideos_peso_medio_setembro  = document.getElementById("id_nr_equideos_peso_medio_setembro");
var equideos_peso_medio_outubro   = document.getElementById("id_nr_equideos_peso_medio_outubro");
var equideos_peso_medio_novembro  = document.getElementById("id_nr_equideos_peso_medio_novembro");
var equideos_peso_medio_dezembro  = document.getElementById("id_nr_equideos_peso_medio_dezembro");

function peso_equideos(){
        peso_medio_equideos.innerHTML =
        parseInt(equideos_peso_medio_janeiro.value)+
        parseInt(equideos_peso_medio_fevereiro.value)+
        parseInt(equideos_peso_medio_marco.value)+
        parseInt(equideos_peso_medio_abriu.value)+
        parseInt(equideos_peso_medio_maio.value)+
        parseInt(equideos_peso_medio_junho.value)+
        parseInt(equideos_peso_medio_julho.value)+
        parseInt(equideos_peso_medio_agosto.value)+
        parseInt(equideos_peso_medio_setembro.value)+
        parseInt(equideos_peso_medio_outubro.value)+
        parseInt(equideos_peso_medio_novembro.value)+
        parseInt(equideos_peso_medio_dezembro.value);
}
peso_equideos();

equideos_peso_medio_janeiro.addEventListener("keyup",peso_equideos);
equideos_peso_medio_fevereiro.addEventListener("keyup",peso_equideos);
equideos_peso_medio_marco.addEventListener("keyup",peso_equideos);
equideos_peso_medio_abriu.addEventListener("keyup",peso_equideos);
equideos_peso_medio_maio.addEventListener("keyup",peso_equideos);
equideos_peso_medio_junho.addEventListener("keyup",peso_equideos);
equideos_peso_medio_julho.addEventListener("keyup",peso_equideos);
equideos_peso_medio_agosto.addEventListener("keyup",peso_equideos);
equideos_peso_medio_setembro.addEventListener("keyup",peso_equideos);
equideos_peso_medio_outubro.addEventListener("keyup",peso_equideos);
equideos_peso_medio_novembro.addEventListener("keyup",peso_equideos);
equideos_peso_medio_dezembro.addEventListener("keyup",peso_equideos);