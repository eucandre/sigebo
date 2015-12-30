from django.http import Http404
from models import *

def pega_valor_di_vacas_discarte():
    global vacas_descarte
    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod == None:
            vacas_descarte = 0

        elif tamanhod>0:
            d = Definicao_sistema_e_rebanho_inicial.objects.get(pk = tamanhod)
            vacas_descarte = int(d.vacas_descarte)
            return vacas_descarte
    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()
    pass

def numero_animais_confinados():
    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod ==None:
            numero_a_confinados = 0

        elif tamanhod>0:
            d = Definicao_sistema_e_rebanho_inicial.objects.get(pk=tamanhod)
            numero_a_confinados = ((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100)))-((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100))))*int(d.mortalidade01))+(((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100)))-((int(d.vacas)-(int(d.vacas)-(int(d.vacas)*int(d.fertilidade)/100))))*int(d.mortalidade01))-(int(d.reposicao)/100)*int(d.vacas))
            return numero_a_confinados

    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()

