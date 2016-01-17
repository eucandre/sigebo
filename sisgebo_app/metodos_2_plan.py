from models import *

def calcula_valor_atual_mercado_insumos():
    i = Inventario_ligado_atividade()
    if i.Insumos_valor_inicial_mercado ==None:
        return 0

    else:
        return  (i.Insumos_valor_inicial_mercado)+(i.Insumos_valor_final_ou_sucata)
def percentagem_valor_atual_mercado_insumos():
    i = Inventario_ligado_atividade()
    if i.Insumos_valor_inicial_mercado ==None:
        return 0

    else:
        return  ((i.Insumos_valor_inicial_mercado)+(i.Insumos_valor_final_ou_sucata))*0.6
