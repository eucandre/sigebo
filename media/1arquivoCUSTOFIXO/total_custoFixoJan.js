var total_custoFIXOJAN = document.getElementById("id_calculo_custo_fixo_janeiro");
var custo_mac_jan           =document.getElementById("id_itens_custo_maquina_implementos_janeiro");
var custo_trat              =document.getElementById("id_itens_custo_tratores_janeiro");
var custo_veiculo           =document.getElementById("id_itens_custo_veiculos_janeiro");
var custo_equ               =document.getElementById("id_itens_custo_equipamentos_manuais_janeiro");
var custo_repMacho           =document.getElementById("id_itens_reprodutores_machos_janeiro");
var custo_repFem           =document.getElementById("id_itens_reprodutores_femeas_janeiro");
var custo_anoTra           =document.getElementById("id_itens_animais_trabalho_janeiro");
var custo_CANAVOL           =document.getElementById("id_itens_canavial_ou_volumoso_janeiro");
var custo_benf           =document.getElementById("id_itens_benfeitorias_janeiro");
var custo_past           =document.getElementById("id_itens_pastagem_janeiro");
var custo_edifi           =document.getElementById("id_itens_edificacoes_janeiro");
var custo_mao           =document.getElementById("id_itens_mao_obra_fixa_fazenda_janeiro");
var custo_encar           =document.getElementById("id_itens_encargos_sociais_janeiro");
var custo_assis           =document.getElementById("id_itens_assistencia_tecnica_janeiro");
var custo_despes           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_janeiro");
var custo_custoFIX           =document.getElementById("id_calculo_custo_fixo_janeiro");
var custo_custoFIXKB            =  document.getElementById("id_calculo_custo_fixo_por_cabeca_janeiro");
function  totalFIXO_JAN(){
    total_custoFIXOJAN.innerHTML =

        parseInt(custo_mac_jan.value)+
        parseInt(custo_trat.value)+
        parseInt(custo_veiculo.value)+
        parseInt(custo_equ.value)+
        parseInt(custo_repMacho.value)+
        parseInt(custo_repFem.value)+
        parseInt(custo_anoTra.value)+
        parseInt(custo_CANAVOL.value)+
        parseInt(custo_benf.value)+
        parseInt(custo_past.value)+
        parseInt(custo_edifi.value)+
        parseInt(custo_mao.value)+
        parseInt(custo_encar.value)+
        parseInt(custo_assis.value)+
        parseInt(custo_despes.value)+
        parseInt(custo_custoFIX.value)+
        parseInt(custo_custoFIXKB.value);
}
custo_mac_jan.addEventListener("keyup",totalFIXO_JAN);
custo_trat.addEventListener("keyup",totalFIXO_JAN);
custo_veiculo.addEventListener("keyup",totalFIXO_JAN);
custo_equ.addEventListener("keyup",totalFIXO_JAN);
custo_repMacho.addEventListener("keyup",totalFIXO_JAN);
custo_repFem.addEventListener("keyup",totalFIXO_JAN);
custo_anoTra.addEventListener("keyup",totalFIXO_JAN);
custo_CANAVOL.addEventListener("keyup",totalFIXO_JAN);
custo_benf.addEventListener("keyup",totalFIXO_JAN);
custo_past.addEventListener("keyup",totalFIXO_JAN);
custo_edifi.addEventListener("keyup",totalFIXO_JAN);
custo_mao.addEventListener("keyup",totalFIXO_JAN);
custo_encar.addEventListener("keyup",totalFIXO_JAN);
custo_assis.addEventListener("keyup",totalFIXO_JAN);
custo_despes.addEventListener("keyup",totalFIXO_JAN);
custo_custoFIX.addEventListener("keyup",totalFIXO_JAN);
custo_custoFIXKB.addEventListener("keyup",totalFIXO_JAN);