from django.http import Http404
from models import *

def pega_valor_di_vacas_discarte():
    try:
        tamanho = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanho ==None or tamanho==0:
            return 0
        elif tamanho!=None:
            obj_definicao = Definicao_sistema_e_rebanho_inicial()
            if (obj_definicao.vacas_descarte)==None:
                return 0
            else:
                return obj_definicao.vacas_descarte
    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()

def pega_venda_novilhos():

    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod == None or tamanhod ==0:
            return 0

        elif tamanhod!=None:
            d = Definicao_sistema_e_rebanho_inicial()
            if(d.machos12 and d.vacas)==0 or (d.machos12 and d.vacas)==None:
                return 0
            else:
                venda_novilhos = (int(d.machos12)-int(d.vacas))*int(d.reposicao)
            return venda_novilhos

    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()

def numero_animais_confinados():
    d= Definicao_sistema_e_rebanho_inicial()
    if d.vacas == None:
        return 0
    else:
        return ((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100)))-((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100))))*int(d.mortalidade01))+(((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100)))-((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100))))*int(d.mortalidade01))-(int(d.reposicao)/100)*int(d.vacas))

def ganho_diario():

    c= Confinamento()
    if c.Peso_inicial==None:
        return 0
    else:
        return (c.Peso_Final-c.Peso_inicial)/c.tempo_confinamento
