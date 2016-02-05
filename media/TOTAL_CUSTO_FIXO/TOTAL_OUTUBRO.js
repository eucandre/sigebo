var total_custoFIXOout = document.getElementById("id_calculo_custo_fixo_outubro");
var custo_mac_out           =document.getElementById("id_itens_custo_maquina_implementos_outubro");
var custo_trat_out              =document.getElementById("id_itens_custo_tratores_outubro");
var custo_veiculo_out           =document.getElementById("id_itens_custo_veiculos_outubro");
var custo_equ_out               =document.getElementById("id_itens_custo_equipamentos_manuais_outubro");
var custo_repMacho_out           =document.getElementById("id_itens_reprodutores_machos_outubro");
var custo_repFem_out           =document.getElementById("id_itens_reprodutores_femeas_outubro");
var custo_anoTra_out           =document.getElementById("id_itens_animais_trabalho_outubro");
var custo_CANAVOL_out           =document.getElementById("id_itens_canavial_ou_volumoso_outubro");
var custo_benf_out           =document.getElementById("id_itens_benfeitorias_outubro");
var custo_past_out           =document.getElementById("id_itens_pastagem_outubro");
var custo_edifi_out           =document.getElementById("id_itens_edificacoes_outubro");
var custo_mao_out           =document.getElementById("id_itens_mao_obra_fixa_fazenda_outubro");
var custo_encar_out           =document.getElementById("id_itens_encargos_sociais_outubro");
var custo_assis_out           =document.getElementById("id_itens_assistencia_tecnica_outubro");
var custo_despes_out           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_outubro");


function  totalFIXO_out(){
    total_custoFIXOout.innerHTML =

        parseInt(custo_mac_out.value)+
        parseInt(custo_trat_out.value)+
        parseInt(custo_veiculo_out.value)+
        parseInt(custo_equ_out.value)+
        parseInt(custo_repMacho_out.value)+
        parseInt(custo_repFem_out.value)+
        parseInt(custo_anoTra_out.value)+
        parseInt(custo_CANAVOL_out.value)+
        parseInt(custo_benf_out.value)+
        parseInt(custo_past_out.value)+
        parseInt(custo_edifi_out.value)+
        parseInt(custo_mao_out.value)+
        parseInt(custo_encar_out.value)+
        parseInt(custo_assis_out.value)+
        parseInt(custo_despes_out.value);


}
totalFIXO_out();
custo_mac_out.addEventListener("keyup",totalFIXO_out);
custo_trat_out.addEventListener("keyup",totalFIXO_out);
custo_veiculo_out.addEventListener("keyup",totalFIXO_out);
custo_equ_out.addEventListener("keyup",totalFIXO_out);
custo_repMacho_out.addEventListener("keyup",totalFIXO_out);
custo_repFem_out.addEventListener("keyup",totalFIXO_out);
custo_anoTra_out.addEventListener("keyup",totalFIXO_out);
custo_CANAVOL_out.addEventListener("keyup",totalFIXO_out);
custo_benf_out.addEventListener("keyup",totalFIXO_out);
custo_past_out.addEventListener("keyup",totalFIXO_out);
custo_edifi_out.addEventListener("keyup",totalFIXO_out);
custo_mao_out.addEventListener("keyup",totalFIXO_out);
custo_encar_out.addEventListener("keyup",totalFIXO_out);
custo_assis_out.addEventListener("keyup",totalFIXO_out);
custo_despes_out.addEventListener("keyup",totalFIXO_out);


