var total_custoFIXOjul = document.getElementById("id_calculo_custo_fixo_julho");
var custo_mac_jul           =document.getElementById("id_itens_custo_maquina_implementos_julho");
var custo_trat_jul              =document.getElementById("id_itens_custo_tratores_julho");
var custo_veiculo_jul           =document.getElementById("id_itens_custo_veiculos_julho");
var custo_equ_jul               =document.getElementById("id_itens_custo_equipamentos_manuais_julho");
var custo_repMacho_jul           =document.getElementById("id_itens_reprodutores_machos_julho");
var custo_repFem_jul           =document.getElementById("id_itens_reprodutores_femeas_julho");
var custo_anoTra_jul           =document.getElementById("id_itens_animais_trabalho_julho");
var custo_CANAVOL_jul           =document.getElementById("id_itens_canavial_ou_volumoso_julho");
var custo_benf_jul           =document.getElementById("id_itens_benfeitorias_julho");
var custo_past_jul           =document.getElementById("id_itens_pastagem_julho");
var custo_edifi_jul           =document.getElementById("id_itens_edificacoes_julho");
var custo_mao_jul           =document.getElementById("id_itens_mao_obra_fixa_fazenda_julho");
var custo_encar_jul           =document.getElementById("id_itens_encargos_sociais_julho");
var custo_assis_jul           =document.getElementById("id_itens_assistencia_tecnica_julho");
var custo_despes_jul           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_julho");


function  totalFIXO_jul(){
    total_custoFIXOjul.innerHTML =

        parseInt(custo_mac_jul.value)+
        parseInt(custo_trat_jul.value)+
        parseInt(custo_veiculo_jul.value)+
        parseInt(custo_equ_jul.value)+
        parseInt(custo_repMacho_jul.value)+
        parseInt(custo_repFem_jul.value)+
        parseInt(custo_anoTra_jul.value)+
        parseInt(custo_CANAVOL_jul.value)+
        parseInt(custo_benf_jul.value)+
        parseInt(custo_past_jul.value)+
        parseInt(custo_edifi_jul.value)+
        parseInt(custo_mao_jul.value)+
        parseInt(custo_encar_jul.value)+
        parseInt(custo_assis_jul.value)+
        parseInt(custo_despes_jul.value);


}
totalFIXO_jul();
custo_mac_jul.addEventListener("keyup",totalFIXO_jul);
custo_trat_jul.addEventListener("keyup",totalFIXO_jul);
custo_veiculo_jul.addEventListener("keyup",totalFIXO_jul);
custo_equ_jul.addEventListener("keyup",totalFIXO_jul);
custo_repMacho_jul.addEventListener("keyup",totalFIXO_jul);
custo_repFem_jul.addEventListener("keyup",totalFIXO_jul);
custo_anoTra_jul.addEventListener("keyup",totalFIXO_jul);
custo_CANAVOL_jul.addEventListener("keyup",totalFIXO_jul);
custo_benf_jul.addEventListener("keyup",totalFIXO_jul);
custo_past_jul.addEventListener("keyup",totalFIXO_jul);
custo_edifi_jul.addEventListener("keyup",totalFIXO_jul);
custo_mao_jul.addEventListener("keyup",totalFIXO_jul);
custo_encar_jul.addEventListener("keyup",totalFIXO_jul);
custo_assis_jul.addEventListener("keyup",totalFIXO_jul);
custo_despes_jul.addEventListener("keyup",totalFIXO_jul);


