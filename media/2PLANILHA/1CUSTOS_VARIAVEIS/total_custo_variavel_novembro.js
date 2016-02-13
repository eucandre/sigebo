var novembro = document.getElementById("id_total_custo_variavel_especificacao_novembro")
var suplementacao_especificacao_novembro                        = document.getElementById("id_suplementacao_especificacao_novembro");
var linha_branca_especificacao_novembro                        = document.getElementById("id_linha_branca_especificacao_novembro");
var carrapacidade_especificacao_novembro                       = document.getElementById("id_carrapacidade_especificacao_novembro");
var mosca_chifre_especificacao_novembro                        = document.getElementById("id_mosca_chifre_especificacao_novembro");
var vermifugo_especificacao_novembro                   = document.getElementById("id_vermifugo_especificacao_novembro");
var vacina_aftosa_especificacao_novembro                   = document.getElementById("id_vacina_aftosa_especificacao_novembro");
var vacina_clostridiose_especificacao_novembro                   = document.getElementById("id_vacina_clostridiose_especificacao_novembro");
var outras_vacinas_especificacao_novembro                   = document.getElementById("id_outras_vacinas_especificacao_novembro");
var outros_medicamentos_especificacao_novembro                   = document.getElementById("id_outros_medicamentos_especificacao_novembro");
var mao_obra_temporaria_especificacao_novembro                   = document.getElementById("id_mao_obra_temporaria_especificacao_novembro");
var materiais_fazenda_especificacao_novembro                   = document.getElementById("id_materiais_fazenda_especificacao_novembro");
var curral_especificacao_novembro                   = document.getElementById("id_curral_especificacao_novembro");
var frete_carretas_especificacao_novembro                   = document.getElementById("id_frete_carretas_especificacao_novembro");
var casas_especificacao_novembro                    = document.getElementById("id_casas_especificacao_novembro");
var tratores_especificacao_novembro                   = document.getElementById("id_tratores_especificacao_novembro");
var maquinas_especificacao_novembro                   = document.getElementById("id_maquinas_especificacao_novembro");
var combustivel_especificacao_novembro                   = document.getElementById("id_combustivel_especificacao_novembro");
var outros_especificacao_novembro                   = document.getElementById("id_outros_especificacao_novembro");
var celular_especificacao_novembro                   = document.getElementById("id_celular_especificacao_novembro");
var emcargos_banco_especificacao_novembro                   = document.getElementById("id_emcargos_banco_especificacao_novembro");
var elabora_projeto_pecuario_especificacao_novembro                   = document.getElementById("id_elabora_projeto_pecuario_especificacao_novembro");
var energia_eletrica_especificacao_novembro                   = document.getElementById("id_energia_eletrica_especificacao_novembro");
var aquisicao_animais_especificacao_novembro                   = document.getElementById("id_aquisicao_animais_especificacao_novembro");
var outros1_especificacao_novembro                   = document.getElementById("id_outros1_especificacao_novembro");
var outros2_especificacao_novembro                   = document.getElementById("id_outros2_especificacao_novembro");
var outros3_especificacao_novembro                   = document.getElementById("id_outros3_especificacao_novembro");
var outros4_especificacao_novembro                   = document.getElementById("id_outros4_especificacao_novembro");
var outros5_especificacao_novembro                   = document.getElementById("id_outros5_especificacao_novembro");

function custo_novembro(){

        novembro.innerHTML =
            parseInt(suplementacao_especificacao_novembro.value)+
            parseInt(linha_branca_especificacao_novembro.value)+
            parseInt(carrapacidade_especificacao_novembro.value)+
            parseInt(mosca_chifre_especificacao_novembro.value)+
            parseInt(vermifugo_especificacao_novembro.value)+
            parseInt(vacina_aftosa_especificacao_novembro.value)+
            parseInt(vacina_clostridiose_especificacao_novembro.value)+
            parseInt(outras_vacinas_especificacao_novembro.value)+
            parseInt(outros_medicamentos_especificacao_novembro.value)+
            parseInt(mao_obra_temporaria_especificacao_novembro.value)+
            parseInt(materiais_fazenda_especificacao_novembro.value)+
            parseInt(curral_especificacao_novembro.value)+
            parseInt(frete_carretas_especificacao_novembro.value)+
            parseInt(casas_especificacao_novembro.value)+
            parseInt(tratores_especificacao_novembro.value)+
            parseInt(maquinas_especificacao_novembro.value)+
            parseInt(combustivel_especificacao_novembro.value)+
            parseInt(outros_especificacao_novembro.value)+
            parseInt(celular_especificacao_novembro.value)+
            parseInt(emcargos_banco_especificacao_novembro.value)+
            parseInt(elabora_projeto_pecuario_especificacao_novembro.value)+
            parseInt(energia_eletrica_especificacao_novembro.value)+
            parseInt(aquisicao_animais_especificacao_novembro.value)+
            parseInt(outros1_especificacao_novembro.value)+
            parseInt(outros2_especificacao_novembro.value)+
            parseInt(outros3_especificacao_novembro.value)+
            parseInt(outros4_especificacao_novembro.value);
}

custo_novembro();
suplementacao_especificacao_novembro.addEventListener("keyup",custo_novembro);
linha_branca_especificacao_novembro.addEventListener("keyup",custo_novembro);
carrapacidade_especificacao_novembro.addEventListener("keyup",custo_novembro);
mosca_chifre_especificacao_novembro.addEventListener("keyup",custo_novembro);
vermifugo_especificacao_novembro.addEventListener("keyup",custo_novembro);
vacina_aftosa_especificacao_novembro.addEventListener("keyup",custo_novembro);
vacina_clostridiose_especificacao_novembro.addEventListener("keyup",custo_novembro);
outras_vacinas_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros_medicamentos_especificacao_novembro.addEventListener("keyup",custo_novembro);
mao_obra_temporaria_especificacao_novembro.addEventListener("keyup",custo_novembro);
materiais_fazenda_especificacao_novembro.addEventListener("keyup",custo_novembro);
curral_especificacao_novembro.addEventListener("keyup",custo_novembro);
frete_carretas_especificacao_novembro.addEventListener("keyup",custo_novembro);
casas_especificacao_novembro.addEventListener("keyup",custo_novembro);
tratores_especificacao_novembro.addEventListener("keyup",custo_novembro);
maquinas_especificacao_novembro.addEventListener("keyup",custo_novembro);
combustivel_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros_especificacao_novembro.addEventListener("keyup",custo_novembro);
celular_especificacao_novembro.addEventListener("keyup",custo_novembro);
emcargos_banco_especificacao_novembro.addEventListener("keyup",custo_novembro);
elabora_projeto_pecuario_especificacao_novembro.addEventListener("keyup",custo_novembro);
energia_eletrica_especificacao_novembro.addEventListener("keyup",custo_novembro);
aquisicao_animais_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros1_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros2_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros3_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros4_especificacao_novembro.addEventListener("keyup",custo_novembro);
outros5_especificacao_novembro.addEventListener("keyup",custo_novembro);











