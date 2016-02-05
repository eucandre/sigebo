var total_FIXO = document.getElementById("");
var total_FIX_jan =document.getElementById("");
var total_FIX_fev =document.getElementById("");
var total_FIX_mar=document.getElementById("");
var total_FIX_abr=document.getElementById("");
var total_FIX_mai=document.getElementById("");
var total_FIX_jun=document.getElementById("");
var total_FIX_jul=document.getElementById("");
var total_FIX_ago=document.getElementById("");
var total_FIX_set=document.getElementById("");
var total_FIX_out=document.getElementById("");
var total_FIX_nov=document.getElementById("");
var total_FIX_dez=document.getElementById("");
function FIXO_OPE_JAN(){

    total_FIXO.innerHTML =
        (parseInt(total_FIX_jan.value)+
        parseInt(total_FIX_fev.value)+
        parseInt(total_FIX_mar.value)+
        parseInt(total_FIX_abr.value)+
        parseInt(total_FIX_mai.value)+
        parseInt(total_FIX_jun.value)+
        parseInt(total_FIX_jul.value)+
        parseInt(total_FIX_ago.value)+
        parseInt(total_FIX_set.value)+
        parseInt(total_FIX_out.value)+
        parseInt(total_FIX_nov.value)+
        parseInt(total_FIX_dez.value)).tofixed(2);
}
FIXO_OPE_JAN();
total_FIX_jan.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_fev.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_mar.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_abr.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_mai.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_jun.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_jul.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_ago.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_set.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_out.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_nov.addEventListener("keyup",FIXO_OPE_JAN);
total_FIX_dez.addEventListener("keyup",FIXO_OPE_JAN);