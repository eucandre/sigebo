var total_investimento_HERB = document.getElementById("");
var total_investimento_jan = document.getElementById("");
var total_investimento_fev = document.getElementById("");
var total_investimento_mar = document.getElementById("");
var total_investimento_abr = document.getElementById("");
var total_investimento_mai = document.getElementById("");
var total_investimento_jun = document.getElementById("");
var total_investimento_jul = document.getElementById("");
var total_investimento_ago = document.getElementById("");
var total_investimento_set = document.getElementById("");
var total_investimento_out = document.getElementById("");
var total_investimento_nov = document.getElementById("");
var total_investimento_dez = document.getElementById("");
function INV_TOTAL(){
    total_investimento_HERB.innerHTML =
        (parseInt(total_investimento_jan.value)+
        parseInt(total_investimento_fev.value)+
        parseInt(total_investimento_mar.value)+
        parseInt(total_investimento_abr.value)+
        parseInt(total_investimento_mai.value)+
        parseInt(total_investimento_jun.value)+
        parseInt(total_investimento_jul.value)+
        parseInt(total_investimento_ago.value)+
        parseInt(total_investimento_set.value)+
        parseInt(total_investimento_out.value)+
        parseInt(total_investimento_nov.value)+
        parseInt(total_investimento_dez.value)).tofixed(2);
           }
INV_TOTAL();
total_investimento_jan.addEventListener("keyup",INV_TOTAL);
total_investimento_fev.addEventListener("keyup",INV_TOTAL);
total_investimento_mar.addEventListener("keyup",INV_TOTAL);
total_investimento_abr.addEventListener("keyup",INV_TOTAL);
total_investimento_mai.addEventListener("keyup",INV_TOTAL);
total_investimento_jun.addEventListener("keyup",INV_TOTAL);
total_investimento_jul.addEventListener("keyup",INV_TOTAL);
total_investimento_ago.addEventListener("keyup",INV_TOTAL);
total_investimento_set.addEventListener("keyup",INV_TOTAL);
total_investimento_out.addEventListener("keyup",INV_TOTAL);
total_investimento_nov.addEventListener("keyup",INV_TOTAL);
total_investimento_dez.addEventListener("keyup",INV_TOTAL);