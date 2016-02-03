var PASTAGEM_CFX= document.getElementById("id_pastagem_custo_fixo");
var PASTAGEM_CFX_INICIAL    = document.getElementById("id_pastagem_valor_inicial");
var PASTAGEM_CFX_FINAL      = document.getElementById("id_pastagem_valor_final_ou_sucata");
var PASTAGEM_CFX_MEDIO      = document.getElementById("id_pastagem_capital_medio");
function PAST_CFX(){
     PASTAGEM_CFX.innerHTML = (parseInt(PASTAGEM_CFX_INICIAL.value)-parseInt(PASTAGEM_CFX_FINAL.value))+parseInt(PASTAGEM_CFX_MEDIO.value)*10;
}
PAST_CFX();

PASTAGEM_CFX_INICIAL.addEventListener("keyup",PAST_CFX);
PASTAGEM_CFX_FINAL.addEventListener("keyup",PAST_CFX);
PASTAGEM_CFX_MEDIO.addEventListener("keyup",PAST_CFX);