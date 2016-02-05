var custo_to_FIXO = document.getElementById("");
var custo_to_FIXO_jan = document.getElementById("");
var custo_to_FIXO_fev = document.getElementById("");
var custo_to_FIXO_mar = document.getElementById("");
var custo_to_FIXO_abr = document.getElementById("");
var custo_to_FIXO_mai = document.getElementById("");
var custo_to_FIXO_jun = document.getElementById("");
var custo_to_FIXO_jul = document.getElementById("");
var custo_to_FIXO_ago = document.getElementById("");
var custo_to_FIXO_set = document.getElementById("");
var custo_to_FIXO_out = document.getElementById("");
var custo_to_FIXO_nov = document.getElementById("");
var custo_to_FIXO_dez = document.getElementById("");
function cusFIX(){
    custo_to_FIXO.innerHTML =
        (parseInt(custo_to_FIXO_jan.value)+
        parseInt(custo_to_FIXO_fev.value)+
        parseInt(custo_to_FIXO_mar.value)+
        parseInt(custo_to_FIXO_abr.value)+
        parseInt(custo_to_FIXO_mai.value)+
        parseInt(custo_to_FIXO_jun.value)+
        parseInt(custo_to_FIXO_jul.value)+
        parseInt(custo_to_FIXO_ago.value)+
        parseInt(custo_to_FIXO_set.value)+
        parseInt(custo_to_FIXO_out.value)+
        parseInt(custo_to_FIXO_nov.value)+
        parseInt(custo_to_FIXO_dez.value)).tofixed(2);
}
custo_to_FIXO_jan.addEventListener("keyup",cusFIX);
custo_to_FIXO_fev.addEventListener("keyup",cusFIX);
custo_to_FIXO_mar.addEventListener("keyup",cusFIX);
custo_to_FIXO_abr.addEventListener("keyup",cusFIX);
custo_to_FIXO_mai.addEventListener("keyup",cusFIX);
custo_to_FIXO_jun.addEventListener("keyup",cusFIX);
custo_to_FIXO_jul.addEventListener("keyup",cusFIX);
custo_to_FIXO_ago.addEventListener("keyup",cusFIX);
custo_to_FIXO_set.addEventListener("keyup",cusFIX);
custo_to_FIXO_out.addEventListener("keyup",cusFIX);
custo_to_FIXO_nov.addEventListener("keyup",cusFIX);
custo_to_FIXO_dez.addEventListener("keyup",cusFIX);