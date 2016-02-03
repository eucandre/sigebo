var tot_valor_final     = document.getElementById("id_total_valor_final_ou_sucata");
var tot_valorFInalMaq  = document.getElementById("id_maquina_implemento_valor_final_ou_sucata");
var tot_valorFInalTrt  =document.getElementById("id_tratores_valor_final_ou_sucata");
var tot_valorFInalVei  = document.getElementById("id_veiculos_valor_final_ou_sucata");
var tot_valorFInalEqM  = document.getElementById("id_equipamentos_manuais_valor_final_ou_sucata");
var tot_valorFInalRepM = document.getElementById("id_reprodutores_machos_valor_final_ou_sucata");
var tot_valorFInalRepF = document.getElementById("id_reprodutores_femeas_valor_final_ou_sucata");
var tot_valorFInalAeng = document.getElementById("id_animais_trabalho_valor_final_ou_sucata");
var tot_valorFInalAtr  = document.getElementById("id_animais_gordo_valor_final_ou_sucata");
var tot_valorFInalCaVo = document.getElementById("id_canavial_ou_volumoso_valor_final_ou_sucata");
var tot_valorFInalBef  = document.getElementById("id_benfeitorias_valor_final_ou_sucata");
var tot_valorFInalCer  = document.getElementById("id_cercas_valor_final_ou_sucata");
var tot_valorFInalEdi  = document.getElementById("id_edificacoes_valor_final_ou_sucata");
var tot_valorFInalPAS  = document.getElementById("id_pastagem_valor_final_ou_sucata");
function TOTAL_valor_FINAL(){
            tot_valor_final.innerHTML =
            parseInt(tot_valorFInalMaq.value)+
            parseInt(tot_valorFInalTrt.value)+
            parseInt(tot_valorFInalVei.value)+
            parseInt(tot_valorFInalEqM.value)+
            parseInt(tot_valorFInalRepM.value)+
            parseInt(tot_valorFInalRepF.value)+
            parseInt(tot_valorFInalAeng.value)+
            parseInt(tot_valorFInalAtr.value)+
            parseInt(tot_valorFInalCaVo.value)+
            parseInt(tot_valorFInalBef.value)+
            parseInt(tot_valorFInalCer.value)+
            parseInt(tot_valorFInalEdi.value)+
            parseInt(tot_valorFInalPAS.value);
}
TOTAL_valor_FINAL()
tot_valorFInalMaq.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalTrt.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalVei.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalEqM.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalRepM.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalRepF.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalAeng.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalAtr.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalCaVo.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalBef.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalCer.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalEdi.addEventListener("keyup",TOTAL_valor_FINAL);
tot_valorFInalPAS.addEventListener("keyup",TOTAL_valor_FINAL);


