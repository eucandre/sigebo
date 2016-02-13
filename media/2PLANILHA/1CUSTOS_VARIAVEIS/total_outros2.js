var outros2_especificacao_total       = document.getElementById("id_outros2_especificacao_total");
var outros2_especificacao_janeiro        = document.getElementById("id_outros2_especificacao_janeiro");
var outros2_especificacao_fevereiro      = document.getElementById("id_outros2_especificacao_fevereiro");
var outros2_especificacao_marco          = document.getElementById("id_outros2_especificacao_marco");
var outros2_especificacao_abril          = document.getElementById("id_outros2_especificacao_abril");
var outros2_especificacao_maio           = document.getElementById("id_outros2_especificacao_maio");
var outros2_especificacao_junho          = document.getElementById("id_outros2_especificacao_junho");
var outros2_especificacao_julho          = document.getElementById("id_outros2_especificacao_julho");
var outros2_especificacao_agosto         = document.getElementById("id_outros2_especificacao_agosto");
var outros2_especificacao_setembro       = document.getElementById("id_outros2_especificacao_setembro");
var outros2_especificacao_outubro        = document.getElementById("id_outros2_especificacao_outubro");
var outros2_especificacao_novembro       = document.getElementById("id_outros2_especificacao_novembro");
var outros2_especificacao_dezembro       = document.getElementById("id_outros2_especificacao_dezembro");

function outros2(){
    outros2_especificacao_total.innerHTML =
                parseInt(outros2_especificacao_janeiro.value)+
                parseInt(outros2_especificacao_fevereiro.value)+
                parseInt(outros2_especificacao_marco.value)+
                parseInt(outros2_especificacao_abril.value)+
                parseInt(outros2_especificacao_maio.value)+
                parseInt(outros2_especificacao_junho.value)+
                parseInt(outros2_especificacao_julho.value)+
                parseInt(outros2_especificacao_agosto.value)+
                parseInt(outros2_especificacao_setembro.value)+
                parseInt(outros2_especificacao_outubro.value)+
                parseInt(outros2_especificacao_novembro.value)+
                parseInt(outros2_especificacao_dezembro.value);


}

outros2();

outros2_especificacao_janeiro.addEventListener("keyup",outros2);
outros2_especificacao_fevereiro.addEventListener("keyup",outros2);
outros2_especificacao_marco.addEventListener("keyup",outros2);
outros2_especificacao_abril.addEventListener("keyup",outros2);
outros2_especificacao_maio.addEventListener("keyup",outros2);
outros2_especificacao_junho.addEventListener("keyup",outros2);
outros2_especificacao_julho.addEventListener("keyup",outros2);
outros2_especificacao_agosto.addEventListener("keyup",outros2);
outros2_especificacao_setembro.addEventListener("keyup",outros2);
outros2_especificacao_outubro.addEventListener("keyup",outros2);
outros2_especificacao_novembro.addEventListener("keyup",outros2);
outros2_especificacao_dezembro.addEventListener("keyup",outros2);





