var maq_total = document.getElementById("id_total_MAQUINAS_IMPLEMENTOS");
var maq_jan = document.getElementById("itens_custo_maquina_implementos_janeiro  ");
var maq_fev = document.getElementById("itens_custo_maquina_implementos_fevereiro");
var maq_mar = document.getElementById("itens_custo_maquina_implementos_marco    ");
var maq_abr = document.getElementById("itens_custo_maquina_implementos_abril    ");
var maq_mai = document.getElementById("itens_custo_maquina_implementos_maio     ");
var maq_jun = document.getElementById("itens_custo_maquina_implementos_junho    ");
var maq_jul = document.getElementById("itens_custo_maquina_implementos_julho    ");
var maq_ago = document.getElementById("itens_custo_maquina_implementos_agosto   ");
var maq_set = document.getElementById("itens_custo_maquina_implementos_setembro ");
var maq_out = document.getElementById("itens_custo_maquina_implementos_outubro  ");
var maq_nov = document.getElementById("itens_custo_maquina_implementos_novembro ");
var maq_dez = document.getElementById("itens_custo_maquina_implementos_dezembro ");

function calc_maq(){
    maq_total.innerHTML = 10;//parseInt(maq_jan.value)+parseInt(maq_fev.value)+parseInt(maq_mar.value)+parseInt(maq_abr.value)+parseInt(maq_mai.value)+parseInt(maq_jun.value)+
    //parseInt(maq_jul.value)+parseInt(maq_ago.value)+parseInt(maq_set.value)+parseInt(maq_out.value)+parseInt(maq_nov.value)+parseInt(maq_dez.value);
}
calc_maq();
maq_jan.addEventListener("keyup",calc_maq);
maq_fev.addEventListener("keyup",calc_maq);
maq_mar.addEventListener("keyup",calc_maq);
maq_abr.addEventListener("keyup",calc_maq);
maq_mai.addEventListener("keyup",calc_maq);
maq_jun.addEventListener("keyup",calc_maq);
maq_jul.addEventListener("keyup",calc_maq);
maq_ago.addEventListener("keyup",calc_maq);
maq_set.addEventListener("keyup",calc_maq);
maq_out.addEventListener("keyup",calc_maq);
maq_nov.addEventListener("keyup",calc_maq);