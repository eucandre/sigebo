var total_desp = document.getElementById("");
var total_desp_Funcionários_administrativos_jan = document.getElementById("");
var total_desp_Alimentação_refeição_jan         = document.getElementById("");
var total_desp_Desp_escritório_jan              = document.getElementById("");
var total_desp_Telefone_jan                     = document.getElementById("");
var total_desp_Contador_Advogado_jan            = document.getElementById("");
var total_desp_Telefone_fixo_jan                = document.getElementById("");
var total_desp_Informações_jan                  = document.getElementById("");
var total_desp_Seguros_veículos_jan             = document.getElementById("");
var total_desp_Moto_e_carro_jan                 = document.getElementById("");
var total_desp_Outros_diversos_jan              = document.getElementById("");
var total_desp_Despesas_Viagem_jan               = document.getElementById("");
var total_desp_Energia_elétrica_jan                 = document.getElementById("");

function TOTAL_DESP_ADM(){
    total_desp.innerHTML =
        (parseInt(total_desp_Funcionários_administrativos_jan.value)+
        parseInt(total_desp_Alimentação_refeição_jan.value)+
        parseInt(total_desp_Desp_escritório_jan.value)+
        parseInt(total_desp_Telefone_jan.value)+
        parseInt(total_desp_Contador_Advogado_jan.value)+
        parseInt(total_desp_Telefone_fixo_jan.value)+
        parseInt(total_desp_Informações_jan.value)+
        parseInt(total_desp_Seguros_veículos_jan.value)+
        parseInt(total_desp_Moto_e_carro_jan.value)+
        parseInt(total_desp_Outros_diversos_jan.value)+
        parseInt(total_desp_Despesas_Viagem_jan.value)).tofixed(2);
}
TOTAL_DESP_ADM();
total_desp_Funcionários_administrativos_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Alimentação_refeição_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Desp_escritório_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Telefone_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Contador_Advogado_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Telefone_fixo_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Informações_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Seguros_veículos_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Moto_e_carro_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Outros_diversos_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Despesas_Viagem_jan.addEventListener("keyup",TOTAL_DESP_ADM);
total_desp_Energia_elétrica_jan.addEventListener("keyup",TOTAL_DESP_ADM);