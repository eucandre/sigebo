var total_receitas_venda_boi = document.getElementById("");
var total_receitas_jan = document.getElementById("");
var total_receitas_fev = document.getElementById("");
var total_receitas_mar = document.getElementById("");
var total_receitas_abr = document.getElementById("");
var total_receitas_mai = document.getElementById("");
var total_receitas_jun = document.getElementById("");
var total_receitas_jul = document.getElementById("");
var total_receitas_ago = document.getElementById("");
var total_receitas_set = document.getElementById("");
var total_receitas_out = document.getElementById("");
var total_receitas_nov = document.getElementById("");
var total_receitas_dez = document.getElementById("");
function TOTAL_receita_FUN(){
    total_receitas_venda_boi.innerHTML =
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
TOTAL_receita_FUN();
total_despesas_jan.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_fev.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_mar.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_abr.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_mai.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_jun.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_jul.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_ago.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_set.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_out.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_nov.addEventListener("keyup",TOTAL_receita_FUN);
total_despesas_dez.addEventListener("keyup",TOTAL_receita_FUN);
