var peso_medio_bezerros           = document.getElementById("id_nr_bezerras_peso_medio_media");
var bezerras_peso_medio_janeiro   = document.getElementById("id_nr_bezerras_peso_medio_janeiro");
var bezerras_peso_medio_fevereiro = document.getElementById("id_nr_bezerras_peso_medio_fevereiro");
var bezerras_peso_medio_marco     = document.getElementById("id_nr_bezerras_peso_medio_marco");
var bezerras_peso_medio_abriu     = document.getElementById("id_nr_bezerras_peso_medio_abriu");
var bezerras_peso_medio_maio      = document.getElementById("id_nr_bezerras_peso_medio_maio");
var bezerras_peso_medio_junho     = document.getElementById("id_nr_bezerras_peso_medio_junho");
var bezerras_peso_medio_julho     = document.getElementById("id_nr_bezerras_peso_medio_julho");
var bezerras_peso_medio_agosto    = document.getElementById("id_nr_bezerras_peso_medio_agosto");
var bezerras_peso_medio_setembro  = document.getElementById("id_nr_bezerras_peso_medio_setembro");
var bezerras_peso_medio_outubro   = document.getElementById("id_nr_bezerras_peso_medio_outubro");
var bezerras_peso_medio_novembro  = document.getElementById("id_nr_bezerras_peso_medio_novembro");
var bezerras_peso_medio_dezembro  = document.getElementById("id_nr_bezerras_peso_medio_dezembro");

function peso_bezerras(){
        peso_medio_bezerros.innerHTML =
        parseInt(bezerras_peso_medio_janeiro.value)+
        parseInt(bezerras_peso_medio_fevereiro.value)+
        parseInt(bezerras_peso_medio_marco.value)+
        parseInt(bezerras_peso_medio_abriu.value)+
        parseInt(bezerras_peso_medio_maio.value)+
        parseInt(bezerras_peso_medio_junho.value)+
        parseInt(bezerras_peso_medio_julho.value)+
        parseInt(bezerras_peso_medio_agosto.value)+
        parseInt(bezerras_peso_medio_setembro.value)+
        parseInt(bezerras_peso_medio_outubro.value)+
        parseInt(bezerras_peso_medio_novembro.value)+
        parseInt(bezerras_peso_medio_dezembro.value);
}
peso_bezerras();

bezerras_peso_medio_janeiro.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_fevereiro.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_marco.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_abriu.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_maio.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_junho.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_julho.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_agosto.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_setembro.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_outubro.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_novembro.addEventListener("keyup",peso_bezerras);
bezerras_peso_medio_dezembro.addEventListener("keyup",peso_bezerras);