var frete_carretas_especificacao_total       = document.getElementById("id_frete_carretas_especificacao_total");
var frete_carretas_especificacao_janeiro        = document.getElementById("id_frete_carretas_especificacao_janeiro");
var frete_carretas_especificacao_fevereiro      = document.getElementById("id_frete_carretas_especificacao_fevereiro");
var frete_carretas_especificacao_marco          = document.getElementById("id_frete_carretas_especificacao_marco");
var frete_carretas_especificacao_abril          = document.getElementById("id_frete_carretas_especificacao_abril");
var frete_carretas_especificacao_maio           = document.getElementById("id_frete_carretas_especificacao_maio");
var frete_carretas_especificacao_junho          = document.getElementById("id_frete_carretas_especificacao_junho");
var frete_carretas_especificacao_julho          = document.getElementById("id_frete_carretas_especificacao_julho");
var frete_carretas_especificacao_agosto         = document.getElementById("id_frete_carretas_especificacao_agosto");
var frete_carretas_especificacao_setembro       = document.getElementById("id_frete_carretas_especificacao_setembro");
var frete_carretas_especificacao_outubro        = document.getElementById("id_frete_carretas_especificacao_outubro");
var frete_carretas_especificacao_novembro       = document.getElementById("id_frete_carretas_especificacao_novembro");
var frete_carretas_especificacao_dezembro       = document.getElementById("id_frete_carretas_especificacao_dezembro");

function frete_carretas(){
    frete_carretas_especificacao_total.innerHTML =
                parseInt(frete_carretas_especificacao_janeiro.value)+
                parseInt(frete_carretas_especificacao_fevereiro.value)+
                parseInt(frete_carretas_especificacao_marco.value)+
                parseInt(frete_carretas_especificacao_abril.value)+
                parseInt(frete_carretas_especificacao_maio.value)+
                parseInt(frete_carretas_especificacao_junho.value)+
                parseInt(frete_carretas_especificacao_julho.value)+
                parseInt(frete_carretas_especificacao_agosto.value)+
                parseInt(frete_carretas_especificacao_setembro.value)+
                parseInt(frete_carretas_especificacao_outubro.value)+
                parseInt(frete_carretas_especificacao_novembro.value)+
                parseInt(frete_carretas_especificacao_dezembro.value);


}

frete_carretas();

frete_carretas_especificacao_janeiro.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_fevereiro.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_marco.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_abril.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_maio.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_junho.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_julho.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_agosto.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_setembro.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_outubro.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_novembro.addEventListener("keyup",frete_carretas);
frete_carretas_especificacao_dezembro.addEventListener("keyup",frete_carretas);





