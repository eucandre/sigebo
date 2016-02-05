var total_custoFIXOFEV = document.getElementById("id_calculo_custo_fixo_fevereiro");
var custo_mac_fev           =document.getElementById("id_itens_custo_maquina_implementos_fevereiro");
var custo_trat_fev              =document.getElementById("id_itens_custo_tratores_fevereiro");
var custo_veiculo_fev           =document.getElementById("id_itens_custo_veiculos_fevereiro");
var custo_equ_fev               =document.getElementById("id_itens_custo_equipamentos_manuais_fevereiro");
var custo_repMacho_fev           =document.getElementById("id_itens_reprodutores_machos_fevereiro");
var custo_repFem_fev           =document.getElementById("id_itens_reprodutores_femeas_fevereiro");
var custo_anoTra_fev           =document.getElementById("id_itens_animais_trabalho_fevereiro");
var custo_CANAVOL_fev           =document.getElementById("id_itens_canavial_ou_volumoso_fevereiro");
var custo_benf_fev           =document.getElementById("id_itens_benfeitorias_fevereiro");
var custo_past_fev           =document.getElementById("id_itens_pastagem_fevereiro");
var custo_edifi_fev           =document.getElementById("id_itens_edificacoes_fevereiro");
var custo_mao_fev           =document.getElementById("id_itens_mao_obra_fixa_fazenda_fevereiro");
var custo_encar_fev           =document.getElementById("id_itens_encargos_sociais_fevereiro");
var custo_assis_fev           =document.getElementById("id_itens_assistencia_tecnica_fevereiro");
var custo_despes_fev           =document.getElementById("id_itens_despesas_tributarias_IR_ITR_fevereiro");

function TOTAL_FEVEREIRO(){
    total_custoFIXOFEV.innerHTML =

        parseInt(custo_mac_fev.value)+
        parseInt(custo_trat_fev.value)+
        parseInt(custo_veiculo_fev.value)+
        parseInt(custo_equ_fev.value)+
        parseInt(custo_repMacho_fev.value)+
        parseInt(custo_repFem_fev.value)+
        parseInt(custo_anoTra_fev.value)+
        parseInt(custo_CANAVOL_fev.value)+
        parseInt(custo_benf_fev.value)+
        parseInt(custo_past_fev.value)+
        parseInt(custo_edifi_fev.value)+
        parseInt(custo_mao_fev.value)+
        parseInt(custo_encar_fev.value)+
        parseInt(custo_assis_fev.value)+
        parseInt(custo_despes_fev.value);

                                         }
TOTAL_FEVEREIRO();
custo_mac_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_trat_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_veiculo_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_equ_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_repMacho_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_repFem_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_anoTra_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_CANAVOL_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_benf_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_past_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_edifi_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_mao_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_encar_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_assis_fev.addEventListener("keyup",TOTAL_FEVEREIRO);
custo_despes_fev.addEventListener("keyup",TOTAL_FEVEREIRO);




























































































































































