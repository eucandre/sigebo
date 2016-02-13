var outros4_especificacao_total       = document.getElementById("id_outros4_especificacao_total");
var outros4_especificacao_janeiro        = document.getElementById("id_outros4_especificacao_janeiro");
var outros4_especificacao_fevereiro      = document.getElementById("id_outros4_especificacao_fevereiro");
var outros4_especificacao_marco          = document.getElementById("id_outros4_especificacao_marco");
var outros4_especificacao_abril          = document.getElementById("id_outros4_especificacao_abril");
var outros4_especificacao_maio           = document.getElementById("id_outros4_especificacao_maio");
var outros4_especificacao_junho          = document.getElementById("id_outros4_especificacao_junho");
var outros4_especificacao_julho          = document.getElementById("id_outros4_especificacao_julho");
var outros4_especificacao_agosto         = document.getElementById("id_outros4_especificacao_agosto");
var outros4_especificacao_setembro       = document.getElementById("id_outros4_especificacao_setembro");
var outros4_especificacao_outubro        = document.getElementById("id_outros4_especificacao_outubro");
var outros4_especificacao_novembro       = document.getElementById("id_outros4_especificacao_novembro");
var outros4_especificacao_dezembro       = document.getElementById("id_outros4_especificacao_dezembro");

function outros4(){
    outros4_especificacao_total.innerHTML =
                parseInt(outros4_especificacao_janeiro.value)+
                parseInt(outros4_especificacao_fevereiro.value)+
                parseInt(outros4_especificacao_marco.value)+
                parseInt(outros4_especificacao_abril.value)+
                parseInt(outros4_especificacao_maio.value)+
                parseInt(outros4_especificacao_junho.value)+
                parseInt(outros4_especificacao_julho.value)+
                parseInt(outros4_especificacao_agosto.value)+
                parseInt(outros4_especificacao_setembro.value)+
                parseInt(outros4_especificacao_outubro.value)+
                parseInt(outros4_especificacao_novembro.value)+
                parseInt(outros4_especificacao_dezembro.value);


}

outros4();

outros4_especificacao_janeiro.addEventListener("keyup",outros4);
outros4_especificacao_fevereiro.addEventListener("keyup",outros4);
outros4_especificacao_marco.addEventListener("keyup",outros4);
outros4_especificacao_abril.addEventListener("keyup",outros4);
outros4_especificacao_maio.addEventListener("keyup",outros4);
outros4_especificacao_junho.addEventListener("keyup",outros4);
outros4_especificacao_julho.addEventListener("keyup",outros4);
outros4_especificacao_agosto.addEventListener("keyup",outros4);
outros4_especificacao_setembro.addEventListener("keyup",outros4);
outros4_especificacao_outubro.addEventListener("keyup",outros4);
outros4_especificacao_novembro.addEventListener("keyup",outros4);
outros4_especificacao_dezembro.addEventListener("keyup",outros4);





