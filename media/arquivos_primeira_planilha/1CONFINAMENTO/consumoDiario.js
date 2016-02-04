var consumo_diario = document.getElementById("id_ganho_diario");
var peso_inicial    = document.getElementById("id_Peso_inicial");
var peso_final      = document.getElementById("id_Peso_Final");
var duracao_confina = document.getElementById("id_tempo_confinamento");
function valor_consumo(){

    consumo_diario.innerHTML = (parseInt(peso_final.value)-parseInt(peso_inicial.value))/parseInt(duracao_confina.value);

}

valor_consumo();
peso_inicial.addEventListener("keyup",valor_consumo);
peso_final.addEventListener("keyup",valor_consumo);
duracao_confina.addEventListener("keyup",valor_consumo);

