# coding= utf-8
from django.db import models

UF =((u'Acre','Acre'),(u'Alagoas','Alagoas'),(u'Amapa','Amapá'),(u'Amazonas','Amazonas'),(u'Bahia','Bahia'),
(u'Ceara','Ceará'),(u'Distrito Federal','Distrito federal'),(u'Espirito Santo','Espirito Santo'),(u'Goias','Goias'),
(u'Maranhao','Maranhão'),(u'Mato Grosso','Mato grosso'),(u'Mato Grosso do Sul','Matogrosso do sul'),(u'Minas Gerais','Minas gerais'),
(u'Para','Pará'),(u'Paraiba','Parraíba'),(u'Parana','Paraná'),(u'Pernambuco','Pernambuco'),(u'Piaui','Piauí'),
(u'Rio de janeiro','Rio de janeiro'),(u'Rio Grande do Sul','Rio grande do suç'),(u'Rio Grande do Norte','Rio grande do norte'),
(u'Rondonia','Rondônia'),(u'Roraima','Roraima'),(u'Santa Catarina','Santa catarina'),(u'Sao paulo','São paulo'),
(u'Sergipe','Sergipe'),(u'Tocantins','Tocantins'),)

CARGO=((u'Peao','Peao'),(u'Capataz','Capataz'),(u'Gerente','Gerente'),(u'Tratorista','Tratorista'),(u'Outros','Outros'))
TIPO = ((u'Aberto','Abreto'),(u'Fechado','Fechado'))



class fazenda(models.Model):
    '''
    Classe que cadastra a fazenda e o endereço de cada fazenda assim como os contatos para a mesma.
    '''

    nome_fazenda = models.CharField(max_length=150)
    uf_municipio = models.CharField(max_length=100, choices=UF)

    #endereço da propriedade
    proprietario = models.CharField(max_length=150)
    cidade = models.CharField(max_length=150)
    rua = models.CharField(max_length=150)
    numero = models.IntegerField()
    cep = models.CharField(max_length=8)

    #contato
    telelfone = models.CharField(max_length=10)
    email = models.EmailField()

    def __unicode__(self):
        return self.nome_fazenda

    class Meta:
        verbose_name_plural = u'fazenda'
        db_table = u'fazenda'

class Definicao_sistema_e_rebanho_inicial(models.Model):
    '''
        Campos de preenchimento de número de animais para o sistema em um rebanho inicial.
        A classe conta com a quantidade de animais de uma forma geral, conta com os seus índices de produção e conta com
    os cálculos baseando-se nesses dados preenchidos.
        Os valores dos índices para a tabela serão preenchidos por default, se explica a persistência desses dados no banco de
    dados pelo fato que serem fonte de consulta para um relatório, já que poderão serem mudados mesmo sendo padrão, este relatório
    irá mostrar o porque o resultado dado na tabela.
        A tabela de cálculos será concebida apenas na amostra, não ficará em banco de dados.
    '''
    fazenda = models.ForeignKey(fazenda)
    #campos para recebimento de quantidades de animais, podem ser editados
    vacas = models.IntegerField(editable=True)
    novilhas34 =models.IntegerField(editable=True)
    novilhas23 =models.IntegerField(editable=True)
    novilhas12 =models.IntegerField(editable=True)
    bezerras01 =models.IntegerField(editable=True)
    bezerros01 =models.IntegerField(editable=True)
    machos12 =models.IntegerField(editable=True)
    machos23 =models.IntegerField(editable=True)
    machos34 =models.IntegerField(editable=True)
    machos_maior_que_4 =models.IntegerField(editable=True)
    touros =models.IntegerField(editable=True)
    tourunos =models.IntegerField(editable=True)
    vacas_descarte =models.IntegerField(editable=True)
    total =models.IntegerField(editable=True)

    #indices editáveis para a tabela do cálculo para evolução do rebanho
    #Esses campos são explicados, para o banco de dados, para um relatório futuro
    fertilidade = models.IntegerField()
    mortalidade01 = models.IntegerField()
    mortalidade12 = models.IntegerField()
    reposicao = models.IntegerField()
    numero_vacas_touro = models.IntegerField()
    peso_medio_arrouba_novilho = models.FloatField()
    peso_medio_arrouba_vacas = models.FloatField()
    intervalo_entre_partos = models.IntegerField()
    idade_primeira_cria = models.IntegerField()
    peso_a_desmama = models.FloatField()
    peso_a_nascer = models.FloatField()
    preco_arrouba = models.FloatField()

    def __unicode__(self):
        return self.fazenda

    class Meta:
        verbose_name_plural = u"Definição do sistema e do rebanho inicial"
        db_table = u"Definicao Rebanho Inicial"

class pastagem(models.Model):



    Fazenda = models.ForeignKey(fazenda)
    area_pasto = models.FloatField()
    areas_comprar = models.FloatField(blank=True)
    areas_formar = models.FloatField(blank=True)
    cap_suporte = models.FloatField()
    cap_suporte2 = models.FloatField()
    cap_suporte3 = models.FloatField()
    cap_suporte4= models.FloatField()
    cap_suporte5 = models.FloatField()
    cap_suporte6 = models.FloatField()
    cap_suporte7 = models.FloatField()
    cap_suporte8 = models.FloatField()
    cap_suporte9 = models.FloatField()
    cap_suporte10 = models.FloatField()
    cap_suporte11 = models.FloatField()

    aluguel = models.FloatField(blank=True)
    n_machos = models.CharField(max_length=150,)
    peso_machos_kg = models.FloatField()
    n_femeas = models.CharField(max_length=150,)
    peso_femeas_kg = models.FloatField()
    tempo_descanso = models.IntegerField()
    tempo_pastejo = models.IntegerField()
    animais_6_12 = models.CharField(max_length=150,)
    peso_animais6_12_kg = models.FloatField()
    animais_12_21 =models.CharField(max_length=150,)
    peso_animais12_21_kg = models.FloatField()

    n_piquetes_categoria = models.IntegerField()
    areas_piquetes_machos_hectare= models.FloatField()
    razao_area_piquete_categoria_piquete_machos = models.FloatField()
    areas_piquetes_femeas_hectare= models.FloatField()
    razao_area_piquete_categoria_piquete_femeas = models.FloatField()
    areas_piquetes_animais6_12_m= models.FloatField()
    razao_area_piquete_categoria_piquete_animais6_12 = models.FloatField()
    areas_piquetes_animais12_21_m= models.FloatField()
    razao_area_piquete_categoria_piquete_animais12_21 = models.FloatField()
    areas_piquetes_total_hectare= models.FloatField()
    areas_comrar_hectare= models.FloatField()

    def __unicode__(self):
        return self.Fazenda

    class Meta:
        verbose_name_plural = u"Pastagem"

class Compra_e_venda(models.Model):



    fazenda = models.ForeignKey(fazenda)
    ano = models.DateField()
    descarte_vacas= models.CharField(max_length=150)
    descarte_novilhos_as = models.CharField(max_length=150,)
    Bezerras_desmamadas = models.CharField(max_length=150, )
    Bezerros_desmamados = models.CharField(max_length=150, )
    Machos_1_2 = models.CharField(max_length=150, )
    Machos_2_3 = models.CharField(max_length=150, )
    Machos_3_4 = models.CharField(max_length=150, )
    Machos_4_mais = models.CharField(max_length=150,)


    Vacas_paridas_compra = models.IntegerField()
    Vacas_solteiras_compra = models.IntegerField()
    Novilhas_34_Compra= models.IntegerField()
    Novilhas_32_Compra= models.IntegerField()
    Novilhas_12_Compra= models.IntegerField()
    Bezerra_01_Compra = models.IntegerField()
    Bezerro_01_Compra = models.IntegerField()
    Machos_12_Compra = models.IntegerField()
    Machos_23_Compra = models.IntegerField()
    Machos_34_Compra = models.IntegerField()
    Machos_4mais_Compra = models.IntegerField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u'Venda e Compra'


class Confinamento(models.Model):
    #a = Alimentos()
    #obj_alimento = Alimentos.objects.get(pk = len(Alimentos.objects.all()))
    fazenda = models.ForeignKey(fazenda)
    N_animais_confinados = models.IntegerField()
    Peso_inicial = models.FloatField()

    Peso_Final = models.FloatField()
    Consumo_ms = models.FloatField()
    Consumo_agua = models.IntegerField()
    Preco_concentrado = models.FloatField()
    volumoso = models.FloatField()
    #Concentrado = models.FloatField()
    tempo_confinamento = models.IntegerField()
    data = models.DateField(auto_now_add=True)
    #alimento = models.ForeignKey(Alimentos)# a materia do alimento para que seja feito o calculo da area para plantar
    #pms_ha = models.FloatField()#default=obj_alimento.pms_do_alimento_ha)#ForeignKey(pms_regisitros)#esse eh relacionado a materia de alimento

    def __unicode__(self):
        return self.fazenda


class Dimensionamento_Silo_ceu_aberto(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Duracao_confinamento = models.IntegerField()
    Comsumo_silagem = models.FloatField()
    Densidade = models.IntegerField()
    Altura_Silo = models.FloatField()
    Base_menor_silo = models.FloatField()
    Base_maior_silo = models.FloatField()
    tempo_confinamento = models.IntegerField()
    Ms_silagem = models.FloatField()
    Consumo_diario = models.FloatField()

    Fatia_diaria = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Dimensionamento ceu aberto"

class Dimensionamento_Silo_galpao_fechado(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Duracao_confinamento = models.IntegerField()
    Comsumo_silagem = models.FloatField()
    Densidade = models.IntegerField()
    Altura_Silo = models.FloatField()
    Base_menor_silo = models.FloatField()
    Base_maior_silo = models.FloatField()
    Ms_silagem = models.FloatField()
    Consumo_diario = models.FloatField()
    tempo_confinamento = models.IntegerField()
    Fatia_diaria = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Dimensionamento galpao fechado"


class Mao_Obra(models.Model):
    fazenda = models.ForeignKey(fazenda)
    mes = models.DateField()
    encargos = models.FloatField()
    getente = models.IntegerField()
    capataz = models.IntegerField()
    peao = models.IntegerField()
    tratorista = models.IntegerField()
    outro = models.IntegerField()
    gerente_valor_fixado = models.FloatField()
    capataz_valor_fixado = models.FloatField()
    peao_valor_fixado = models.FloatField()
    tratorista_valor_fixado = models.FloatField()
    outro_valor_fixado = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Mao de obra"


class Gastos_Produtos_veterinarios(models.Model):
    fazenda = models.ForeignKey(fazenda)
    ano = models.DateField()
    vacinas = models.FloatField()
    vacinas_ru_ano = models.FloatField()
    Outros_medicamentos = models.FloatField()
    Outros_medicamentos_ru_ano = models.FloatField()
    sal_mineral = models.FloatField()
    sal_mineral_ru_ano = models.FloatField()
    sal_proteico = models.FloatField()
    racao_concentrada = models.FloatField()
    Creep_feeding = models.FloatField()
    outros_alimentos = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Gastos com produtos veterinarios"


class Rendiemnto_carcaca(models.Model):
    fazenda = models.ForeignKey(fazenda)
    ano = models.DateField()
    vaca_gorda_kg = models.IntegerField()
    novilha_gosda_kg = models.IntegerField()
    boi_gordo_kg = models.IntegerField()
    novilho_precoce_kg = models.IntegerField()
    touro_kg = models.IntegerField()

    vaca_gorda_cento = models.IntegerField()
    novilha_gorda_cento= models.IntegerField()
    boi_gordo_cento= models.IntegerField()
    novilho_gordo_cento =  models.IntegerField()
    touro_cento = models.IntegerField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Rendimento de carcaca"


#parte para o inventário
class Inventario_ligado_atividade(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Insumos_valor_inicial_mercado = models.FloatField()
    Insumos_capital_medio = models.FloatField()
    Insumos_valor_final_ou_sucata = models.FloatField()
    Insumos_porcentagem_patrimonio = models.FloatField()

    maquinas_implementos_valor_inicial_de_mercado = models.FloatField()
    maquinas_implementos_capital_medio = models.FloatField()
    maquinas_implementos_valor_final_ou_sucata = models.FloatField()
    maquinas_implementos_porcentagem_patrimonio = models.FloatField()

    tratores_valor_inicial_de_mercado = models.FloatField()
    tratores_capital_medio = models.FloatField()
    tratores_valor_final_ou_sucata = models.FloatField()
    tratores_porcentagem_patrimonio = models.FloatField()

    veiculos_valor_inicial_de_mercado = models.FloatField()
    veiculos_capital_medio = models.FloatField()
    veiculos_valor_final_ou_sucata = models.FloatField()
    veiculos_porcentagem_patrimonio = models.FloatField()

    equipamentos_manuais_valor_inicial_de_mercado = models.FloatField()
    equipamentos_manuais_capital_medio = models.FloatField()
    equipamentos_manuais_valor_final_ou_sucata = models.FloatField()
    equipamentos_manuais_porcentagem_patrimonio = models.FloatField()

    reprodutores_macho_valor_inicial_de_mercado = models.FloatField()
    reprodutores_macho_capital_medio = models.FloatField()
    reprodutores_macho_valor_final_ou_sucata = models.FloatField()
    reprodutores_macho_porcentagem_patrimonio = models.FloatField()

    reprodutores_femea_valor_inicial_de_mercado = models.FloatField()
    reprodutores_femea_capital_medio = models.FloatField()
    reprodutores_femea_valor_final_ou_sucata = models.FloatField()
    reprodutores_femea_porcentagem_patrimonio = models.FloatField()

    animais_engorda_valor_inicial_de_mercado = models.FloatField()
    animais_engorda_capital_medio = models.FloatField()
    animais_engorda_valor_final_ou_sucata = models.FloatField()
    animais_engorda_porcentagem_patrimonio = models.FloatField()

    animais_trabalho_valor_inicial_de_mercado = models.FloatField()
    animais_trabalho_capital_medio = models.FloatField()
    animais_trabalho_valor_final_ou_sucata = models.FloatField()
    animais_trabalho_porcentagem_patrimonio = models.FloatField()

    canavial_ou_volumoso_valor_inicial_de_mercado = models.FloatField()
    canavial_ou_volumoso_capital_medio = models.FloatField()
    canavial_ou_volumoso_valor_final_ou_sucata = models.FloatField()
    canavial_ou_volumoso_porcentagem_patrimonio = models.FloatField()

    benfeitorias_valor_inicial_de_mercado = models.FloatField()
    benfeitorias_capital_medio = models.FloatField()
    benfeitorias_valor_final_ou_sucata = models.FloatField()
    benfeitorias_porcentagem_patrimonio = models.FloatField()

    cercas_valor_inicial_de_mercado = models.FloatField()
    cercas_capital_medio = models.FloatField()
    cercas_valor_final_ou_sucata = models.FloatField()
    cercas_porcentagem_patrimonio = models.FloatField()

    edificacoes_valor_inicial_de_mercado = models.FloatField()
    edificacoes_capital_medio = models.FloatField()
    edificacoes_valor_final_ou_sucata = models.FloatField()
    edificacoes_porcentagem_patrimonio = models.FloatField()

    pastagem_valor_inicial_de_mercado = models.FloatField()
    pastagem_capital_medio = models.FloatField()
    pastagem_valor_final_ou_sucata = models.FloatField()
    pastagem_porcentagem_patrimonio = models.FloatField()

    semem_valor_inicial_de_mercado = models.FloatField()
    semem_capital_medio = models.FloatField()
    semem_valor_final_ou_sucata = models.FloatField()
    semem_porcentagem_patrimonio = models.FloatField()

    terra_valor_inicial_de_mercado = models.FloatField()
    terra_capital_medio = models.FloatField()
    terra_valor_final_ou_sucata = models.FloatField()
    terra_porcentagem_patrimonio = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u'Inventario ligado a atividade'

class depreciacao(models.Model):
    fazenda = models.ForeignKey(fazenda)
    maquina_implemento_valor_inicial = models.FloatField()
    maquina_implemento_capital_medio = models.FloatField()
    maquina_implemento_valor_final_ou_sucata = models.FloatField()
    maquina_implemento_depreciacao_anual = models.FloatField()
    maquina_implemento_remuneracao_capital = models.FloatField()
    maquina_implemento_custo_fixo = models.FloatField()
    maquina_implemento_porcetagem_custo_fixo = models.FloatField()

    tratores_valor_inicial = models.FloatField()
    tratores_capital_medio = models.FloatField()
    tratores_valor_final_ou_sucata = models.FloatField()
    tratores_depreciacao_anual = models.FloatField()
    tratores_remuneracao_capital = models.FloatField()
    tratores_custo_fixo = models.FloatField()
    tratores_porcetagem_custo_fixo = models.FloatField()

    veiculos_valor_inicial = models.FloatField()
    veiculos_capital_medio = models.FloatField()
    veiculos_valor_final_ou_sucata = models.FloatField()
    veiculos_depreciacao_anual = models.FloatField()
    veiculos_remuneracao_capital = models.FloatField()
    veiculos_custo_fixo = models.FloatField()
    veiculos_porcetagem_custo_fixo = models.FloatField()

    equipamentos_manuais_valor_inicial = models.FloatField()
    equipamentos_manuais_capital_medio = models.FloatField()
    equipamentos_manuais_valor_final_ou_sucata = models.FloatField()
    equipamentos_manuais_depreciacao_anual = models.FloatField()
    equipamentos_manuais_remuneracao_capital = models.FloatField()
    equipamentos_manuais_custo_fixo = models.FloatField()
    equipamentos_manuais_porcetagem_custo_fixo = models.FloatField()

    reprodutores_machos_valor_inicial = models.FloatField()
    reprodutores_machos_capital_medio = models.FloatField()
    reprodutores_machos_valor_final_ou_sucata = models.FloatField()
    reprodutores_machos_depreciacao_anual = models.FloatField()
    reprodutores_machos_remuneracao_capital = models.FloatField()
    reprodutores_machos_custo_fixo = models.FloatField()
    reprodutores_machos_porcetagem_custo_fixo = models.FloatField()

    reprodutores_femeas_valor_inicial = models.FloatField()
    reprodutores_femeas_capital_medio = models.FloatField()
    reprodutores_femeas_valor_final_ou_sucata = models.FloatField()
    reprodutores_femeas_depreciacao_anual = models.FloatField()
    reprodutores_femeas_remuneracao_capital = models.FloatField()
    reprodutores_femeas_custo_fixo = models.FloatField()
    reprodutores_femeas_porcetagem_custo_fixo = models.FloatField()

    animais_trabalho_valor_inicial = models.FloatField()
    animais_trabalho_capital_medio = models.FloatField()
    animais_trabalho_valor_final_ou_sucata = models.FloatField()
    animais_trabalho_depreciacao_anual = models.FloatField()
    animais_trabalho_remuneracao_capital = models.FloatField()
    animais_trabalho_custo_fixo = models.FloatField()
    animais_trabalho_porcetagem_custo_fixo = models.FloatField()

    canavial_ou_volumoso_valor_inicial = models.FloatField()
    canavial_ou_volumoso_capital_medio = models.FloatField()
    canavial_ou_volumoso_valor_final_ou_sucata = models.FloatField()
    canavial_ou_volumoso_depreciacao_anual = models.FloatField()
    canavial_ou_volumoso_remuneracao_capital = models.FloatField()
    canavial_ou_volumoso_custo_fixo = models.FloatField()
    canavial_ou_volumoso_porcetagem_custo_fixo = models.FloatField()

    benfeitorias_valor_inicial = models.FloatField()
    benfeitorias_capital_medio = models.FloatField()
    benfeitorias_valor_final_ou_sucata = models.FloatField()
    benfeitorias_depreciacao_anual = models.FloatField()
    benfeitorias_remuneracao_capital = models.FloatField()
    benfeitorias_custo_fixo = models.FloatField()
    benfeitorias_porcetagem_custo_fixo = models.FloatField()

    cercas_valor_inicial = models.FloatField()
    cercas_capital_medio = models.FloatField()
    cercas_valor_final_ou_sucata = models.FloatField()
    cercas_depreciacao_anual = models.FloatField()
    cercas_remuneracao_capital = models.FloatField()
    cercas_custo_fixo = models.FloatField()
    cercas_porcetagem_custo_fixo = models.FloatField()

    edificacoes_valor_inicial = models.FloatField()
    edificacoes_capital_medio = models.FloatField()
    edificacoes_valor_final_ou_sucata = models.FloatField()
    edificacoes_depreciacao_anual = models.FloatField()
    edificacoes_remuneracao_capital = models.FloatField()
    edificacoes_custo_fixo = models.FloatField()
    edificacoes_porcetagem_custo_fixo = models.FloatField()

    pastagem_valor_inicial = models.FloatField()
    pastagem_capital_medio = models.FloatField()
    pastagem_valor_final_ou_sucata = models.FloatField()
    pastagem_depreciacao_anual = models.FloatField()
    pastagem_remuneracao_capital = models.FloatField()
    pastagem_custo_fixo = models.FloatField()
    pastagem_porcetagem_custo_fixo = models.FloatField()

    total_valor_inicial = models.FloatField()
    total_capital_medio = models.FloatField()
    total_valor_final_ou_sucata = models.FloatField()
    total_depreciacao_anual = models.FloatField()
    total_remuneracao_capital = models.FloatField()
    total_custo_fixo = models.FloatField()
    total_porcetagem_custo_fixo = models.FloatField()

    Depreciacao_mensal = models.FloatField()#
    jurus_remuneracao_ano = models.FloatField()#10

    #informacoes para os calculos

    maquina_implemento_calculo_depreciacao_anual = models.FloatField()
    maquina_implemento_calculo_amortizacao_ano = models.FloatField()

    tratores_calculo_depreciacao_anual = models.FloatField()
    tratores_calculo_amortizacao_ano = models.FloatField()

    veiculos_calculo_depreciacao_anual = models.FloatField()
    veiculos_calculo_amortizacao_ano = models.FloatField()

    equipamentos_manuais_calculo_depreciacao_anual = models.FloatField()
    equipamentos_manuais_calculo_amortizacao_ano = models.FloatField()

    reprodutores_machos_calculo_depreciacao_anual = models.FloatField()
    reprodutores_femeas_calculo_amortizacao_ano = models.FloatField()

    animais_de_trabalho_calculo_depreciacao_anual = models.FloatField()
    animais_de_trabalho_calculo_amortizacao_ano = models.FloatField()

    canavial_volumoso_calculo_depreciacao_anual = models.FloatField()
    canavial_volumoso_calculo_amortizacao_ano = models.FloatField()

    benfeitorias_calculo_depreciacao_anual = models.FloatField()
    benfeitorias_calculo_amortizacao_ano = models.FloatField()

    cercas_calculo_depreciacao_anual = models.FloatField()
    cercas_calculo_amortizacao_ano = models.FloatField()

    edificacoes_calculo_depreciacao_anual = models.FloatField()
    edificacoes_calculo_amortizacao_ano = models.FloatField()

    pastagem_calculo_depreciacao_anual = models.FloatField()
    pastagem_calculo_amortizacao_ano = models.FloatField()


    def __unicode__(self):
        return self.fazenda

    class Meta:
        verbose_name_plural = u"Depreciacao"


class evolucao_rebanho(models.Model):
    #janeiro
    fazenda = models.ForeignKey(fazenda)
    nr_matriz_janeiro = models.FloatField()
    nr_matriz_peso_medio_janeiro = models.FloatField()
    nr_matriz_fevereiro = models.FloatField()
    nr_matriz_peso_medio_fevereiro = models.FloatField()
    nr_matriz_merco = models.FloatField()
    nr_matriz_peso_medio_marco = models.FloatField()
    nr_matriz_abril = models.FloatField()
    nr_matriz_peso_medio_abriu = models.FloatField()
    nr_matriz_maio = models.FloatField()
    nr_matriz_peso_medio_maio = models.FloatField()
    nr_matriz_junho = models.FloatField()
    nr_matriz_peso_medio_junho = models.FloatField()
    nr_matriz_julho = models.FloatField()
    nr_matriz_peso_medio_julho = models.FloatField()
    nr_matriz_agosto = models.FloatField()
    nr_matriz_peso_medio_agosto = models.FloatField()
    nr_matriz_setembro = models.FloatField()
    nr_matriz_peso_medio_setembro = models.FloatField()
    nr_matriz_outubro = models.FloatField()
    nr_matriz_peso_medio_outubro = models.FloatField()
    nr_matriz_novembro = models.FloatField()
    nr_matriz_peso_medio_novembro = models.FloatField()
    nr_matriz_dezembro = models.FloatField()
    nr_matriz_peso_medio_dezembro = models.FloatField()
    nr_matriz_media = models.FloatField()
    nr_matriz_peso_medio_media = models.FloatField()

    #fevereiro
    nr_novilhos_janeiro = models.FloatField()
    nr_novilhos_peso_medio_janeiro = models.FloatField()
    nr_novilhos_fevereiro = models.FloatField()
    nr_novilhos_peso_medio_fevereiro = models.FloatField()
    nr_novilhos_marco = models.FloatField()
    nr_novilhos_peso_medio_marco = models.FloatField()
    nr_novilhos_abril = models.FloatField()
    nr_novilhos_peso_medio_abriu = models.FloatField()
    nr_novilhos_maio = models.FloatField()
    nr_novilhos_peso_medio_maio = models.FloatField()
    nr_novilhos_junho = models.FloatField()
    nr_novilhos_peso_medio_junho = models.FloatField()
    nr_novilhos_julho = models.FloatField()
    nr_novilhos_peso_medio_julho  = models.FloatField()
    nr_novilhos_agosto = models.FloatField()
    nr_novilhos_peso_medio_agosto = models.FloatField()
    nr_novilhos_setembro = models.FloatField()
    nr_novilhos_peso_medio_setembro = models.FloatField()
    nr_novilhos_outubro = models.FloatField()
    nr_novilhos_peso_medio_outubro = models.FloatField()
    nr_novilhos_novembro = models.FloatField()
    nr_novilhos_peso_medio_novembro = models.FloatField()
    nr_novilhos_dezembro = models.FloatField()
    nr_novilhos_peso_medio_dezembro = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Evolucao do rebanho"


class custo_fixo(models.Model):

    fazenda = models.ForeignKey(fazenda)
    itens_custo_maquina_implementos_janeiro =  models.FloatField()
    itens_custo_maquina_implementos_fevereiro  = models.FloatField()
    itens_custo_maquina_implementos_marco =  models.FloatField()
    itens_custo_maquina_implementos_abril = models.FloatField()
    itens_custo_maquina_implementos_maio  = models.FloatField()
    itens_custo_maquina_implementos_junho  = models.FloatField()
    itens_custo_maquina_implementos_julho  = models.FloatField()
    itens_custo_maquina_implementos_agosto  = models.FloatField()
    itens_custo_maquina_implementos_setembro  = models.FloatField()
    itens_custo_maquina_implementos_outubro  = models.FloatField()
    itens_custo_maquina_implementos_novembro  = models.FloatField()
    itens_custo_maquina_implementos_dezembro  = models.FloatField()
    itens_custo_maquina_implementos_total =  models.FloatField()

    itens_custo_tratores_janeiro =  models.FloatField()
    itens_custo_tratores_fevereiro  = models.FloatField()
    itens_custo_tratores_marco = models.FloatField()
    itens_custo_tratores_abril = models.FloatField()
    itens_custo_tratores_maio =  models.FloatField()
    itens_custo_tratores_junho  = models.FloatField()
    itens_custo_tratores_julho  = models.FloatField()
    itens_custo_tratores_agosto  = models.FloatField()
    itens_custo_tratores_setembro  = models.FloatField()
    itens_custo_tratores_outubro  = models.FloatField()
    itens_custo_tratores_novembro  = models.FloatField()
    itens_custo_tratores_dezembro  = models.FloatField()

    itens_custo_veiculos_janeiro  = models.FloatField()
    itens_custo_veiculos_fevereiro  = models.FloatField()
    itens_custo_veiculos_marco =  models.FloatField()
    itens_custo_veiculos_abril = models.FloatField()
    itens_custo_veiculos_maio =  models.FloatField()
    itens_custo_veiculos_junho  = models.FloatField()
    itens_custo_veiculos_julho  = models.FloatField()
    itens_custo_veiculos_agosto  = models.FloatField()
    itens_custo_veiculos_setembro  = models.FloatField()
    itens_custo_veiculos_outubro  = models.FloatField()
    itens_custo_veiculos_novembro  = models.FloatField()
    itens_custo_veiculos_dezembro  = models.FloatField()

    itens_custo_equipamentos_manuais_janeiro  = models.FloatField()
    itens_custo_equipamentos_manuais_fevereiro  = models.FloatField()
    itens_custo_equipamentos_manuais_marco  = models.FloatField()
    itens_custo_equipamentos_manuais_abril  =models.FloatField()
    itens_custo_equipamentos_manuais_maio  = models.FloatField()
    itens_custo_equipamentos_manuais_junho  = models.FloatField()
    itens_custo_equipamentos_manuais_julho  = models.FloatField()
    itens_custo_equipamentos_manuais_agosto  = models.FloatField()
    itens_custo_equipamentos_manuais_setembro  = models.FloatField()
    itens_custo_equipamentos_manuais_outubro  = models.FloatField()
    itens_custo_equipamentos_manuais_novembro  = models.FloatField()
    itens_custo_equipamentos_manuais_dezembro  = models.FloatField()

    itens_reprodutores_machos_janeiro= models.FloatField()
    itens_reprodutores_machos_fevereiro= models.FloatField()
    itens_reprodutores_machos_marco= models.FloatField()
    itens_reprodutores_machos_abril=models.FloatField()
    itens_reprodutores_machos_maio= models.FloatField()
    itens_reprodutores_machos_junho= models.FloatField()
    itens_reprodutores_machos_julho= models.FloatField()
    itens_reprodutores_machos_agosto= models.FloatField()
    itens_reprodutores_machos_setembro= models.FloatField()
    itens_reprodutores_machos_outubro= models.FloatField()
    itens_reprodutores_machos_novembro= models.FloatField()
    itens_reprodutores_machos_dezembro= models.FloatField()

    itens_reprodutores_femeas_janeiro= models.FloatField()
    itens_reprodutores_femeas_fevereiro= models.FloatField()
    itens_reprodutores_femeas_marco= models.FloatField()
    itens_reprodutores_femeas_abril=models.FloatField()
    itens_reprodutores_femeas_maio= models.FloatField()
    itens_reprodutores_femeas_junho= models.FloatField()
    itens_reprodutores_femeas_julho= models.FloatField()
    itens_reprodutores_femeas_agosto= models.FloatField()
    itens_reprodutores_femeas_setembro= models.FloatField()
    itens_reprodutores_femeas_outubro= models.FloatField()
    itens_reprodutores_femeas_novembro= models.FloatField()
    itens_reprodutores_femeas_dezembro= models.FloatField()

    itens_animais_trabalho_janeiro = models.FloatField()
    itens_animais_trabalho_fevereiro = models.FloatField()
    itens_animais_trabalho_marco = models.FloatField()
    itens_animais_trabalho_abril =models.FloatField()
    itens_animais_trabalho_maio = models.FloatField()
    itens_animais_trabalho_junho = models.FloatField()
    itens_animais_trabalho_julho = models.FloatField()
    itens_animais_trabalho_agosto = models.FloatField()
    itens_animais_trabalho_setembro = models.FloatField()
    itens_animais_trabalho_outubro = models.FloatField()
    itens_animais_trabalho_novembro = models.FloatField()
    itens_animais_trabalho_dezembro = models.FloatField()

    itens_canavial_ou_volumoso_janeiro   = models.FloatField()
    itens_canavial_ou_volumoso_fevereiro = models.FloatField()
    itens_canavial_ou_volumoso_marco     = models.FloatField()
    itens_canavial_ou_volumoso_abril     = models.FloatField()
    itens_canavial_ou_volumoso_maio      = models.FloatField()
    itens_canavial_ou_volumoso_junho     = models.FloatField()
    itens_canavial_ou_volumoso_julho     = models.FloatField()
    itens_canavial_ou_volumoso_agosto    = models.FloatField()
    itens_canavial_ou_volumoso_setembro  = models.FloatField()
    itens_canavial_ou_volumoso_outrubro  = models.FloatField()
    itens_canavial_ou_volumoso_novembro  = models.FloatField()
    itens_canavial_ou_volumoso_dezembro  = models.FloatField()

    itens_benfeitorias_janeiro   = models.FloatField()
    itens_benfeitorias_fevereiro = models.FloatField()
    itens_benfeitorias_marco     = models.FloatField()
    itens_benfeitorias_abril     = models.FloatField()
    itens_benfeitorias_maio      = models.FloatField()
    itens_benfeitorias_junho     = models.FloatField()
    itens_benfeitorias_julho     = models.FloatField()
    itens_benfeitorias_agosto    = models.FloatField()
    itens_benfeitorias_setembro  = models.FloatField()
    itens_benfeitorias_outrubro  = models.FloatField()
    itens_benfeitorias_novembro  = models.FloatField()
    itens_benfeitorias_dezembro  = models.FloatField()

    itens_pastagem_janeiro   = models.FloatField()
    itens_pastagem_fevereiro = models.FloatField()
    itens_pastagem_marco     = models.FloatField()
    itens_pastagem_abril     = models.FloatField()
    itens_pastagem_maio      = models.FloatField()
    itens_pastagem_junho     = models.FloatField()
    itens_pastagem_julho     = models.FloatField()
    itens_pastagem_agosto    = models.FloatField()
    itens_pastagem_setembro  = models.FloatField()
    itens_pastagem_outrubro  = models.FloatField()
    itens_pastagem_novembro  = models.FloatField()
    itens_pastagem_dezembro  = models.FloatField()

    itens_mao_obra_fixa_fazenda_janeiro   = models.FloatField()
    itens_mao_obra_fixa_fazenda_fevereiro = models.FloatField()
    itens_mao_obra_fixa_fazenda_marco     = models.FloatField()
    itens_mao_obra_fixa_fazenda_abril     = models.FloatField()
    itens_mao_obra_fixa_fazenda_maio      = models.FloatField()
    itens_mao_obra_fixa_fazenda_junho     = models.FloatField()
    itens_mao_obra_fixa_fazenda_julho     = models.FloatField()
    itens_mao_obra_fixa_fazenda_agosto    = models.FloatField()
    itens_mao_obra_fixa_fazenda_setembro  = models.FloatField()
    itens_mao_obra_fixa_fazenda_outrubro  = models.FloatField()
    itens_mao_obra_fixa_fazenda_novembro  = models.FloatField()
    itens_mao_obra_fixa_fazenda_dezembro  = models.FloatField()

    itens_encargos_sociais_janeiro   = models.FloatField()
    itens_encargos_sociais_fevereiro = models.FloatField()
    itens_encargos_sociais_marco     = models.FloatField()
    itens_encargos_sociais_abril     = models.FloatField()
    itens_encargos_sociais_maio      = models.FloatField()
    itens_encargos_sociais_junho     = models.FloatField()
    itens_encargos_sociais_julho     = models.FloatField()
    itens_encargos_sociais_agosto    = models.FloatField()
    itens_encargos_sociais_setembro  = models.FloatField()
    itens_encargos_sociais_outrubro  = models.FloatField()
    itens_encargos_sociais_novembro  = models.FloatField()
    itens_encargos_sociais_dezembro  = models.FloatField()

    itens_assistencia_tecnica_janeiro   = models.FloatField()
    itens_assistencia_tecnica_fevereiro = models.FloatField()
    itens_assistencia_tecnica_marco     = models.FloatField()
    itens_assistencia_tecnica_abril     = models.FloatField()
    itens_assistencia_tecnica_maio      = models.FloatField()
    itens_assistencia_tecnica_junho     = models.FloatField()
    itens_assistencia_tecnica_julho     = models.FloatField()
    itens_assistencia_tecnica_agosto    = models.FloatField()
    itens_assistencia_tecnica_setembro  = models.FloatField()
    itens_assistencia_tecnica_outrubro  = models.FloatField()
    itens_assistencia_tecnica_novembro  = models.FloatField()
    itens_assistencia_tecnica_dezembro  = models.FloatField()

    itens_despesas_tributarias_IR_ITR_janeiro   = models.FloatField()
    itens_despesas_tributarias_IR_ITR_fevereiro = models.FloatField()
    itens_despesas_tributarias_IR_ITR_marco     = models.FloatField()
    itens_despesas_tributarias_IR_ITR_abril     = models.FloatField()
    itens_despesas_tributarias_IR_ITR_maio      = models.FloatField()
    itens_despesas_tributarias_IR_ITR_junho     = models.FloatField()
    itens_despesas_tributarias_IR_ITR_julho     = models.FloatField()
    itens_despesas_tributarias_IR_ITR_agosto    = models.FloatField()
    itens_despesas_tributarias_IR_ITR_setembro  = models.FloatField()
    itens_despesas_tributarias_IR_ITR_outrubro  = models.FloatField()
    itens_despesas_tributarias_IR_ITR_novembro  = models.FloatField()
    itens_despesas_tributarias_IR_ITR_dezembro  = models.FloatField()

    calculo_custo_fixo_janeiro   = models.FloatField()
    calculo_custo_fixo_fevereiro = models.FloatField()
    calculo_custo_fixo_marco     = models.FloatField()
    calculo_custo_fixo_abril     = models.FloatField()
    calculo_custo_fixo_maio      = models.FloatField()
    calculo_custo_fixo_junho     = models.FloatField()
    calculo_custo_fixo_julho     = models.FloatField()
    calculo_custo_fixo_agosto    = models.FloatField()
    calculo_custo_fixo_setembro  = models.FloatField()
    calculo_custo_fixo_outrubro  = models.FloatField()
    calculo_custo_fixo_novembro  = models.FloatField()
    calculo_custo_fixo_dezembro  = models.FloatField()

    calculo_custo_fixo_por_cabeca_janeiro   = models.FloatField()
    calculo_custo_fixo_por_cabeca_fevereiro = models.FloatField()
    calculo_custo_fixo_por_cabeca_marco     = models.FloatField()
    calculo_custo_fixo_por_cabeca_abril     = models.FloatField()
    calculo_custo_fixo_por_cabeca_maio      = models.FloatField()
    calculo_custo_fixo_por_cabeca_junho     = models.FloatField()
    calculo_custo_fixo_por_cabeca_julho     = models.FloatField()
    calculo_custo_fixo_por_cabeca_agosto    = models.FloatField()
    calculo_custo_fixo_por_cabeca_setembro  = models.FloatField()
    calculo_custo_fixo_por_cabeca_outrubro  = models.FloatField()
    calculo_custo_fixo_por_cabeca_novembro  = models.FloatField()
    calculo_custo_fixo_por_cabeca_dezembro  = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Custo fixo"


class custo_variavel(models.Model):
    fazenda = models.ForeignKey(fazenda)
    suplementacao_especificacao_janeiro = models.FloatField()
    suplementacao_especificacao_fevereiro = models.FloatField()
    suplementacao_especificacao_marco = models.FloatField()
    suplementacao_especificacao_abril = models.FloatField()
    suplementacao_especificacao_maio = models.FloatField()
    suplementacao_especificacao_junho = models.FloatField()
    suplementacao_especificacao_julho = models.FloatField()
    suplementacao_especificacao_agosto = models.FloatField()
    suplementacao_especificacao_setembro = models.FloatField()
    suplementacao_especificacao_outubro = models.FloatField()
    suplementacao_especificacao_novembro = models.FloatField()
    suplementacao_especificacao_dezembro = models.FloatField()
    suplementacao_especificacao_total = models.FloatField()
    suplementacao_especificacao_custo_variavel = models.FloatField()

    linha_branca_especificacao_janeiro = models.FloatField()
    linha_branca_especificacao_fevereiro = models.FloatField()
    linha_branca_especificacao_marco = models.FloatField()
    linha_branca_especificacao_abril = models.FloatField()
    linha_branca_especificacao_maio = models.FloatField()
    linha_branca_especificacao_junho = models.FloatField()
    linha_branca_especificacao_julho = models.FloatField()
    linha_branca_especificacao_agosto = models.FloatField()
    linha_branca_especificacao_setembro = models.FloatField()
    linha_branca_especificacao_outubro = models.FloatField()
    linha_branca_especificacao_novembro = models.FloatField()
    linha_branca_especificacao_dezembro = models.FloatField()
    linha_branca_especificacao_total = models.FloatField()
    linha_branca_especificacao_custo_variavel = models.FloatField()

    capacidade_especificacao_janeiro = models.FloatField()
    capacidade_especificacao_fevereiro = models.FloatField()
    capacidade_especificacao_marco = models.FloatField()
    capacidade_especificacao_abril = models.FloatField()
    capacidade_especificacao_maio = models.FloatField()
    capacidade_especificacao_junho = models.FloatField()
    capacidade_especificacao_julho = models.FloatField()
    capacidade_especificacao_agosto = models.FloatField()
    capacidade_especificacao_setembro = models.FloatField()
    capacidade_especificacao_outubro = models.FloatField()
    capacidade_especificacao_novembro = models.FloatField()
    capacidade_especificacao_dezembro = models.FloatField()
    capacidade_especificacao_total = models.FloatField()
    capacidade_especificacao_custo_variavel = models.FloatField()

    mosca_chifre_especificacao_janeiro = models.FloatField()
    mosca_chifre_especificacao_fevereiro = models.FloatField()
    mosca_chifre_especificacao_marco = models.FloatField()
    mosca_chifre_especificacao_abril = models.FloatField()
    mosca_chifre_especificacao_maio = models.FloatField()
    mosca_chifre_especificacao_junho = models.FloatField()
    mosca_chifre_especificacao_julho = models.FloatField()
    mosca_chifre_especificacao_agosto = models.FloatField()
    mosca_chifre_especificacao_setembro = models.FloatField()
    mosca_chifre_especificacao_outubro = models.FloatField()
    mosca_chifre_especificacao_novembro = models.FloatField()
    mosca_chifre_especificacao_dezembro = models.FloatField()
    mosca_chifre_especificacao_total = models.FloatField()
    mosca_chifre_especificacao_custo_variavel = models.FloatField()

    vermifugo_especificacao_janeiro = models.FloatField()
    vermifugo_especificacao_fevereiro = models.FloatField()
    vermifugo_especificacao_marco = models.FloatField()
    vermifugo_especificacao_abril = models.FloatField()
    vermifugo_especificacao_maio = models.FloatField()
    vermifugo_especificacao_junho = models.FloatField()
    vermifugo_especificacao_julho = models.FloatField()
    vermifugo_especificacao_agosto = models.FloatField()
    vermifugo_especificacao_setembro = models.FloatField()
    vermifugo_especificacao_outubro = models.FloatField()
    vermifugo_especificacao_novembro = models.FloatField()
    vermifugo_especificacao_dezembro = models.FloatField()
    vermifugo_especificacao_total = models.FloatField()
    vermifugo_especificacao_custo_variavel = models.FloatField()

    vacina_aftosa_especificacao_janeiro = models.FloatField()
    vacina_aftosa_especificacao_fevereiro = models.FloatField()
    vacina_aftosa_especificacao_marco = models.FloatField()
    vacina_aftosa_especificacao_abril = models.FloatField()
    vacina_aftosa_especificacao_maio = models.FloatField()
    vacina_aftosa_especificacao_junho = models.FloatField()
    vacina_aftosa_especificacao_julho = models.FloatField()
    vacina_aftosa_especificacao_agosto = models.FloatField()
    vacina_aftosa_especificacao_setembro = models.FloatField()
    vacina_aftosa_especificacao_outubro = models.FloatField()
    vacina_aftosa_especificacao_novembro = models.FloatField()
    vacina_aftosa_especificacao_dezembro = models.FloatField()
    vacina_aftosa_especificacao_total = models.FloatField()
    vacina_aftosa_especificacao_custo_variavel = models.FloatField()

    vacina_clostridiose_especificacao_janeiro = models.FloatField()
    vacina_clostridiose_especificacao_fevereiro = models.FloatField()
    vacina_clostridiose_especificacao_marco = models.FloatField()
    vacina_clostridiose_especificacao_abril = models.FloatField()
    vacina_clostridiose_especificacao_junho = models.FloatField()
    vacina_clostridiose_especificacao_julho = models.FloatField()
    vacina_clostridiose_especificacao_agosto = models.FloatField()
    vacina_clostridiose_especificacao_maio = models.FloatField()
    vacina_clostridiose_especificacao_setembro = models.FloatField()
    vacina_clostridiose_especificacao_outubro = models.FloatField()
    vacina_clostridiose_especificacao_novembro = models.FloatField()
    vacina_clostridiose_especificacao_dezembro = models.FloatField()
    vacina_clostridiose_especificacao_total = models.FloatField()
    vacina_clostridiose_especificacao_custo_variavel = models.FloatField()

    outras_vacinas_especificacao_janeiro = models.FloatField()
    outras_vacinas_especificacao_fevereiro = models.FloatField()
    outras_vacinas_especificacao_marco = models.FloatField()
    outras_vacinas_especificacao_abril = models.FloatField()
    outras_vacinas_especificacao_junho = models.FloatField()
    outras_vacinas_especificacao_julho = models.FloatField()
    outras_vacinas_especificacao_agosto = models.FloatField()
    outras_vacinas_especificacao_maio = models.FloatField()
    outras_vacinas_especificacao_setembro = models.FloatField()
    outras_vacinas_especificacao_outubro = models.FloatField()
    outras_vacinas_especificacao_novembro = models.FloatField()
    outras_vacinas_especificacao_dezembro = models.FloatField()
    outras_vacinas_especificacao_total = models.FloatField()
    outras_vacinas_especificacao_custo_variavel = models.FloatField()

    outros_medicamentos_especificacao_janeiro = models.FloatField()
    outros_medicamentos_especificacao_fevereiro = models.FloatField()
    outros_medicamentos_especificacao_marco = models.FloatField()
    outros_medicamentos_especificacao_abril = models.FloatField()
    outros_medicamentos_especificacao_junho = models.FloatField()
    outros_medicamentos_especificacao_julho = models.FloatField()
    outros_medicamentos_especificacao_agosto = models.FloatField()
    outros_medicamentos_especificacao_maio = models.FloatField()
    outros_medicamentos_especificacao_setembro = models.FloatField()
    outros_medicamentos_especificacao_outubro = models.FloatField()
    outros_medicamentos_especificacao_novembro = models.FloatField()
    outros_medicamentos_especificacao_dezembro = models.FloatField()
    outros_medicamentos_especificacao_total = models.FloatField()
    outros_medicamentos_especificacao_custo_variavel = models.FloatField()

    mao_obra_temporaria_especificacao_janeiro = models.FloatField()
    mao_obra_temporaria_especificacao_fevereiro = models.FloatField()
    mao_obra_temporaria_especificacao_marco = models.FloatField()
    mao_obra_temporaria_especificacao_abril = models.FloatField()
    mao_obra_temporaria_especificacao_junho = models.FloatField()
    mao_obra_temporaria_especificacao_julho = models.FloatField()
    mao_obra_temporaria_especificacao_agosto = models.FloatField()
    mao_obra_temporaria_especificacao_maio = models.FloatField()
    mao_obra_temporaria_especificacao_setembro = models.FloatField()
    mao_obra_temporaria_especificacao_outubro = models.FloatField()
    mao_obra_temporaria_especificacao_novembro = models.FloatField()
    mao_obra_temporaria_especificacao_dezembro = models.FloatField()
    mao_obra_temporaria_especificacao_total = models.FloatField()
    mao_obra_temporaria_especificacao_custo_variavel = models.FloatField()

    materiais_fazenda_especificacao_janeiro = models.FloatField()
    materiais_fazenda_especificacao_fevereiro = models.FloatField()
    materiais_fazenda_especificacao_marco = models.FloatField()
    materiais_fazenda_especificacao_abril = models.FloatField()
    materiais_fazenda_especificacao_junho = models.FloatField()
    materiais_fazenda_especificacao_julho = models.FloatField()
    materiais_fazenda_especificacao_agosto = models.FloatField()
    materiais_fazenda_especificacao_maio = models.FloatField()
    materiais_fazenda_especificacao_setembro = models.FloatField()
    materiais_fazenda_especificacao_outubro = models.FloatField()
    materiais_fazenda_especificacao_novembro = models.FloatField()
    materiais_fazenda_especificacao_dezembro = models.FloatField()
    materiais_fazenda_especificacao_total = models.FloatField()
    materiais_fazenda_especificacao_custo_variavel = models.FloatField()

    curral_especificacao_janeiro = models.FloatField()
    curral_especificacao_fevereiro = models.FloatField()
    curral_especificacao_marco = models.FloatField()
    curral_especificacao_abril = models.FloatField()
    curral_especificacao_junho = models.FloatField()
    curral_especificacao_julho = models.FloatField()
    curral_especificacao_agosto = models.FloatField()
    curral_especificacao_maio = models.FloatField()
    curral_especificacao_setembro = models.FloatField()
    curral_especificacao_outubro = models.FloatField()
    curral_especificacao_novembro = models.FloatField()
    curral_especificacao_dezembro = models.FloatField()
    curral_especificacao_total = models.FloatField()
    curral_especificacao_custo_variavel = models.FloatField()

    frete_carretas_especificacao_janeiro = models.FloatField()
    frete_carretas_especificacao_fevereiro = models.FloatField()
    frete_carretas_especificacao_marco = models.FloatField()
    frete_carretas_especificacao_abril = models.FloatField()
    frete_carretas_especificacao_junho = models.FloatField()
    frete_carretas_especificacao_julho = models.FloatField()
    frete_carretas_especificacao_agosto = models.FloatField()
    frete_carretas_especificacao_maio = models.FloatField()
    frete_carretas_especificacao_setembro = models.FloatField()
    frete_carretas_especificacao_outubro = models.FloatField()
    frete_carretas_especificacao_novembro = models.FloatField()
    frete_carretas_especificacao_dezembro = models.FloatField()
    frete_carretas_especificacao_total = models.FloatField()
    frete_carretas_especificacao_custo_variavel = models.FloatField()

    casas_especificacao_janeiro = models.FloatField()
    casas_especificacao_fevereiro = models.FloatField()
    casas_especificacao_marco = models.FloatField()
    casas_especificacao_abril = models.FloatField()
    casas_especificacao_junho = models.FloatField()
    casas_especificacao_julho = models.FloatField()
    casas_especificacao_agosto = models.FloatField()
    casas_especificacao_maio = models.FloatField()
    casas_especificacao_setembro = models.FloatField()
    casas_especificacao_outubro = models.FloatField()
    casas_especificacao_novembro = models.FloatField()
    casas_especificacao_dezembro = models.FloatField()
    casas_especificacao_total = models.FloatField()
    casas_especificacao_custo_variavel = models.FloatField()

    tratores_especificacao_janeiro = models.FloatField()
    tratores_especificacao_fevereiro = models.FloatField()
    tratores_especificacao_marco = models.FloatField()
    tratores_especificacao_abril = models.FloatField()
    tratores_especificacao_junho = models.FloatField()
    tratores_especificacao_julho = models.FloatField()
    tratores_especificacao_agosto = models.FloatField()
    tratores_especificacao_maio = models.FloatField()
    tratores_especificacao_setembro = models.FloatField()
    tratores_especificacao_outubro = models.FloatField()
    tratores_especificacao_novembro = models.FloatField()
    tratores_especificacao_dezembro = models.FloatField()
    tratores_especificacao_total = models.FloatField()
    tratores_especificacao_custo_variavel = models.FloatField()

    maquinas_especificacao_janeiro = models.FloatField()
    maquinas_especificacao_fevereiro = models.FloatField()
    maquinas_especificacao_marco = models.FloatField()
    maquinas_especificacao_abril = models.FloatField()
    maquinas_especificacao_junho = models.FloatField()
    maquinas_especificacao_julho = models.FloatField()
    maquinas_especificacao_agosto = models.FloatField()
    maquinas_especificacao_maio = models.FloatField()
    maquinas_especificacao_setembro = models.FloatField()
    maquinas_especificacao_outubro = models.FloatField()
    maquinas_especificacao_novembro = models.FloatField()
    maquinas_especificacao_dezembro = models.FloatField()
    maquinas_especificacao_total = models.FloatField()
    maquinas_especificacao_custo_variavel = models.FloatField()

    combustivel_especificacao_janeiro = models.FloatField()
    combustivel_especificacao_fevereiro = models.FloatField()
    combustivel_especificacao_marco = models.FloatField()
    combustivel_especificacao_abril = models.FloatField()
    combustivel_especificacao_junho = models.FloatField()
    combustivel_especificacao_julho = models.FloatField()
    combustivel_especificacao_agosto = models.FloatField()
    combustivel_especificacao_maio = models.FloatField()
    combustivel_especificacao_setembro = models.FloatField()
    combustivel_especificacao_outubro = models.FloatField()
    combustivel_especificacao_novembro = models.FloatField()
    combustivel_especificacao_dezembro = models.FloatField()
    combustivel_especificacao_total = models.FloatField()
    combustivel_especificacao_custo_variavel = models.FloatField()

    outros_especificacao_janeiro = models.FloatField()
    outros_especificacao_fevereiro = models.FloatField()
    outros_especificacao_marco = models.FloatField()
    outros_especificacao_abril = models.FloatField()
    outros_especificacao_junho = models.FloatField()
    outros_especificacao_julho = models.FloatField()
    outros_especificacao_agosto = models.FloatField()
    outros_especificacao_maio = models.FloatField()
    outros_especificacao_setembro = models.FloatField()
    outros_especificacao_outubro = models.FloatField()
    outros_especificacao_novembro = models.FloatField()
    outros_especificacao_dezembro = models.FloatField()
    outros_especificacao_total = models.FloatField()
    outros_especificacao_custo_variavel = models.FloatField()

    celular_especificacao_janeiro = models.FloatField()
    celular_especificacao_fevereiro = models.FloatField()
    celular_especificacao_marco = models.FloatField()
    celular_especificacao_abril = models.FloatField()
    celular_especificacao_junho = models.FloatField()
    celular_especificacao_julho = models.FloatField()
    celular_especificacao_agosto = models.FloatField()
    celular_especificacao_maio = models.FloatField()
    celular_especificacao_setembro = models.FloatField()
    celular_especificacao_outubro = models.FloatField()
    celular_especificacao_novembro = models.FloatField()
    celular_especificacao_dezembro = models.FloatField()
    celular_especificacao_total = models.FloatField()
    celular_especificacao_custo_variavel = models.FloatField()

    emcargos_banco_especificacao_janeiro = models.FloatField()
    emcargos_banco_especificacao_fevereiro = models.FloatField()
    emcargos_banco_especificacao_marco = models.FloatField()
    emcargos_banco_especificacao_abril = models.FloatField()
    emcargos_banco_especificacao_junho = models.FloatField()
    emcargos_banco_especificacao_julho = models.FloatField()
    emcargos_banco_especificacao_agosto = models.FloatField()
    emcargos_banco_especificacao_maio = models.FloatField()
    emcargos_banco_especificacao_setembro = models.FloatField()
    emcargos_banco_especificacao_outubro = models.FloatField()
    emcargos_banco_especificacao_novembro = models.FloatField()
    emcargos_banco_especificacao_dezembro = models.FloatField()
    emcargos_banco_especificacao_total = models.FloatField()
    emcargos_banco_especificacao_custo_variavel = models.FloatField()

    elabora_projeto_pecuario_especificacao_janeiro = models.FloatField()
    elabora_projeto_pecuario_especificacao_fevereiro = models.FloatField()
    elabora_projeto_pecuario_especificacao_marco = models.FloatField()
    elabora_projeto_pecuario_especificacao_abril = models.FloatField()
    elabora_projeto_pecuario_especificacao_junho = models.FloatField()
    elabora_projeto_pecuario_especificacao_julho = models.FloatField()
    elabora_projeto_pecuario_especificacao_agosto = models.FloatField()
    elabora_projeto_pecuario_especificacao_maio = models.FloatField()
    elabora_projeto_pecuario_especificacao_setembro = models.FloatField()
    elabora_projeto_pecuario_especificacao_outubro = models.FloatField()
    elabora_projeto_pecuario_especificacao_novembro = models.FloatField()
    elabora_projeto_pecuario_especificacao_dezembro = models.FloatField()
    elabora_projeto_pecuario_especificacao_total = models.FloatField()
    elabora_projeto_pecuario_especificacao_custo_variavel = models.FloatField()

    energia_eletrica_especificacao_janeiro = models.FloatField()
    energia_eletrica_especificacao_fevereiro = models.FloatField()
    energia_eletrica_especificacao_marco = models.FloatField()
    energia_eletrica_especificacao_abril = models.FloatField()
    energia_eletrica_especificacao_junho = models.FloatField()
    energia_eletrica_especificacao_julho = models.FloatField()
    energia_eletrica_especificacao_agosto = models.FloatField()
    energia_eletrica_especificacao_maio = models.FloatField()
    energia_eletrica_especificacao_setembro = models.FloatField()
    energia_eletrica_especificacao_outubro = models.FloatField()
    energia_eletrica_especificacao_novembro = models.FloatField()
    energia_eletrica_especificacao_dezembro = models.FloatField()
    energia_eletrica_especificacao_total = models.FloatField()
    energia_eletrica_especificacao_custo_variavel = models.FloatField()

    aquisicao_animais_especificacao_janeiro = models.FloatField()
    aquisicao_animais_especificacao_fevereiro = models.FloatField()
    aquisicao_animais_especificacao_marco = models.FloatField()
    aquisicao_animais_especificacao_abril = models.FloatField()
    aquisicao_animais_especificacao_junho = models.FloatField()
    aquisicao_animais_especificacao_julho = models.FloatField()
    aquisicao_animais_especificacao_agosto = models.FloatField()
    aquisicao_animais_especificacao_maio = models.FloatField()
    aquisicao_animais_especificacao_setembro = models.FloatField()
    aquisicao_animais_especificacao_outubro = models.FloatField()
    aquisicao_animais_especificacao_novembro = models.FloatField()
    aquisicao_animais_especificacao_dezembro = models.FloatField()
    aquisicao_animais_especificacao_total = models.FloatField()
    aquisicao_animais_especificacao_custo_variavel = models.FloatField()

    outros1_especificacao_janeiro = models.FloatField()
    outros1_especificacao_fevereiro = models.FloatField()
    outros1_especificacao_marco = models.FloatField()
    outros1_especificacao_abril = models.FloatField()
    outros1_especificacao_junho = models.FloatField()
    outros1_especificacao_julho = models.FloatField()
    outros1_especificacao_agosto = models.FloatField()
    outros1_especificacao_maio = models.FloatField()
    outros1_especificacao_setembro = models.FloatField()
    outros1_especificacao_outubro = models.FloatField()
    outros1_especificacao_novembro = models.FloatField()
    outros1_especificacao_dezembro = models.FloatField()
    outros1_especificacao_total = models.FloatField()
    outros1_especificacao_custo_variavel = models.FloatField()

    outros2_especificacao_janeiro = models.FloatField()
    outros2_especificacao_fevereiro = models.FloatField()
    outros2_especificacao_marco = models.FloatField()
    outros2_especificacao_abril = models.FloatField()
    outros2_especificacao_junho = models.FloatField()
    outros2_especificacao_julho = models.FloatField()
    outros2_especificacao_agosto = models.FloatField()
    outros2_especificacao_maio = models.FloatField()
    outros2_especificacao_setembro = models.FloatField()
    outros2_especificacao_outubro = models.FloatField()
    outros2_especificacao_novembro = models.FloatField()
    outros2_especificacao_dezembro = models.FloatField()
    outros2_especificacao_total = models.FloatField()
    outros2_especificacao_custo_variavel = models.FloatField()

    outros3_especificacao_janeiro = models.FloatField()
    outros3_especificacao_fevereiro = models.FloatField()
    outros3_especificacao_marco = models.FloatField()
    outros3_especificacao_abril = models.FloatField()
    outros3_especificacao_junho = models.FloatField()
    outros3_especificacao_julho = models.FloatField()
    outros3_especificacao_agosto = models.FloatField()
    outros3_especificacao_maio = models.FloatField()
    outros3_especificacao_setembro = models.FloatField()
    outros3_especificacao_outubro = models.FloatField()
    outros3_especificacao_novembro = models.FloatField()
    outros3_especificacao_dezembro = models.FloatField()
    outros3_especificacao_total = models.FloatField()
    outros3_especificacao_custo_variavel = models.FloatField()

    outros4_especificacao_janeiro = models.FloatField()
    outros4_especificacao_fevereiro = models.FloatField()
    outros4_especificacao_marco = models.FloatField()
    outros4_especificacao_abril = models.FloatField()
    outros4_especificacao_junho = models.FloatField()
    outros4_especificacao_julho = models.FloatField()
    outros4_especificacao_agosto = models.FloatField()
    outros4_especificacao_maio = models.FloatField()
    outros4_especificacao_setembro = models.FloatField()
    outros4_especificacao_outubro = models.FloatField()
    outros4_especificacao_novembro = models.FloatField()
    outros4_especificacao_dezembro = models.FloatField()
    outros4_especificacao_total = models.FloatField()
    outros4_especificacao_custo_variavel = models.FloatField()

    outros5_especificacao_janeiro = models.FloatField()
    outros5_especificacao_fevereiro = models.FloatField()
    outros5_especificacao_marco = models.FloatField()
    outros5_especificacao_abril = models.FloatField()
    outros5_especificacao_junho = models.FloatField()
    outros5_especificacao_julho = models.FloatField()
    outros5_especificacao_agosto = models.FloatField()
    outros5_especificacao_maio = models.FloatField()
    outros5_especificacao_setembro = models.FloatField()
    outros5_especificacao_outubro = models.FloatField()
    outros5_especificacao_novembro = models.FloatField()
    outros5_especificacao_dezembro = models.FloatField()
    outros5_especificacao_total = models.FloatField()
    outros5_especificacao_custo_variavel = models.FloatField()

    total_custo_variavel_especificacao_janeiro = models.FloatField()
    total_custo_variavel_especificacao_fevereiro = models.FloatField()
    total_custo_variavel_especificacao_marco = models.FloatField()
    total_custo_variavel_especificacao_abril = models.FloatField()
    total_custo_variavel_especificacao_junho = models.FloatField()
    total_custo_variavel_especificacao_julho = models.FloatField()
    total_custo_variavel_especificacao_agosto = models.FloatField()
    total_custo_variavel_especificacao_maio = models.FloatField()
    total_custo_variavel_especificacao_setembro = models.FloatField()
    total_custo_variavel_especificacao_outubro = models.FloatField()
    total_custo_variavel_especificacao_novembro = models.FloatField()
    total_custo_variavel_especificacao_dezembro = models.FloatField()
    total_custo_variavel_especificacao_total = models.FloatField()
    total_custo_variavel_especificacao_custo_variavel = models.FloatField()

    total_custo_variavel_cabeca_reposicao_especificacao_janeirocabeca_reposicao= models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_fevereiro = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_marco = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_abril = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_junho = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_julho = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_agosto = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_maio = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_setembro = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_outubro = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_novembro = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_dezembro = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_total = models.FloatField()
    total_custo_variavel_cabeca_reposicao_especificacao_custo_variavel = models.FloatField()

    total_custo_variavel_p_especificacao_janeiro = models.FloatField()
    total_custo_variavel_p_especificacao_fevereiro = models.FloatField()
    total_custo_variavel_p_especificacao_marco = models.FloatField()
    total_custo_variavel_p_especificacao_abril = models.FloatField()
    total_custo_variavel_p_especificacao_junho = models.FloatField()
    total_custo_variavel_p_especificacao_julho = models.FloatField()
    total_custo_variavel_p_especificacao_agosto = models.FloatField()
    total_custo_variavel_p_especificacao_maio = models.FloatField()
    total_custo_variavel_p_especificacao_setembro = models.FloatField()
    total_custo_variavel_p_especificacao_outubro = models.FloatField()
    total_custo_variavel_p_especificacao_novembro = models.FloatField()
    total_custo_variavel_p_especificacao_dezembro = models.FloatField()
    total_custo_variavel_p_especificacao_total = models.FloatField()
    total_custo_variavel_p_especificacao_custo_variavel = models.FloatField()


    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Custo variavel"


class despesas_administrativas(models.Model):
    fazenda = models.ForeignKey(fazenda)
    funcionario_add_janeiro = models.FloatField()
    funcionario_add_fevereiro = models.FloatField()
    funcionario_add_marco = models.FloatField()
    funcionario_add_abril = models.FloatField()
    funcionario_add_maio = models.FloatField()
    funcionario_add_junho = models.FloatField()
    funcionario_add_julho = models.FloatField()
    funcionario_add_agosto = models.FloatField()
    funcionario_add_setembro = models.FloatField()
    funcionario_add_outubro = models.FloatField()
    funcionario_add_novembro = models.FloatField()
    funcionario_add_dezembro = models.FloatField()

    alimentacao_refeicao_despesas_sede_janeiro = models.FloatField()
    alimentacao_refeicao_despesas_sede_fevereiro = models.FloatField()
    alimentacao_refeicao_despesas_sede_marco = models.FloatField()
    alimentacao_refeicao_despesas_sede_abril = models.FloatField()
    alimentacao_refeicao_despesas_sede_maio = models.FloatField()
    alimentacao_refeicao_despesas_sede_junho = models.FloatField()
    alimentacao_refeicao_despesas_sede_julho = models.FloatField()
    alimentacao_refeicao_despesas_sede_agosto = models.FloatField()
    alimentacao_refeicao_despesas_sede_setembro = models.FloatField()
    alimentacao_refeicao_despesas_sede_outubro = models.FloatField()
    alimentacao_refeicao_despesas_sede_novembro = models.FloatField()
    alimentacao_refeicao_despesas_sede_dezembro = models.FloatField()

    despesas_escritorio_janeiro = models.FloatField()
    despesas_escritorio_fevereiro = models.FloatField()
    despesas_escritorio_marco = models.FloatField()
    despesas_escritorio_abril = models.FloatField()
    despesas_escritorio_maio = models.FloatField()
    despesas_escritorio_junho = models.FloatField()
    despesas_escritorio_julho = models.FloatField()
    despesas_escritorio_agosto = models.FloatField()
    despesas_escritorio_setembro = models.FloatField()
    despesas_escritorio_outubro = models.FloatField()
    despesas_escritorio_novembro = models.FloatField()
    despesas_escritorio_dezembro = models.FloatField()

    telefone_janeiro = models.FloatField()
    telefone_fevereiro = models.FloatField()
    telefone_marco = models.FloatField()
    telefone_abril = models.FloatField()
    telefone_maio = models.FloatField()
    telefone_junho = models.FloatField()
    telefone_julho = models.FloatField()
    telefone_agosto = models.FloatField()
    telefone_setembro = models.FloatField()
    telefone_outubro = models.FloatField()
    telefone_novembro = models.FloatField()
    telefone_dezembro = models.FloatField()
    
    contador_advogado_janeiro = models.FloatField()
    contador_advogado_fevereiro = models.FloatField()
    contador_advogado_marco = models.FloatField()
    contador_advogado_abril = models.FloatField()
    contador_advogado_maio = models.FloatField()
    contador_advogado_junho = models.FloatField()
    contador_advogado_julho = models.FloatField()
    contador_advogado_agosto = models.FloatField()
    contador_advogado_setembro = models.FloatField()
    contador_advogado_outubro = models.FloatField()
    contador_advogado_novembro = models.FloatField()
    contador_advogado_dezembro = models.FloatField()

    telefone_fixo_janeiro = models.FloatField()
    telefone_fixo_fevereiro = models.FloatField()
    telefone_fixo_marco = models.FloatField()
    telefone_fixo_abril = models.FloatField()
    telefone_fixo_maio = models.FloatField()
    telefone_fixo_junho = models.FloatField()
    telefone_fixo_julho = models.FloatField()
    telefone_fixo_agosto = models.FloatField()
    telefone_fixo_setembro = models.FloatField()
    telefone_fixo_outubro = models.FloatField()
    telefone_fixo_novembro = models.FloatField()
    telefone_fixo_dezembro = models.FloatField()

    informacoes_revistas_cursos_janeiro = models.FloatField()
    informacoes_revistas_cursos_fevereiro = models.FloatField()
    informacoes_revistas_cursos_marco = models.FloatField()
    informacoes_revistas_cursos_abril = models.FloatField()
    informacoes_revistas_cursos_maio = models.FloatField()
    informacoes_revistas_cursos_junho = models.FloatField()
    informacoes_revistas_cursos_julho = models.FloatField()
    informacoes_revistas_cursos_agosto = models.FloatField()
    informacoes_revistas_cursos_setembro = models.FloatField()
    informacoes_revistas_cursos_outubro = models.FloatField()
    informacoes_revistas_cursos_novembro = models.FloatField()
    informacoes_revistas_cursos_dezembro = models.FloatField()

    seguro_veiculo_janeiro = models.FloatField()
    seguro_veiculo_fevereiro = models.FloatField()
    seguro_veiculo_marco = models.FloatField()
    seguro_veiculo_abril = models.FloatField()
    seguro_veiculo_maio = models.FloatField()
    seguro_veiculo_junho = models.FloatField()
    seguro_veiculo_julho = models.FloatField()
    seguro_veiculo_agosto = models.FloatField()
    seguro_veiculo_setembro = models.FloatField()
    seguro_veiculo_outubro = models.FloatField()
    seguro_veiculo_novembro = models.FloatField()
    seguro_veiculo_dezembro = models.FloatField()

    moto_carro_janeiro = models.FloatField()
    moto_carro_fevereiro = models.FloatField()
    moto_carro_marco = models.FloatField()
    moto_carro_abril = models.FloatField()
    moto_carro_maio = models.FloatField()
    moto_carro_junho = models.FloatField()
    moto_carro_julho = models.FloatField()
    moto_carro_agosto = models.FloatField()
    moto_carro_setembro = models.FloatField()
    moto_carro_outubro = models.FloatField()
    moto_carro_novembro = models.FloatField()
    moto_carro_dezembro = models.FloatField()

    outros_diversos_janeiro = models.FloatField()
    outros_diversos_fevereiro = models.FloatField()
    outros_diversos_marco = models.FloatField()
    outros_diversos_abril = models.FloatField()
    outros_diversos_maio = models.FloatField()
    outros_diversos_junho = models.FloatField()
    outros_diversos_julho = models.FloatField()
    outros_diversos_agosto = models.FloatField()
    outros_diversos_setembro = models.FloatField()
    outros_diversos_outubro = models.FloatField()
    outros_diversos_novembro = models.FloatField()
    outros_diversos_dezembro = models.FloatField()

    despesas_viagens_janeiro = models.FloatField()
    despesas_viagens_fevereiro = models.FloatField()
    despesas_viagens_marco = models.FloatField()
    despesas_viagens_abril = models.FloatField()
    despesas_viagens_maio = models.FloatField()
    despesas_viagens_junho = models.FloatField()
    despesas_viagens_julho = models.FloatField()
    despesas_viagens_agosto = models.FloatField()
    despesas_viagens_setembro = models.FloatField()
    despesas_viagens_outubro = models.FloatField()
    despesas_viagens_novembro = models.FloatField()
    despesas_viagens_dezembro = models.FloatField()

    energia_eletrica_janeiro = models.FloatField()
    energia_eletrica_fevereiro = models.FloatField()
    energia_eletrica_marco = models.FloatField()
    energia_eletrica_abril = models.FloatField()
    energia_eletrica_maio = models.FloatField()
    energia_eletrica_junho = models.FloatField()
    energia_eletrica_julho = models.FloatField()
    energia_eletrica_agosto = models.FloatField()
    energia_eletrica_setembro = models.FloatField()
    energia_eletrica_outubro = models.FloatField()
    energia_eletrica_novembro = models.FloatField()
    energia_eletrica_dezembro = models.FloatField()

    total_despesas_adm_janeiro = models.FloatField()
    total_despesas_adm_fevereiro = models.FloatField()
    total_despesas_adm_marco = models.FloatField()
    total_despesas_adm_abril = models.FloatField()
    total_despesas_adm_maio = models.FloatField()
    total_despesas_adm_junho = models.FloatField()
    total_despesas_adm_julho = models.FloatField()
    total_despesas_adm_agosto = models.FloatField()
    total_despesas_adm_setembro = models.FloatField()
    total_despesas_adm_outubro = models.FloatField()
    total_despesas_adm_novembro = models.FloatField()
    total_despesas_adm_dezembro = models.FloatField()

    total_despesas_admin_cabecas_janeiro = models.FloatField()
    total_despesas_admin_cabecas_fevereiro = models.FloatField()
    total_despesas_admin_cabecas_marco = models.FloatField()
    total_despesas_admin_cabecas_abril = models.FloatField()
    total_despesas_admin_cabecas_maio = models.FloatField()
    total_despesas_admin_cabecas_junho = models.FloatField()
    total_despesas_admin_cabecas_julho = models.FloatField()
    total_despesas_admin_cabecas_agosto = models.FloatField()
    total_despesas_admin_cabecas_setembro = models.FloatField()
    total_despesas_admin_cabecas_outubro = models.FloatField()
    total_despesas_admin_cabecas_novembro = models.FloatField()
    total_despesas_admin_cabecas_dezembro = models.FloatField()

    total_despesas_percentual_janeiro = models.FloatField()
    total_despesas_percentual_fevereiro = models.FloatField()
    total_despesas_percentual_marco = models.FloatField()
    total_despesas_percentual_abril = models.FloatField()
    total_despesas_percentual_maio = models.FloatField()
    total_despesas_percentual_junho = models.FloatField()
    total_despesas_percentual_julho = models.FloatField()
    total_despesas_percentual_agosto = models.FloatField()
    total_despesas_percentual_setembro = models.FloatField()
    total_despesas_percentual_outubro = models.FloatField()
    total_despesas_percentual_novembro = models.FloatField()
    total_despesas_percentual_dezembro = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Despesas administrativas"


class investimento(models.Model):
    fazenda = models.ForeignKey(fazenda)
    herbicida_investimento_janeiro = models.FloatField()
    herbicida_investimento_fevereiro = models.FloatField()
    herbicida_investimento_marco = models.FloatField()
    herbicida_investimento_abril = models.FloatField()
    herbicida_investimento_maio = models.FloatField()
    herbicida_investimento_junho = models.FloatField()
    herbicida_investimento_julho = models.FloatField()
    herbicida_investimento_agosto = models.FloatField()
    herbicida_investimento_setembro = models.FloatField()
    herbicida_investimento_outubro = models.FloatField()
    herbicida_investimento_novembro = models.FloatField()
    herbicida_investimento_dezembro = models.FloatField()
    herbicida_investimento_total = models.FloatField()
    herbicida_investimento_percentual_investimento = models.FloatField()

    eq_apli_herbicida_investimento_janeiro = models.FloatField()
    eq_apli_herbicida_investimento_fevereiro = models.FloatField()
    eq_apli_herbicida_investimento_marco = models.FloatField()
    eq_apli_herbicida_investimento_abril = models.FloatField()
    eq_apli_herbicida_investimento_maio = models.FloatField()
    eq_apli_herbicida_investimento_junho = models.FloatField()
    eq_apli_herbicida_investimento_julho = models.FloatField()
    eq_apli_herbicida_investimento_agosto = models.FloatField()
    eq_apli_herbicida_investimento_setembro = models.FloatField()
    eq_apli_herbicida_investimento_outubro = models.FloatField()
    eq_apli_herbicida_investimento_novembro = models.FloatField()
    eq_apli_herbicida_investimento_dezembro = models.FloatField()
    eq_apli_herbicida_investimento_total = models.FloatField()
    eq_apli_herbicida_investimento_percentual_investimento = models.FloatField()

    mao_obra_rocagem_investimento_janeiro = models.FloatField()
    mao_obra_rocagem_investimento_fevereiro = models.FloatField()
    mao_obra_rocagem_investimento_marco = models.FloatField()
    mao_obra_rocagem_investimento_abril = models.FloatField()
    mao_obra_rocagem_investimento_maio = models.FloatField()
    mao_obra_rocagem_investimento_junho = models.FloatField()
    mao_obra_rocagem_investimento_julho = models.FloatField()
    mao_obra_rocagem_investimento_agosto = models.FloatField()
    mao_obra_rocagem_investimento_setembro = models.FloatField()
    mao_obra_rocagem_investimento_outubro = models.FloatField()
    mao_obra_rocagem_investimento_novembro = models.FloatField()
    mao_obra_rocagem_investimento_dezembro = models.FloatField()
    mao_obra_rocagem_investimento_total = models.FloatField()
    mao_obra_rocagem_investimento_percentual_investimento = models.FloatField()

    equip_rocagem_investimento_janeiro = models.FloatField()
    equip_rocagem_investimento_fevereiro = models.FloatField()
    equip_rocagem_investimento_marco = models.FloatField()
    equip_rocagem_investimento_abril = models.FloatField()
    equip_rocagem_investimento_maio = models.FloatField()
    equip_rocagem_investimento_junho = models.FloatField()
    equip_rocagem_investimento_julho = models.FloatField()
    equip_rocagem_investimento_agosto = models.FloatField()
    equip_rocagem_investimento_setembro = models.FloatField()
    equip_rocagem_investimento_outubro = models.FloatField()
    equip_rocagem_investimento_novembro = models.FloatField()
    equip_rocagem_investimento_dezembro = models.FloatField()
    equip_rocagem_investimento_total = models.FloatField()
    equip_rocagem_investimento_percentual_investimento = models.FloatField()

    compra_vacas_girolando_investimento_janeiro = models.FloatField()
    compra_vacas_girolando_investimento_fevereiro = models.FloatField()
    compra_vacas_girolando_investimento_marco = models.FloatField()
    compra_vacas_girolando_investimento_abril = models.FloatField()
    compra_vacas_girolando_investimento_maio = models.FloatField()
    compra_vacas_girolando_investimento_junho = models.FloatField()
    compra_vacas_girolando_investimento_julho = models.FloatField()
    compra_vacas_girolando_investimento_agosto = models.FloatField()
    compra_vacas_girolando_investimento_setembro = models.FloatField()
    compra_vacas_girolando_investimento_outubro = models.FloatField()
    compra_vacas_girolando_investimento_novembro = models.FloatField()
    compra_vacas_girolando_investimento_dezembro = models.FloatField()
    compra_vacas_girolando_investimento_total = models.FloatField()
    compra_vacas_girolando_investimento_percentual_investimento = models.FloatField()

    cocho_sal_investimento_janeiro = models.FloatField()
    cocho_sal_investimento_fevereiro = models.FloatField()
    cocho_sal_investimento_marco = models.FloatField()
    cocho_sal_investimento_abril = models.FloatField()
    cocho_sal_investimento_maio = models.FloatField()
    cocho_sal_investimento_junho = models.FloatField()
    cocho_sal_investimento_julho = models.FloatField()
    cocho_sal_investimento_agosto = models.FloatField()
    cocho_sal_investimento_setembro = models.FloatField()
    cocho_sal_investimento_outubro = models.FloatField()
    cocho_sal_investimento_novembro = models.FloatField()
    cocho_sal_investimento_dezembro = models.FloatField()
    cocho_sal_investimento_total = models.FloatField()
    cocho_sal_investimento_percentual_investimento = models.FloatField()

    inseminacao_artificial_investimento_janeiro = models.FloatField()
    inseminacao_artificial_investimento_fevereiro = models.FloatField()
    inseminacao_artificial_investimento_marco = models.FloatField()
    inseminacao_artificial_investimento_abril = models.FloatField()
    inseminacao_artificial_investimento_maio = models.FloatField()
    inseminacao_artificial_investimento_junho = models.FloatField()
    inseminacao_artificial_investimento_julho = models.FloatField()
    inseminacao_artificial_investimento_agosto = models.FloatField()
    inseminacao_artificial_investimento_setembro = models.FloatField()
    inseminacao_artificial_investimento_outubro = models.FloatField()
    inseminacao_artificial_investimento_novembro = models.FloatField()
    inseminacao_artificial_investimento_dezembro = models.FloatField()
    inseminacao_artificial_investimento_total = models.FloatField()
    inseminacao_artificial_investimento_percentual_investimento = models.FloatField()

    material_cercas_investimento_janeiro = models.FloatField()
    material_cercas_investimento_fevereiro = models.FloatField()
    material_cercas_investimento_marco = models.FloatField()
    material_cercas_investimento_abril = models.FloatField()
    material_cercas_investimento_maio = models.FloatField()
    material_cercas_investimento_junho = models.FloatField()
    material_cercas_investimento_julho = models.FloatField()
    material_cercas_investimento_agosto = models.FloatField()
    material_cercas_investimento_setembro = models.FloatField()
    material_cercas_investimento_outubro = models.FloatField()
    material_cercas_investimento_novembro = models.FloatField()
    material_cercas_investimento_dezembro = models.FloatField()
    material_cercas_investimento_total = models.FloatField()
    material_cercas_investimento_percentual_investimento = models.FloatField()

    edificacoes_investimento_janeiro = models.FloatField()
    edificacoes_investimento_fevereiro = models.FloatField()
    edificacoes_investimento_marco = models.FloatField()
    edificacoes_investimento_abril = models.FloatField()
    edificacoes_investimento_maio = models.FloatField()
    edificacoes_investimento_junho = models.FloatField()
    edificacoes_investimento_julho = models.FloatField()
    edificacoes_investimento_agosto = models.FloatField()
    edificacoes_investimento_setembro = models.FloatField()
    edificacoes_investimento_outubro = models.FloatField()
    edificacoes_investimento_novembro = models.FloatField()
    edificacoes_investimento_dezembro = models.FloatField()
    edificacoes_investimento_total = models.FloatField()
    edificacoes_investimento_percentual_investimento = models.FloatField()

    silo_investimento_janeiro = models.FloatField()
    silo_investimento_fevereiro = models.FloatField()
    silo_investimento_marco = models.FloatField()
    silo_investimento_abril = models.FloatField()
    silo_investimento_maio = models.FloatField()
    silo_investimento_junho = models.FloatField()
    silo_investimento_julho = models.FloatField()
    silo_investimento_agosto = models.FloatField()
    silo_investimento_setembro = models.FloatField()
    silo_investimento_outubro = models.FloatField()
    silo_investimento_novembro = models.FloatField()
    silo_investimento_dezembro = models.FloatField()
    silo_investimento_total = models.FloatField()
    silo_investimento_percentual_investimento = models.FloatField()

    curral_cancelas_balancas_investimento_janeiro = models.FloatField()
    curral_cancelas_balancas_investimento_fevereiro = models.FloatField()
    curral_cancelas_balancas_investimento_marco = models.FloatField()
    curral_cancelas_balancas_investimento_abril = models.FloatField()
    curral_cancelas_balancas_investimento_maio = models.FloatField()
    curral_cancelas_balancas_investimento_junho = models.FloatField()
    curral_cancelas_balancas_investimento_julho = models.FloatField()
    curral_cancelas_balancas_investimento_agosto = models.FloatField()
    curral_cancelas_balancas_investimento_setembro = models.FloatField()
    curral_cancelas_balancas_investimento_outubro = models.FloatField()
    curral_cancelas_balancas_investimento_novembro = models.FloatField()
    curral_cancelas_balancas_investimento_dezembro = models.FloatField()
    curral_cancelas_balancas_investimento_total = models.FloatField()
    curral_cancelas_balancas_investimento_percentual_investimento = models.FloatField()

    outros1_investimento_janeiro = models.FloatField()
    outros1_investimento_fevereiro = models.FloatField()
    outros1_investimento_marco = models.FloatField()
    outros1_investimento_abril = models.FloatField()
    outros1_investimento_maio = models.FloatField()
    outros1_investimento_junho = models.FloatField()
    outros1_investimento_julho = models.FloatField()
    outros1_investimento_agosto = models.FloatField()
    outros1_investimento_setembro = models.FloatField()
    outros1_investimento_outubro = models.FloatField()
    outros1_investimento_novembro = models.FloatField()
    outros1_investimento_dezembro = models.FloatField()
    outros1_investimento_total = models.FloatField()
    outros1_investimento_percentual_investimento = models.FloatField()

    outros2_investimento_janeiro = models.FloatField()
    outros2_investimento_fevereiro = models.FloatField()
    outros2_investimento_marco = models.FloatField()
    outros2_investimento_abril = models.FloatField()
    outros2_investimento_maio = models.FloatField()
    outros2_investimento_junho = models.FloatField()
    outros2_investimento_julho = models.FloatField()
    outros2_investimento_agosto = models.FloatField()
    outros2_investimento_setembro = models.FloatField()
    outros2_investimento_outubro = models.FloatField()
    outros2_investimento_novembro = models.FloatField()
    outros2_investimento_dezembro = models.FloatField()
    outros2_investimento_total = models.FloatField()
    outros2_investimento_percentual_investimento = models.FloatField()

    outros3_investimento_janeiro = models.FloatField()
    outros3_investimento_fevereiro = models.FloatField()
    outros3_investimento_marco = models.FloatField()
    outros3_investimento_abril = models.FloatField()
    outros3_investimento_maio = models.FloatField()
    outros3_investimento_junho = models.FloatField()
    outros3_investimento_julho = models.FloatField()
    outros3_investimento_agosto = models.FloatField()
    outros3_investimento_setembro = models.FloatField()
    outros3_investimento_outubro = models.FloatField()
    outros3_investimento_novembro = models.FloatField()
    outros3_investimento_dezembro = models.FloatField()
    outros3_investimento_total = models.FloatField()
    outros3_investimento_percentual_investimento = models.FloatField()

    outros4_investimento_janeiro = models.FloatField()
    outros4_investimento_fevereiro = models.FloatField()
    outros4_investimento_marco = models.FloatField()
    outros4_investimento_abril = models.FloatField()
    outros4_investimento_maio = models.FloatField()
    outros4_investimento_junho = models.FloatField()
    outros4_investimento_julho = models.FloatField()
    outros4_investimento_agosto = models.FloatField()
    outros4_investimento_setembro = models.FloatField()
    outros4_investimento_outubro = models.FloatField()
    outros4_investimento_novembro = models.FloatField()
    outros4_investimento_dezembro = models.FloatField()
    outros4_investimento_total = models.FloatField()
    outros4_investimento_percentual_investimento = models.FloatField()

    outros5_investimento_janeiro = models.FloatField()
    outros5_investimento_fevereiro = models.FloatField()
    outros5_investimento_marco = models.FloatField()
    outros5_investimento_abril = models.FloatField()
    outros5_investimento_maio = models.FloatField()
    outros5_investimento_junho = models.FloatField()
    outros5_investimento_julho = models.FloatField()
    outros5_investimento_agosto = models.FloatField()
    outros5_investimento_setembro = models.FloatField()
    outros5_investimento_outubro = models.FloatField()
    outros5_investimento_novembro = models.FloatField()
    outros5_investimento_dezembro = models.FloatField()
    outros5_investimento_total = models.FloatField()
    outros5_investimento_percentual_investimento = models.FloatField()

    total_investimento_janeiro = models.FloatField()
    total_investimento_fevereiro = models.FloatField()
    total_investimento_marco = models.FloatField()
    total_investimento_abril = models.FloatField()
    total_investimento_maio = models.FloatField()
    total_investimento_junho = models.FloatField()
    total_investimento_julho = models.FloatField()
    total_investimento_agosto = models.FloatField()
    total_investimento_setembro = models.FloatField()
    total_investimento_outubro = models.FloatField()
    total_investimento_novembro = models.FloatField()
    total_investimento_dezembro = models.FloatField()
    total_investimento_total = models.FloatField()
    total_investimento_percentual_investimento = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Investimento"


class custo_operacional(models.Model):
    fazenda = models.ForeignKey(fazenda)
    fixo_custo_total_atividade_janeiro                = models.FloatField()
    fixo_custo_total_atividade_feveiro                = models.FloatField()
    fixo_custo_total_atividade_marco                  = models.FloatField()
    fixo_custo_total_atividade_abril                  = models.FloatField()
    fixo_custo_total_atividade_maio                   = models.FloatField()
    fixo_custo_total_atividade_junho                  = models.FloatField()
    fixo_custo_total_atividade_julho                  = models.FloatField()
    fixo_custo_total_atividade_agosto                 = models.FloatField()
    fixo_custo_total_atividade_setembro               = models.FloatField()
    fixo_custo_total_atividade_outubro                = models.FloatField()
    fixo_custo_total_atividade_novembro               = models.FloatField()
    fixo_custo_total_atividade_dezembro               = models.FloatField()
    variavel_custo_total_atividade_janeiro            = models.FloatField()
    variavel_custo_total_atividade__feveiro           = models.FloatField()
    variavel_custo_total_atividade__marco             = models.FloatField()
    variavel_custo_total_atividade__abril             = models.FloatField()
    variavel_custo_total_atividade__maio              = models.FloatField()
    variavel_custo_total_atividade__junho             = models.FloatField()
    variavel_custo_total_atividade__julho             = models.FloatField()
    variavel_custo_total_atividade__agosto            = models.FloatField()
    variavel_custo_total_atividade__setembro          = models.FloatField()
    variavel_custo_total_atividade__outubro           = models.FloatField()
    variavel_custo_total_atividade__novembro          = models.FloatField()
    variavel_custo_total_atividade__dezembro          = models.FloatField()

    administrativo_custo_total_atividade_janeiro      = models.FloatField()
    administrativo_custo_total_atividade__feveiro     = models.FloatField()
    administrativo_custo_total_atividade__marco       = models.FloatField()
    administrativo_custo_total_atividade__abril       = models.FloatField()
    administrativo_custo_total_atividade__maio        = models.FloatField()
    administrativo_custo_total_atividade__junho       = models.FloatField()
    administrativo_custo_total_atividade__julho       = models.FloatField()
    administrativo_custo_total_atividade__agosto      = models.FloatField()
    administrativo_custo_total_atividade__setembro    = models.FloatField()
    administrativo_custo_total_atividade__outubro     = models.FloatField()
    administrativo_custo_total_atividade__novembro    = models.FloatField()
    administrativo_custo_total_atividade__dezembro    = models.FloatField()
    

    operacional_custo_total_atividade_janeiro        = models.FloatField()
    operacional_custo_total_atividade__feveiro       = models.FloatField()
    operacional_custo_total_atividade__marco         = models.FloatField()
    operacional_custo_total_atividade__abril         = models.FloatField()
    operacional_custo_total_atividade__maio          = models.FloatField()
    operacional_custo_total_atividade__junho         = models.FloatField()
    operacional_custo_total_atividade__julho         = models.FloatField()
    operacional_custo_total_atividade__agosto        = models.FloatField()
    operacional_custo_total_atividade__setembro      = models.FloatField()
    operacional_custo_total_atividade__outubro       = models.FloatField()
    operacional_custo_total_atividade__novembro      = models.FloatField()
    operacional_custo_total_atividade__dezembro      = models.FloatField()
    
    cabeca_reposicao_custo_total_atividade_janeiro      = models.FloatField()
    cabeca_reposicao_custo_total_atividade__feveiro     = models.FloatField()
    cabeca_reposicao_custo_total_atividade__marco       = models.FloatField()
    cabeca_reposicao_custo_total_atividade__abril       = models.FloatField()
    cabeca_reposicao_custo_total_atividade__maio        = models.FloatField()
    cabeca_reposicao_custo_total_atividade__junho       = models.FloatField()
    cabeca_reposicao_custo_total_atividade__julho       = models.FloatField()
    cabeca_reposicao_custo_total_atividade__agosto      = models.FloatField()
    cabeca_reposicao_custo_total_atividade__setembro    = models.FloatField()
    cabeca_reposicao_custo_total_atividade__outubro     = models.FloatField()
    cabeca_reposicao_custo_total_atividade__novembro    = models.FloatField()
    cabeca_reposicao_custo_total_atividade__dezembro    = models.FloatField()
    
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade_janeiro           = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__feveiro          = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__marco            = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__abril            = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__maio             = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__junho            = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__julho            = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__agosto           = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__setembro         = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__outubro          = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__novembro         = models.FloatField()
    custo_operacional_arrouba_sem_reposicao_custo_total_atividade__dezembro         = models.FloatField()
    
    custo_operacional_arrouba_com_reposicao_custo_total_atividade_janeiro          = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__feveiro         = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__marco           = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__abril           = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__maio            = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__junho           = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__julho           = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__agosto          = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__setembro        = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__outubro         = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__novembro        = models.FloatField()
    custo_operacional_arrouba_com_reposicao_custo_total_atividade__dezembro        = models.FloatField()
        

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Custo operacional"


class custo_oportunidade(models.Model):
    #indices produtivos
    fazenda = models.ForeignKey(fazenda)
    rebanho_cabeca = models.IntegerField()
    peso_medio_kg = models.FloatField()
    area_reserva_app_ha = models.FloatField()
    area_util_ha = models.FloatField()
    ganho_arrouba_cabeca_ano = models.FloatField()
    litacao_cabeca_ha = models.FloatField()
    produtividade_arrouba_ha = models.FloatField()
    total_arrouba_produzida = models.FloatField()

    #indices economicos
    imobilizado_em_terra_reais = models.FloatField()
    imobilizado_em_animais_reais = models.FloatField()
    imobilizado_desembolso_reais = models.FloatField()
    imobilizado_total_reais = models.FloatField()

    #calculos de oportunidades custos
    
    aluguel_cab_mes_terra = models.FloatField()
    tempo_aluguel_terra=  models.FloatField()
    cab_ha_terra = models.FloatField()
    receita_ha_ano_terra = models.FloatField()
    valor_terra_ha_terra = models.FloatField()
    receita_area_util_terra = models.FloatField()

    #imobilidade
    custo_oportunidade = models.FloatField()
    taxa_SELIC_imobilidade = models.FloatField()
    imposto_bancario = models.FloatField()
    inflacao = models.FloatField()
    no_imobilizado_rais = models.FloatField()

    arrendamento_ha_ano = models.FloatField()
    valor_da_terra_ha = models.FloatField()
    custo_de_oportunidade = models.FloatField()
    receita_na_area_util = models.FloatField()

    custo_oportunidade_operacional = models.FloatField()
    taxa_selic = models.FloatField()
    imposto_bancario_operacional = models.FloatField()
    inflacao_operacional = models.FloatField()
    custo_de_oportunidade_de_custeio = models.FloatField()

    somatoria_dos_custos_de_oportunidade = models.FloatField()
    remuneracao_real_do_custo_total = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Custo oportunidade"


class custo_total(models.Model):
      fazenda               = models.ForeignKey(fazenda)
      Fixo_janeiro =          models.FloatField()
      Fixo_fevereiro =        models.FloatField()
      Fixo_marco =            models.FloatField()
      Fixo_abril =            models.FloatField()
      Fixo_maio =             models.FloatField()
      Fixo_junho =            models.FloatField()
      Fixo_julho =            models.FloatField()
      Fixo_agosto =           models.FloatField()
      Fixo_setembro =         models.FloatField()
      Fixo_outubro =          models.FloatField()
      Fixo_novembro =         models.FloatField()
      Fixo_dezembro =         models.FloatField()
      Fixo_total =            models.FloatField()
      Fixo_custo_total =      models.FloatField()

      Variavel_janeiro =          models.FloatField()
      Variavel_fevereiro =        models.FloatField()
      Variavel_marco =            models.FloatField()
      Variavel_abril =            models.FloatField()
      Variavel_maio =             models.FloatField()
      Variavel_junho =            models.FloatField()
      Variavel_julho =            models.FloatField()
      Variavel_agosto =           models.FloatField()
      Variavel_setembro =         models.FloatField()
      Variavel_outubro =          models.FloatField()
      Variavel_novembro =         models.FloatField()
      Variavel_dezembro =         models.FloatField()
      Variavel_total =            models.FloatField()
      Variavel_custo_total =      models.FloatField()

      D_administrativas_janeiro =          models.FloatField()
      D_administrativas_fevereiro =        models.FloatField()
      D_administrativas_marco =            models.FloatField()
      D_administrativas_abril =            models.FloatField()
      D_administrativas_maio =             models.FloatField()
      D_administrativas_junho =            models.FloatField()
      D_administrativas_julho =            models.FloatField()
      D_administrativas_agosto =           models.FloatField()
      D_administrativas_setembro =         models.FloatField()
      D_administrativas_outubro =          models.FloatField()
      D_administrativas_novembro =         models.FloatField()
      D_administrativas_dezembro =         models.FloatField()
      D_administrativas_total =            models.FloatField()
      D_administrativas_custo_total =      models.FloatField()

      Oportunidade_janeiro =          models.FloatField()
      Oportunidade_fevereiro =        models.FloatField()
      Oportunidade_marco =            models.FloatField()
      Oportunidade_abril =            models.FloatField()
      Oportunidade_maio =             models.FloatField()
      Oportunidade_junho =            models.FloatField()
      Oportunidade_julho =            models.FloatField()
      Oportunidade_agosto =           models.FloatField()
      Oportunidade_setembro =         models.FloatField()
      Oportunidade_outubro =          models.FloatField()
      Oportunidade_novembro =         models.FloatField()
      Oportunidade_dezembro =         models.FloatField()
      Oportunidade_total =            models.FloatField()
      Oportunidade_custo_total =      models.FloatField()

      Ct_cabeca_c_reposicao_janeiro =          models.FloatField()
      Ct_cabeca_c_reposicao_fevereiro =        models.FloatField()
      Ct_cabeca_c_reposicao_marco =            models.FloatField()
      Ct_cabeca_c_reposicao_abril =            models.FloatField()
      Ct_cabeca_c_reposicao_maio =             models.FloatField()
      Ct_cabeca_c_reposicao_junho =            models.FloatField()
      Ct_cabeca_c_reposicao_julho =            models.FloatField()
      Ct_cabeca_c_reposicao_agosto =           models.FloatField()
      Ct_cabeca_c_reposicao_setembro =         models.FloatField()
      Ct_cabeca_c_reposicao_outubro =          models.FloatField()
      Ct_cabeca_c_reposicao_novembro =         models.FloatField()
      Ct_cabeca_c_reposicao_dezembro =         models.FloatField()
      Ct_cabeca_c_reposicao_total =            models.FloatField()
      Ct_cabeca_c_reposicao_custo_total =      models.FloatField()

      Total_janeiro =          models.FloatField()
      Total_fevereiro =        models.FloatField()
      Total_marco =            models.FloatField()
      Total_abril =            models.FloatField()
      Total_maio =             models.FloatField()
      Total_junho =            models.FloatField()
      Total_julho =            models.FloatField()
      Total_agosto =           models.FloatField()
      Total_setembro =         models.FloatField()
      Total_outubro =          models.FloatField()
      Total_novembro =         models.FloatField()
      Total_dezembro =         models.FloatField()
      Total_total =            models.FloatField()
      Total_custo_total =      models.FloatField()

      def __unicode__(self):
        return self.fazenda


      class Meta:
        verbose_name_plural = u"Custo total"


class receitas(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Venda_de_boi_gordo = models.FloatField()
    Tourinhos = models.FloatField()
    Abate = models.FloatField()
    Trator = models.FloatField()
    Aluguei_pasto = models.FloatField()
    Outros1 = models.FloatField()
    Receita_total = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Receita"


class balanco_patrimonial(models.Model):
    #contas
    #1-circulante
    fazenda = models.ForeignKey(fazenda)
    Dinheiro_em_caixa = models.FloatField()
    Titulos_e_contas_a_receber_a_curto_prazo = models.FloatField()
    Adiantamentos_e_emprestimos_a_curto_prazo = models.FloatField()
    Aplicacoes_finaceiras_a_curto_prazo = models.FloatField()
    Despesas_antecipadas_a_curto_prazo = models.FloatField()
    Colheitas_pendentes = models.FloatField()
    Estoques_de_provisoes = models.FloatField()
    Estoques_de_insumos = models.FloatField()
    Animais_de_producao_de_trabalho_e_criacoes = models.FloatField()
    Outros = models.FloatField()
    Total = models.FloatField()

    #2 realizavel ao longo prazo
    Titulos_e_contas_a_receber_a_longo_prazo = models.FloatField()
    Adiantamentos_e_emprestimos_a_longo_prazo = models.FloatField()
    Aplicacoes_financeiras_a_longo_prazo = models.FloatField()
    Despesas_antecipadas_a_longo_prazo = models.FloatField()
    Outros_creditos_a_longo_prazo = models.FloatField()

    #permanente
    Investimentos = models.FloatField()
    Terras_nuas = models.FloatField()
    Culturas_perenes = models.FloatField()
    Benfeitorias_e_melhoramentos = models.FloatField()
    Maquinaria_e_equipamentos = models.FloatField()
    Total_permanente = models.FloatField()

    #circulante
    Titulos_e_contas_a_pagar_a_curto_prazo = models.FloatField()
    Impostos_a_pagar = models.FloatField()
    Emprestios_a_pagar = models.FloatField()
    Salarios_a_pagar = models.FloatField()
    Encargos_sociais_a_curto_prazo = models.FloatField()
    Total_circulante = models.FloatField()

    #exigivel longo prazo
    Financiamentos = models.FloatField()
    Titulos_e_contas_a_pagar_a_longo_prazo = models.FloatField()
    Outras_obrigacoes_a_longo_prazo = models.FloatField()
    Total_longo_prazo = models.FloatField()
    
    #patrimonio liquido
    patrimonio_liquido_1_2_3_4_5_6 = models.FloatField()
    Passivos_totais4_5_6 = models.FloatField()
    Valorizacao_do_patrimonio = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Balanco patrimonial"


class analise(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Receita_total = models.FloatField()
    Resultado_caixa = models.FloatField()
    Lucro_operacional = models.FloatField()
    Lucro_economico = models.FloatField()
    Lucro_operacional_ha = models.FloatField()
    Lucratividade = models.FloatField()
    Rentabilidade = models.FloatField()
    Pay_back = models.FloatField()
    Tir = models.FloatField()
    Relacao_beneficio_custo = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"Analise"


class vpl(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Numero_animais = models.FloatField()
    Peso_animais_arrouba = models.FloatField()
    Valor_inicial = models.FloatField()
    Valor_final = models.FloatField()
    Taxa_mensal_de_juros = models.FloatField()
    Resultado_caixa = models.FloatField()
    Vpl = models.FloatField()
    Custo_animal = models.FloatField()

    def __unicode__(self):
        return self.fazenda

    class Meta:
        verbose_name_plural = u"VPL"



class pe(models.Model):
    fazenda = models.ForeignKey(fazenda)
    Custo_fixo_total = models.FloatField()
    Custo_variavel_unitario = models.FloatField()
    Preco_medio_de_venda = models.FloatField()

    Ponto_de_equilibrio_anual = models.FloatField()
    Ponto_de_equilibrio_mensal = models.FloatField()
    Ponto_de_equilibrio_diario = models.FloatField()

    def __unicode__(self):
        return self.fazenda


    class Meta:
        verbose_name_plural = u"PE"

