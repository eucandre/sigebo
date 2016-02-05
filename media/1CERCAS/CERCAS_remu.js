var CERCAS_remuneracao= document.getElementById("id_cercas_remuneracao_capital");

var CERCAS_remuneracao_MEDIA= document.getElementById("id_cercas_capital_medio");
function cercas_REM(){
     CERCAS_remuneracao.innerHTML = (parseInt(CERCAS_remuneracao_MEDIA.value)*10).tofixed(2);
}
cercas_REM();
//CERCAS_remuneracao.addEventListener("keyup",cercas_REM);
//CERCAS_remuneracao_INICIAL.addEventListener("keyup",cercas_REM);
CERCAS_remuneracao_MEDIA.addEventListener("keyup",cercas_REM);