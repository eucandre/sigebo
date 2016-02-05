var total_custoFIXOabr = document.getElementById("id_calculo_custo_fixo_abril");
var custo_mac_abr           =document.getElementById("id_itens_custo_maquina_implementos_abril");
var custo_trat_abr              =document.getElementById("id_itens_custo_tratores_abril");
var custo_veiculo_abr           =document.getElementById("id_itens_custo_veiculos_abril");
var custo_equ_abr               =document.getElementById("id_itens_custo_equipamentos_manuais_abril");
var custo_repMacho_abr           =document.getElementById("id_itens_reprodutores_machos_abril");
var custo_repFem_abr           =document.getElementById("id_itens_reprodutores_femeas_abril");
var custo_anoTra_abr           =document.getElementById("id_itens_animais_trabalho_abril");
var custo_CANAVOL_abr           =document.getElementById("id_itens_canavial_ou_volumoso_abril");
var custo_benf_abr           =document.getElementById("id_itens_benfeitorias_abril");
var custo_past_abr           =document.getElementById("id_itens_pastagem_abril");
var custo_edifi_abr           =document.getElementById("id_itens_edificacoes_abril");
var custo_mao_abr           =document.getElementById("id_itens_mao_obra_fixa_fazenda_abril");
var custo_encar_abr           =document.getElementById("id_itens_encargos_sociais_abril");
var custo_assis_abr           =document.getElementById("id_itens_assistencia_tecnica_abril");
var custo_despes_abr           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_abril");


function  totalFIXO_abr(){
    total_custoFIXOabr.innerHTML =

        parseInt(custo_mac_abr.value)+
        parseInt(custo_trat_abr.value)+
        parseInt(custo_veiculo_abr.value)+
        parseInt(custo_equ_abr.value)+
        parseInt(custo_repMacho_abr.value)+
        parseInt(custo_repFem_abr.value)+
        parseInt(custo_anoTra_abr.value)+
        parseInt(custo_CANAVOL_abr.value)+
        parseInt(custo_benf_abr.value)+
        parseInt(custo_past_abr.value)+
        parseInt(custo_edifi_abr.value)+
        parseInt(custo_mao_abr.value)+
        parseInt(custo_encar_abr.value)+
        parseInt(custo_assis_abr.value)+
        parseInt(custo_despes_abr.value);


}
custo_mac_abr.addEventListener("keyup",totalFIXO_abr);
custo_trat_abr.addEventListener("keyup",totalFIXO_abr);
custo_veiculo_abr.addEventListener("keyup",totalFIXO_abr);
custo_equ_abr.addEventListener("keyup",totalFIXO_abr);
custo_repMacho_abr.addEventListener("keyup",totalFIXO_abr);
custo_repFem_abr.addEventListener("keyup",totalFIXO_abr);
custo_anoTra_abr.addEventListener("keyup",totalFIXO_abr);
custo_CANAVOL_abr.addEventListener("keyup",totalFIXO_abr);
custo_benf_abr.addEventListener("keyup",totalFIXO_abr);
custo_past_abr.addEventListener("keyup",totalFIXO_abr);
custo_edifi_abr.addEventListener("keyup",totalFIXO_abr);
custo_mao_abr.addEventListener("keyup",totalFIXO_abr);
custo_encar_abr.addEventListener("keyup",totalFIXO_abr);
custo_assis_abr.addEventListener("keyup",totalFIXO_abr);
custo_despes_abr.addEventListener("keyup",totalFIXO_abr);


