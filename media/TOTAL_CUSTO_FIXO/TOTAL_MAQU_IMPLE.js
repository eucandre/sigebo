var total_custoFIXOJAN = document.getElementById("id_calculo_custo_fixo_janeiro");

var custo_mac_jan      = document.getElementById("id_itens_custo_maquina_implementos_janeiro");
var custo_trat_jan     = document.getElementById("id_itens_custo_tratores_janeiro");
var custo_veiculo_jan  = document.getElementById("id_itens_custo_veiculos_janeiro");
var custo_equ_jan      = document.getElementById("id_itens_custo_equipamentos_manuais_janeiro");
var custo_repMacho_jan = document.getElementById("id_itens_reprodutores_machos_janeiro");
var custo_repFem_jan   = document.getElementById("id_itens_reprodutores_femeas_janeiro");
var custo_anoTra_jan   = document.getElementById("id_itens_animais_trabalho_janeiro");
var custo_CANAVOL_jan  = document.getElementById("id_itens_canavial_ou_volumoso_janeiro");
var custo_benf_jan     = document.getElementById("id_itens_benfeitorias_janeiro");
var custo_past_jan     = document.getElementById("id_itens_pastagem_janeiro");
var custo_edifi_jan    = document.getElementById("id_itens_edificacoes_janeiro");
var custo_mao_jan      = document.getElementById("id_itens_mao_obra_fixa_fazenda_janeiro");
var custo_encar_jan    = document.getElementById("id_itens_encargos_sociais_janeiro");
var custo_assis_jan    = document.getElementById("id_itens_assistencia_tecnica_janeiro");
var custo_despes_jan   = document.getElementById("id_itens_despesas_tributarias_IR_ITR_janeiro");

function  totalFIXO_JAN(){
    total_custoFIXOJAN.innerHTML =
        parseInt(custo_mac_jan.value)+
        parseInt(custo_trat_jan.value)+
        parseInt(custo_veiculo_jan.value)+
        parseInt(custo_equ_jan.value)+
        parseInt(custo_repMacho_jan.value)+
        parseInt(custo_repFem_jan.value)+
        parseInt(custo_anoTra_jan.value)+
        parseInt(custo_CANAVOL_jan.value)+
        parseInt(custo_benf_jan.value)+
        parseInt(custo_past_jan.value)+
        parseInt(custo_edifi_jan.value)+
        parseInt(custo_mao_jan.value)+
        parseInt(custo_encar_jan.value)+
        parseInt(custo_assis_jan.value)+
        parseInt(custo_despes_jan.value);


}
totalFIXO_JAN();
custo_mac_jan.addEventListener("keyup",totalFIXO_JAN);
custo_trat_jan.addEventListener("keyup",totalFIXO_JAN);
custo_veiculo_jan.addEventListener("keyup",totalFIXO_JAN);
custo_equ_jan.addEventListener("keyup",totalFIXO_JAN);
custo_repMacho_jan.addEventListener("keyup",totalFIXO_JAN);
custo_repFem_jan.addEventListener("keyup",totalFIXO_JAN);
custo_anoTra_jan.addEventListener("keyup",totalFIXO_JAN);
custo_CANAVOL_jan.addEventListener("keyup",totalFIXO_JAN);
custo_benf_jan.addEventListener("keyup",totalFIXO_JAN);
custo_past_jan.addEventListener("keyup",totalFIXO_JAN);
custo_edifi_jan.addEventListener("keyup",totalFIXO_JAN);
custo_mao_jan.addEventListener("keyup",totalFIXO_JAN);
custo_encar_jan.addEventListener("keyup",totalFIXO_JAN);
custo_assis_jan.addEventListener("keyup",totalFIXO_JAN);
custo_despes_jan.addEventListener("keyup",totalFIXO_JAN);























































































