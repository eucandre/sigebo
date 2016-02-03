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

def trat_valorInicial():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.tratores_valor_inicial_de_mercado)


def tra_valorFinal():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.tratores_valor_final_ou_sucata)


def tra_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.tratores_capital_medio)

def vei_inicial():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.veiculos_valor_inicial_de_mercado)

def vei_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.veiculos_valor_final_ou_sucata)

def vei_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.veiculos_capital_medio)

def equi_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.equipamentos_manuais_valor_inicial_de_mercado)

def equi_med():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.equipamentos_manuais_capital_medio)

def equi_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.equipamentos_manuais_valor_final_ou_sucata)

def rep_mach_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.reprodutores_macho_valor_inicial_de_mercado)

def rep_mach_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.reprodutores_macho_valor_final_ou_sucata)

def rep_mach_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.reprodutores_macho_capital_medio)

def rep_fem_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.reprodutores_femea_valor_inicial_de_mercado)

def rep_fem_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.reprodutores_femea_valor_final_ou_sucata)

def rep_fem_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.reprodutores_femea_capital_medio)

def ani_eng_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.animais_engorda_valor_inicial_de_mercado)

def ani_eng_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.animais_engorda_valor_final_ou_sucata)

def ani_eng_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.animais_engorda_capital_medio)

def ani_tra_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.animais_trabalho_valor_inicial_de_mercado)

def ani_tra_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.animais_trabalho_valor_inicial_de_mercado)

def ani_tra_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.animais_trabalho_capital_medio)

def can_vol_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.canavial_ou_volumoso_valor_inicial_de_mercado)

def can_vol_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.canavial_ou_volumoso_valor_final_ou_sucata)

def can_vol_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.canavial_ou_volumoso_capital_medio)

def benf_ini():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.benfeitorias_valor_inicial_de_mercado)

def benf_fin():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.benfeitorias_valor_final_ou_sucata)

def benf_medio():
    i = Inventario_ligado_atividade()
    tamanho = len(Inventario_ligado_atividade.objects.all())

    if tamanho ==0:
        return 0
    return int(i.benfeitorias_capital_medio)

