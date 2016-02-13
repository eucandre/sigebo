var outros1_especificacao_total       = document.getElementById("id_outros1_especificacao_total");
var outros1_especificacao_janeiro        = document.getElementById("id_outros1_especificacao_janeiro");
var outros1_especificacao_fevereiro      = document.getElementById("id_outros1_especificacao_fevereiro");
var outros1_especificacao_marco          = document.getElementById("id_outros1_especificacao_marco");
var outros1_especificacao_abril          = document.getElementById("id_outros1_especificacao_abril");
var outros1_especificacao_maio           = document.getElementById("id_outros1_especificacao_maio");
var outros1_especificacao_junho          = document.getElementById("id_outros1_especificacao_junho");
var outros1_especificacao_julho          = document.getElementById("id_outros1_especificacao_julho");
var outros1_especificacao_agosto         = document.getElementById("id_outros1_especificacao_agosto");
var outros1_especificacao_setembro       = document.getElementById("id_outros1_especificacao_setembro");
var outros1_especificacao_outubro        = document.getElementById("id_outros1_especificacao_outubro");
var outros1_especificacao_novembro       = document.getElementById("id_outros1_especificacao_novembro");
var outros1_especificacao_dezembro       = document.getElementById("id_outros1_especificacao_dezembro");

function outros1(){
    outros1_especificacao_total.innerHTML =
                parseInt(outros1_especificacao_janeiro.value)+
                parseInt(outros1_especificacao_fevereiro.value)+
                parseInt(outros1_especificacao_marco.value)+
                parseInt(outros1_especificacao_abril.value)+
                parseInt(outros1_especificacao_maio.value)+
                parseInt(outros1_especificacao_junho.value)+
                parseInt(outros1_especificacao_julho.value)+
                parseInt(outros1_especificacao_agosto.value)+
                parseInt(outros1_especificacao_setembro.value)+
                parseInt(outros1_especificacao_outubro.value)+
                parseInt(outros1_especificacao_novembro.value)+
                parseInt(outros1_especificacao_dezembro.value);


}

outros1();

outros1_especificacao_janeiro.addEventListener("keyup",outros1);
outros1_especificacao_fevereiro.addEventListener("keyup",outros1);
outros1_especificacao_marco.addEventListener("keyup",outros1);
outros1_especificacao_abril.addEventListener("keyup",outros1);
outros1_especificacao_maio.addEventListener("keyup",outros1);
outros1_especificacao_junho.addEventListener("keyup",outros1);
outros1_especificacao_julho.addEventListener("keyup",outros1);
outros1_especificacao_agosto.addEventListener("keyup",outros1);
outros1_especificacao_setembro.addEventListener("keyup",outros1);
outros1_especificacao_outubro.addEventListener("keyup",outros1);
outros1_especificacao_novembro.addEventListener("keyup",outros1);
outros1_especificacao_dezembro.addEventListener("keyup",outros1);





