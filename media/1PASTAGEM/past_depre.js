var PASTAGEM_depreciacao= document.getElementById("id_pastagem_depreciacao_anual");
var PASTAGEM_depreciacao_INICIAL= document.getElementById("id_pastagem_valor_inicial");
var PASTAGEM_depreciacao_FINAL= document.getElementById("id_pastagem_valor_final_ou_sucata");
function past_dep(){
     PASTAGEM_depreciacao.innerHTML = ((parseInt(PASTAGEM_depreciacao_INICIAL.value)-parseInt(PASTAGEM_depreciacao_FINAL.value))/1).toFixed(2);
}
past_dep();

PASTAGEM_depreciacao_INICIAL.addEventListener("keyup",past_dep);
PASTAGEM_depreciacao_FINAL.addEventListener("keyup",past_dep);