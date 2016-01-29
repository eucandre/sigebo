var media_Nr_Matrizes      = document.getElementById("id_");
var media_Nr_Matrizes_jan = document.getElementById("id_");
var media_Nr_Matrizes_fev = document.getElementById("id_");
var media_Nr_Matrizes_mar = document.getElementById("id_");
var media_Nr_Matrizes_abr = document.getElementById("id_");
var media_Nr_Matrizes_mai = document.getElementById("id_");
var media_Nr_Matrizes_jun = document.getElementById("id_");
var media_Nr_Matrizes_jul = document.getElementById("id_");
var media_Nr_Matrizes_ago = document.getElementById("id_");
var media_Nr_Matrizes_set = document.getElementById("id_");
var media_Nr_Matrizes_out = document.getElementById("id_");
var media_Nr_Matrizes_nov = document.getElementById("id_");
var media_Nr_Matrizes_dez = document.getElementById("id_");

function ME_Nr_Matrizes(){
    media_Nr_Matrizes.innerHTML = parseInt(media_Nr_Matrizes_jan.value)+parseInt(media_Nr_Matrizes_fev.value)+parseInt(media_Nr_Matrizes_mar.value)+
        parseInt(media_Nr_Matrizes_abri.value)+parseInt(media_Nr_Matrizes_mai.value)+parseInt(media_Nr_Matrizes_jun.value)+parseInt(media_Nr_Matrizes_jul.value)+parseInt(media_Nr_Matrizes_ago.value)
        +parseInt(media_Nr_Matrizes_set.value)+parseInt(media_Nr_Matrizes_out.value)+parseInt(media_Nr_Matrizes_nov.value)+parseInt(media_Nr_Matrizes_dez.value);
}

ME_Nr_Matrizes();

media_Nr_Matrizes_jan.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_fev.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_mar.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_abr.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_mai.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_jun.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_jul.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_ago.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_set.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_out.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_nov.addEventListener("keyup",ME_Nr_Matrizes);
media_Nr_Matrizes_dez.addEventListener("keyup",ME_Nr_Matrizes);
