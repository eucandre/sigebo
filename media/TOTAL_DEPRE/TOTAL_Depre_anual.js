var tot_depreAno     = document.getElementById("id_total_depreciacao_anual");
var tot_depreAnoMaq  = document.getElementById("id_maquina_implemento_depreciacao_anual");
var tot_depreAnoTrt  = document.getElementById("id_tratores_depreciacao_anual");
var tot_depreAnoVei  = document.getElementById("id_veiculos_depreciacao_anual");
var tot_depreAnoEqM  = document.getElementById("id_equipamentos_manuais_depreciacao_anual");
var tot_depreAnoRepM = document.getElementById("id_reprodutores_machos_depreciacao_anual");
var tot_depreAnoRepF = document.getElementById("id_reprodutores_femeas_depreciacao_anual");
var tot_depreAnoAeng = document.getElementById("id_animais_trabalho_depreciacao_anual");
var tot_depreAnoAtr  = document.getElementById("id_animais_gordo_depreciacao_anual");
var tot_depreAnoCaVo = document.getElementById("id_canavial_ou_volumoso_depreciacao_anual");
var tot_depreAnoBef  = document.getElementById("id_benfeitorias_depreciacao_anual");
var tot_depreAnoCer  = document.getElementById("id_cercas_depreciacao_anual");
var tot_depreAnoEdi  = document.getElementById("id_edificacoes_depreciacao_anual");
var tot_depreAnoPAS  = document.getElementById("id_pastagem_depreciacao_anual");
function TOTAL_DEPRE(){
            tot_depreAno.innerHTML =
            (parseInt(tot_depreAnoMaq.value)+
            parseInt(tot_depreAnoTrt.value)+
            parseInt(tot_depreAnoVei.value)+
            parseInt(tot_depreAnoEqM.value)+
            parseInt(tot_depreAnoRepM.value)+
            parseInt(tot_depreAnoRepF.value)+
            parseInt(tot_depreAnoAeng.value)+
            parseInt(tot_depreAnoAtr.value)+
            parseInt(tot_depreAnoCaVo.value)+
            parseInt(tot_depreAnoBef.value)+
            parseInt(tot_depreAnoCer.value)+
            parseInt(tot_depreAnoEdi.value)+
            parseInt(tot_depreAnoPAS.value)).tofixed(2);
}
TOTAL_DEPRE()
tot_depreAnoMaq.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoTrt.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoVei.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoEqM.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoRepM.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoRepF.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoAeng.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoAtr.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoCaVo.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoBef.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoCer.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoEdi.addEventListener("keyup",TOTAL_DEPRE);
tot_depreAnoPAS.addEventListener("keyup",TOTAL_DEPRE);


                maquina_implemento_depreciacao_anual
                tratores_depreciacao_anual
                veiculos_depreciacao_anual
                equipamentos_manuais_depreciacao_anual
                reprodutores_machos_depreciacao_anual
                reprodutores_femeas_depreciacao_anual
                animais_trabalho_depreciacao_anual
                animais_gordo_depreciacao_anual
                canavial_ou_volumoso_depreciacao_anual
                benfeitorias_depreciacao_anual
                cercas_depreciacao_anual
                edificacoes_depreciacao_anual
                pastagem_depreciacao_anual