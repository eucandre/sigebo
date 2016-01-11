from django.template import RequestContext
from forms import *
from django.shortcuts import HttpResponse, render_to_response
from datetime import *

def inicio(request):
    if request.method =="POST":
        form = FormFazenda(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item = fazenda(nome_fazenda = dados['nome_fazenda'], uf_municipio = dados['uf_municipio'], proprietario=dados['proprietario'], rua = dados['rua'],
                           numero = dados['numero'], cep=dados['cep'], telelfone=dados['telelfone'], email=dados['email'])
            item.save()
            return render_to_response("salvo.html", {})
    else:
        form = FormFazenda()
    return render_to_response("cadastro_fazenda.html", {"form":form}, context_instance = RequestContext(request))

def definicao_rebanho_inicial(request):
    """
            Mudar o na parte do form para que seja salvo com iteracao com a views
    """


    if request.method == "POST":
        form = FormDefinicao_rebanho_inicial(request.POST, request.FILES)
        touroR = ''
        if form.is_valid():
            dados = form.cleaned_data
            item  = Definicao_sistema_e_rebanho_inicial(fazenda = dados["fazenda"],
                    vacas = dados["vacas"],
                    novilhas34 =dados["novilhas34"],
                    novilhas23 =dados["novilhas23"],
                    novilhas12 =dados["novilhas12"],
                    bezerras01 =dados["bezerras01"],
                    bezerros01 =dados["bezerros01"],
                    machos12                    =dados["machos12"],
                    machos23                    =dados["machos23"],
                    machos34                    =dados["machos34 "],
                    machos_maior_que_4          =dados["machos_maior_que_4"],
                    touros      =dados["touros"],
                    tourunos    =dados["tourunos"],
                    vacas_descarte =dados["vacas_descarte"],
                    total =dados["total"],
                    fertilidade = dados["fertilidade"],
                    mortalidade01 = dados["mortalidade01"],
                    mortalidade12 = dados["mortalidade12"],
                    reposicao = dados["reposicao"],
                    numero_vacas_touro = dados["numero_vacas_touro"],
                    peso_medio_arrouba_novilho      = dados["peso_medio_arrouba_novilho"],
                    peso_medio_arrouba_vacas        = dados["peso_medio_arrouba_vacas"],
                    intervalo_entre_partos = dados["intervalo_entre_partos"],
                    idade_primeira_cria = dados["idade_primeira_cria"],
                    peso_a_desmama = dados["peso_a_desmama"],
                    peso_a_nascer  = dados["peso_a_nascer"],
                    preco_arrouba = dados["preco_arrouba"],)
            item.save()
        return render_to_response("salvo.html")
    else:
        form = FormDefinicao_rebanho_inicial()

    return render_to_response('definicao_rebanho_inicial.html',{"form":form}, context_instance = RequestContext(request))

def pastagens(request):
    if request.method=="POST":
        form = FormPastagem(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item = pastagem(fazenda = dados["fazenda"], area_pasto = dados['area_pasto'], area_a_comprar= dados['area_a_comprar'],
                            cap_suporte = dados['cap_suporte'], aluguel=dados['aluguel'], n_machos=dados['n_machos'], peso_machos_kg=dados['peso_machos_kg'],
                            n_femeas=dados['n_femeas'], peso_femeas_kg=dados['peso_femeas_kg'], tempo_descanso=dados['tempo_descanso'], tempo_pastejo=dados['tempo_pastejo'],
                            animais6_12=dados['animais6_12'], peso_animais6_12_kg=dados['peso_animais6_12_kg'], animais12_21=dados['animais12_21'],
                            peso_animais12_21_kg=dados['peso_animais12_21_kg'], n_piquetes_categoria=dados['n_piquetes_categoria'],
                            area_piquetes_machos_hectare=dados['area_piquetes_machos_hectare'], area_piquetes_femeas_hectare=dados['area_piquetes_femeas_hectare'],
                            area_piquetes_animais6_12=dados['area_piquetes_animais6_12'], area_piquetes_animais12_21=dados['area_piquetes_animais12_21'],
                            area_piquetes_total_hectare=dados['area_piquetes_total_hectare'],area_comprar_hectare=dados['area_comprar_hectare'])
            item.save()
    else:
        form = FormPastagem()
    return render_to_response("pastagem.html", {"form":form}, context_instance = RequestContext(request))

def vendas_compras(request):
    if request.method=='post':
        form = FormVenda_Compra(request.POST, request.FILES)
        if form.is_valid():
            try:
                d = Definicao_sistema_e_rebanho_inicial.objects.get(pk=Definicao_sistema_e_rebanho_inicial.objects.all())
            except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
                raise Http404()
            dados = form.cleaned_data
            item  = Compra_e_venda(fazenda = dados['fazenda'], ano = dados['ano'],descarte_vacas= dados['descarte_vacas'],
    descarte_novilhos_as = dados['descarte_novilhos_as'],
    Bezerras_desmamadas =dados['Bezerras_desmamadas'],
    Bezerros_desmamados =dados['Bezerros_desmamados'],
    Machos_1_2 =dados['Machos_1_2'],
    Machos_2_3 =dados['Machos_2_3'],
    Machos_3_4 =dados['Machos_3_4'],
    Machos_4_mais =dados['Machos_4_mais'],
)

            item.save()
    else:
        form = FormVenda_Compra()
    return render_to_response("venda_e_compra.html", {"form":form}, context_instance = RequestContext(request))

def confinamento_curral(request):
    if request.method=='post':
        form = FormConfinamento(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Confinamento(fazenda = dados['fazenda'], N_animais_confinados= dados['N_animais_confinados'], Peso_inicial = dados['Peso_inicial'],
                Peso_Final=dados['Peso_Final'],Consumo_ms=dados['Consumo_ms'], Consumo_agua=dados['Consumo_agua'],Preco_concentrado=dados['Preco_concentrado'],
                tempo_confinamento=dados['tempo_confinamento'],volumoso=dados['volumoso'])
            item.save()
    else:
        form = FormConfinamento()
    return render_to_response("confinamento.html", {"form":form}, context_instance = RequestContext(request))


def dimensionamento_aberto(request):
    if request.method=='post':
        form = FormDimensionamentoSiloCeuAberto(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Dimensionamento_Silo_ceu_aberto(fazenda = dados['fazenda'], Duracao_confinamento= dados['Duracao_confinamento'], Comsumo_silagem = dados['Comsumo_silagem'],
                Densidade=dados['Densidade'],Altura_Silo=dados['Altura_Silo'], Base_menor_silo=dados['Base_menor_silo'],Base_maior_silo=dados['Base_maior_silo'],
                Ms_silagem=dados['Ms_silagem'],tempo_confinamento=dados['tempo_confinamento'],Consumo_diario=dados['Consumo_diario'], Fatia_diaria=dados['Fatia_diaria'])
            item.save()
    else:
        form = FormDimensionamentoSiloCeuAberto()
    return render_to_response("dimensionamento_aberto.html", {"form":form}, context_instance = RequestContext(request))


def dimensionamento_fechado(request):
    if request.method=='post':
        form = FormDimensionamentoSiloFechado(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Dimensionamento_Silo_galpao_fechado(fazenda = dados['fazenda'], Duracao_confinamento= dados['Duracao_confinamento'], Comsumo_silagem = dados['Comsumo_silagem'],
                Densidade=dados['Densidade'],Altura_Silo=dados['Altura_Silo'], Base_menor_silo=dados['Base_menor_silo'],Base_maior_silo=dados['Base_maior_silo'],
                Ms_silagem=dados['Ms_silagem'],tempo_confinamento=dados['tempo_confinamento'],Consumo_diario=dados['Consumo_diario'], Fatia_diaria=dados['Fatia_diaria'])
            item.save()
    else:
        form = FormDimensionamentoSiloFechado()
    return render_to_response("dimensionamento_fechado.html", {"form":form}, context_instance = RequestContext(request))

def mao_obra(request):
    if request.method=='post':
        form = FormMaoObra(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Mao_Obra(fazenda = dados['fazenda'], mes= dados['mes'], getente = dados['getente'],
                capataz=dados['capataz'],peao=dados['peao'], tratorista=dados['tratorista'],outro=dados['outro'],
                gerente_valor_fixado=dados['gerente_valor_fixado'],capataz_valor_fixado=dados['capataz_valor_fixado']
                ,peao_valor_fixado=dados['peao_valor_fixado'], tratorista_valor_fixado=dados['tratorista_valor_fixado'],
                outro_valor_fixado=dados['outro_valor_fixado'])
            item.save()
    else:
        form = FormMaoObra()
    return render_to_response("mao_obra.html", {"form":form}, context_instance = RequestContext(request))

def gastos_veterinarios(request):
    if request.method=='post':
        form = FormGastos_veterinarios(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Gastos_Produtos_veterinarios(fazenda = dados['fazenda'], ano= dados['ano'], vacinas = dados['vacinas'],vacinas_ru_ano = dados['vacinas_ru_ano'],
                Outros_medicamentos=dados['Outros_medicamentos'],Outros_medicamentos_ru_ano=dados['Outros_medicamentos_ru_ano'],sal_mineral=dados['sal_mineral'],
                sal_mineral_ru_ano=dados['sal_mineral_ru_ano'], sal_proteico=dados['sal_proteico'],racao_concentrada=dados['racao_concentrada'],
                Creep_feeding=dados['Creep_feeding'],outros_alimentos=dados['outros_alimentos'])
            item.save()
    else:
        form = FormMaoObra()
    return render_to_response("gastos_veterinarios.html", {"form":form}, context_instance = RequestContext(request))

def rendimento_carca(request):
    if request.method=='post':
        form = FormRendimentoCarcaca(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Rendiemnto_carcaca(fazenda = dados['fazenda'], ano= dados['ano'], vacinas = dados['vacinas'],
                Outros_medicamentos=dados['Outros_medicamentos'],sal_mineral=dados['sal_mineral'], sal_proteico=dados['sal_proteico'],racao_concentrada=dados['racao_concentrada'],
                Creep_feeding=dados['Creep_feeding'],outros_alimentos=dados['outros_alimentos'])
            item.save()
    else:
        form = FormRendimentoCarcaca()
    return render_to_response("rendimento_carcaca.html", {"form":form}, context_instance = RequestContext(request))


def relatorio_criacao_bovinos(request):
    data_hoje = datetime.now()
    return render_to_response("relatorios/relatorio_criacao_bovinos.html",{"data":data_hoje})

def relatorio_instalacao(request):
    data_hoje = datetime.now()
    return render_to_response("relatorios/relatorio_instalacao.html",{"data":data_hoje})

#para os relatorios do inventario

def inventario_atividade(request):
    if request.method=='post':
        form = FormInventarioatividade(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Inventario_ligado_atividade(fazenda = dados['fazenda'], Insumos_valor_inicial_mercado= dados['Insumos_valor_inicial_mercado'], Insumos_capital_medio = dados['Insumos_capital_medio'],
                    Insumos_valor_final_ou_sucata =dados['Insumos_valor_final_ou_sucata '],Insumos_porcentagem_patrimonio=dados['Insumos_porcentagem_patrimonio'],
                    maquinas_implementos_valor_inicial_de_mercado =dados['maquinas_implementos_valor_inicial_de_mercado '],
                    maquinas_implementos_capital_medio =dados['maquinas_implementos_capital_medio '],maquinas_implementos_valor_final_ou_sucata =dados['maquinas_implementos_valor_final_ou_sucata'],
                    maquinas_implementos_porcentagem_patrimonio=dados['maquinas_implementos_porcentagem_patrimonio']
                    ,tratores_valor_inicial_de_mercado =dados['tratores_valor_inicial_de_mercado '],tratores_capital_medio=dados['tratores_capital_medio'],
                    tratores_valor_final_ou_sucata =dados['tratores_valor_final_ou_sucata'],tratores_porcentagem_patrimonio=dados['tratores_porcentagem_patrimonio']
                    ,veiculos_valor_inicial_de_mercado=dados['veiculos_valor_inicial_de_mercado'],veiculos_capital_medio=dados['veiculos_capital_medio'],veiculos_valor_final_ou_sucata=dados['veiculos_valor_final_ou_sucata']
                    ,veiculos_porcentagem_patrimonio=dados['veiculos_porcentagem_patrimonio'],equipamentos_manuais_valor_inicial_de_mercado=dados['equipamentos_manuais_valor_inicial_de_mercado'],outros_alimentos=dados['outros_alimentos'],
                    equipamentos_manuais_capital_medio=dados['equipamentos_manuais_capital_medio'],equipamentos_manuais_valor_final_ou_sucata=dados['equipamentos_manuais_valor_final_ou_sucata']
                    ,equipamentos_manuais_porcentagem_patrimonio=dados['equipamentos_manuais_porcentagem_patrimonio'],reprodutores_macho_valor_inicial_de_mercado=dados['reprodutores_macho_valor_inicial_de_mercado'],
                    reprodutores_macho_capital_medio=dados['reprodutores_macho_capital_medio'],reprodutores_macho_valor_final_ou_sucata=dados['reprodutores_macho_valor_final_ou_sucata'],
                    reprodutores_macho_porcentagem_patrimonio=dados['reprodutores_macho_porcentagem_patrimonio']
                    ,reprodutores_femea_valor_inicial_de_mercado=dados['reprodutores_femea_valor_inicial_de_mercado'],reprodutores_femea_capital_medio=dados['reprodutores_femea_capital_medio'],
                    reprodutores_femea_valor_final_ou_sucata=dados['reprodutores_femea_valor_final_ou_sucata'],reprodutores_femea_porcentagem_patrimonio=dados['reprodutores_femea_porcentagem_patrimonio']
                    ,animais_engorda_valor_inicial_de_mercado=dados['animais_engorda_valor_inicial_de_mercado'],
                    animais_engorda_valor_final_ou_sucata=dados['animais_engorda_valor_final_ou_sucata'],animais_engorda_porcentagem_patrimonio=dados['animais_engorda_porcentagem_patrimonio'],animais_engorda_capital_medio=dados['animais_engorda_capital_medio'],
                    animais_trabalho_valor_inicial_de_mercado=dados['animais_trabalho_valor_inicial_de_mercado'],
                    animais_trabalho_capital_medio=dados['animais_trabalho_capital_medio'],
                    animais_trabalho_valor_final_ou_sucata=dados['animais_trabalho_valor_final_ou_sucata'],
                    animais_trabalho_porcentagem_patrimonio=dados['animais_trabalho_porcentagem_patrimonio'],

                    canavial_ou_volumoso_valor_inicial_de_mercado=dados['canavial_ou_volumoso_valor_inicial_de_mercado'],
                    canavial_ou_volumoso_capital_medio=dados['canavial_ou_volumoso_capital_medio'] ,
                    canavial_ou_volumoso_valor_final_ou_sucata=dados['canavial_ou_volumoso_valor_final_ou_sucata'],
                    canavial_ou_volumoso_porcentagem_patrimonio=dados['canavial_ou_volumoso_porcentagem_patrimonio'],

                    benfeitorias_valor_inicial_de_mercado=dados['benfeitorias_valor_inicial_de_mercado'],
                    benfeitorias_capital_medio=dados['benfeitorias_capital_medio'],
                    benfeitorias_valor_final_ou_sucata=dados['benfeitorias_valor_final_ou_sucata'],
                    benfeitorias_porcentagem_patrimonio=dados['benfeitorias_porcentagem_patrimonio'],

                    cercas_valor_inicial_de_mercado=dados['cercas_valor_inicial_de_mercado'],
                    cercas_capital_medio=dados['cercas_capital_medio'],
                    cercas_valor_final_ou_sucata=dados['cercas_valor_final_ou_sucata'],
                    cercas_porcentagem_patrimonio=dados['cercas_porcentagem_patrimonio'],

                    edificacoes_valor_inicial_de_mercado=dados['edificacoes_valor_inicial_de_mercado'],
                    edificacoes_capital_medio=dados['edificacoes_capital_medio'],
                    edificacoes_valor_final_ou_sucata=dados['edificacoes_valor_final_ou_sucata'],
                    edificacoes_porcentagem_patrimonio=dados['edificacoes_porcentagem_patrimonio'],

                    pastagem_valor_inicial_de_mercado=dados['pastagem_valor_inicial_de_mercado'],
                    pastagem_capital_medio=dados['pastagem_capital_medio'],
                    pastagem_valor_final_ou_sucata=dados['pastagem_valor_final_ou_sucata'],
                    pastagem_porcentagem_patrimonio=dados['pastagem_porcentagem_patrimonio'],

                    semem_valor_inicial_de_mercado=dados['semem_valor_inicial_de_mercado'],
                    semem_capital_medio=dados['semem_capital_medio'],
                    semem_valor_final_ou_sucata=dados['semem_valor_final_ou_sucata'],
                    semem_porcentagem_patrimonio=dados['semem_porcentagem_patrimonio'],

                    terra_valor_inicial_de_mercado=dados['terra_valor_inicial_de_mercado'],
                    terra_capital_medio=dados['terra_capital_medio'],
                    terra_valor_final_ou_sucata=dados['terra_valor_final_ou_sucata'],
                    terra_porcentagem_patrimonio=dados['terra_porcentagem_patrimonio'],)
            item.save()
    else:
        form = FormInventarioatividade()
    return render_to_response("custos/inventario_atividade.html", {"form":form}, context_instance = RequestContext(request))

def depreciacao(request):
    if request.method=='post':
        form = FormDepreciacao(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item = depreciacao(
                    maquina_implemento_valor_inicial = dados['maquina_implemento_valor_inicial'],
                    maquina_implemento_capital_medio = dados['maquina_implemento_capital_medio'],
                    maquina_implemento_valor_final_ou_sucata = dados['maquina_implemento_valor_final_ou_sucata'],
                    maquina_implemento_depreciacao_anual = dados['maquina_implemento_depreciacao_anual'],
                    maquina_implemento_remuneracao_capital = dados['maquina_implemento_remuneracao_capital'],
                    maquina_implemento_custo_fixo = dados['maquina_implemento_custo_fixo'],
                    maquina_implemento_porcetagem_custo_fixo = dados['maquina_implemento_porcetagem_custo_fixo'],

                    tratores_valor_inicial = dados['tratores_valor_inicial'],
                    tratores_capital_medio = dados['tratores_capital_medio'],
                    tratores_valor_final_ou_sucata = dados['tratores_valor_final_ou_sucata'],
                    tratores_depreciacao_anual = dados['tratores_depreciacao_anual'],
                    tratores_remuneracao_capital = dados['tratores_remuneracao_capital'],
                    tratores_custo_fixo = dados['tratores_custo_fixo'],
                    tratores_porcetagem_custo_fixo = dados['tratores_porcetagem_custo_fixo'],

                    veiculos_valor_inicial         = dados['veiculos_valor_inicial'],
                    veiculos_capital_medio         = dados['veiculos_capital_medio'],
                    veiculos_valor_final_ou_sucata = dados['veiculos_valor_final_ou_sucata'],
                    veiculos_depreciacao_anual     = dados['veiculos_depreciacao_anual'],
                    veiculos_remuneracao_capital   = dados['veiculos_remuneracao_capital'],
                    veiculos_custo_fixo            = dados['veiculos_custo_fixo'],
                    veiculos_porcetagem_custo_fixo = dados['veiculos_porcetagem_custo_fixo'],

                    equipamentos_manuais_valor_inicial          = dados['equipamentos_manuais_valor_inicial'],
                    equipamentos_manuais_capital_medio          = dados['equipamentos_manuais_capital_medio'],
                    equipamentos_manuais_valor_final_ou_sucata  = dados['equipamentos_manuais_valor_final_ou_sucata'],
                    equipamentos_manuais_depreciacao_anual      = dados['equipamentos_manuais_depreciacao_anual'],
                    equipamentos_manuais_remuneracao_capital    = dados['equipamentos_manuais_remuneracao_capital  '],
                    equipamentos_manuais_custo_fixo             = dados['equipamentos_manuais_custo_fixo'],
                    equipamentos_manuais_porcetagem_custo_fixo  = dados['equipamentos_manuais_porcetagem_custo_fixo'],

                    reprodutores_machos_valor_inicial           = dados['reprodutores_machos_valor_inicial'],
                    reprodutores_machos_capital_medio           = dados['reprodutores_machos_capital_medio'],
                    reprodutores_machos_valor_final_ou_sucata   = dados['reprodutores_machos_valor_final_ou_sucata'],
                    reprodutores_machos_depreciacao_anual       = dados['reprodutores_machos_depreciacao_anual'],
                    reprodutores_machos_remuneracao_capital     = dados['reprodutores_machos_remuneracao_capital'],
                    reprodutores_machos_custo_fixo              = dados['reprodutores_machos_custo_fixo'],
                    reprodutores_machos_porcetagem_custo_fixo   = dados['reprodutores_machos_porcetagem_custo_fixo'],

                    reprodutores_femeas_valor_inicial           = dados['reprodutores_femeas_valor_inicial'],
                    reprodutores_femeas_capital_medio           = dados['reprodutores_femeas_capital_medio'],
                    reprodutores_femeas_valor_final_ou_sucata   = dados['reprodutores_femeas_valor_final_ou_sucata'],
                    reprodutores_femeas_depreciacao_anual       = dados['reprodutores_femeas_depreciacao_anual    '],
                    reprodutores_femeas_remuneracao_capital     = dados['reprodutores_femeas_remuneracao_capital  '],
                    reprodutores_femeas_custo_fixo              = dados['reprodutores_femeas_custo_fixo           '],
                    reprodutores_femeas_porcetagem_custo_fixo   = dados['reprodutores_femeas_porcetagem_custo_fixo'],

                    animais_trabalho_valor_inicial              = dados['animais_trabalho_valor_inicial        '],
                    animais_trabalho_capital_medio              = dados['animais_trabalho_capital_medio        '],
                    animais_trabalho_valor_final_ou_sucata      = dados['animais_trabalho_valor_final_ou_sucata'],
                    animais_trabalho_depreciacao_anual          = dados['animais_trabalho_depreciacao_anual    '],
                    animais_trabalho_remuneracao_capital        = dados['animais_trabalho_remuneracao_capital  '],
                    animais_trabalho_custo_fixo                 = dados['animais_trabalho_custo_fixo           '],
                    animais_trabalho_porcetagem_custo_fixo      = dados['animais_trabalho_porcetagem_custo_fixo'],

                    canavial_ou_volumoso_valor_inicial          = dados['canavial_ou_volumoso_valor_inicial        '],
                    canavial_ou_volumoso_capital_medio          = dados['canavial_ou_volumoso_capital_medio        '],
                    canavial_ou_volumoso_valor_final_ou_sucata  = dados['canavial_ou_volumoso_valor_final_ou_sucata'],
                    canavial_ou_volumoso_depreciacao_anual      = dados['canavial_ou_volumoso_depreciacao_anual    '],
                    canavial_ou_volumoso_remuneracao_capital    = dados['canavial_ou_volumoso_remuneracao_capital  '],
                    canavial_ou_volumoso_custo_fixo             = dados['canavial_ou_volumoso_custo_fixo           '],
                    canavial_ou_volumoso_porcetagem_custo_fixo  = dados['canavial_ou_volumoso_porcetagem_custo_fixo'],

                    benfeitorias_valor_inicial                  = dados['benfeitorias_valor_inicial        '],
                    benfeitorias_capital_medio                  = dados['benfeitorias_capital_medio        '],
                    benfeitorias_valor_final_ou_sucata          = dados['benfeitorias_valor_final_ou_sucata'],
                    benfeitorias_depreciacao_anual              = dados['benfeitorias_depreciacao_anual    '],
                    benfeitorias_remuneracao_capital            = dados['benfeitorias_remuneracao_capital  '],
                    benfeitorias_custo_fixo                     = dados['benfeitorias_custo_fixo           '],
                    benfeitorias_porcetagem_custo_fixo          = dados['benfeitorias_porcetagem_custo_fixo'],

                    cercas_valor_inicial                        = dados['cercas_valor_inicial'],
                    cercas_capital_medio                        = dados['cercas_capital_medio'],
                    cercas_valor_final_ou_sucata                = dados['cercas_valor_final_ou_sucata'],
                    cercas_depreciacao_anual                    = dados['cercas_depreciacao_anual'],
                    cercas_remuneracao_capital                  = dados['cercas_remuneracao_capital'],
                    cercas_custo_fixo                           = dados['cercas_custo_fixo'],
                    cercas_porcetagem_custo_fixo                = dados['cercas_porcetagem_custo_fixo'],

                    edificacoes_valor_inicial                   = dados['edificacoes_valor_inicial'],
                    edificacoes_capital_medio                   = dados['edificacoes_capital_medio'],
                    edificacoes_valor_final_ou_sucata           = dados['edificacoes_valor_final_ou_sucata'],
                    edificacoes_depreciacao_anual               = dados['edificacoes_depreciacao_anual'],
                    edificacoes_remuneracao_capital             = dados['edificacoes_remuneracao_capital'],
                    edificacoes_custo_fixo                      = dados['edificacoes_custo_fixo'],
                    edificacoes_porcetagem_custo_fixo           = dados['edificacoes_porcetagem_custo_fixo '],

                    pastagem_valor_inicial                      = dados['pastagem_valor_inicial'],
                    pastagem_capital_medio                      = dados['pastagem_capital_medio'],
                    pastagem_valor_final_ou_sucata              = dados['pastagem_valor_final_ou_sucata'],
                    pastagem_depreciacao_anual                  = dados['pastagem_depreciacao_anual'],
                    pastagem_remuneracao_capital                = dados['pastagem_remuneracao_capital'],
                    pastagem_custo_fixo                         = dados['pastagem_custo_fixo'],
                    pastagem_porcetagem_custo_fixo              = dados['pastagem_porcetagem_custo_fixo'],

                    total_valor_inicial                         = dados['total_valor_inicial'],
                    total_capital_medio                         = dados['total_capital_medio'],
                    total_valor_final_ou_sucata                 = dados['total_valor_final_ou_sucata'],
                    total_depreciacao_anual                     = dados['total_depreciacao_anual'],
                    total_remuneracao_capital                   = dados['total_remuneracao_capital'],
                    total_custo_fixo                            = dados['total_custo_fixo'],
                    total_porcetagem_custo_fixo                 = dados['total_porcetagem_custo_fixo'],

                    Depreciacao_mensal                              = dados['Depreciacao_mensal'],#
                    jurus_remuneracao_ano                           = dados['jurus_remuneracao_ano'],#10

                    #informacoes para os calculos

                    maquina_implemento_calculo_depreciacao_anual    = dados['maquina_implemento_calculo_depreciacao_anual'],
                    maquina_implemento_calculo_amortizacao_ano      = dados['maquina_implemento_calculo_amortizacao_ano'],

                    tratores_calculo_depreciacao_anual              = dados['tratores_calculo_depreciacao_anual'],
                    tratores_calculo_amortizacao_ano                = dados['tratores_calculo_amortizacao_ano'],

                    veiculos_calculo_depreciacao_anual              = dados['veiculos_calculo_depreciacao_anual'],
                    veiculos_calculo_amortizacao_ano                = dados['veiculos_calculo_amortizacao_ano'],

                    equipamentos_manuais_calculo_depreciacao_anual  = dados['equipamentos_manuais_calculo_depreciacao_anual'],
                    equipamentos_manuais_calculo_amortizacao_ano    = dados['equipamentos_manuais_calculo_amortizacao_ano'],

                    reprodutores_machos_calculo_depreciacao_anual   = dados['reprodutores_machos_calculo_depreciacao_anual'],
                    reprodutores_femeas_calculo_amortizacao_ano     = dados['reprodutores_femeas_calculo_amortizacao_ano'],

                    animais_de_trabalho_calculo_depreciacao_anual   = dados['animais_de_trabalho_calculo_depreciacao_anual'],
                    animais_de_trabalho_calculo_amortizacao_ano     = dados['animais_de_trabalho_calculo_amortizacao_ano'],

                    canavial_volumoso_calculo_depreciacao_anual     = dados['canavial_volumoso_calculo_depreciacao_anual'],
                    canavial_volumoso_calculo_amortizacao_ano       = dados['canavial_volumoso_calculo_amortizacao_ano'],

                    benfeitorias_calculo_depreciacao_anual          = dados['benfeitorias_calculo_depreciacao_anual'],
                    benfeitorias_calculo_amortizacao_ano            = dados['benfeitorias_calculo_amortizacao_ano'],

                    cercas_calculo_depreciacao_anual                = dados['cercas_calculo_depreciacao_anual'],
                    cercas_calculo_amortizacao_ano                  = dados['cercas_calculo_amortizacao_ano'],

                    edificacoes_calculo_depreciacao_anual           = dados['edificacoes_calculo_depreciacao_anual'],
                    edificacoes_calculo_amortizacao_ano             = dados['edificacoes_calculo_amortizacao_ano'],

                    pastagem_calculo_depreciacao_anual              = dados['pastagem_calculo_depreciacao_anual'],
                    pastagem_calculo_amortizacao_ano                = dados['pastagem_calculo_amortizacao_ano'],

            )
            item.save()
    else:
        form = FormDepreciacao()
    return render_to_response("custos/depreciacao.html", {"form":form}, context_instance = RequestContext(request))

def evolucao_rebanho(request):
    if request.method=="POST":
        form = FormEvolucaoRebanho(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item = evolucao_rebanho(
                        fazenda                        = dados["fazenda"],
                        #matrizes
                        nr_matriz_janeiro              = dados["nr_matriz_janeiro"],
                        nr_matriz_peso_medio_janeiro   = dados["nr_matriz_peso_medio_janeiro"],
                        nr_matriz_fevereiro            = dados["nr_matriz_fevereiro"],
                        nr_matriz_peso_medio_fevereiro = dados["nr_matriz_peso_medio_fevereiro"],
                        nr_matriz_merco                = dados["nr_matriz_merco"],
                        nr_matriz_peso_medio_marco     = dados["nr_matriz_peso_medio_marco"],
                        nr_matriz_abril                = dados["nr_matriz_abril"],
                        nr_matriz_peso_medio_abriu     = dados["nr_matriz_peso_medio_abriu"],
                        nr_matriz_maio                 = dados["nr_matriz_maio"],
                        nr_matriz_peso_medio_maio      = dados["nr_matriz_peso_medio_maio"],
                        nr_matriz_junho                = dados["nr_matriz_junho"],
                        nr_matriz_peso_medio_junho     = dados["nr_matriz_peso_medio_junho"],
                        nr_matriz_julho                = dados["nr_matriz_julho"],
                        nr_matriz_peso_medio_julho     = dados["nr_matriz_peso_medio_julho"],
                        nr_matriz_agosto               = dados["nr_matriz_agosto"],
                        nr_matriz_peso_medio_agosto    = dados["nr_matriz_peso_medio_agosto"],
                        nr_matriz_setembro             = dados["nr_matriz_setembro"],
                        nr_matriz_peso_medio_setembro  = dados["nr_matriz_peso_medio_setembro"],
                        nr_matriz_outubro              = dados["nr_matriz_outubro"],
                        nr_matriz_peso_medio_outubro   = dados["nr_matriz_peso_medio_outubro"],
                        nr_matriz_novembro             = dados["nr_matriz_novembro"],
                        nr_matriz_peso_medio_novembro  = dados["nr_matriz_peso_medio_novembro"],
                        nr_matriz_dezembro             = dados["nr_matriz_dezembro"],
                        nr_matriz_peso_medio_dezembro  = dados["nr_matriz_peso_medio_dezembro"],
                        nr_matriz_media                = dados["nr_matriz_media"],
                        nr_matriz_peso_medio_media     = dados["nr_matriz_peso_medio_media"],

                        #novilhos maior que 14 arroubas
                        nr_novilhos_maior14Arrouba_janeiro                 = dados["nr_novilhos_maior14Arrouba_janeiro"],
                        nr_novilhos_maior14Arrouba_peso_medio_janeiro      = dados["nr_novilhos_maior14Arrouba_peso_medio_janeiro"],
                        nr_novilhos_maior14Arrouba_fevereiro               = dados["nr_novilhos_maior14Arrouba_fevereir"],
                        nr_novilhos_maior14Arrouba_peso_medio_fevereiro    = dados["nr_novilhos_maior14Arrouba_peso_medio_fevereir"],
                        nr_novilhos_maior14Arrouba_marco                   = dados["nr_novilhos_maior14Arrouba_marco"],
                        nr_novilhos_maior14Arrouba_peso_medio_marco        = dados["nr_novilhos_maior14Arrouba_peso_medio_marco"],
                        nr_novilhos_maior14Arrouba_abril                   = dados["nr_novilhos_maior14Arrouba_abril"],
                        nr_novilhos_maior14Arrouba_peso_medio_abriu        = dados["nr_novilhos_maior14Arrouba_peso_medio_abriu"],
                        nr_novilhos_maior14Arrouba_maio                    = dados["nr_novilhos_maior14Arrouba_maio"],
                        nr_novilhos_maior14Arrouba_peso_medio_maio         = dados["nr_novilhos_maior14Arrouba_peso_medio_maio"],
                        nr_novilhos_maior14Arrouba_junho                   = dados["nr_novilhos_maior14Arrouba_junho"],
                        nr_novilhos_maior14Arrouba_peso_medio_junho        = dados["nr_novilhos_maior14Arrouba_peso_medio_junho"],
                        nr_novilhos_maior14Arrouba_julho                   = dados["nr_novilhos_maior14Arrouba_julho"],
                        nr_novilhos_maior14Arrouba_peso_medio_julho        = dados["nr_novilhos_maior14Arrouba_peso_medio_julho"],
                        nr_novilhos_maior14Arrouba_agosto                  = dados["nr_novilhos_maior14Arrouba_agosto"],
                        nr_novilhos_maior14Arrouba_peso_medio_agosto       = dados["nr_novilhos_maior14Arrouba_peso_medio_agosto"],
                        nr_novilhos_maior14Arrouba_setembro                = dados["nr_novilhos_maior14Arrouba_setembro"],
                        nr_novilhos_maior14Arrouba_peso_medio_setembro     = dados["nr_novilhos_maior14Arrouba_peso_medio_setembro"],
                        nr_novilhos_maior14Arrouba_outubro                 = dados["nr_novilhos_maior14Arrouba_outubro"],
                        nr_novilhos_maior14Arrouba_peso_medio_outubro      = dados["nr_novilhos_maior14Arrouba_peso_medio_outubro"],
                        nr_novilhos_maior14Arrouba_novembro                = dados["nr_novilhos_maior14Arrouba_novembro"],
                        nr_novilhos_maior14Arrouba_peso_medio_novembro     = dados["nr_novilhos_maior14Arrouba_peso_medio_novembro"],
                        nr_novilhos_maior14Arrouba_dezembro                = dados["nr_novilhos_maior14Arrouba_dezembro"],
                        nr_novilhos_maior14Arrouba_peso_medio_dezembro     = dados["nr_novilhos_maior14@_peso_medio_dezembro"],

                        #Novilhos12-14
                        nr_novilhos_maior12_14Arrouba_janeiro                 = dados["nr_novilhos_maior12_14Arrouba_janeiro"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_janeiro      = dados["nr_novilhos_maior12_14Arrouba_peso_medio_janeiro"],
                        nr_novilhos_maior12_14Arrouba_fevereiro               = dados["nr_novilhos_maior12_14Arrouba_fevereir"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_fevereiro    = dados["nr_novilhos_maior12_14Arrouba_peso_medio_fevereir"],
                        nr_novilhos_maior12_14Arrouba_marco                   = dados["nr_novilhos_maior12_14Arrouba_marco"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_marco        = dados["nr_novilhos_maior12_14Arrouba_peso_medio_marco"],
                        nr_novilhos_maior12_14Arrouba_abril                   = dados["nr_novilhos_maior12_14Arrouba_abril"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_abriu        = dados["nr_novilhos_maior12_14Arrouba_peso_medio_abriu"],
                        nr_novilhos_maior12_14Arrouba_maio                    = dados["nr_novilhos_maior12_14Arrouba_maio"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_maio         = dados["nr_novilhos_maior12_14Arrouba_peso_medio_maio"],
                        nr_novilhos_maior12_14Arrouba_junho                   = dados["nr_novilhos_maior12_14Arrouba_junho"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_junho        = dados["nr_novilhos_maior12_14Arrouba_peso_medio_junho"],
                        nr_novilhos_maior12_14Arrouba_julho                   = dados["nr_novilhos_maior12_14Arrouba_julho"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_julho        = dados["nr_novilhos_maior12_14Arrouba_peso_medio_julho"],
                        nr_novilhos_maior12_14Arrouba_agosto                  = dados["nr_novilhos_maior12_14Arrouba_agosto"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_agosto       = dados["nr_novilhos_maior12_14Arrouba_peso_medio_agosto"],
                        nr_novilhos_maior12_14Arrouba_setembro                = dados["nr_novilhos_maior12_14Arrouba_setembro"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_setembro     = dados["nr_novilhos_maior12_14Arrouba_peso_medio_setembro"],
                        nr_novilhos_maior12_14Arrouba_outubro                 = dados["nr_novilhos_maior12_14Arrouba_outubro"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_outubro      = dados["nr_novilhos_maior12_14Arrouba_peso_medio_outubro"],
                        nr_novilhos_maior12_14Arrouba_novembro                = dados["nr_novilhos_maior12_14Arrouba_novembro"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_novembro     = dados["nr_novilhos_maior12_14Arrouba_peso_medio_novembro"],
                        nr_novilhos_maior12_14Arrouba_dezembro                = dados["nr_novilhos_maior12_14Arrouba_dezembro"],
                        nr_novilhos_maior12_14Arrouba_peso_medio_dezembro     = dados["nr_novilhos_maior12_14@_peso_medio_dezembro"],

                        #Novilhos ate12
                        nr_novilhos_maior_ate12Arrouba_janeiro                 = dados["nr_novilhos_maior_ate12Arrouba_janeiro"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_janeiro      = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_janeiro"],
                        nr_novilhos_maior_ate12Arrouba_fevereiro               = dados["nr_novilhos_maior_ate12Arrouba_fevereir"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_fevereiro    = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_fevereir"],
                        nr_novilhos_maior_ate12Arrouba_marco                   = dados["nr_novilhos_maior_ate12Arrouba_marco"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_marco        = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_marco"],
                        nr_novilhos_maior_ate12Arrouba_abril                   = dados["nr_novilhos_maior_ate12Arrouba_abril"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_abriu        = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_abriu"],
                        nr_novilhos_maior_ate12Arrouba_maio                    = dados["nr_novilhos_maior_ate12Arrouba_maio"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_maio         = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_maio"],
                        nr_novilhos_maior_ate12Arrouba_junho                   = dados["nr_novilhos_maior_ate12Arrouba_junho"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_junho        = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_junho"],
                        nr_novilhos_maior_ate12Arrouba_julho                   = dados["nr_novilhos_maior_ate12Arrouba_julho"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_julho        = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_julho"],
                        nr_novilhos_maior_ate12Arrouba_agosto                  = dados["nr_novilhos_maior_ate12Arrouba_agosto"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_agosto       = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_agosto"],
                        nr_novilhos_maior_ate12Arrouba_setembro                = dados["nr_novilhos_maior_ate12Arrouba_setembro"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_setembro     = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_setembro"],
                        nr_novilhos_maior_ate12Arrouba_outubro                 = dados["nr_novilhos_maior_ate12Arrouba_outubro"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_outubro      = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_outubro"],
                        nr_novilhos_maior_ate12Arrouba_novembro                = dados["nr_novilhos_maior_ate12Arrouba_novembro"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_novembro     = dados["nr_novilhos_maior_ate12Arrouba_peso_medio_novembro"],
                        nr_novilhos_maior_ate12Arrouba_dezembro                = dados["nr_novilhos_maior_ate12Arrouba_dezembro"],
                        nr_novilhos_maior_ate12Arrouba_peso_medio_dezembro     = dados["nr_novilhos_maior_ate12@_peso_medio_dezembro"],

                        #novilhas ate 12 arroubas
                        nr_novilhas_ate12Arrouba_janeiro                 = dados["nr_novilhas_ate12Arrouba_janeiro"],
                        nr_novilhas_ate12Arrouba_peso_medio_janeiro      = dados["nr_novilhas_ate12Arrouba_peso_medio_janeiro"],
                        nr_novilhas_ate12Arrouba_fevereiro               = dados["nr_novilhas_ate12Arrouba_fevereir"],
                        nr_novilhas_ate12Arrouba_peso_medio_fevereiro    = dados["nr_novilhas_ate12Arrouba_peso_medio_fevereir"],
                        nr_novilhas_ate12Arrouba_marco                   = dados["nr_novilhas_ate12Arrouba_marco"],
                        nr_novilhas_ate12Arrouba_peso_medio_marco        = dados["nr_novilhas_ate12Arrouba_peso_medio_marco"],
                        nr_novilhas_ate12Arrouba_abril                   = dados["nr_novilhas_ate12Arrouba_abril"],
                        nr_novilhas_ate12Arrouba_peso_medio_abriu        = dados["nr_novilhas_ate12Arrouba_peso_medio_abriu"],
                        nr_novilhas_ate12Arrouba_maio                    = dados["nr_novilhas_ate12Arrouba_maio"],
                        nr_novilhas_ate12Arrouba_peso_medio_maio         = dados["nr_novilhas_ate12Arrouba_peso_medio_maio"],
                        nr_novilhas_ate12Arrouba_junho                   = dados["nr_novilhas_ate12Arrouba_junho"],
                        nr_novilhas_ate12Arrouba_peso_medio_junho        = dados["nr_novilhas_ate12Arrouba_peso_medio_junho"],
                        nr_novilhas_ate12Arrouba_julho                   = dados["nr_novilhas_ate12Arrouba_julho"],
                        nr_novilhas_ate12Arrouba_peso_medio_julho        = dados["nr_novilhas_ate12Arrouba_peso_medio_julho"],
                        nr_novilhas_ate12Arrouba_agosto                  = dados["nr_novilhas_ate12Arrouba_agosto"],
                        nr_novilhas_ate12Arrouba_peso_medio_agosto       = dados["nr_novilhas_ate12Arrouba_peso_medio_agosto"],
                        nr_novilhas_ate12Arrouba_setembro                = dados["nr_novilhas_ate12Arrouba_setembro"],
                        nr_novilhas_ate12Arrouba_peso_medio_setembro     = dados["nr_novilhas_ate12Arrouba_peso_medio_setembro"],
                        nr_novilhas_ate12Arrouba_outubro                 = dados["nr_novilhas_ate12Arrouba_outubro"],
                        nr_novilhas_ate12Arrouba_peso_medio_outubro      = dados["nr_novilhas_ate12Arrouba_peso_medio_outubro"],
                        nr_novilhas_ate12Arrouba_novembro                = dados["nr_novilhas_ate12Arrouba_novembro"],
                        nr_novilhas_ate12Arrouba_peso_medio_novembro     = dados["nr_novilhas_ate12Arrouba_peso_medio_novembro"],
                        nr_novilhas_ate12Arrouba_dezembro                = dados["nr_novilhas_ate12Arrouba_dezembro"],
                        nr_novilhas_ate12Arrouba_peso_medio_dezembro     = dados["nr_novilhos_maior_ate12@_peso_medio_dezembro"],

                        #numero de bezerros

                        nr_bezerros_janeiro                 = dados["nr_bezerros_janeiro"],
                        nr_bezerros_peso_medio_janeiro      = dados["nr_bezerros_peso_medio_janeiro"],
                        nr_bezerros_fevereiro               = dados["nr_bezerros_fevereir"],
                        nr_bezerros_peso_medio_fevereiro    = dados["nr_bezerros_peso_medio_fevereir"],
                        nr_bezerros_marco                   = dados["nr_bezerros_marco"],
                        nr_bezerros_peso_medio_marco        = dados["nr_bezerros_peso_medio_marco"],
                        nr_bezerros_abril                   = dados["nr_bezerros_abril"],
                        nr_bezerros_peso_medio_abriu        = dados["nr_bezerros_peso_medio_abriu"],
                        nr_bezerros_maio                    = dados["nr_bezerros_maio"],
                        nr_bezerros_peso_medio_maio         = dados["nr_bezerros_peso_medio_maio"],
                        nr_bezerros_junho                   = dados["nr_bezerros_junho"],
                        nr_bezerros_peso_medio_junho        = dados["nr_bezerros_peso_medio_junho"],
                        nr_bezerros_julho                   = dados["nr_bezerros_julho"],
                        nr_bezerros_peso_medio_julho        = dados["nr_bezerros_peso_medio_julho"],
                        nr_bezerros_agosto                  = dados["nr_bezerros_agosto"],
                        nr_bezerros_peso_medio_agosto       = dados["nr_bezerros_peso_medio_agosto"],
                        nr_bezerros_setembro                = dados["nr_bezerros_setembro"],
                        nr_bezerros_peso_medio_setembro     = dados["nr_bezerros_peso_medio_setembro"],
                        nr_bezerros_outubro                 = dados["nr_bezerros_outubro"],
                        nr_bezerros_peso_medio_outubro      = dados["nr_bezerros_peso_medio_outubro"],
                        nr_bezerros_novembro                = dados["nr_bezerros_novembro"],
                        nr_bezerros_peso_medio_novembro     = dados["nr_bezerros_peso_medio_novembro"],
                        nr_bezerros_dezembro                = dados["nr_bezerros_dezembro"],
                        nr_bezerros_peso_medio_dezembro     = dados["nr_bezerros_peso_medio_dezembro"],

                        #numero de bezerras

                        nr_bezerras_janeiro                 = dados["nr_bezerras_janeiro"],
                        nr_bezerras_peso_medio_janeiro      = dados["nr_bezerras_peso_medio_janeiro"],
                        nr_bezerras_fevereiro               = dados["nr_bezerras_fevereir"],
                        nr_bezerras_peso_medio_fevereiro    = dados["nr_bezerras_peso_medio_fevereir"],
                        nr_bezerras_marco                   = dados["nr_bezerras_marco"],
                        nr_bezerras_peso_medio_marco        = dados["nr_bezerras_peso_medio_marco"],
                        nr_bezerras_abril                   = dados["nr_bezerras_abril"],
                        nr_bezerras_peso_medio_abriu        = dados["nr_bezerras_peso_medio_abriu"],
                        nr_bezerras_maio                    = dados["nr_bezerras_maio"],
                        nr_bezerras_peso_medio_maio         = dados["nr_bezerras_peso_medio_maio"],
                        nr_bezerras_junho                   = dados["nr_bezerras_junho"],
                        nr_bezerras_peso_medio_junho        = dados["nr_bezerras_peso_medio_junho"],
                        nr_bezerras_julho                   = dados["nr_bezerras_julho"],
                        nr_bezerras_peso_medio_julho        = dados["nr_bezerras_peso_medio_julho"],
                        nr_bezerras_agosto                  = dados["nr_bezerras_agosto"],
                        nr_bezerras_peso_medio_agosto       = dados["nr_bezerras_peso_medio_agosto"],
                        nr_bezerras_setembro                = dados["nr_bezerras_setembro"],
                        nr_bezerras_peso_medio_setembro     = dados["nr_bezerras_peso_medio_setembro"],
                        nr_bezerras_outubro                 = dados["nr_bezerras_outubro"],
                        nr_bezerras_peso_medio_outubro      = dados["nr_bezerras_peso_medio_outubro"],
                        nr_bezerras_novembro                = dados["nr_bezerras_novembro"],
                        nr_bezerras_peso_medio_novembro     = dados["nr_bezerras_peso_medio_novembro"],
                        nr_bezerras_dezembro                = dados["nr_bezerras_dezembro"],
                        nr_bezerras_peso_medio_dezembro     = dados["nr_bezerras_peso_medio_dezembro"],

                        #numero de outros

                        nr_outros_janeiro                 = dados["nr_outros_janeiro"],
                        nr_outros_peso_medio_janeiro      = dados["nr_outros_peso_medio_janeiro"],
                        nr_outros_fevereiro               = dados["nr_outros_fevereir"],
                        nr_outros_peso_medio_fevereiro    = dados["nr_outros_peso_medio_fevereir"],
                        nr_outros_marco                   = dados["nr_outros_marco"],
                        nr_outros_peso_medio_marco        = dados["nr_outros_peso_medio_marco"],
                        nr_outros_abril                   = dados["nr_outros_abril"],
                        nr_outros_peso_medio_abriu        = dados["nr_outros_peso_medio_abriu"],
                        nr_outros_maio                    = dados["nr_outros_maio"],
                        nr_outros_peso_medio_maio         = dados["nr_outros_peso_medio_maio"],
                        nr_outros_junho                   = dados["nr_outros_junho"],
                        nr_outros_peso_medio_junho        = dados["nr_outros_peso_medio_junho"],
                        nr_outros_julho                   = dados["nr_outros_julho"],
                        nr_outros_peso_medio_julho        = dados["nr_outros_peso_medio_julho"],
                        nr_outros_agosto                  = dados["nr_outros_agosto"],
                        nr_outros_peso_medio_agosto       = dados["nr_outros_peso_medio_agosto"],
                        nr_outros_setembro                = dados["nr_outros_setembro"],
                        nr_outros_peso_medio_setembro     = dados["nr_outros_peso_medio_setembro"],
                        nr_outros_outubro                 = dados["nr_outros_outubro"],
                        nr_outros_peso_medio_outubro      = dados["nr_outros_peso_medio_outubro"],
                        nr_outros_novembro                = dados["nr_outros_novembro"],
                        nr_outros_peso_medio_novembro     = dados["nr_outros_peso_medio_novembro"],
                        nr_outros_dezembro                = dados["nr_outros_dezembro"],
                        nr_outros_peso_medio_dezembro     = dados["nr_outros_peso_medio_dezembro"],

                        #numero de equideos

                        nr_equideos_janeiro                 = dados["nr_equideos_janeiro"],
                        nr_equideos_peso_medio_janeiro      = dados["nr_equideos_peso_medio_janeiro"],
                        nr_equideos_fevereiro               = dados["nr_equideos_fevereir"],
                        nr_equideos_peso_medio_fevereiro    = dados["nr_equideos_peso_medio_fevereir"],
                        nr_equideos_marco                   = dados["nr_equideos_marco"],
                        nr_equideos_peso_medio_marco        = dados["nr_equideos_peso_medio_marco"],
                        nr_equideos_abril                   = dados["nr_equideos_abril"],
                        nr_equideos_peso_medio_abriu        = dados["nr_equideos_peso_medio_abriu"],
                        nr_equideos_maio                    = dados["nr_equideos_maio"],
                        nr_equideos_peso_medio_maio         = dados["nr_equideos_peso_medio_maio"],
                        nr_equideos_junho                   = dados["nr_equideos_junho"],
                        nr_equideos_peso_medio_junho        = dados["nr_equideos_peso_medio_junho"],
                        nr_equideos_julho                   = dados["nr_equideos_julho"],
                        nr_equideos_peso_medio_julho        = dados["nr_equideos_peso_medio_julho"],
                        nr_equideos_agosto                  = dados["nr_equideos_agosto"],
                        nr_equideos_peso_medio_agosto       = dados["nr_equideos_peso_medio_agosto"],
                        nr_equideos_setembro                = dados["nr_equideos_setembro"],
                        nr_equideos_peso_medio_setembro     = dados["nr_equideos_peso_medio_setembro"],
                        nr_equideos_outubro                 = dados["nr_equideos_outubro"],
                        nr_equideos_peso_medio_outubro      = dados["nr_equideos_peso_medio_outubro"],
                        nr_equideos_novembro                = dados["nr_equideos_novembro"],
                        nr_equideos_peso_medio_novembro     = dados["nr_equideos_peso_medio_novembro"],
                        nr_equideos_dezembro                = dados["nr_equideos_dezembro"],
                        nr_equideos_peso_medio_dezembro     = dados["nr_equideos_peso_medio_dezembro"],

                        #total cabecas

                        total_cabecas_janeiro                 = dados["total_cabecas_janeiro"],
                        total_cabecas_peso_medio_janeiro      = dados["total_cabecas_peso_medio_janeiro"],
                        total_cabecas_fevereiro               = dados["total_cabecas_fevereir"],
                        total_cabecas_peso_medio_fevereiro    = dados["total_cabecas_peso_medio_fevereir"],
                        total_cabecas_marco                   = dados["total_cabecas_marco"],
                        total_cabecas_peso_medio_marco        = dados["total_cabecas_peso_medio_marco"],
                        total_cabecas_abril                   = dados["total_cabecas_abril"],
                        total_cabecas_peso_medio_abriu        = dados["total_cabecas_peso_medio_abriu"],
                        total_cabecas_maio                    = dados["total_cabecas_maio"],
                        total_cabecas_peso_medio_maio         = dados["total_cabecas_peso_medio_maio"],
                        total_cabecas_junho                   = dados["total_cabecas_junho"],
                        total_cabecas_peso_medio_junho        = dados["total_cabecas_peso_medio_junho"],
                        total_cabecas_julho                   = dados["total_cabecas_julho"],
                        total_cabecas_peso_medio_julho        = dados["total_cabecas_peso_medio_julho"],
                        total_cabecas_agosto                  = dados["total_cabecas_agosto"],
                        total_cabecas_peso_medio_agosto       = dados["total_cabecas_peso_medio_agosto"],
                        total_cabecas_setembro                = dados["total_cabecas_setembro"],
                        total_cabecas_peso_medio_setembro     = dados["total_cabecas_peso_medio_setembro"],
                        total_cabecas_outubro                 = dados["total_cabecas_outubro"],
                        total_cabecas_peso_medio_outubro      = dados["total_cabecas_peso_medio_outubro"],
                        total_cabecas_novembro                = dados["total_cabecas_novembro"],
                        total_cabecas_peso_medio_novembro     = dados["total_cabecas_peso_medio_novembro"],
                        total_cabecas_dezembro                = dados["total_cabecas_dezembro"],
                        total_cabecas_peso_medio_dezembro     = dados["total_cabecas_peso_medio_dezembro"],

                        #Estoque em arroubas

                        estoque_em_arroubas_janeiro                 = dados["estoque_em_arroubas_janeiro"],
                        estoque_em_arroubas_peso_medio_janeiro      = dados["estoque_em_arroubas_peso_medio_janeiro"],
                        estoque_em_arroubas_fevereiro               = dados["estoque_em_arroubas_fevereir"],
                        estoque_em_arroubas_peso_medio_fevereiro    = dados["estoque_em_arroubas_peso_medio_fevereir"],
                        estoque_em_arroubas_marco                   = dados["estoque_em_arroubas_marco"],
                        estoque_em_arroubas_peso_medio_marco        = dados["estoque_em_arroubas_peso_medio_marco"],
                        estoque_em_arroubas_abril                   = dados["estoque_em_arroubas_abril"],
                        estoque_em_arroubas_peso_medio_abriu        = dados["estoque_em_arroubas_peso_medio_abriu"],
                        estoque_em_arroubas_maio                    = dados["estoque_em_arroubas_maio"],
                        estoque_em_arroubas_peso_medio_maio         = dados["estoque_em_arroubas_peso_medio_maio"],
                        estoque_em_arroubas_junho                   = dados["estoque_em_arroubas_junho"],
                        estoque_em_arroubas_peso_medio_junho        = dados["estoque_em_arroubas_peso_medio_junho"],
                        estoque_em_arroubas_julho                   = dados["estoque_em_arroubas_julho"],
                        estoque_em_arroubas_peso_medio_julho        = dados["estoque_em_arroubas_peso_medio_julho"],
                        estoque_em_arroubas_agosto                  = dados["estoque_em_arroubas_agosto"],
                        estoque_em_arroubas_peso_medio_agosto       = dados["estoque_em_arroubas_peso_medio_agosto"],
                        estoque_em_arroubas_setembro                = dados["estoque_em_arroubas_setembro"],
                        estoque_em_arroubas_peso_medio_setembro     = dados["estoque_em_arroubas_peso_medio_setembro"],
                        estoque_em_arroubas_outubro                 = dados["estoque_em_arroubas_outubro"],
                        estoque_em_arroubas_peso_medio_outubro      = dados["estoque_em_arroubas_peso_medio_outubro"],
                        estoque_em_arroubas_novembro                = dados["estoque_em_arroubas_novembro"],
                        estoque_em_arroubas_peso_medio_novembro     = dados["estoque_em_arroubas_peso_medio_novembro"],
                        estoque_em_arroubas_dezembro                = dados["estoque_em_arroubas_dezembro"],
                        estoque_em_arroubas_peso_medio_dezembro     = dados["estoque_em_arroubas_peso_medio_dezembro"],

                        #area util

                        area_util_janeiro                 = dados["area_util_janeiro"],
                        area_util_peso_medio_janeiro      = dados["area_util_peso_medio_janeiro"],
                        area_util_fevereiro               = dados["area_util_fevereir"],
                        area_util_peso_medio_fevereiro    = dados["area_util_peso_medio_fevereir"],
                        area_util_marco                   = dados["area_util_marco"],
                        area_util_peso_medio_marco        = dados["area_util_peso_medio_marco"],
                        area_util_abril                   = dados["area_util_abril"],
                        area_util_peso_medio_abriu        = dados["area_util_peso_medio_abriu"],
                        area_util_maio                    = dados["area_util_maio"],
                        area_util_peso_medio_maio         = dados["area_util_peso_medio_maio"],
                        area_util_junho                   = dados["area_util_junho"],
                        area_util_peso_medio_junho        = dados["area_util_peso_medio_junho"],
                        area_util_julho                   = dados["area_util_julho"],
                        area_util_peso_medio_julho        = dados["area_util_peso_medio_julho"],
                        area_util_agosto                  = dados["area_util_agosto"],
                        area_util_peso_medio_agosto       = dados["area_util_peso_medio_agosto"],
                        area_util_setembro                = dados["area_util_setembro"],
                        area_util_peso_medio_setembro     = dados["area_util_peso_medio_setembro"],
                        area_util_outubro                 = dados["area_util_outubro"],
                        area_util_peso_medio_outubro      = dados["area_util_peso_medio_outubro"],
                        area_util_novembro                = dados["area_util_novembro"],
                        area_util_peso_medio_novembro     = dados["area_util_peso_medio_novembro"],
                        area_util_dezembro                = dados["area_util_dezembro"],
                        area_util_peso_medio_dezembro     = dados["area_util_peso_medio_dezembro"])

            item.save()
    else:
        form = FormEvolucaoRebanho()
    return render_to_response("custos/evolucao_rebanho.html",{"form":form}, context_instance = RequestContext(request))

