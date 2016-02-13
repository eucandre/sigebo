var outras_vacinas_especificacao_total       = document.getElementById("id_outras_vacinas_especificacao_total");
var outras_vacinas_especificacao_janeiro        = document.getElementById("id_outras_vacinas_especificacao_janeiro");
var outras_vacinas_especificacao_fevereiro      = document.getElementById("id_outras_vacinas_especificacao_fevereiro");
var outras_vacinas_especificacao_marco          = document.getElementById("id_outras_vacinas_especificacao_marco");
var outras_vacinas_especificacao_abril          = document.getElementById("id_outras_vacinas_especificacao_abril");
var outras_vacinas_especificacao_maio           = document.getElementById("id_outras_vacinas_especificacao_maio");
var outras_vacinas_especificacao_junho          = document.getElementById("id_outras_vacinas_especificacao_junho");
var outras_vacinas_especificacao_julho          = document.getElementById("id_outras_vacinas_especificacao_julho");
var outras_vacinas_especificacao_agosto         = document.getElementById("id_outras_vacinas_especificacao_agosto");
var outras_vacinas_especificacao_setembro       = document.getElementById("id_outras_vacinas_especificacao_setembro");
var outras_vacinas_especificacao_outubro        = document.getElementById("id_outras_vacinas_especificacao_outubro");
var outras_vacinas_especificacao_novembro       = document.getElementById("id_outras_vacinas_especificacao_novembro");
var outras_vacinas_especificacao_dezembro       = document.getElementById("id_outras_vacinas_especificacao_dezembro");

function outras_vacinas(){
    outras_vacinas_especificacao_total.innerHTML =
                parseInt(outras_vacinas_especificacao_janeiro.value)+
                parseInt(outras_vacinas_especificacao_fevereiro.value)+
                parseInt(outras_vacinas_especificacao_marco.value)+
                parseInt(outras_vacinas_especificacao_abril.value)+
                parseInt(outras_vacinas_especificacao_maio.value)+
                parseInt(outras_vacinas_especificacao_junho.value)+
                parseInt(outras_vacinas_especificacao_julho.value)+
                parseInt(outras_vacinas_especificacao_agosto.value)+
                parseInt(outras_vacinas_especificacao_setembro.value)+
                parseInt(outras_vacinas_especificacao_outubro.value)+
                parseInt(outras_vacinas_especificacao_novembro.value)+
                parseInt(outras_vacinas_especificacao_dezembro.value);


}

outras_vacinas();

outras_vacinas_especificacao_janeiro.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_fevereiro.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_marco.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_abril.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_maio.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_junho.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_julho.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_agosto.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_setembro.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_outubro.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_novembro.addEventListener("keyup",outras_vacinas);
outras_vacinas_especificacao_dezembro.addEventListener("keyup",outras_vacinas);




