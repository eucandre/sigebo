var media = document.getElementById("id_nr_matriz_media");
var matriz_janeiro      = document.getElementById("id_nr_matriz_janeiro");
var matriz_fevereiro    = document.getElementById("id_nr_matriz_fevereiro");
var matriz_marco        = document.getElementById("id_nr_matriz_merco");
var matriz_abril        = document.getElementById("id_nr_matriz_abril");
var matriz_maio         = document.getElementById("id_nr_matriz_maio");
var matriz_junho        = document.getElementById("id_nr_matriz_junho");
var matriz_julho        = document.getElementById("id_nr_matriz_julho");
var matriz_agosto       = document.getElementById("id_nr_matriz_agosto");
var matriz_setembro     = document.getElementById("id_nr_matriz_setembro");
var matriz_outubro      = document.getElementById("id_nr_matriz_outubro");
var matriz_novembro     = document.getElementById("id_nr_matriz_novembro");
var matriz_dezembro     = document.getElementById("id_nr_matriz_dezembro");
function media_nr_matrizes(){
    media.innerHTML = (parseInt(matriz_janeiro.value)+parseInt(matriz_fevereiro.value)+parseInt(matriz_marco.value)
    +parseInt(matriz_abril.value)+parseInt(matriz_maio.value)+parseInt(matriz_junho.value)+parseInt(matriz_julho.value)
        +parseInt(matriz_agosto.value)+parseInt(matriz_setembro.value)+parseInt(matriz_outubro.value)+parseInt(matriz_novembro.value)+parseInt(matriz_dezembro.value))/12;
}
media_nr_matrizes();
matriz_janeiro.addEventListener("keyup",media_nr_matrizes);
matriz_fevereiro.addEventListener("keyup",media_nr_matrizes);
matriz_marco.addEventListener("keyup",media_nr_matrizes);
matriz_abril.addEventListener("keyup",media_nr_matrizes);
matriz_maio.addEventListener("keyup",media_nr_matrizes);
matriz_junho.addEventListener("keyup",media_nr_matrizes);
matriz_julho.addEventListener("keyup",media_nr_matrizes);
matriz_agosto.addEventListener("keyup",media_nr_matrizes);
matriz_setembro.addEventListener("keyup",media_nr_matrizes);
matriz_outubro.addEventListener("keyup",media_nr_matrizes);
matriz_novembro.addEventListener("keyup",media_nr_matrizes);
matriz_dezembro.addEventListener("keyup",media_nr_matrizes);