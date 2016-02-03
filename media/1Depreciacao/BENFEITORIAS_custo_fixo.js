    var BEMFEITORIAS_CFX            = document.getElementById("id_benfeitorias_custo_fixo");
    var BEMFEITORIAS_CFX_INICIAL    = document.getElementById("id_benfeitorias_valor_inicial");
    var BEMFEITORIAS_CFX_FINAL      = document.getElementById("id_benfeitorias_valor_final_ou_sucata");
    var BEMFEITORIAS_CFX_MEDIO      = document.getElementById("id_benfeitorias_capital_medio");
    function BENFEITORIA_cfx(){
         BEMFEITORIAS_CFX.innerHTML =
             (parseInt(BEMFEITORIAS_CFX_INICIAL.value)-
             parseInt(BEMFEITORIAS_CFX_FINAL.value)/2)+
             parseInt(BEMFEITORIAS_CFX_MEDIO.value)*10;
    }
    BENFEITORIA_cfx();
    BEMFEITORIAS_CFX.addEventListener("keyup",BENFEITORIA_cfx);
    BEMFEITORIAS_CFX_INICIAL.addEventListener("keyup",BENFEITORIA_cfx);
    BEMFEITORIAS_CFX_FINAL.addEventListener("keyup",BENFEITORIA_cfx);
    BEMFEITORIAS_CFX_MEDIO.addEventListener("keyup",BENFEITORIA_cfx);