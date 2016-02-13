var suplementacao_especificacao_total       = document.getElementById("id_suplementacao_especificacao_total");
var suplementacao_especificacao_janeiro        = document.getElementById("id_suplementacao_especificacao_janeiro");
var suplementacao_especificacao_fevereiro      = document.getElementById("id_suplementacao_especificacao_fevereiro");
var suplementacao_especificacao_marco          = document.getElementById("id_suplementacao_especificacao_marco");
var suplementacao_especificacao_abril          = document.getElementById("id_suplementacao_especificacao_abril");
var suplementacao_especificacao_maio           = document.getElementById("id_suplementacao_especificacao_maio");
var suplementacao_especificacao_junho          = document.getElementById("id_suplementacao_especificacao_junho");
var suplementacao_especificacao_julho          = document.getElementById("id_suplementacao_especificacao_julho");
var suplementacao_especificacao_agosto         = document.getElementById("id_suplementacao_especificacao_agosto");
var suplementacao_especificacao_setembro       = document.getElementById("id_suplementacao_especificacao_setembro");
var suplementacao_especificacao_outubro        = document.getElementById("id_suplementacao_especificacao_outubro");
var suplementacao_especificacao_novembro       = document.getElementById("id_suplementacao_especificacao_novembro");
var suplementacao_especificacao_dezembro       = document.getElementById("id_suplementacao_especificacao_dezembro");

function suplementacao(){
    suplementacao_especificacao_total.innerHTML =
                parseInt(suplementacao_especificacao_janeiro.value)+
                parseInt(suplementacao_especificacao_fevereiro.value)+
                parseInt(suplementacao_especificacao_marco.value)+
                parseInt(suplementacao_especificacao_abril.value)+
                parseInt(suplementacao_especificacao_maio.value)+
                parseInt(suplementacao_especificacao_junho.value)+
                parseInt(suplementacao_especificacao_julho.value)+
                parseInt(suplementacao_especificacao_agosto.value)+
                parseInt(suplementacao_especificacao_setembro.value)+
                parseInt(suplementacao_especificacao_outubro.value)+
                parseInt(suplementacao_especificacao_novembro.value)+
                parseInt(suplementacao_especificacao_dezembro.value);


}

suplementacao();

suplementacao_especificacao_janeiro.addEventListener("keyup",suplementacao);
suplementacao_especificacao_fevereiro.addEventListener("keyup",suplementacao);
suplementacao_especificacao_marco.addEventListener("keyup",suplementacao);
suplementacao_especificacao_abril.addEventListener("keyup",suplementacao);
suplementacao_especificacao_maio.addEventListener("keyup",suplementacao);
suplementacao_especificacao_junho.addEventListener("keyup",suplementacao);
suplementacao_especificacao_julho.addEventListener("keyup",suplementacao);
suplementacao_especificacao_agosto.addEventListener("keyup",suplementacao);
suplementacao_especificacao_setembro.addEventListener("keyup",suplementacao);
suplementacao_especificacao_outubro.addEventListener("keyup",suplementacao);
suplementacao_especificacao_novembro.addEventListener("keyup",suplementacao);
suplementacao_especificacao_dezembro.addEventListener("keyup",suplementacao);




