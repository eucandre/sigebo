var cercas_fx = document.getElementById("id_cercas_custo_fixo");
var cercasInicial = document.getElementById("id_cercas_valor_inicial");
var cercasFinal = document.getElementById("id_cercas_valor_final_ou_sucata");
var cercasMedio = document.getElementById("id_cercas_capital_medio");
function FXcercas(){
    cercas_fx.innerHTML = ((parseInt(cercasInicial.value)-parseInt(cercasFinal.value))/3)+parseInt(cercasMedio.value)*10;
}
FXcercas();
cercasInicial.addEventListener("keyup",FXcercas);
cercasFinal.addEventListener("keyup",FXcercas);
cercasMedio.addEventListener("keyup",FXcercas);