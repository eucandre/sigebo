var aquisicao_animais_especificacao_total       = document.getElementById("id_aquisicao_animais_especificacao_total");
var aquisicao_animais_especificacao_janeiro        = document.getElementById("id_aquisicao_animais_especificacao_janeiro");
var aquisicao_animais_especificacao_fevereiro      = document.getElementById("id_aquisicao_animais_especificacao_fevereiro");
var aquisicao_animais_especificacao_marco          = document.getElementById("id_aquisicao_animais_especificacao_marco");
var aquisicao_animais_especificacao_abril          = document.getElementById("id_aquisicao_animais_especificacao_abril");
var aquisicao_animais_especificacao_maio           = document.getElementById("id_aquisicao_animais_especificacao_maio");
var aquisicao_animais_especificacao_junho          = document.getElementById("id_aquisicao_animais_especificacao_junho");
var aquisicao_animais_especificacao_julho          = document.getElementById("id_aquisicao_animais_especificacao_julho");
var aquisicao_animais_especificacao_agosto         = document.getElementById("id_aquisicao_animais_especificacao_agosto");
var aquisicao_animais_especificacao_setembro       = document.getElementById("id_aquisicao_animais_especificacao_setembro");
var aquisicao_animais_especificacao_outubro        = document.getElementById("id_aquisicao_animais_especificacao_outubro");
var aquisicao_animais_especificacao_novembro       = document.getElementById("id_aquisicao_animais_especificacao_novembro");
var aquisicao_animais_especificacao_dezembro       = document.getElementById("id_aquisicao_animais_especificacao_dezembro");

function aquisicao_animais(){
    aquisicao_animais_especificacao_total.innerHTML =
                parseInt(aquisicao_animais_especificacao_janeiro.value)+
                parseInt(aquisicao_animais_especificacao_fevereiro.value)+
                parseInt(aquisicao_animais_especificacao_marco.value)+
                parseInt(aquisicao_animais_especificacao_abril.value)+
                parseInt(aquisicao_animais_especificacao_maio.value)+
                parseInt(aquisicao_animais_especificacao_junho.value)+
                parseInt(aquisicao_animais_especificacao_julho.value)+
                parseInt(aquisicao_animais_especificacao_agosto.value)+
                parseInt(aquisicao_animais_especificacao_setembro.value)+
                parseInt(aquisicao_animais_especificacao_outubro.value)+
                parseInt(aquisicao_animais_especificacao_novembro.value)+
                parseInt(aquisicao_animais_especificacao_dezembro.value);


}

aquisicao_animais();

aquisicao_animais_especificacao_janeiro.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_fevereiro.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_marco.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_abril.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_maio.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_junho.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_julho.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_agosto.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_setembro.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_outubro.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_novembro.addEventListener("keyup",aquisicao_animais);
aquisicao_animais_especificacao_dezembro.addEventListener("keyup",aquisicao_animais);





