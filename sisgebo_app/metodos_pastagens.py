from django.http import Http404
from models import pastagem, Definicao_sistema_e_rebanho_inicial

def numero_machos_pastagem():
    try:
        tamanho_definicao = len(Definicao_sistema_e_rebanho_inicial.objects.all())
        if tamanho_definicao ==None:
            return 0
        elif tamanho_definicao!=None:

            obj_definicao = Definicao_sistema_e_rebanho_inicial()
            if (obj_definicao.vacas or obj_definicao.numero_vacas_touro)==None:
                return 0
            else:
                Touros = int(obj_definicao.vacas)/int(obj_definicao.numero_vacas_touro)
            return Touros
    except Definicao_sistema_e_rebanho_inicial.DoesNotExist:
        raise Http404()
