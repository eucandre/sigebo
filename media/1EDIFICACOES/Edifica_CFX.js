var EDIF_CFX= document.getElementById("id_edificacoes_custo_fixo");
var EDIF_CFX_INICIAL= document.getElementById("id_edificacoes_valor_inicial");
var EDIF_CFX_FINAL= document.getElementById("id_edificacoes_valor_final_ou_sucata");
var EDIF_CFX_MEDIO= document.getElementById("id_edificacoes_capital_medio");
function EDIFICA_custo(){
     EDIF_CFX.innerHTML = ((parseInt(EDIF_CFX_INICIAL.value)-parseInt(EDIF_CFX_FINAL.value)/3))+parseInt(EDIF_CFX_MEDIO.value)*10;
}
EDIFICA_custo();
EDIF_CFX.addEventListener("keyup",EDIFICA_custo);
EDIF_CFX_INICIAL.addEventListener("keyup",EDIFICA_custo);
EDIF_CFX_FINAL.addEventListener("keyup",EDIFICA_custo);
EDIF_CFX_MEDIO.addEventListener("keyup",EDIFICA_custo);