var PASTAGEM_remuneracao= document.getElementById("id_pastagem_remuneracao_capital");
//var PASTAGEM_remuneracao_INICIAL= document.getElementById("id_pastagem_valor_inicial");
var PASTAGEM_remuneracao_MEDIA= document.getElementById("id_pastagem_capital_medio");
function past_remu(){
     PASTAGEM_remuneracao.innerHTML = parseInt(PASTAGEM_remuneracao_MEDIA.value)*10;
}
past_remu();
//PASTAGEM_remuneracao.addEventListener("keyup",past_remu);
//PASTAGEM_remuneracao_INICIAL.addEventListener("keyup",past_remu);
PASTAGEM_remuneracao_MEDIA.addEventListener("keyup",past_remu);