var total_custoFIXOmai = document.getElementById("id_calculo_custo_fixo_maio");
var custo_mac_mai           =document.getElementById("id_itens_custo_maquina_implementos_maio");
var custo_trat_mai              =document.getElementById("id_itens_custo_tratores_maio");
var custo_veiculo_mai           =document.getElementById("id_itens_custo_veiculos_maio");
var custo_equ_mai               =document.getElementById("id_itens_custo_equipamentos_manuais_maio");
var custo_repMacho_mai           =document.getElementById("id_itens_reprodutores_machos_maio");
var custo_repFem_mai           =document.getElementById("id_itens_reprodutores_femeas_maio");
var custo_anoTra_mai           =document.getElementById("id_itens_animais_trabalho_maio");
var custo_CANAVOL_mai           =document.getElementById("id_itens_canavial_ou_volumoso_maio");
var custo_benf_mai           =document.getElementById("id_itens_benfeitorias_maio");
var custo_past_mai           =document.getElementById("id_itens_pastagem_maio");
var custo_edifi_mai           =document.getElementById("id_itens_edificacoes_maio");
var custo_mao_mai           =document.getElementById("id_itens_mao_obra_fixa_fazenda_maio");
var custo_encar_mai           =document.getElementById("id_itens_encargos_sociais_maio");
var custo_assis_mai           =document.getElementById("id_itens_assistencia_tecnica_maio");
var custo_despes_mai           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_maio");


function  totalFIXO_mai(){
    total_custoFIXOmai.innerHTML =

        parseInt(custo_mac_mai.value)+
        parseInt(custo_trat_mai.value)+
        parseInt(custo_veiculo_mai.value)+
        parseInt(custo_equ_mai.value)+
        parseInt(custo_repMacho_mai.value)+
        parseInt(custo_repFem_mai.value)+
        parseInt(custo_anoTra_mai.value)+
        parseInt(custo_CANAVOL_mai.value)+
        parseInt(custo_benf_mai.value)+
        parseInt(custo_past_mai.value)+
        parseInt(custo_edifi_mai.value)+
        parseInt(custo_mao_mai.value)+
        parseInt(custo_encar_mai.value)+
        parseInt(custo_assis_mai.value)+
        parseInt(custo_despes_mai.value);


}
custo_mac_mai.addEventListener("keyup",totalFIXO_mai);
custo_trat_mai.addEventListener("keyup",totalFIXO_mai);
custo_veiculo_mai.addEventListener("keyup",totalFIXO_mai);
custo_equ_mai.addEventListener("keyup",totalFIXO_mai);
custo_repMacho_mai.addEventListener("keyup",totalFIXO_mai);
custo_repFem_mai.addEventListener("keyup",totalFIXO_mai);
custo_anoTra_mai.addEventListener("keyup",totalFIXO_mai);
custo_CANAVOL_mai.addEventListener("keyup",totalFIXO_mai);
custo_benf_mai.addEventListener("keyup",totalFIXO_mai);
custo_past_mai.addEventListener("keyup",totalFIXO_mai);
custo_edifi_mai.addEventListener("keyup",totalFIXO_mai);
custo_mao_mai.addEventListener("keyup",totalFIXO_mai);
custo_encar_mai.addEventListener("keyup",totalFIXO_mai);
custo_assis_mai.addEventListener("keyup",totalFIXO_mai);
custo_despes_mai.addEventListener("keyup",totalFIXO_mai);


