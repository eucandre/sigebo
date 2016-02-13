var peso_medio_bezerros           = document.getElementById("id_nr_bezerros_peso_medio_media");
var bezerros_peso_medio_janeiro   = document.getElementById("id_nr_bezerros_peso_medio_janeiro");
var bezerros_peso_medio_fevereiro = document.getElementById("id_nr_bezerros_peso_medio_fevereiro");
var bezerros_peso_medio_marco     = document.getElementById("id_nr_bezerros_peso_medio_marco");
var bezerros_peso_medio_abriu     = document.getElementById("id_nr_bezerros_peso_medio_abriu");
var bezerros_peso_medio_maio      = document.getElementById("id_nr_bezerros_peso_medio_maio");
var bezerros_peso_medio_junho     = document.getElementById("id_nr_bezerros_peso_medio_junho");
var bezerros_peso_medio_julho     = document.getElementById("id_nr_bezerros_peso_medio_julho");
var bezerros_peso_medio_agosto    = document.getElementById("id_nr_bezerros_peso_medio_agosto");
var bezerros_peso_medio_setembro  = document.getElementById("id_nr_bezerros_peso_medio_setembro");
var bezerros_peso_medio_outubro   = document.getElementById("id_nr_bezerros_peso_medio_outubro");
var bezerros_peso_medio_novembro  = document.getElementById("id_nr_bezerros_peso_medio_novembro");
var bezerros_peso_medio_dezembro  = document.getElementById("id_nr_bezerros_peso_medio_dezembro");

function peso_bezerros(){
        peso_medio_bezerros.innerHTML =
        parseInt(bezerros_peso_medio_janeiro.value)+
        parseInt(bezerros_peso_medio_fevereiro.value)+
        parseInt(bezerros_peso_medio_marco.value)+
        parseInt(bezerros_peso_medio_abriu.value)+
        parseInt(bezerros_peso_medio_maio.value)+
        parseInt(bezerros_peso_medio_junho.value)+
        parseInt(bezerros_peso_medio_julho.value)+
        parseInt(bezerros_peso_medio_agosto.value)+
        parseInt(bezerros_peso_medio_setembro.value)+
        parseInt(bezerros_peso_medio_outubro.value)+
        parseInt(bezerros_peso_medio_novembro.value)+
        parseInt(bezerros_peso_medio_dezembro.value);
}
peso_bezerros();

bezerros_peso_medio_janeiro.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_fevereiro.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_marco.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_abriu.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_maio.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_junho.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_julho.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_agosto.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_setembro.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_outubro.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_novembro.addEventListener("keyup",peso_bezerros);
bezerros_peso_medio_dezembro.addEventListener("keyup",peso_bezerros);