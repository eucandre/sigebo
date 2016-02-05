var total_custoFIXOjun = document.getElementById("id_calculo_custo_fixo_junho");
var custo_mac_jun           =document.getElementById("id_itens_custo_maquina_implementos_junho");
var custo_trat_jun              =document.getElementById("id_itens_custo_tratores_junho");
var custo_veiculo_jun           =document.getElementById("id_itens_custo_veiculos_junho");
var custo_equ_jun               =document.getElementById("id_itens_custo_equipamentos_manuais_junho");
var custo_repMacho_jun           =document.getElementById("id_itens_reprodutores_machos_junho");
var custo_repFem_jun           =document.getElementById("id_itens_reprodutores_femeas_junho");
var custo_anoTra_jun           =document.getElementById("id_itens_animais_trabalho_junho");
var custo_CANAVOL_jun           =document.getElementById("id_itens_canavial_ou_volumoso_junho");
var custo_benf_jun           =document.getElementById("id_itens_benfeitorias_junho");
var custo_past_jun           =document.getElementById("id_itens_pastagem_junho");
var custo_edifi_jun           =document.getElementById("id_itens_edificacoes_junho");
var custo_mao_jun           =document.getElementById("id_itens_mao_obra_fixa_fazenda_junho");
var custo_encar_jun           =document.getElementById("id_itens_encargos_sociais_junho");
var custo_assis_jun           =document.getElementById("id_itens_assistencia_tecnica_junho");
var custo_despes_jun           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_junho");

function  totalFIXO_jun(){
    total_custoFIXOjun.innerHTML =

        parseInt(custo_mac_jun.value)+
        parseInt(custo_trat_jun.value)+
        parseInt(custo_veiculo_jun.value)+
        parseInt(custo_equ_jun.value)+
        parseInt(custo_repMacho_jun.value)+
        parseInt(custo_repFem_jun.value)+
        parseInt(custo_anoTra_jun.value)+
        parseInt(custo_CANAVOL_jun.value)+
        parseInt(custo_benf_jun.value)+
        parseInt(custo_past_jun.value)+
        parseInt(custo_edifi_jun.value)+
        parseInt(custo_mao_jun.value)+
        parseInt(custo_encar_jun.value)+
        parseInt(custo_assis_jun.value)+
        parseInt(custo_despes_jun.value);

}
totalFIXO_jun();

custo_mac_jun.addEventListener("keyup",totalFIXO_jun);
custo_trat_jun.addEventListener("keyup",totalFIXO_jun);
custo_veiculo_jun.addEventListener("keyup",totalFIXO_jun);
custo_equ_jun.addEventListener("keyup",totalFIXO_jun);
custo_repMacho_jun.addEventListener("keyup",totalFIXO_jun);
custo_repFem_jun.addEventListener("keyup",totalFIXO_jun);
custo_anoTra_jun.addEventListener("keyup",totalFIXO_jun);
custo_CANAVOL_jun.addEventListener("keyup",totalFIXO_jun);
custo_benf_jun.addEventListener("keyup",totalFIXO_jun);
custo_past_jun.addEventListener("keyup",totalFIXO_jun);
custo_edifi_jun.addEventListener("keyup",totalFIXO_jun);
custo_mao_jun.addEventListener("keyup",totalFIXO_jun);
custo_encar_jun.addEventListener("keyup",totalFIXO_jun);
custo_assis_jun.addEventListener("keyup",totalFIXO_jun);
custo_despes_jun.addEventListener("keyup",totalFIXO_jun);
