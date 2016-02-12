    var BEMFEITORIAS_depreciacao= document.getElementById("id_benfeitorias_depreciacao_anual");
    var BEMFEITORIAS_depreciacao_INICIAL= document.getElementById("id_benfeitorias_valor_inicial");
    var BEMFEITORIAS_depreciacao_FINAL= document.getElementById("id_benfeitorias_valor_final_ou_sucata");
    function benfeitorias_dep(){
         BEMFEITORIAS_depreciacao.innerHTML =
             ((parseInt(BEMFEITORIAS_depreciacao_INICIAL.value)-
             parseInt(BEMFEITORIAS_depreciacao_FINAL.value))/2).toFixed(2);


    }
    benfeitorias_dep();
    BEMFEITORIAS_depreciacao.addEventListener("keyup",benfeitorias_dep);
    BEMFEITORIAS_depreciacao_INICIAL.addEventListener("keyup",benfeitorias_dep);
    BEMFEITORIAS_depreciacao_FINAL.addEventListener("keyup",benfeitorias_dep);