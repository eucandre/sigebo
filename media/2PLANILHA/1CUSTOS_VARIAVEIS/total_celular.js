var celular_especificacao_total       = document.getElementById("id_celular_especificacao_total");
var celular_especificacao_janeiro        = document.getElementById("id_celular_especificacao_janeiro");
var celular_especificacao_fevereiro      = document.getElementById("id_celular_especificacao_fevereiro");
var celular_especificacao_marco          = document.getElementById("id_celular_especificacao_marco");
var celular_especificacao_abril          = document.getElementById("id_celular_especificacao_abril");
var celular_especificacao_maio           = document.getElementById("id_celular_especificacao_maio");
var celular_especificacao_junho          = document.getElementById("id_celular_especificacao_junho");
var celular_especificacao_julho          = document.getElementById("id_celular_especificacao_julho");
var celular_especificacao_agosto         = document.getElementById("id_celular_especificacao_agosto");
var celular_especificacao_setembro       = document.getElementById("id_celular_especificacao_setembro");
var celular_especificacao_outubro        = document.getElementById("id_celular_especificacao_outubro");
var celular_especificacao_novembro       = document.getElementById("id_celular_especificacao_novembro");
var celular_especificacao_dezembro       = document.getElementById("id_celular_especificacao_dezembro");

function celular(){
    celular_especificacao_total.innerHTML =
                parseInt(celular_especificacao_janeiro.value)+
                parseInt(celular_especificacao_fevereiro.value)+
                parseInt(celular_especificacao_marco.value)+
                parseInt(celular_especificacao_abril.value)+
                parseInt(celular_especificacao_maio.value)+
                parseInt(celular_especificacao_junho.value)+
                parseInt(celular_especificacao_julho.value)+
                parseInt(celular_especificacao_agosto.value)+
                parseInt(celular_especificacao_setembro.value)+
                parseInt(celular_especificacao_outubro.value)+
                parseInt(celular_especificacao_novembro.value)+
                parseInt(celular_especificacao_dezembro.value);


}

celular();

celular_especificacao_janeiro.addEventListener("keyup",celular);
celular_especificacao_fevereiro.addEventListener("keyup",celular);
celular_especificacao_marco.addEventListener("keyup",celular);
celular_especificacao_abril.addEventListener("keyup",celular);
celular_especificacao_maio.addEventListener("keyup",celular);
celular_especificacao_junho.addEventListener("keyup",celular);
celular_especificacao_julho.addEventListener("keyup",celular);
celular_especificacao_agosto.addEventListener("keyup",celular);
celular_especificacao_setembro.addEventListener("keyup",celular);
celular_especificacao_outubro.addEventListener("keyup",celular);
celular_especificacao_novembro.addEventListener("keyup",celular);
celular_especificacao_dezembro.addEventListener("keyup",celular);





