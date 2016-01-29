var total_elementos = document.getElementById("id_");
var Suplementaçãojaneiro             = document.getElementById("id_");
var Linha_Branca_Sal_mineral_janeiro=document.getElementById("id_");
var Carrapaticidasjaneiro           =document.getElementById("id_");
var Mosca_do_chifrejaneiro          =document.getElementById("id_");
var Vermífugojaneiro                =document.getElementById("id_");
var Vacina_de_aftosajaneiro         =document.getElementById("id_");
var Vacina_clostridiosejaneiro      =document.getElementById("id_");
var Outras_vacinasjaneiro           =document.getElementById("id_");
var Outros_medicamentosjaneiro      =document.getElementById("id_");
var Mão_de_obra_temporáriajaneiro   =document.getElementById("id_");
var Materiais_p_Fazenda_janeiro     =document.getElementById("id_");
var Curral_janeiro                  =document.getElementById("id_");
var Frete_Carretas_janeiro          =document.getElementById("id_");
var Casas_janeiro                   =document.getElementById("id_");
var Tratores_janeiro                =document.getElementById("id_");
var Máquinas_janeiro                =document.getElementById("id_");
var Combustível_janeiro             =document.getElementById("id_");
var Outros_janeiro                  =document.getElementById("id_");
var Celular_janeiro                 =document.getElementById("id_");
var Encargos_Bancos_janeiro         =document.getElementById("id_");
var Elabor_Projeto_Pecuario_janeiro =document.getElementById("id_");
var Energia_elétrica_janeiro        =document.getElementById("id_");
var Aquisição_de_animaisjaneiro     =document.getElementById("id_");
var OUTROS_1_janeiro                =document.getElementById("id_");
var OUTROS_2_janeiro                =document.getElementById("id_");
var OUTROS_3_janeiro                =document.getElementById("id_");
var OUTROS_4_janeiro                =document.getElementById("id_");
var OUTROS_5_janeiro                =document.getElementById("id_");

function  TOTAL_SUPLE(){
    total_elementos.innerHTML=
        parseInt(Suplementaçãojaneiro.value)+
        parseInt(Linha_Branca_Sal_mineral_janeiro.value)+
        parseInt(Carrapaticidasjaneiro.value)+
        parseInt(Mosca_do_chifrejaneiro.value)+
        parseInt(Vermífugojaneiro.value)+
        parseInt(Vacina_de_aftosajaneiro.value)+
        parseInt(Vacina_clostridiosejaneiro.value)+
        parseInt(Outras_vacinasjaneiro.value)+
        parseInt(Outros_medicamentosjaneiro.value)+
        parseInt(Mão_de_obra_temporáriajaneiro.value)+
        parseInt(Materiais_p_Fazenda_janeiro.value)+
        parseInt(Curral_janeiro.value)+
        parseInt(Frete_Carretas_janeiro.value)+
        parseInt(Casas_janeiro.value)+
        parseInt(Tratores_janeiro.value)+
        parseInt(Máquinas_janeiro.value)+
        parseInt(Combustível_janeiro.value)+
        parseInt(Outros_janeiro.value)+
        parseInt(Celular_janeiro.value)+
        parseInt(Encargos_Bancos_janeiro.value)+
        parseInt(Elabor_Projeto_Pecuario_janeiro.value)+
        parseInt(Energia_elétrica_janeiro.value)+
        parseInt(Aquisição_de_animaisjaneiro.value)+
        parseInt(OUTROS_1_janeiro.value)+
        parseInt(OUTROS_2_janeiro.value)+
        parseInt(OUTROS_3_janeiro.value)+
        parseInt(OUTROS_4_janeiro.value)+
        parseInt(OUTROS_5_janeiro.value);
}
TOTAL_SUPLE();
Suplementaçãojaneiro.addEventListener("keyup",TOTAL_SUPLE);
Linha_Branca_Sal_mineral_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Carrapaticidasjaneiro.addEventListener("keyup",TOTAL_SUPLE);
Mosca_do_chifrejaneiro.addEventListener("keyup",TOTAL_SUPLE);
Vermífugojaneiro.addEventListener("keyup",TOTAL_SUPLE);
Vacina_de_aftosajaneiro.addEventListener("keyup",TOTAL_SUPLE);
Vacina_clostridiosejaneiro.addEventListener("keyup",TOTAL_SUPLE);
Outras_vacinasjaneiro.addEventListener("keyup",TOTAL_SUPLE);
Outros_medicamentosjaneiro.addEventListener("keyup",TOTAL_SUPLE);
Mão_de_obra_temporáriajaneiro.addEventListener("keyup",TOTAL_SUPLE);
Materiais_p_Fazenda_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Curral_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Frete_Carretas_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Casas_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Tratores_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Máquinas_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Combustível_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Outros_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Celular_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Encargos_Bancos_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Elabor_Projeto_Pecuario_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Energia_elétrica_janeiro.addEventListener("keyup",TOTAL_SUPLE);
Aquisição_de_animaisjaneiro.addEventListener("keyup",TOTAL_SUPLE);
OUTROS_1_janeiro.addEventListener("keyup",TOTAL_SUPLE);
OUTROS_2_janeiro.addEventListener("keyup",TOTAL_SUPLE);
OUTROS_3_janeiro.addEventListener("keyup",TOTAL_SUPLE);
OUTROS_4_janeiro.addEventListener("keyup",TOTAL_SUPLE);
OUTROS_5_janeiro.addEventListener("keyup",TOTAL_SUPLE);