var total_custoFIXOmar = document.getElementById("id_calculo_custo_fixo_marco");
var custo_mac_mar           =document.getElementById("id_itens_custo_maquina_implementos_marco");
var custo_trat_mar              =document.getElementById("id_itens_custo_tratores_marco");
var custo_veiculo_mar           =document.getElementById("id_itens_custo_veiculos_marco");
var custo_equ_mar               =document.getElementById("id_itens_custo_equipamentos_manuais_marco");
var custo_repMacho_mar           =document.getElementById("id_itens_reprodutores_machos_marco");
var custo_repFem_mar           =document.getElementById("id_itens_reprodutores_femeas_marco");
var custo_anoTra_mar           =document.getElementById("id_itens_animais_trabalho_marco");
var custo_CANAVOL_mar           =document.getElementById("id_itens_canavial_ou_volumoso_marco");
var custo_benf_mar           =document.getElementById("id_itens_benfeitorias_marco");
var custo_past_mar           =document.getElementById("id_itens_pastagem_marco");
var custo_edifi_mar           =document.getElementById("id_itens_edificacoes_marco");
var custo_mao_mar           =document.getElementById("id_itens_mao_obra_fixa_fazenda_marco");
var custo_encar_mar           =document.getElementById("id_itens_encargos_sociais_marco");
var custo_assis_mar           =document.getElementById("id_itens_assistencia_tecnica_marco");
var custo_despes_mar           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_marco");


function  totalFIXO_mar(){
    total_custoFIXOmar.innerHTML =

        parseInt(custo_mac_mar.value)+
        parseInt(custo_trat_mar.value)+
        parseInt(custo_veiculo_mar.value)+
        parseInt(custo_equ_mar.value)+
        parseInt(custo_repMacho_mar.value)+
        parseInt(custo_repFem_mar.value)+
        parseInt(custo_anoTra_mar.value)+
        parseInt(custo_CANAVOL_mar .value)+
        parseInt(custo_benf_mar.value)+
        parseInt(custo_past_mar.value)+
        parseInt(custo_edifi_mar.value)+
        parseInt(custo_mao_mar.value)+
        parseInt(custo_encar_mar.value)+
        parseInt(custo_assis_mar.value)+
        parseInt(custo_despes_mar.value);


}
totalFIXO_mar();

custo_mac_mar.addEventListener("keyup",totalFIXO_mar);
custo_trat_mar.addEventListener("keyup",totalFIXO_mar);
custo_veiculo_mar.addEventListener("keyup",totalFIXO_mar);
custo_equ_mar.addEventListener("keyup",totalFIXO_mar);
custo_repMacho_mar.addEventListener("keyup",totalFIXO_mar);
custo_repFem_mar.addEventListener("keyup",totalFIXO_mar);
custo_anoTra_mar.addEventListener("keyup",totalFIXO_mar);
custo_CANAVOL_mar.addEventListener("keyup",totalFIXO_mar);
custo_benf_mar.addEventListener("keyup",totalFIXO_mar);
custo_past_mar.addEventListener("keyup",totalFIXO_mar);
custo_edifi_mar.addEventListener("keyup",totalFIXO_mar);
custo_mao_mar.addEventListener("keyup",totalFIXO_mar);
custo_encar_mar.addEventListener("keyup",totalFIXO_mar);
custo_assis_mar.addEventListener("keyup",totalFIXO_mar);
custo_despes_mar.addEventListener("keyup",totalFIXO_mar);