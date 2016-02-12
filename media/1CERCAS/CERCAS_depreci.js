var CERCAS_depreciacao= document.getElementById("id_cercas_depreciacao_anual");
var CERCAS_depreciacao_INICIAL= document.getElementById("id_cercas_valor_inicial");
var CERCAS_depreciacao_FINAL= document.getElementById("id_cercas_valor_final_ou_sucata");
function dep_CER_an(){
     CERCAS_depreciacao.innerHTML = ((parseInt(CERCAS_depreciacao_INICIAL.value)-parseInt(CERCAS_depreciacao_FINAL.value))/3).toFixed(2);
}
dep_CER_an();

CERCAS_depreciacao_INICIAL.addEventListener("keyup",dep_CER_an);
CERCAS_depreciacao_FINAL.addEventListener("keyup",dep_CER_an);