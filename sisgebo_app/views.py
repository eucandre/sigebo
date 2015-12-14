from django.template import RequestContext
from forms import *
from django.shortcuts import HttpResponse, render_to_response


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
            form.save()
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
            dados = form.cleaned_data
            item  = Compra_e_venda(fazenda = dados['fazenda'], descarte_vacas= dados['descarte_vacas'])
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
    return render_to_response("dimensionamento_fechado.html", {"form":form}, context_instance = RequestContext(request))

def gastos_veterinarios(request):
    if request.method=='post':
        form = FormGastos_veterinarios(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Gastos_Produtos_veterinarios(fazenda = dados['fazenda'], ano= dados['ano'], vacinas = dados['vacinas'],
                Outros_medicamentos=dados['Outros_medicamentos'],sal_mineral=dados['sal_mineral'], sal_proteico=dados['sal_proteico'],racao_concentrada=dados['racao_concentrada'],
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
        form = FormMaoObra()
    return render_to_response("gastos_veterinarios.html", {"form":form}, context_instance = RequestContext(request))

#para os relatorios financeiros

def inventario_atividade(request):
    if request.method=='post':
        form = FormRendimentoCarcaca(request.POST, request.FILES)
        if form.is_valid():
            dados = form.cleaned_data
            item  = Rendiemnto_carcaca(fazenda = dados['fazenda'], Insumos_valor_inicial_mercado= dados['Insumos_valor_inicial_mercado'], Insumos_capital_medio = dados['Insumos_capital_medio'],
                Insumos_valor_final_ou_sucata =dados['Insumos_valor_final_ou_sucata '],Insumos_porcentagem_patrimonio=dados['Insumos_porcentagem_patrimonio'], 
                maquinas_implementos_valor_inicial_de_mercado =dados['maquinas_implementos_valor_inicial_de_mercado '],
                maquinas_implementos_capital_medio =dados['maquinas_implementos_capital_medio '],maquinas_implementos_valor_final_ou_sucata =dados['maquinas_implementos_valor_final_ou_sucata'],
                maquinas_implementos_porcentagem_patrimonio=dados['maquinas_implementos_porcentagem_patrimonio']
                ,tratores_valor_inicial_de_mercado =dados['tratores_valor_inicial_de_mercado '],tratores_capital_medio=dados['tratores_capital_medio'],
                tratores_valor_final_ou_sucata =dados['tratores_valor_final_ou_sucata'],tratores_porcentagem_patrimonio=dados['tratores_porcentagem_patrimonio']
                ,outros_alimentos=dados['outros_alimentos'],outros_alimentos=dados['outros_alimentos'],outros_alimentos=dados['outros_alimentos'],outros_alimentos=dados['outros_alimentos'],
                outros_alimentos=dados['outros_alimentos'])
            item.save()
    else:
        form = FormMaoObra()
    return render_to_response("gastos_veterinarios.html", {"form":form}, context_instance = RequestContext(request))
     

    veiculos_valor_inicial_de_mercado  
    veiculos_capital_medio  
    veiculos_valor_final_ou_sucata  
    veiculos_porcentagem_patrimonio  

    equipamentos_manuais_valor_inicial_de_mercado  
    equipamentos_manuais_capital_medio  
    equipamentos_manuais_valor_final_ou_sucata  
    equipamentos_manuais_porcentagem_patrimonio  

    reprodutores_macho_valor_inicial_de_mercado  
    reprodutores_macho_capital_medio  
    reprodutores_macho_valor_final_ou_sucata  
    reprodutores_macho_porcentagem_patrimonio  

    reprodutores_femea_valor_inicial_de_mercado  
    reprodutores_femea_capital_medio  
    reprodutores_femea_valor_final_ou_sucata  
    reprodutores_femea_porcentagem_patrimonio  

    animais_engorda_valor_inicial_de_mercado  
    animais_engorda_capital_medio  
    animais_engorda_valor_final_ou_sucata  
    animais_engorda_porcentagem_patrimonio  

    animais_trabalho_valor_inicial_de_mercado  
    animais_trabalho_capital_medio  
    animais_trabalho_valor_final_ou_sucata  
    animais_trabalho_porcentagem_patrimonio  

    canavial_ou_volumoso_valor_inicial_de_mercado  
    canavial_ou_volumoso_capital_medio  
    canavial_ou_volumoso_valor_final_ou_sucata  
    canavial_ou_volumoso_porcentagem_patrimonio  

    benfeitorias_valor_inicial_de_mercado  
    benfeitorias_capital_medio  
    benfeitorias_valor_final_ou_sucata  
    benfeitorias_porcentagem_patrimonio  

    cercas_valor_inicial_de_mercado  
    cercas_capital_medio  
    cercas_valor_final_ou_sucata  
    cercas_porcentagem_patrimonio  

    edificacoes_valor_inicial_de_mercado  
    edificacoes_capital_medio  
    edificacoes_valor_final_ou_sucata  
    edificacoes_porcentagem_patrimonio  

    pastagem_valor_inicial_de_mercado  
    pastagem_capital_medio  
    pastagem_valor_final_ou_sucata  
    pastagem_porcentagem_patrimonio  

    semem_valor_inicial_de_mercado  
    semem_capital_medio  
    semem_valor_final_ou_sucata  
    semem_porcentagem_patrimonio  

    terra_valor_inicial_de_mercado  
    terra_capital_medio  
    terra_valor_final_ou_sucata  
    terra_porcentagem_patrimonio  
