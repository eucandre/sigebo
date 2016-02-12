var EDIF_remuneracao= document.getElementById("id_edificacoes_remuneracao_capital");
var EDIF_remuneracao_MEDIO= document.getElementById("id_edificacoes_capital_medio");

function REMU_edi(){
     EDIF_remuneracao.innerHTML = (parseInt(EDIF_remuneracao_MEDIO.value)*10).toFixed(2);
}                                                                           
REMU_edi();


EDIF_remuneracao_MEDIO.addEventListener("keyup",REMU_edi);