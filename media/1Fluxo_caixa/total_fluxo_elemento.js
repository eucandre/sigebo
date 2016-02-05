
var total_elemento_receita_fazenda = document.getElementById("");
var total_elemento_receita_fazenda_jan = document.getElementById("");
var total_elemento_receita_fazenda_fev = document.getElementById("");
var total_elemento_receita_fazenda_mar = document.getElementById("");
var total_elemento_receita_fazenda_abr = document.getElementById("");
var total_elemento_receita_fazenda_mai = document.getElementById("");
var total_elemento_receita_fazenda_jun = document.getElementById("");
var total_elemento_receita_fazenda_jul = document.getElementById("");
var total_elemento_receita_fazenda_ago = document.getElementById("");
var total_elemento_receita_fazenda_set = document.getElementById("");
var total_elemento_receita_fazenda_out = document.getElementById("");
var total_elemento_receita_fazenda_nov = document.getElementById("");
var total_elemento_receita_fazenda_dez = document.getElementById("");

function total_Receita_fazenda(){
    total_elemento_receita_fazenda.innerHTML =
        (parseInt(total_elemento_receita_fazenda_jan.value)+
        parseInt(total_elemento_receita_fazenda_fev.value)+
        parseInt(total_elemento_receita_fazenda_mar.value)+
        parseInt(total_elemento_receita_fazenda_abr.value)+
        parseInt(total_elemento_receita_fazenda_mai.value)+
        parseInt(total_elemento_receita_fazenda_jun.value)+
        parseInt(total_elemento_receita_fazenda_jul.value)+
        parseInt(total_elemento_receita_fazenda_ago.value)+
        parseInt(total_elemento_receita_fazenda_set.value)+
        parseInt(total_elemento_receita_fazenda_out.value)+
        parseInt(total_elemento_receita_fazenda_nov.value)+
        parseInt(total_elemento_receita_fazenda_dez.value)).tofixed(2);
}

total_elemento_receita_fazenda_jan.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_fev.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_mar.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_abr.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_mai.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_jun.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_jul.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_ago.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_set.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_out.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_nov.addEventListener("keyup",total_Receita_fazenda);
total_elemento_receita_fazenda_dez.addEventListener("keyup",total_Receita_fazenda);










