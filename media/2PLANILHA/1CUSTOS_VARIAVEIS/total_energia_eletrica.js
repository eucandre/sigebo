var energia_eletrica_especificacao_total       = document.getElementById("id_energia_eletrica_especificacao_total");
var energia_eletrica_especificacao_janeiro        = document.getElementById("id_energia_eletrica_especificacao_janeiro");
var energia_eletrica_especificacao_fevereiro      = document.getElementById("id_energia_eletrica_especificacao_fevereiro");
var energia_eletrica_especificacao_marco          = document.getElementById("id_energia_eletrica_especificacao_marco");
var energia_eletrica_especificacao_abril          = document.getElementById("id_energia_eletrica_especificacao_abril");
var energia_eletrica_especificacao_maio           = document.getElementById("id_energia_eletrica_especificacao_maio");
var energia_eletrica_especificacao_junho          = document.getElementById("id_energia_eletrica_especificacao_junho");
var energia_eletrica_especificacao_julho          = document.getElementById("id_energia_eletrica_especificacao_julho");
var energia_eletrica_especificacao_agosto         = document.getElementById("id_energia_eletrica_especificacao_agosto");
var energia_eletrica_especificacao_setembro       = document.getElementById("id_energia_eletrica_especificacao_setembro");
var energia_eletrica_especificacao_outubro        = document.getElementById("id_energia_eletrica_especificacao_outubro");
var energia_eletrica_especificacao_novembro       = document.getElementById("id_energia_eletrica_especificacao_novembro");
var energia_eletrica_especificacao_dezembro       = document.getElementById("id_energia_eletrica_especificacao_dezembro");

function energia_eletrica(){
    energia_eletrica_especificacao_total.innerHTML =
                parseInt(energia_eletrica_especificacao_janeiro.value)+
                parseInt(energia_eletrica_especificacao_fevereiro.value)+
                parseInt(energia_eletrica_especificacao_marco.value)+
                parseInt(energia_eletrica_especificacao_abril.value)+
                parseInt(energia_eletrica_especificacao_maio.value)+
                parseInt(energia_eletrica_especificacao_junho.value)+
                parseInt(energia_eletrica_especificacao_julho.value)+
                parseInt(energia_eletrica_especificacao_agosto.value)+
                parseInt(energia_eletrica_especificacao_setembro.value)+
                parseInt(energia_eletrica_especificacao_outubro.value)+
                parseInt(energia_eletrica_especificacao_novembro.value)+
                parseInt(energia_eletrica_especificacao_dezembro.value);


}

energia_eletrica();

energia_eletrica_especificacao_janeiro.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_fevereiro.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_marco.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_abril.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_maio.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_junho.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_julho.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_agosto.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_setembro.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_outubro.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_novembro.addEventListener("keyup",energia_eletrica);
energia_eletrica_especificacao_dezembro.addEventListener("keyup",energia_eletrica);





