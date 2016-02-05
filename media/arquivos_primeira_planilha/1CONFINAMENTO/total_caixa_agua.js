var caixa = document.getElementById("id_caixa_dagua_total");
var ca_ani    = document.getElementById("id_caixa_dagua_por_animais");
var ca_animls = document.getElementById("id_N_animais_confinados");
var con_aga = document.getElementById("id_Consumo_agua");
function cxa_agua(){
    caixa.innerHTML = (parseInt(ca_ani.value)*parseInt(con_aga.value)*parseInt(ca_animls.value)).tofixed(2);
}

cxa_agua();
ca_ani.addEventListener("keyup",cxa_agua);
ca_animls.addEventListener("keyup",cxa_agua);
con_aga.addEventListener("keyup",cxa_agua);