var carrapacidade_especificacao_total       = document.getElementById("id_carrapacidade_especificacao_total");
var carrapacidade_especificacao_janeiro        = document.getElementById("id_carrapacidade_especificacao_janeiro");
var carrapacidade_especificacao_fevereiro      = document.getElementById("id_carrapacidade_especificacao_fevereiro");
var carrapacidade_especificacao_marco          = document.getElementById("id_carrapacidade_especificacao_marco");
var carrapacidade_especificacao_abril          = document.getElementById("id_carrapacidade_especificacao_abril");
var carrapacidade_especificacao_maio           = document.getElementById("id_carrapacidade_especificacao_maio");
var carrapacidade_especificacao_junho          = document.getElementById("id_carrapacidade_especificacao_junho");
var carrapacidade_especificacao_julho          = document.getElementById("id_carrapacidade_especificacao_julho");
var carrapacidade_especificacao_agosto         = document.getElementById("id_carrapacidade_especificacao_agosto");
var carrapacidade_especificacao_setembro       = document.getElementById("id_carrapacidade_especificacao_setembro");
var carrapacidade_especificacao_outubro        = document.getElementById("id_carrapacidade_especificacao_outubro");
var carrapacidade_especificacao_novembro       = document.getElementById("id_carrapacidade_especificacao_novembro");
var carrapacidade_especificacao_dezembro       = document.getElementById("id_carrapacidade_especificacao_dezembro");

function carrapacidade(){
    carrapacidade_especificacao_total.innerHTML =
                parseInt(carrapacidade_especificacao_janeiro.value)+
                parseInt(carrapacidade_especificacao_fevereiro.value)+
                parseInt(carrapacidade_especificacao_marco.value)+
                parseInt(carrapacidade_especificacao_abril.value)+
                parseInt(carrapacidade_especificacao_maio.value)+
                parseInt(carrapacidade_especificacao_junho.value)+
                parseInt(carrapacidade_especificacao_julho.value)+
                parseInt(carrapacidade_especificacao_agosto.value)+
                parseInt(carrapacidade_especificacao_setembro.value)+
                parseInt(carrapacidade_especificacao_outubro.value)+
                parseInt(carrapacidade_especificacao_novembro.value)+
                parseInt(carrapacidade_especificacao_dezembro.value);


}

carrapacidade();

carrapacidade_especificacao_janeiro.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_fevereiro.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_marco.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_abril.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_maio.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_junho.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_julho.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_agosto.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_setembro.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_outubro.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_novembro.addEventListener("keyup",carrapacidade);
carrapacidade_especificacao_dezembro.addEventListener("keyup",carrapacidade);




