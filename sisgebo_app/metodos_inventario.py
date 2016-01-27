from models import Inventario_ligado_atividade
from models import depreciacao
def pega_maquina():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.maquinas_implementos_valor_inicial_de_mercado)

def fin_suc_maquina():
     i = Inventario_ligado_atividade()
     tamanho = len(Inventario_ligado_atividade.objects.all())
     if tamanho==0:
         return 0
     else:
         return i.reprodutores_macho_valor_final_ou_sucata()

def maquinas_medio():
    i= Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())
    if tamanho==0:
        return 0
    else:
        return int(i.maquinas_implementos_valor_inicial_de_mercado)+int(i.maquinas_implementos_valor_final_ou_sucata)/2

def maquinas_depre_anual():
    d = depreciacao()
    tamanho = len(depreciacao.objects.all())
    if tamanho ==0:
        return 0
    else:
        return int(d.maquina_implemento_valor_inicial)+int(d.maquina_implemento_valor_final_ou_sucata)