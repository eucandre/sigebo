var marco = document.getElementById("id_total_custo_variavel_especificacao_marco")
var suplementacao_especificacao_marco                        = document.getElementById("id_suplementacao_especificacao_marco");
var linha_branca_especificacao_marco                        = document.getElementById("id_linha_branca_especificacao_marco");
var carrapacidade_especificacao_marco                       = document.getElementById("id_carrapacidade_especificacao_marco");
var mosca_chifre_especificacao_marco                        = document.getElementById("id_mosca_chifre_especificacao_marco");
var vermifugo_especificacao_marco                   = document.getElementById("id_vermifugo_especificacao_marco");
var vacina_aftosa_especificacao_marco                   = document.getElementById("id_vacina_aftosa_especificacao_marco");
var vacina_clostridiose_especificacao_marco                   = document.getElementById("id_vacina_clostridiose_especificacao_marco");
var outras_vacinas_especificacao_marco                   = document.getElementById("id_outras_vacinas_especificacao_marco");
var outros_medicamentos_especificacao_marco                   = document.getElementById("id_outros_medicamentos_especificacao_marco");
var mao_obra_temporaria_especificacao_marco                   = document.getElementById("id_mao_obra_temporaria_especificacao_marco");
var materiais_fazenda_especificacao_marco                   = document.getElementById("id_materiais_fazenda_especificacao_marco");
var curral_especificacao_marco                   = document.getElementById("id_curral_especificacao_marco");
var frete_carretas_especificacao_marco                   = document.getElementById("id_frete_carretas_especificacao_marco");
var casas_especificacao_marco                    = document.getElementById("id_casas_especificacao_marco");
var tratores_especificacao_marco                   = document.getElementById("id_tratores_especificacao_marco");
var maquinas_especificacao_marco                   = document.getElementById("id_maquinas_especificacao_marco");
var combustivel_especificacao_marco                   = document.getElementById("id_combustivel_especificacao_marco");
var outros_especificacao_marco                   = document.getElementById("id_outros_especificacao_marco");
var celular_especificacao_marco                   = document.getElementById("id_celular_especificacao_marco");
var emcargos_banco_especificacao_marco                   = document.getElementById("id_emcargos_banco_especificacao_marco");
var elabora_projeto_pecuario_especificacao_marco                   = document.getElementById("id_elabora_projeto_pecuario_especificacao_marco");
var energia_eletrica_especificacao_marco                   = document.getElementById("id_energia_eletrica_especificacao_marco");
var aquisicao_animais_especificacao_marco                   = document.getElementById("id_aquisicao_animais_especificacao_marco");
var outros1_especificacao_marco                   = document.getElementById("id_outros1_especificacao_marco");
var outros2_especificacao_marco                   = document.getElementById("id_outros2_especificacao_marco");
var outros3_especificacao_marco                   = document.getElementById("id_outros3_especificacao_marco");
var outros4_especificacao_marco                   = document.getElementById("id_outros4_especificacao_marco");
var outros5_especificacao_marco                   = document.getElementById("id_outros5_especificacao_marco");

function custo_marco(){

        marco.innerHTML =
            parseInt(suplementacao_especificacao_marco.value)+
            parseInt(linha_branca_especificacao_marco.value)+
            parseInt(carrapacidade_especificacao_marco.value)+
            parseInt(mosca_chifre_especificacao_marco.value)+
            parseInt(vermifugo_especificacao_marco.value)+
            parseInt(vacina_aftosa_especificacao_marco.value)+
            parseInt(vacina_clostridiose_especificacao_marco.value)+
            parseInt(outras_vacinas_especificacao_marco.value)+
            parseInt(outros_medicamentos_especificacao_marco.value)+
            parseInt(mao_obra_temporaria_especificacao_marco.value)+
            parseInt(materiais_fazenda_especificacao_marco.value)+
            parseInt(curral_especificacao_marco.value)+
            parseInt(frete_carretas_especificacao_marco.value)+
            parseInt(casas_especificacao_marco.value)+
            parseInt(tratores_especificacao_marco.value)+
            parseInt(maquinas_especificacao_marco.value)+
            parseInt(combustivel_especificacao_marco.value)+
            parseInt(outros_especificacao_marco.value)+
            parseInt(celular_especificacao_marco.value)+
            parseInt(emcargos_banco_especificacao_marco.value)+
            parseInt(elabora_projeto_pecuario_especificacao_marco.value)+
            parseInt(energia_eletrica_especificacao_marco.value)+
            parseInt(aquisicao_animais_especificacao_marco.value)+
            parseInt(outros1_especificacao_marco.value)+
            parseInt(outros2_especificacao_marco.value)+
            parseInt(outros3_especificacao_marco.value)+
            parseInt(outros4_especificacao_marco.value);
}

custo_marco();
suplementacao_especificacao_marco.addEventListener("keyup",custo_marco);
linha_branca_especificacao_marco.addEventListener("keyup",custo_marco);
carrapacidade_especificacao_marco.addEventListener("keyup",custo_marco);
mosca_chifre_especificacao_marco.addEventListener("keyup",custo_marco);
vermifugo_especificacao_marco.addEventListener("keyup",custo_marco);
vacina_aftosa_especificacao_marco.addEventListener("keyup",custo_marco);
vacina_clostridiose_especificacao_marco.addEventListener("keyup",custo_marco);
outras_vacinas_especificacao_marco.addEventListener("keyup",custo_marco);
outros_medicamentos_especificacao_marco.addEventListener("keyup",custo_marco);
mao_obra_temporaria_especificacao_marco.addEventListener("keyup",custo_marco);
materiais_fazenda_especificacao_marco.addEventListener("keyup",custo_marco);
curral_especificacao_marco.addEventListener("keyup",custo_marco);
frete_carretas_especificacao_marco.addEventListener("keyup",custo_marco);
casas_especificacao_marco.addEventListener("keyup",custo_marco);
tratores_especificacao_marco.addEventListener("keyup",custo_marco);
maquinas_especificacao_marco.addEventListener("keyup",custo_marco);
combustivel_especificacao_marco.addEventListener("keyup",custo_marco);
outros_especificacao_marco.addEventListener("keyup",custo_marco);
celular_especificacao_marco.addEventListener("keyup",custo_marco);
emcargos_banco_especificacao_marco.addEventListener("keyup",custo_marco);
elabora_projeto_pecuario_especificacao_marco.addEventListener("keyup",custo_marco);
energia_eletrica_especificacao_marco.addEventListener("keyup",custo_marco);
aquisicao_animais_especificacao_marco.addEventListener("keyup",custo_marco);
outros1_especificacao_marco.addEventListener("keyup",custo_marco);
outros2_especificacao_marco.addEventListener("keyup",custo_marco);
outros3_especificacao_marco.addEventListener("keyup",custo_marco);
outros4_especificacao_marco.addEventListener("keyup",custo_marco);
outros5_especificacao_marco.addEventListener("keyup",custo_marco);











