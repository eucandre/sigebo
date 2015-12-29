# coding=utf-8

from Metodos_Auxiliares import *
from Metodos_Auxiliares2 import *
from sisgebo_app.models import *

__author__ = 'Carlos'
from django import forms
from django.forms import ModelForm

UF =((u'Acre','Acre'),(u'Alagoas','Alagoas'),(u'Amapa','Amapá'),(u'Amazonas','Amazonas'),(u'Bahia','Bahia'),
(u'Ceara','Ceará'),(u'Distrito Federal','Distrito federal'),(u'Espirito Santo','Espirito Santo'),(u'Goias','Goias'),
(u'Maranhao','Maranhão'),(u'Mato Grosso','Mato grosso'),(u'Mato Grosso do Sul','Matogrosso do sul'),(u'Minas Gerais','Minas gerais'),
(u'Para','Pará'),(u'Paraiba','Parraíba'),(u'Parana','Paraná'),(u'Pernambuco','Pernambuco'),(u'Piaui','Piauí'),
(u'Rio de janeiro','Rio de janeiro'),(u'Rio Grande do Sul','Rio grande do suç'),(u'Rio Grande do Norte','Rio grande do norte'),
(u'Rondonia','Rondônia'),(u'Roraima','Roraima'),(u'Santa Catarina','Santa catarina'),(u'Sao paulo','São paulo'),
(u'Sergipe','Sergipe'),(u'Tocantins','Tocantins'),)

CARGO=((u'Peao','Peao'),(u'Capataz','Capataz'),(u'Gerente','Gerente'),(u'Tratorista','Tratorista'),(u'Outros','Outros'))




class FormFazenda(forms.Form):


    nome_fazenda = forms.CharField(max_length=150, widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12"}))
    cidade = forms.CharField(max_length=150, widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12"}))
    uf_municipio = forms.ChoiceField(choices=UF,widget=forms.Select(attrs={"class":"form-control","style":"width:25%;"}))
    proprietario = forms.CharField(max_length=150, widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12"}))
    rua = forms.CharField(max_length=150, widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12","style":"width:60%;" }))
    numero = forms.IntegerField( widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12", "style":"width:11%;"}))
    cep = forms.CharField(max_length=9, widget=forms.TextInput(attrs={"class":"form-control"}))
    telelfone = forms.CharField(max_length=20, widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12","style":"width:40%;" }))
    email = forms.EmailField(widget=forms.TextInput(attrs={"class":"form-control col-md-7 col-xs-12","style":"width:40%;" }))


class FormDefinicao_rebanho_inicial(forms.ModelForm):
    '''
            passar os forms a partir daqui para forms.Form, tirar o ModelForm.
            fazenda =forms.ModelChoiceField(queryset=Cadastro_Fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"class":"form-field","placeholder":"Fazenda" }))
    '''
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(),widget=forms.Select(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                                              "style":"width:10%;"
                                                                                            ,"placeholder":"Fazenda" }))
    vacas = forms.IntegerField(widget= forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                              "style":"width:5%;",
                                                              "placeholder":""}))
    novilhas34 = forms.IntegerField(initial=0,widget= forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                              "style":"width:5%;",
                                                              "placeholder":""}))
    novilhas23 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    novilhas12 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    bezerros01 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    bezerras01 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    machos12 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    machos23 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    machos34 = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    machos_maior_que_4 = forms.IntegerField(initial=0,label="Macho4... ",widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    touros = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    tourunos = forms.IntegerField(initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    vacas_descarte =forms.IntegerField(initial=0,label= "vascas desc.",widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    total=forms.IntegerField(widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:5%;",
                                                                  }))
    fertilidade =forms.IntegerField(initial=81,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    mortalidade01=forms.IntegerField(label="mortali. 01",initial=1,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    mortalidade12=forms.IntegerField(label="mortali. 12",initial=0,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    reposicao=forms.IntegerField(initial=19,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    numero_vacas_touro=forms.IntegerField(label="vacas/touro",initial=40,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    peso_medio_arrouba_novilho=forms.IntegerField(label="Peso médio novilho",initial=16,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    peso_medio_arrouba_vacas=forms.IntegerField(label="Peso médio vacas",initial=13,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    intervalo_entre_partos=forms.IntegerField(label="Interervalo partos meses",initial=14,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    idade_primeira_cria=forms.IntegerField(label="Idade primeira cria meses",initial=36,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    peso_a_desmama=forms.IntegerField(label="Peso a desmana kg",initial=171.5,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    peso_a_nascer=forms.IntegerField(label="Peso ao nascer kg",initial=35,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    preco_arrouba=forms.IntegerField(label="Preço da arrouba R$",initial=95,widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                  "style":"width:4%;",
                                                                  }))
    #def pega_touros(self):
    #    return int(self.vacas)/int(self.numero_vacas_touro)
    #1º ano
    tourosR = forms.CharField(initial=0,label="Touros", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes = forms.CharField(initial=0,label="Matrizes", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte = forms.CharField(initial=0,label="Descarte", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    deZeroAUmAno = forms.CharField(initial=0,label="0-1 anos", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    deUmADoisAnos = forms.CharField(initial=0,label="1-2 anos", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    dedoistresanos = forms.CharField(initial=0,label="2-3 anos", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    compra_femeas_reproducao = forms.CharField(initial=0,label="Compra femeas reproducao", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao = forms.CharField(initial=0,label="Animais de 2-3 para reposicao", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    vendas_vacas_descarte_ano = forms.CharField(initial=0,label="Vendas vacas descarte por ano", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    vendas_novilhoas_ano = forms.CharField(initial=0,label="Vendas novilhoas por ano", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    vendas_novilhoas_ano_arrouba = forms.CharField(initial=0,label="Vendas novilhoas por ano @", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    vendas_vacas_ano_arrouba = forms.CharField(initial=0,label="Vendas vacas por ano @", widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #2º ano
    touros2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de23anos2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    compra_femeas_reproducao2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao2 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #3º ano
    touros3 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes3= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte3= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano3 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos3 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de23anos3 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    compra_femeas_reproducao3 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao3 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #4º ano

    touros4 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes4= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte4= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano4= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos4= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao4= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #5º ano
    touros5 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes5= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte5= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano5= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos5= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao5= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #6º ano
    touros6 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes6= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte6= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano6= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos6= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao6= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #7º ano
    touros7 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes7= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte7= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano7= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos7= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao7= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #8º ano
    touros8 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes8= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte8= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano8= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos8= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao8= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    #9º ano
    touros9 = forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    matrizes9= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    descarte9= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de01ano9= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    de12anos9= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))
    animais_23_reposicao9= forms.CharField(initial=0, widget=forms.TextInput(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",}))

    class Meta:
        model = Definicao_sistema_e_rebanho_inicial
        fields = ['fazenda', 'vacas','novilhas34','novilhas23','novilhas12','bezerras01','bezerros01',
                  'machos12','machos23','machos34','machos_maior_que_4','touros',
                  'tourunos','vacas_descarte','total','fertilidade','mortalidade01','mortalidade12',
                  'reposicao','numero_vacas_touro','peso_medio_arrouba_novilho','peso_medio_arrouba_vacas'
            ,'intervalo_entre_partos','idade_primeira_cria','peso_a_desmama','peso_a_nascer','preco_arrouba',]



class FormPastagem(forms.Form):


    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(),widget=forms.Select(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                                              "style":"width:10%;"
                                                                                            ,"placeholder":"Fazenda" }))
    #pastagens
    area_pasto = forms.FloatField(initial=368, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar2 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar3 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar4 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar5 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar6 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar7 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar8 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar9 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar10 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_a_comprar11 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar2 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar3 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar4 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar5 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar6 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar7 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar8 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar9 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar10 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    areas_formar11 = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    aluguel = forms.FloatField(initial=0.0, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte2 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte3 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte4 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte5 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte6 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte7 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte8 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte9 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte10 = forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    cap_suporte11= forms.FloatField(initial=1.5, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    #especificaçoes do planejamento
    n_machos = forms.IntegerField(initial= numero_machos(), widget=forms.TextInput(attrs={"style":"width:20%;"}))
    peso_machos_kg = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    n_femeas = forms.IntegerField(initial=numero_femeas(), widget=forms.TextInput(attrs={"style":"width:20%;"}))
    peso_femeas_kg = forms.FloatField(widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tempo_descanso = forms.IntegerField(initial=30, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tempo_pastejo = forms.IntegerField(initial=10, widget=forms.TextInput(attrs={"style":"width:20%;"}))
    animais6_12 = forms.IntegerField(initial=numero_animais6_12(), widget=forms.TextInput(attrs={"style":"width:20%;"}))
    peso_animais6_12_kg = forms.FloatField( widget=forms.TextInput(attrs={"style":"width:20%;"}))
    animais12_21 = forms.IntegerField( widget=forms.TextInput(attrs={"style":"width:20%;"}))
    peso_animais12_21_kg = forms.FloatField( widget=forms.TextInput(attrs={"style":"width:20%;"}))

    n_piquetes_categoria = forms.IntegerField(initial=numero_categoria_pastagem(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_piquetes_machos_hectare = forms.FloatField(initial=numero_area_piquete_macho(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    razao_area_piquete_categoria_piquete_machos = forms.FloatField(initial=razao_piquete_cat_piquete_macho(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_piquetes_femeas_hectare = forms.FloatField(initial=numero_piquete_femea(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    razao_area_piquete_categoria_piquete_femeas = forms.FloatField(initial=razao_piquete_cat_piquete_femea(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_piquetes_animais6_12 = forms.FloatField(initial=numero_piquete_animais6_12(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    razao_area_piquete_categoria_piquete_animais6_12 = forms.FloatField(initial=razao_piquete_cat_animais6_12(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_piquetes_animais12_21 = forms.FloatField(initial=numero_piquete_animais12_21(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    razao_area_piquete_categoria_piquete_animais12_21 = forms.FloatField(initial=razao_piquete_cat_animais12_21(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_piquetes_total_hectare = forms.FloatField(initial=numero_total_piquetes(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    area_comprar_hectare = forms.FloatField(initial=numero_area_comprar(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

class FormVenda_Compra(forms.Form):
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(),widget=forms.Select(attrs={"class":"control-label col-md-3 col-sm-3 col-xs-12",
                                                                                              "style":"width:10%;"
                                                                                            ,"placeholder":"Fazenda" }))
    descarte_vacas = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas2 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas3 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas4 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas5 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas6 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas7 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas8 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_vacas9 = forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    descarte_novilhos_as9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerras_desmamadas9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerros_desmamados9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_1_2_9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_2_3_9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_3_4_9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4_mais_9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    total9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Vacas_paridas_compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_paridas_compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Vacas_solteiras_compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Vacas_solteiras_compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))


    Novilhas_34_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_34_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Novilhas_32_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_32_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Novilhas_12_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Novilhas_12_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Bezerra_01_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerra_01_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Bezerro_01_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Bezerro_01_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Machos_12_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_12_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Machos_23_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_23_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Machos_34_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_34_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

    Machos_4mais_Compra=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra2=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra3=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra4=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra5=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra6=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra7=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra8=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Machos_4mais_Compra9=forms.CharField(max_length=150, initial=pega_valor_di_vacas_discarte(),widget=forms.TextInput(attrs={"style":"width:20%;"}))

class FormConfinamento(forms.Form):

    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"class":"form-control","style":"width:20%;"}))
    N_animais_confinados = forms.IntegerField(initial=numero_animais_confinados(),label='Numero de animais confinados',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:450px;top:200px;position:absolute;"}))
    Peso_inicial=forms.IntegerField(initial=380,label='Peso inical',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:500px;position:absolute;"}))
    Peso_Final=forms.IntegerField(initial=480,label='Peso final',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:500px;position:absolute;"}))
    Consumo_ms=forms.IntegerField(label='Consumo de ms',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:500px;position:absolute;"}))
    Consumo_agua=forms.IntegerField(label='Consumo de agua',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:500px;position:absolute;"}))
    Preco_concentrado=forms.FloatField(label='Preco do concentrado',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:500px;position:absolute;"}))

    tempo_confinamento = forms.FloatField(label='Duracao do confinamento em dias',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:500px;position:absolute;"}))
    volumoso=forms.FloatField(label='Percentual do volumoso da dieta dividido por 100',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:590px;position:absolute;"}))
    ganho_diario = forms.FloatField(label='Ganho diario',widget=forms.TextInput(attrs={"class":"form-control","style":"width:5%;left:590px;position:absolute;"}))
    #Concentrado=forms.IntegerField(label='', widget=forms.TextInput(attrs={"class":"form-field", "placeholder":"Concentrado - deixe em branco"}))
    #alimento = forms.ModelChoiceField(queryset=Alimentos.objects.all(), widget=forms.Select(attrs={"class":"form-field","placeholder":"alimentos"}))
    #pms_ha=forms.ModelChoiceField(queryset=pms_regisitros.objects.all(), widget=forms.Select(attrs={"class":"form-field","placeholder":"pms por ha"}))
    #pms_ha=forms.IntegerField(label='',initial=obj_alimento.pms_do_alimento_ha,widget=forms.TextInput(attrs={"class":"form-field", "placeholder":"pms por hectare"}))

class FormDimensionamentoSiloCeuAberto(forms.Form):
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"style":"width:20%;"}))
    Duracao_confinamento=forms.IntegerField(label='Duracao do confinamento',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Comsumo_silagem=forms.IntegerField(label='Consumo de Silagem',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Densidade=forms.IntegerField(label='Densidade',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Altura_Silo=forms.IntegerField(label='Altura do Silo',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Base_menor_silo=forms.IntegerField(label='Base menor do Silo',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Base_maior_silo=forms.IntegerField(label='Base maior do Silo',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Ms_silagem=forms.IntegerField(label='Materia seca da silagem',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tempo_confinamento =forms.IntegerField(label='Duracao do confinamento',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Consumo_diario=forms.IntegerField(label='Consumo diario',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Fatia_diaria=forms.IntegerField(label='Fatia diaria',widget=forms.TextInput(attrs={"style":"width:20%;"}))

class FormDimensionamentoSiloFechado(forms.Form):
    #pcgf = ConfinamentEmGalpaoFechado.objects.get(pk=(len(ConfinamentEmGalpaoFechado.objects.all())))
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"style":"width:20%;" }))
    Duracao_confinamento=forms.IntegerField(label='Duracao do confinamento',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Comsumo_silagem=forms.IntegerField(label='Consumo de Silagem',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Densidade=forms.IntegerField(label='Densidade',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Altura_Silo=forms.IntegerField(label='Altura do Silo',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Base_menor_silo=forms.IntegerField(label='Base menor do Silo',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Base_maior_silo=forms.IntegerField(label='Base maior do Silo',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Ms_silagem=forms.IntegerField(label='Materia seca da silagem',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tempo_confinamento =forms.IntegerField(label='Duracao do confinamento',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Consumo_diario=forms.IntegerField(label='Consumo diario',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Fatia_diaria=forms.IntegerField(label='Fatia diaria',widget=forms.TextInput(attrs={"style":"width:20%;"}))

class FormMaoObra(forms.Form):
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"style":"width:20%;"}))
    mes= forms.DateField(label='',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    getente= forms.IntegerField(label='Numero de gerentes',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    capataz= forms.IntegerField(label='Numero de capatazes',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    peao= forms.IntegerField(label='Numero de peoes',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tratorista= forms.IntegerField(label='Numero de tratoristas',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    outro= forms.IntegerField(label='Numero de outros',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    gerente_valor_fixado= forms.IntegerField( label='salario do gerente',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    capataz_valor_fixado= forms.IntegerField(label='Salario do capataz',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    peao_valor_fixado= forms.IntegerField(label='Salario do peao',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tratorista_valor_fixado= forms.IntegerField(label='Salario do tratorista',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    outro_valor_fixado= forms.IntegerField(label='Salario do outros',widget=forms.TextInput(attrs={"style":"width:20%;"}))

class FormGastos_veterinarios(forms.Form):
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"style":"width:20%;" }))
    ano  = forms.DateField(label='Ano ',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    vacinas=forms.IntegerField(label='Vacinas',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Outros_medicamentos = forms.IntegerField(label='Outros medicamentos',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    sal_mineral=forms.IntegerField(label='Sal mineral',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    sal_proteico=forms.IntegerField(label='Sal proteico',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    racao_concentrada=forms.IntegerField(label='Racao concentrada',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Creep_feeding=forms.IntegerField(label='Creep feeding',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    outros_alimentos=forms.IntegerField(label='Outros alimentos',widget=forms.TextInput(attrs={"style":"width:20%;"}))


class FormRendimentoCarcaca(forms.Form):
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"style":"width:20%;" }))
    ano= forms.DateField(label='Ano',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    vaca_gorda_kg= forms.IntegerField(label='Vaca gorda kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    novilha_gosda_kg= forms.IntegerField(label='Novilha gorda kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    boi_gordo_kg= forms.IntegerField(label='Boi gordo kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    novilho_precoce_kg= forms.IntegerField(label='Novilho precoce kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    touro_kg= forms.IntegerField(label='Touro kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    vaca_gorda_cento= forms.IntegerField(initial=50,label='Vaca gorda %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    novilha_gorda_cento= forms.IntegerField(initial=50,label='Novilha gorda %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    boi_gordo_cento= forms.IntegerField(initial=58,label='Boi gordo %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    novilho_gordo_cento= forms.IntegerField(initial=50,label='Novilho gordo %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    touro_cento= forms.IntegerField(initial=50,label='Touro %',widget=forms.TextInput(attrs={"style":"width:20%;"}))

class FormInventarioatividade(forms.Form):
    fazenda =forms.ModelChoiceField(queryset=fazenda.objects.all(), label='Fazenda',widget=forms.Select(attrs={"style":"width:20%;" }))
    Insumos_valor_inicial_mercado= forms.DateField(label='Ano',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Insumos_capital_medio= forms.IntegerField(label='Vaca gorda kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Insumos_valor_final_ou_sucata= forms.IntegerField(label='Novilha gorda kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    Insumos_porcentagem_patrimonio= forms.IntegerField(label='Boi gordo kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    maquinas_implementos_valor_inicial_de_mercado= forms.IntegerField(label='Novilho precoce kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    maquinas_implementos_capital_medio= forms.IntegerField(label='Touro kg',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    maquinas_implementos_valor_final_ou_sucata= forms.IntegerField(initial=50,label='Vaca gorda %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    maquinas_implementos_porcentagem_patrimonio= forms.IntegerField(initial=50,label='Novilha gorda %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tratores_valor_inicial_de_mercado= forms.IntegerField(initial=58,label='Boi gordo %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tratores_capital_medio= forms.IntegerField(initial=50,label='Novilho gordo %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tratores_valor_final_ou_sucata= forms.IntegerField(initial=50,label='Touro %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
    tratores_porcentagem_patrimonio= forms.IntegerField(initial=50,label='Touro %',widget=forms.TextInput(attrs={"style":"width:20%;"}))
