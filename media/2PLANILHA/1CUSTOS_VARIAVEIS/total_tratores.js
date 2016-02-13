var tratores_especificacao_total       = document.getElementById("id_tratores_especificacao_total");
var tratores_especificacao_janeiro        = document.getElementById("id_tratores_especificacao_janeiro");
var tratores_especificacao_fevereiro      = document.getElementById("id_tratores_especificacao_fevereiro");
var tratores_especificacao_marco          = document.getElementById("id_tratores_especificacao_marco");
var tratores_especificacao_abril          = document.getElementById("id_tratores_especificacao_abril");
var tratores_especificacao_maio           = document.getElementById("id_tratores_especificacao_maio");
var tratores_especificacao_junho          = document.getElementById("id_tratores_especificacao_junho");
var tratores_especificacao_julho          = document.getElementById("id_tratores_especificacao_julho");
var tratores_especificacao_agosto         = document.getElementById("id_tratores_especificacao_agosto");
var tratores_especificacao_setembro       = document.getElementById("id_tratores_especificacao_setembro");
var tratores_especificacao_outubro        = document.getElementById("id_tratores_especificacao_outubro");
var tratores_especificacao_novembro       = document.getElementById("id_tratores_especificacao_novembro");
var tratores_especificacao_dezembro       = document.getElementById("id_tratores_especificacao_dezembro");

function tratores(){
    tratores_especificacao_total.innerHTML =
                parseInt(tratores_especificacao_janeiro.value)+
                parseInt(tratores_especificacao_fevereiro.value)+
                parseInt(tratores_especificacao_marco.value)+
                parseInt(tratores_especificacao_abril.value)+
                parseInt(tratores_especificacao_maio.value)+
                parseInt(tratores_especificacao_junho.value)+
                parseInt(tratores_especificacao_julho.value)+
                parseInt(tratores_especificacao_agosto.value)+
                parseInt(tratores_especificacao_setembro.value)+
                parseInt(tratores_especificacao_outubro.value)+
                parseInt(tratores_especificacao_novembro.value)+
                parseInt(tratores_especificacao_dezembro.value);


}

tratores();

tratores_especificacao_janeiro.addEventListener("keyup",tratores);
tratores_especificacao_fevereiro.addEventListener("keyup",tratores);
tratores_especificacao_marco.addEventListener("keyup",tratores);
tratores_especificacao_abril.addEventListener("keyup",tratores);
tratores_especificacao_maio.addEventListener("keyup",tratores);
tratores_especificacao_junho.addEventListener("keyup",tratores);
tratores_especificacao_julho.addEventListener("keyup",tratores);
tratores_especificacao_agosto.addEventListener("keyup",tratores);
tratores_especificacao_setembro.addEventListener("keyup",tratores);
tratores_especificacao_outubro.addEventListener("keyup",tratores);
tratores_especificacao_novembro.addEventListener("keyup",tratores);
tratores_especificacao_dezembro.addEventListener("keyup",tratores);





