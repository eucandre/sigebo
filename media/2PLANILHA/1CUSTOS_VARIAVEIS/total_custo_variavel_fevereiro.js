var fevereiro = document.getElementById("id_total_custo_variavel_especificacao_fevereiro")
var suplementacao_especificacao_fevereiro                        = document.getElementById("id_suplementacao_especificacao_fevereiro");
var linha_branca_especificacao_fevereiro                        = document.getElementById("id_linha_branca_especificacao_fevereiro");
var carrapacidade_especificacao_fevereiro                       = document.getElementById("id_carrapacidade_especificacao_fevereiro");
var mosca_chifre_especificacao_fevereiro                        = document.getElementById("id_mosca_chifre_especificacao_fevereiro");
var vermifugo_especificacao_fevereiro                   = document.getElementById("id_vermifugo_especificacao_fevereiro");
var vacina_aftosa_especificacao_fevereiro                   = document.getElementById("id_vacina_aftosa_especificacao_fevereiro");
var vacina_clostridiose_especificacao_fevereiro                   = document.getElementById("id_vacina_clostridiose_especificacao_fevereiro");
var outras_vacinas_especificacao_fevereiro                   = document.getElementById("id_outras_vacinas_especificacao_fevereiro");
var outros_medicamentos_especificacao_fevereiro                   = document.getElementById("id_outros_medicamentos_especificacao_fevereiro");
var mao_obra_temporaria_especificacao_fevereiro                   = document.getElementById("id_mao_obra_temporaria_especificacao_fevereiro");
var materiais_fazenda_especificacao_fevereiro                   = document.getElementById("id_materiais_fazenda_especificacao_fevereiro");
var curral_especificacao_fevereiro                   = document.getElementById("id_curral_especificacao_fevereiro");
var frete_carretas_especificacao_fevereiro                   = document.getElementById("id_frete_carretas_especificacao_fevereiro");
var casas_especificacao_fevereiro                    = document.getElementById("id_casas_especificacao_fevereiro");
var tratores_especificacao_fevereiro                   = document.getElementById("id_tratores_especificacao_fevereiro");
var maquinas_especificacao_fevereiro                   = document.getElementById("id_maquinas_especificacao_fevereiro");
var combustivel_especificacao_fevereiro                   = document.getElementById("id_combustivel_especificacao_fevereiro");
var outros_especificacao_fevereiro                   = document.getElementById("id_outros_especificacao_fevereiro");
var celular_especificacao_fevereiro                   = document.getElementById("id_celular_especificacao_fevereiro");
var emcargos_banco_especificacao_fevereiro                   = document.getElementById("id_emcargos_banco_especificacao_fevereiro");
var elabora_projeto_pecuario_especificacao_fevereiro                   = document.getElementById("id_elabora_projeto_pecuario_especificacao_fevereiro");
var energia_eletrica_especificacao_fevereiro                   = document.getElementById("id_energia_eletrica_especificacao_fevereiro");
var aquisicao_animais_especificacao_fevereiro                   = document.getElementById("id_aquisicao_animais_especificacao_fevereiro");
var outros1_especificacao_fevereiro                   = document.getElementById("id_outros1_especificacao_fevereiro");
var outros2_especificacao_fevereiro                   = document.getElementById("id_outros2_especificacao_fevereiro");
var outros3_especificacao_fevereiro                   = document.getElementById("id_outros3_especificacao_fevereiro");
var outros4_especificacao_fevereiro                   = document.getElementById("id_outros4_especificacao_fevereiro");
var outros5_especificacao_fevereiro                   = document.getElementById("id_outros5_especificacao_fevereiro");

function custo_fevereiro(){

        fevereiro.innerHTML =
            parseInt(suplementacao_especificacao_fevereiro.value)+
            parseInt(linha_branca_especificacao_fevereiro.value)+
            parseInt(carrapacidade_especificacao_fevereiro.value)+
            parseInt(mosca_chifre_especificacao_fevereiro.value)+
            parseInt(vermifugo_especificacao_fevereiro.value)+
            parseInt(vacina_aftosa_especificacao_fevereiro.value)+
            parseInt(vacina_clostridiose_especificacao_fevereiro.value)+
            parseInt(outras_vacinas_especificacao_fevereiro.value)+
            parseInt(outros_medicamentos_especificacao_fevereiro.value)+
            parseInt(mao_obra_temporaria_especificacao_fevereiro.value)+
            parseInt(materiais_fazenda_especificacao_fevereiro.value)+
            parseInt(curral_especificacao_fevereiro.value)+
            parseInt(frete_carretas_especificacao_fevereiro.value)+
            parseInt(casas_especificacao_fevereiro.value)+
            parseInt(tratores_especificacao_fevereiro.value)+
            parseInt(maquinas_especificacao_fevereiro.value)+
            parseInt(combustivel_especificacao_fevereiro.value)+
            parseInt(outros_especificacao_fevereiro.value)+
            parseInt(celular_especificacao_fevereiro.value)+
            parseInt(emcargos_banco_especificacao_fevereiro.value)+
            parseInt(elabora_projeto_pecuario_especificacao_fevereiro.value)+
            parseInt(energia_eletrica_especificacao_fevereiro.value)+
            parseInt(aquisicao_animais_especificacao_fevereiro.value)+
            parseInt(outros1_especificacao_fevereiro.value)+
            parseInt(outros2_especificacao_fevereiro.value)+
            parseInt(outros3_especificacao_fevereiro.value)+
            parseInt(outros4_especificacao_fevereiro.value);
}

custo_fevereiro();
suplementacao_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
linha_branca_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
carrapacidade_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
mosca_chifre_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
vermifugo_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
vacina_aftosa_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
vacina_clostridiose_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outras_vacinas_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros_medicamentos_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
mao_obra_temporaria_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
materiais_fazenda_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
curral_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
frete_carretas_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
casas_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
tratores_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
maquinas_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
combustivel_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
celular_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
emcargos_banco_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
elabora_projeto_pecuario_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
energia_eletrica_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
aquisicao_animais_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros1_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros2_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros3_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros4_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);
outros5_especificacao_fevereiro.addEventListener("keyup",custo_fevereiro);











