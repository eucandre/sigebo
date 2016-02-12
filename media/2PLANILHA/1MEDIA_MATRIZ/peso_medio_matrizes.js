var peso_medio_matrizes             = document.getElementById("id_nr_matriz_peso_medio_media");
var nr_matriz_peso_medio_janeiro   = document.getElementById("id_nr_matriz_peso_medio_janeiro");
var nr_matriz_peso_medio_fevereiro = document.getElementById("id_nr_matriz_peso_medio_fevereiro");
var nr_matriz_peso_medio_marco     = document.getElementById("id_nr_matriz_peso_medio_marco");
var nr_matriz_peso_medio_abriu     = document.getElementById("id_nr_matriz_peso_medio_abriu");
var nr_matriz_peso_medio_maio      = document.getElementById("id_nr_matriz_peso_medio_maio");
var nr_matriz_peso_medio_junho     = document.getElementById("id_nr_matriz_peso_medio_junho");
var nr_matriz_peso_medio_julho     = document.getElementById("id_nr_matriz_peso_medio_julho");
var nr_matriz_peso_medio_agosto    = document.getElementById("id_nr_matriz_peso_medio_agosto");
var nr_matriz_peso_medio_setembro  = document.getElementById("id_nr_matriz_peso_medio_setembro");
var nr_matriz_peso_medio_outubro   = document.getElementById("id_nr_matriz_peso_medio_outubro");
var nr_matriz_peso_medio_novembro  = document.getElementById("id_nr_matriz_peso_medio_novembro");
var nr_matriz_peso_medio_dezembro  = document.getElementById("id_nr_matriz_peso_medio_dezembro");

function peso_matrizes(){
        peso_medio_matrizes.innerHTML =
        parseInt(nr_matriz_peso_medio_janeiro.value)+
        parseInt(nr_matriz_peso_medio_fevereiro.value)+
        parseInt(nr_matriz_peso_medio_marco.value)+
        parseInt(nr_matriz_peso_medio_abriu.value)+
        parseInt(nr_matriz_peso_medio_maio.value)+
        parseInt(nr_matriz_peso_medio_junho.value)+
        parseInt(nr_matriz_peso_medio_julho.value)+
        parseInt(nr_matriz_peso_medio_agosto.value)+
        parseInt(nr_matriz_peso_medio_setembro.value)+
        parseInt(nr_matriz_peso_medio_outubro.value)+
        parseInt(nr_matriz_peso_medio_novembro.value)+
        parseInt(nr_matriz_peso_medio_dezembro.value);
}
peso_matrizes();

nr_matriz_peso_medio_janeiro.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_fevereiro.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_marco.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_abriu.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_maio.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_junho.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_julho.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_agosto.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_setembro.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_outubro.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_novembro.addEventListener("keyup",peso_matrizes);
nr_matriz_peso_medio_dezembro.addEventListener("keyup",peso_matrizes);