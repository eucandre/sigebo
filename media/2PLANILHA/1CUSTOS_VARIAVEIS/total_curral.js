var curral_especificacao_total       = document.getElementById("id_curral_especificacao_total");
var curral_especificacao_janeiro        = document.getElementById("id_curral_especificacao_janeiro");
var curral_especificacao_fevereiro      = document.getElementById("id_curral_especificacao_fevereiro");
var curral_especificacao_marco          = document.getElementById("id_curral_especificacao_marco");
var curral_especificacao_abril          = document.getElementById("id_curral_especificacao_abril");
var curral_especificacao_maio           = document.getElementById("id_curral_especificacao_maio");
var curral_especificacao_junho          = document.getElementById("id_curral_especificacao_junho");
var curral_especificacao_julho          = document.getElementById("id_curral_especificacao_julho");
var curral_especificacao_agosto         = document.getElementById("id_curral_especificacao_agosto");
var curral_especificacao_setembro       = document.getElementById("id_curral_especificacao_setembro");
var curral_especificacao_outubro        = document.getElementById("id_curral_especificacao_outubro");
var curral_especificacao_novembro       = document.getElementById("id_curral_especificacao_novembro");
var curral_especificacao_dezembro       = document.getElementById("id_curral_especificacao_dezembro");

function curral(){
    curral_especificacao_total.innerHTML =
                parseInt(curral_especificacao_janeiro.value)+
                parseInt(curral_especificacao_fevereiro.value)+
                parseInt(curral_especificacao_marco.value)+
                parseInt(curral_especificacao_abril.value)+
                parseInt(curral_especificacao_maio.value)+
                parseInt(curral_especificacao_junho.value)+
                parseInt(curral_especificacao_julho.value)+
                parseInt(curral_especificacao_agosto.value)+
                parseInt(curral_especificacao_setembro.value)+
                parseInt(curral_especificacao_outubro.value)+
                parseInt(curral_especificacao_novembro.value)+
                parseInt(curral_especificacao_dezembro.value);


}

curral();

curral_especificacao_janeiro.addEventListener("keyup",curral);
curral_especificacao_fevereiro.addEventListener("keyup",curral);
curral_especificacao_marco.addEventListener("keyup",curral);
curral_especificacao_abril.addEventListener("keyup",curral);
curral_especificacao_maio.addEventListener("keyup",curral);
curral_especificacao_junho.addEventListener("keyup",curral);
curral_especificacao_julho.addEventListener("keyup",curral);
curral_especificacao_agosto.addEventListener("keyup",curral);
curral_especificacao_setembro.addEventListener("keyup",curral);
curral_especificacao_outubro.addEventListener("keyup",curral);
curral_especificacao_novembro.addEventListener("keyup",curral);
curral_especificacao_dezembro.addEventListener("keyup",curral);





