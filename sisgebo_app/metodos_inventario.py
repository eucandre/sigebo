from models import Inventario_ligado_atividade

def medio_inventario():
    i = Inventario_ligado_atividade()

    if i.Insumos_valor_inicial_mercado == None:
        return 0
    else:
        return int(i.Insumos_valor_inicial_mercado)+int(i.maquinas_implementos_valor_inicial_de_mercado)+int(i.tratores_valor_inicial_de_mercado)+int(i.veiculos_valor_inicial_de_mercado)+int(i.equipamentos_manuais_valor_inicial_de_mercado)+int(i.reprodutores_macho_valor_inicial_de_mercado)+int(i.reprodutores_femea_valor_inicial_de_mercado)+int(i.animais_engorda_valor_inicial_de_mercado)+int(i.animais_trabalho_valor_inicial_de_mercado)+int(i.canavial_ou_volumoso_valor_inicial_de_mercado)+int(i.benfeitorias_valor_inicial_de_mercado)+int(i.cercas_valor_inicial_de_mercado)+int(i.edificacoes_valor_inicial_de_mercado)+int(i.pastagem_valor_inicial_de_mercado)+int(i.semem_valor_inicial_de_mercado)+int(i.terra_valor_inicial_de_mercado)

def pega_maquina():
    i = Inventario_ligado_atividade()
    if i == None:
        return 0
    else:
        return i.maquinas_implementos_valor_inicial_de_mercado

def fin_suc_maquina():
     i = Inventario_ligado_atividade()
     if i == None:
         return 0
     else:
         return i.maquinas_implementos_valor_final_ou_sucata