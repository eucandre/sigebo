var tot_cap_medio     = document.getElementById("id_total_capital_medio");
var tot_cap_medioMaq  = document.getElementById("id_maquina_implemento_capital_medio");
var tot_cap_medioTrt  =document.getElementById("id_tratores_capital_medio");
var tot_cap_medioVei  = document.getElementById("id_veiculos_capital_medio");
var tot_cap_medioEqM  = document.getElementById("id_equipamentos_manuais_capital_medio");
var tot_cap_medioRepM = document.getElementById("id_reprodutores_machos_capital_medio");
var tot_cap_medioRepF = document.getElementById("id_reprodutores_femeas_capital_medio");
var tot_cap_medioAeng = document.getElementById("id_animais_trabalho_capital_medio");
var tot_cap_medioAtr  = document.getElementById("id_animais_gordo_capital_medio");
var tot_cap_medioCaVo = document.getElementById("id_canavial_ou_volumoso_capital_medio");
var tot_cap_medioBef  = document.getElementById("id_benfeitorias_capital_medio");
var tot_cap_medioCer  = document.getElementById("id_cercas_capital_medio");
var tot_cap_medioEdi  = document.getElementById("id_edificacoes_capital_medio");
var tot_cap_medioPAS  = document.getElementById("id_pastagem_capital_medio");
function TOTAL_cap_me(){
            tot_cap_medio.innerHTML =
            parseInt(tot_cap_medioMaq.value)+
            parseInt(tot_cap_medioTrt.value)+
            parseInt(tot_cap_medioVei.value)+
            parseInt(tot_cap_medioEqM.value)+
            parseInt(tot_cap_medioRepM.value)+
            parseInt(tot_cap_medioRepF.value)+
            parseInt(tot_cap_medioAeng.value)+
            parseInt(tot_cap_medioAtr.value)+
            parseInt(tot_cap_medioCaVo.value)+
            parseInt(tot_cap_medioBef.value)+
            parseInt(tot_cap_medioCer.value)+
            parseInt(tot_cap_medioEdi.value)+
            parseInt(tot_cap_medioPAS.value);
}
TOTAL_cap_me()
tot_cap_medioMaq.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioTrt.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioVei.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioEqM.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioRepM.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioRepF.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioAeng.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioAtr.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioCaVo.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioBef.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioCer.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioEdi.addEventListener("keyup",TOTAL_cap_me);
tot_cap_medioPAS.addEventListener("keyup",TOTAL_cap_me);

