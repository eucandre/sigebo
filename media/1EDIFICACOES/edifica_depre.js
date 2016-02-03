var EDIF_depreciacao= document.getElementById("edificacoes_depreciacao_anual");
var EDIF_depreciacao_INICIAL= document.getElementById("id_edificacoes_valor_inicial");
var EDIF_depreciacao_FINAL= document.getElementById("id_edificacoes_valor_final_ou_sucata");
function Edi_depre(){
     EDIF_depreciacao.innerHTML = (parseInt(EDIF_depreciacao_INICIAL.value)-parseInt(EDIF_depreciacao_FINAL.value))/3;
}
Edi_depre();

EDIF_depreciacao_INICIAL.addEventListener("keyup",Edi_depre);
EDIF_depreciacao_FINAL.addEventListener("keyup",Edi_depre);
