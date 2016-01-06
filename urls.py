from django.conf.urls.defaults import patterns, include, url
from django.conf import settings
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sigebo.views.home', name='home'),
    # url(r'^sigebo/', include('sigebo.foo.urls')),
    url(r'^$','sisgebo_app.views.inicio'),
    url(r'^definicao/$','sisgebo_app.views.definicao_rebanho_inicial'),
    url(r'^pastagem/$','sisgebo_app.views.pastagens'),
    url(r'^venda_compra/$','sisgebo_app.views.vendas_compras'),
    url(r'^confinamento/$','sisgebo_app.views.confinamento_curral'),
    url(r'^dimen_aberto/$','sisgebo_app.views.dimensionamento_aberto'),
    url(r'^dimen_fechado/$','sisgebo_app.views.dimensionamento_fechado'),
    url(r'^gastos_veterinarios/$','sisgebo_app.views.gastos_veterinarios'),
    url(r'^rendimento_carcaca/$','sisgebo_app.views.rendimento_carca'),
    url(r'^mao_obra/$','sisgebo_app.views.mao_obra'),
    url(r'^relatorio_criacao_bovinos/$','sisgebo_app.views.relatorio_criacao_bovinos'),
    url(r'^relatorio_instalacao/$','sisgebo_app.views.relatorio_instalacao'),




    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
        }))
