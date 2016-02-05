var tot_val_ini     = document.getElementById("id_total_valor_inicial");
var tot_val_iniMaq  = document.getElementById("id_maquina_implemento_valor_inicial");
var tot_val_iniTrt  =document.getElementById("id_tratores_valor_inicial");
var tot_val_iniVei  = document.getElementById("id_veiculos_valor_inicial");
var tot_val_iniEqM  = document.getElementById("id_equipamentos_manuais_valor_inicial");
var tot_val_iniRepM = document.getElementById("id_reprodutores_machos_valor_inicial");
var tot_val_iniRepF = document.getElementById("id_reprodutores_femeas_valor_inicial");
var tot_val_iniAeng = document.getElementById("id_animais_gordo_valor_inicial");
var tot_val_iniAtr  = document.getElementById("id_animais_trabalho_valor_inicial");
var tot_val_iniCaVo = document.getElementById("id_canavial_ou_volumoso_valor_inicial");
var tot_val_iniBef  = document.getElementById("id_benfeitorias_valor_inicial");
var tot_val_iniCer  = document.getElementById("id_cercas_valor_inicial");
var tot_val_iniEdi  = document.getElementById("id_edificacoes_valor_inicial");
var tot_val_iniPAS  = document.getElementById("id_pastagem_valor_inicial");
function TOTAL_valor_Ini(){
        tot_val_ini.innerHTML =
            (parseInt(tot_val_iniMaq.value)+
            parseInt(tot_val_iniTrt.value)+
            parseInt(tot_val_iniVei.value)+
            parseInt(tot_val_iniEqM.value)+
            parseInt(tot_val_iniRepM.value)+
            parseInt(tot_val_iniRepF.value)+
            parseInt(tot_val_iniAeng.value)+
            parseInt(tot_val_iniAtr.value)+
            parseInt(tot_val_iniCaVo.value)+
            parseInt(tot_val_iniBef.value)+
            parseInt(tot_val_iniCer.value)+
            parseInt(tot_val_iniEdi.value)+
            parseInt(tot_val_iniPAS.value)).tofixed(2);
}
TOTAL_valor_Ini()
tot_val_iniMaq.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniTrt.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniVei.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniEqM.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniRepM.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniRepF.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniAeng.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniAtr.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniCaVo.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniBef.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniCer.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniEdi.addEventListener("keyup",TOTAL_valor_Ini);
tot_val_iniPAS.addEventListener("keyup",TOTAL_valor_Ini);
