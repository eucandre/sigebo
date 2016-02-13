var outros3_especificacao_total       = document.getElementById("id_outros3_especificacao_total");
var outros3_especificacao_janeiro        = document.getElementById("id_outros3_especificacao_janeiro");
var outros3_especificacao_fevereiro      = document.getElementById("id_outros3_especificacao_fevereiro");
var outros3_especificacao_marco          = document.getElementById("id_outros3_especificacao_marco");
var outros3_especificacao_abril          = document.getElementById("id_outros3_especificacao_abril");
var outros3_especificacao_maio           = document.getElementById("id_outros3_especificacao_maio");
var outros3_especificacao_junho          = document.getElementById("id_outros3_especificacao_junho");
var outros3_especificacao_julho          = document.getElementById("id_outros3_especificacao_julho");
var outros3_especificacao_agosto         = document.getElementById("id_outros3_especificacao_agosto");
var outros3_especificacao_setembro       = document.getElementById("id_outros3_especificacao_setembro");
var outros3_especificacao_outubro        = document.getElementById("id_outros3_especificacao_outubro");
var outros3_especificacao_novembro       = document.getElementById("id_outros3_especificacao_novembro");
var outros3_especificacao_dezembro       = document.getElementById("id_outros3_especificacao_dezembro");

function outros3(){
    outros3_especificacao_total.innerHTML =
                parseInt(outros3_especificacao_janeiro.value)+
                parseInt(outros3_especificacao_fevereiro.value)+
                parseInt(outros3_especificacao_marco.value)+
                parseInt(outros3_especificacao_abril.value)+
                parseInt(outros3_especificacao_maio.value)+
                parseInt(outros3_especificacao_junho.value)+
                parseInt(outros3_especificacao_julho.value)+
                parseInt(outros3_especificacao_agosto.value)+
                parseInt(outros3_especificacao_setembro.value)+
                parseInt(outros3_especificacao_outubro.value)+
                parseInt(outros3_especificacao_novembro.value)+
                parseInt(outros3_especificacao_dezembro.value);


}

outros3();

outros3_especificacao_janeiro.addEventListener("keyup",outros3);
outros3_especificacao_fevereiro.addEventListener("keyup",outros3);
outros3_especificacao_marco.addEventListener("keyup",outros3);
outros3_especificacao_abril.addEventListener("keyup",outros3);
outros3_especificacao_maio.addEventListener("keyup",outros3);
outros3_especificacao_junho.addEventListener("keyup",outros3);
outros3_especificacao_julho.addEventListener("keyup",outros3);
outros3_especificacao_agosto.addEventListener("keyup",outros3);
outros3_especificacao_setembro.addEventListener("keyup",outros3);
outros3_especificacao_outubro.addEventListener("keyup",outros3);
outros3_especificacao_novembro.addEventListener("keyup",outros3);
outros3_especificacao_dezembro.addEventListener("keyup",outros3);





