from django.http import Http404
from models import *

def numero_machos():
    global machos
    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod == None:

            return 0
        elif tamanhod > 0:

            d = Definicao_sistema_e_rebanho_inicial()

            machos = int(d.vacas)/int(d.numero_vacas_touro)

            return machos

    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()

def numero_femeas():
    global femeas
    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod == 0:
            femeas = 0
            return femeas
        elif tamanhod > 0:

            d = Definicao_sistema_e_rebanho_inicial()

            femeas = int(d.vacas)

            return femeas

    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()

def numero_animais6_12():
    global animais
    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod == 0:
            animais = 0
            return animais
        elif tamanhod > 0:

            d = Definicao_sistema_e_rebanho_inicial()

            animais = int(d.vacas)-(int(d.vacas)*d.fertilidade)

            return animais

    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()

def numero_animais12_21():
    global animais
    try:
        tamanhod = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanhod == 0:
            animais = 0
            return animais
        elif tamanhod > 0:

            d = Definicao_sistema_e_rebanho_inicial()

            animais = (int(d.vacas)-(int(d.vacas)*d.fertilidade))-(int(d.vacas)-(int(d.vacas)*d.fertilidade)*d.mortalidade01)

            return animais

    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()


def numero_categoria_pastagem():
    global pastagems
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            pastagems = 0
            return pastagems
        elif tamanhop > 0:
            p = pastagem()
            pastagems = (int(p.tempo_descanso)/int(p.tempo_pastejo))+1
            return pastagems
    except pastagem.DoesNotExist:
        raise Http404()

def numero_area_piquete_macho():
    global piquete_macho
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            piquete_macho = 0
            return piquete_macho

        elif tamanhop > 0:
            p = pastagem()
            piquete_macho = ((int(p.peso_machos_kg)*int(p.n_machos))/450)/int(p.cap_suporte)
            return piquete_macho
    except pastagem.DoesNotExist:
        raise Http404()


def razao_piquete_cat_piquete_macho():
    global piquete_macho
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            piquete_macho = 0
            return piquete_macho
        elif tamanhop > 0:
            p = pastagem()
            piquete_macho = int(p.areas_piquetes_machos_hectare)/int(p.n_piquetes_categoria)
            return piquete_macho

    except pastagem.DoesNotExist:
        raise Http404()


def numero_piquete_femea():

    global piquete_femea
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            piquete_femea = 0
            return piquete_femea
        elif tamanhop > 0:
            p = pastagem()
            piquete_femea =(numero_femeas()*int(p.peso_femeas_kg))/int(p.cap_suporte+p.cap_suporte2+p.cap_suporte3+p.cap_suporte4+p.cap_suporte5+p.cap_suporte6+p.cap_suporte7+p.cap_suporte8+p.cap_suporte9+p.cap_suporte10+p.cap_suporte11)#((int(p.peso_machos_kg)*int(p.n_machos))/450)/int(p.cap_suporte)
            return piquete_femea

    except pastagem.DoesNotExist:
        raise Http404()


def razao_piquete_cat_piquete_femea():
    global piquete_femea
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            piquete_femea = 0
            return piquete_femea

        elif tamanhop > 0:
            p = pastagem()
            piquete_femea = int(p.areas_piquetes_machos_hectare)/int(p.n_piquetes_categoria)
            return piquete_femea
    except pastagem.DoesNotExist:
        raise Http404()

def numero_piquete_animais6_12():
    global piquete_animais6_12
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            piquete_animais6_12 = 0
            return piquete_animais6_12

        elif tamanhop > 0:
            p = pastagem()
            piquete_animais6_12 =((numero_animais6_12()*int(p.peso_animais6_12_kg))/450)/1.5
            return piquete_animais6_12

    except pastagem.DoesNotExist:
        raise Http404()

def razao_piquete_cat_animais6_12():
    global razao_piquete_animais6_12
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            razao_piquete_animais6_12 = 0
            return razao_piquete_animais6_12
        elif tamanhop > 0:
            p = pastagem()
            razao_piquete_animais6_12 = numero_piquete_animais6_12()/int(p.n_piquetes_categoria)
            return razao_piquete_animais6_12
    except pastagem.DoesNotExist:
        raise Http404()

def numero_piquete_animais12_21():
    global piquete_animais12_21
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            piquete_animais12_21 = 0
            return piquete_animais12_21
        elif tamanhop > 0:
            p = pastagem()
            piquete_animais12_21 =((numero_animais12_21()*int(p.peso_animais12_21_kg))/450)/1.5
            return piquete_animais6_12

    except pastagem.DoesNotExist:
        raise Http404()


def razao_piquete_cat_animais12_21():
    global razao_piquete_animais12_21
    try:
        tamanhop = len(pastagem.objects.all())
        if tamanhop ==0:
            razao_piquete_animais12_21 = 0
            return razao_piquete_animais12_21

        elif tamanhop > 0:
            p = pastagem()
            razao_piquete_animais12_21 = numero_piquete_animais12_21()/int(p.n_piquetes_categoria)
            return razao_piquete_animais12_21
    except pastagem.DoesNotExist:
        raise Http404()

def numero_total_piquetes():
    global total
    try:
        if numero_area_piquete_macho() == None and numero_piquete_femea()==None and numero_piquete_animais6_12()==None and numero_piquete_animais12_21()==None:
            return 0
        else:
            return int(numero_area_piquete_macho())+int(numero_piquete_femea())+int(numero_piquete_animais6_12())+int(numero_piquete_animais12_21())
    except pastagem.DoesNotExist:
        raise Http404()

