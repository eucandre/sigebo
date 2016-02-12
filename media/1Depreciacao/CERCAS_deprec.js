    var CERCAS_depreciacao         = document.getElementById("id_cercas_depreciacao_anual");
    var CERCAS_depreciacao_INICIAL = document.getElementById("id_cercas_valor_inicial");
    var CERCAS_depreciacao_FINAL   = document.getElementById("id_cercas_valor_final_ou_sucata");
    function CERCA_dep(){
        CERCAS_depreciacao.innerHTML = parseInt(CERCAS_depreciacao_INICIAL.value)+parseInt(CERCAS_depreciacao_FINAL.value)
    }

    CERCA_dep();
    CERCAS_depreciacao_INICIAL.addEventListener("keyup",CERCA_dep);
    CERCAS_depreciacao_FINAL.addEventListener("keyup",CERCA_dep);

