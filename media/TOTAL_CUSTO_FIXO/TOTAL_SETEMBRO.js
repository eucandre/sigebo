var total_custoFIXOset = document.getElementById("id_calculo_custo_fixo_setembro");
var custo_mac_set           =document.getElementById("id_itens_custo_maquina_implementos_setembro");
var custo_trat_set              =document.getElementById("id_itens_custo_tratores_setembro");
var custo_veiculo_set           =document.getElementById("id_itens_custo_veiculos_setembro");
var custo_equ_set               =document.getElementById("id_itens_custo_equipamentos_manuais_setembro");
var custo_repMacho_set           =document.getElementById("id_itens_reprodutores_machos_setembro");
var custo_repFem_set           =document.getElementById("id_itens_reprodutores_femeas_setembro");
var custo_anoTra_set           =document.getElementById("id_itens_animais_trabalho_setembro");
var custo_CANAVOL_set           =document.getElementById("id_itens_canavial_ou_volumoso_setembro");
var custo_benf_set           =document.getElementById("id_itens_benfeitorias_setembro");
var custo_past_set           =document.getElementById("id_itens_pastagem_setembro");
var custo_edifi_set           =document.getElementById("id_itens_edificacoes_setembro");
var custo_mao_set           =document.getElementById("id_itens_mao_obra_fixa_fazenda_setembro");
var custo_encar_set           =document.getElementById("id_itens_encargos_sociais_setembro");
var custo_assis_set           =document.getElementById("id_itens_assistencia_tecnica_setembro");
var custo_despes_set           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_setembro");


function  totalFIXO_set(){
    total_custoFIXOset.innerHTML =

        parseInt(custo_mac_set.value)+
        parseInt(custo_trat_set.value)+
        parseInt(custo_veiculo_set.value)+
        parseInt(custo_equ_set.value)+
        parseInt(custo_repMacho_set.value)+
        parseInt(custo_repFem_set.value)+
        parseInt(custo_anoTra_set.value)+
        parseInt(custo_CANAVOL_set.value)+
        parseInt(custo_benf_set.value)+
        parseInt(custo_past_set.value)+
        parseInt(custo_edifi_set.value)+
        parseInt(custo_mao_set.value)+
        parseInt(custo_encar_set.value)+
        parseInt(custo_assis_set.value)+
        parseInt(custo_despes_set.value);


}
totalFIXO_set();
custo_mac_set.addEventListener("keyup",totalFIXO_set);
custo_trat_set.addEventListener("keyup",totalFIXO_set);
custo_veiculo_set.addEventListener("keyup",totalFIXO_set);
custo_equ_set.addEventListener("keyup",totalFIXO_set);
custo_repMacho_set.addEventListener("keyup",totalFIXO_set);
custo_repFem_set.addEventListener("keyup",totalFIXO_set);
custo_anoTra_set.addEventListener("keyup",totalFIXO_set);
custo_CANAVOL_set.addEventListener("keyup",totalFIXO_set);
custo_benf_set.addEventListener("keyup",totalFIXO_set);
custo_past_set.addEventListener("keyup",totalFIXO_set);
custo_edifi_set.addEventListener("keyup",totalFIXO_set);
custo_mao_set.addEventListener("keyup",totalFIXO_set);
custo_encar_set.addEventListener("keyup",totalFIXO_set);
custo_assis_set.addEventListener("keyup",totalFIXO_set);
custo_despes_set.addEventListener("keyup",totalFIXO_set);



