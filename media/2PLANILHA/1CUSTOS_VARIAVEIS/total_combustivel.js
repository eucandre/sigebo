var combustivel_especificacao_total       = document.getElementById("id_combustivel_especificacao_total");
var combustivel_especificacao_janeiro        = document.getElementById("id_combustivel_especificacao_janeiro");
var combustivel_especificacao_fevereiro      = document.getElementById("id_combustivel_especificacao_fevereiro");
var combustivel_especificacao_marco          = document.getElementById("id_combustivel_especificacao_marco");
var combustivel_especificacao_abril          = document.getElementById("id_combustivel_especificacao_abril");
var combustivel_especificacao_maio           = document.getElementById("id_combustivel_especificacao_maio");
var combustivel_especificacao_junho          = document.getElementById("id_combustivel_especificacao_junho");
var combustivel_especificacao_julho          = document.getElementById("id_combustivel_especificacao_julho");
var combustivel_especificacao_agosto         = document.getElementById("id_combustivel_especificacao_agosto");
var combustivel_especificacao_setembro       = document.getElementById("id_combustivel_especificacao_setembro");
var combustivel_especificacao_outubro        = document.getElementById("id_combustivel_especificacao_outubro");
var combustivel_especificacao_novembro       = document.getElementById("id_combustivel_especificacao_novembro");
var combustivel_especificacao_dezembro       = document.getElementById("id_combustivel_especificacao_dezembro");

function combustivel(){
    combustivel_especificacao_total.innerHTML =
                parseInt(combustivel_especificacao_janeiro.value)+
                parseInt(combustivel_especificacao_fevereiro.value)+
                parseInt(combustivel_especificacao_marco.value)+
                parseInt(combustivel_especificacao_abril.value)+
                parseInt(combustivel_especificacao_maio.value)+
                parseInt(combustivel_especificacao_junho.value)+
                parseInt(combustivel_especificacao_julho.value)+
                parseInt(combustivel_especificacao_agosto.value)+
                parseInt(combustivel_especificacao_setembro.value)+
                parseInt(combustivel_especificacao_outubro.value)+
                parseInt(combustivel_especificacao_novembro.value)+
                parseInt(combustivel_especificacao_dezembro.value);


}

combustivel();

combustivel_especificacao_janeiro.addEventListener("keyup",combustivel);
combustivel_especificacao_fevereiro.addEventListener("keyup",combustivel);
combustivel_especificacao_marco.addEventListener("keyup",combustivel);
combustivel_especificacao_abril.addEventListener("keyup",combustivel);
combustivel_especificacao_maio.addEventListener("keyup",combustivel);
combustivel_especificacao_junho.addEventListener("keyup",combustivel);
combustivel_especificacao_julho.addEventListener("keyup",combustivel);
combustivel_especificacao_agosto.addEventListener("keyup",combustivel);
combustivel_especificacao_setembro.addEventListener("keyup",combustivel);
combustivel_especificacao_outubro.addEventListener("keyup",combustivel);
combustivel_especificacao_novembro.addEventListener("keyup",combustivel);
combustivel_especificacao_dezembro.addEventListener("keyup",combustivel);





