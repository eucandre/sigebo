from sisgebo_app.models import *

def t_custo_fixo():
    d = depreciacao()
    tamanho = len(depreciacao.objects.all())
    if tamanho==0:
        return 0
    else:
        return int(d.maquina_implemento_custo_fixo)+int(d.tratores_custo_fixo)+int(d.veiculos_custo_fixo)+int(d.equipamentos_manuais_custo_fixo)+int(d.reprodutores_machos_custo_fixo)+int(d.reprodutores_femeas_custo_fixo)+int(d.animais_trabalho_custo_fixo)+int(d.canavial_ou_volumoso_custo_fixo)+int(d.benfeitorias_custo_fixo)+int(d.cercas_custo_fixo)+int(d.edificacoes_custo_fixo)+int(d.pastagem_custo_fixo)

