var outros5_especificacao_total       = document.getElementById("id_outros5_especificacao_total");
var outros5_especificacao_janeiro        = document.getElementById("id_outros5_especificacao_janeiro");
var outros5_especificacao_fevereiro      = document.getElementById("id_outros5_especificacao_fevereiro");
var outros5_especificacao_marco          = document.getElementById("id_outros5_especificacao_marco");
var outros5_especificacao_abril          = document.getElementById("id_outros5_especificacao_abril");
var outros5_especificacao_maio           = document.getElementById("id_outros5_especificacao_maio");
var outros5_especificacao_junho          = document.getElementById("id_outros5_especificacao_junho");
var outros5_especificacao_julho          = document.getElementById("id_outros5_especificacao_julho");
var outros5_especificacao_agosto         = document.getElementById("id_outros5_especificacao_agosto");
var outros5_especificacao_setembro       = document.getElementById("id_outros5_especificacao_setembro");
var outros5_especificacao_outubro        = document.getElementById("id_outros5_especificacao_outubro");
var outros5_especificacao_novembro       = document.getElementById("id_outros5_especificacao_novembro");
var outros5_especificacao_dezembro       = document.getElementById("id_outros5_especificacao_dezembro");

function outros5(){
    outros5_especificacao_total.innerHTML =
                parseInt(outros5_especificacao_janeiro.value)+
                parseInt(outros5_especificacao_fevereiro.value)+
                parseInt(outros5_especificacao_marco.value)+
                parseInt(outros5_especificacao_abril.value)+
                parseInt(outros5_especificacao_maio.value)+
                parseInt(outros5_especificacao_junho.value)+
                parseInt(outros5_especificacao_julho.value)+
                parseInt(outros5_especificacao_agosto.value)+
                parseInt(outros5_especificacao_setembro.value)+
                parseInt(outros5_especificacao_outubro.value)+
                parseInt(outros5_especificacao_novembro.value)+
                parseInt(outros5_especificacao_dezembro.value);


}

outros5();

outros5_especificacao_janeiro.addEventListener("keyup",outros5);
outros5_especificacao_fevereiro.addEventListener("keyup",outros5);
outros5_especificacao_marco.addEventListener("keyup",outros5);
outros5_especificacao_abril.addEventListener("keyup",outros5);
outros5_especificacao_maio.addEventListener("keyup",outros5);
outros5_especificacao_junho.addEventListener("keyup",outros5);
outros5_especificacao_julho.addEventListener("keyup",outros5);
outros5_especificacao_agosto.addEventListener("keyup",outros5);
outros5_especificacao_setembro.addEventListener("keyup",outros5);
outros5_especificacao_outubro.addEventListener("keyup",outros5);
outros5_especificacao_novembro.addEventListener("keyup",outros5);
outros5_especificacao_dezembro.addEventListener("keyup",outros5);





