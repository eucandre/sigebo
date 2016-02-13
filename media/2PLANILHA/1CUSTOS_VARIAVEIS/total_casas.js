var casas_especificacao_total       = document.getElementById("id_casas_especificacao_total");
var casas_especificacao_janeiro        = document.getElementById("id_casas_especificacao_janeiro");
var casas_especificacao_fevereiro      = document.getElementById("id_casas_especificacao_fevereiro");
var casas_especificacao_marco          = document.getElementById("id_casas_especificacao_marco");
var casas_especificacao_abril          = document.getElementById("id_casas_especificacao_abril");
var casas_especificacao_maio           = document.getElementById("id_casas_especificacao_maio");
var casas_especificacao_junho          = document.getElementById("id_casas_especificacao_junho");
var casas_especificacao_julho          = document.getElementById("id_casas_especificacao_julho");
var casas_especificacao_agosto         = document.getElementById("id_casas_especificacao_agosto");
var casas_especificacao_setembro       = document.getElementById("id_casas_especificacao_setembro");
var casas_especificacao_outubro        = document.getElementById("id_casas_especificacao_outubro");
var casas_especificacao_novembro       = document.getElementById("id_casas_especificacao_novembro");
var casas_especificacao_dezembro       = document.getElementById("id_casas_especificacao_dezembro");

function casas(){
    casas_especificacao_total.innerHTML =
                parseInt(casas_especificacao_janeiro.value)+
                parseInt(casas_especificacao_fevereiro.value)+
                parseInt(casas_especificacao_marco.value)+
                parseInt(casas_especificacao_abril.value)+
                parseInt(casas_especificacao_maio.value)+
                parseInt(casas_especificacao_junho.value)+
                parseInt(casas_especificacao_julho.value)+
                parseInt(casas_especificacao_agosto.value)+
                parseInt(casas_especificacao_setembro.value)+
                parseInt(casas_especificacao_outubro.value)+
                parseInt(casas_especificacao_novembro.value)+
                parseInt(casas_especificacao_dezembro.value);


}

casas();

casas_especificacao_janeiro.addEventListener("keyup",casas);
casas_especificacao_fevereiro.addEventListener("keyup",casas);
casas_especificacao_marco.addEventListener("keyup",casas);
casas_especificacao_abril.addEventListener("keyup",casas);
casas_especificacao_maio.addEventListener("keyup",casas);
casas_especificacao_junho.addEventListener("keyup",casas);
casas_especificacao_julho.addEventListener("keyup",casas);
casas_especificacao_agosto.addEventListener("keyup",casas);
casas_especificacao_setembro.addEventListener("keyup",casas);
casas_especificacao_outubro.addEventListener("keyup",casas);
casas_especificacao_novembro.addEventListener("keyup",casas);
casas_especificacao_dezembro.addEventListener("keyup",casas);





