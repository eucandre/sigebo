var outros_medicamentos_especificacao_total       = document.getElementById("id_outros_medicamentos_especificacao_total");
var outros_medicamentos_especificacao_janeiro        = document.getElementById("id_outros_medicamentos_especificacao_janeiro");
var outros_medicamentos_especificacao_fevereiro      = document.getElementById("id_outros_medicamentos_especificacao_fevereiro");
var outros_medicamentos_especificacao_marco          = document.getElementById("id_outros_medicamentos_especificacao_marco");
var outros_medicamentos_especificacao_abril          = document.getElementById("id_outros_medicamentos_especificacao_abril");
var outros_medicamentos_especificacao_maio           = document.getElementById("id_outros_medicamentos_especificacao_maio");
var outros_medicamentos_especificacao_junho          = document.getElementById("id_outros_medicamentos_especificacao_junho");
var outros_medicamentos_especificacao_julho          = document.getElementById("id_outros_medicamentos_especificacao_julho");
var outros_medicamentos_especificacao_agosto         = document.getElementById("id_outros_medicamentos_especificacao_agosto");
var outros_medicamentos_especificacao_setembro       = document.getElementById("id_outros_medicamentos_especificacao_setembro");
var outros_medicamentos_especificacao_outubro        = document.getElementById("id_outros_medicamentos_especificacao_outubro");
var outros_medicamentos_especificacao_novembro       = document.getElementById("id_outros_medicamentos_especificacao_novembro");
var outros_medicamentos_especificacao_dezembro       = document.getElementById("id_outros_medicamentos_especificacao_dezembro");

function outros_medicamentos(){
    outros_medicamentos_especificacao_total.innerHTML =
                parseInt(outros_medicamentos_especificacao_janeiro.value)+
                parseInt(outros_medicamentos_especificacao_fevereiro.value)+
                parseInt(outros_medicamentos_especificacao_marco.value)+
                parseInt(outros_medicamentos_especificacao_abril.value)+
                parseInt(outros_medicamentos_especificacao_maio.value)+
                parseInt(outros_medicamentos_especificacao_junho.value)+
                parseInt(outros_medicamentos_especificacao_julho.value)+
                parseInt(outros_medicamentos_especificacao_agosto.value)+
                parseInt(outros_medicamentos_especificacao_setembro.value)+
                parseInt(outros_medicamentos_especificacao_outubro.value)+
                parseInt(outros_medicamentos_especificacao_novembro.value)+
                parseInt(outros_medicamentos_especificacao_dezembro.value);


}

outros_medicamentos();

outros_medicamentos_especificacao_janeiro.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_fevereiro.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_marco.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_abril.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_maio.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_junho.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_julho.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_agosto.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_setembro.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_outubro.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_novembro.addEventListener("keyup",outros_medicamentos);
outros_medicamentos_especificacao_dezembro.addEventListener("keyup",outros_medicamentos);




