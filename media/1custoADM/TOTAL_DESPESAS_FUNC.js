var total_despesas = document.getElementById("");
var total_despesas_jan = document.getElementById("");
var total_despesas_fev = document.getElementById("");
var total_despesas_mar = document.getElementById("");
var total_despesas_abr = document.getElementById("");
var total_despesas_mai = document.getElementById("");
var total_despesas_jun = document.getElementById("");
var total_despesas_jul = document.getElementById("");
var total_despesas_ago = document.getElementById("");
var total_despesas_set = document.getElementById("");
var total_despesas_out = document.getElementById("");
var total_despesas_nov = document.getElementById("");
var total_despesas_dez = document.getElementById("");
function TOTAL_DESP_FUN(){
    total_despesas.innerHTML =
        parseFloat(total_despesas_jan.value)+
        parseFloat(total_despesas_fev.value)+
        parseFloat(total_despesas_mar.value)+
        parseFloat(total_despesas_abr.value)+
        parseFloat(total_despesas_mai.value)+
        parseFloat(total_despesas_jun.value)+
        parseFloat(total_despesas_jul.value)+
        parseFloat(total_despesas_ago.value)+
        parseFloat(total_despesas_set.value)+
        parseFloat(total_despesas_out.value)+
        parseFloat(total_despesas_nov.value)+
        parseFloat(total_despesas_dez.value);
}

total_despesas_jan.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_fev.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_mar.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_abr.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_mai.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_jun.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_jul.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_ago.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_set.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_out.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_nov.addEventListener("keyup",TOTAL_DESP_FUN);
total_despesas_dez.addEventListener("keyup",TOTAL_DESP_FUN);








