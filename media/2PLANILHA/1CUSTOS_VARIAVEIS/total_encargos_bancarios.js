var emcargos_banco_especificacao_total       = document.getElementById("id_emcargos_banco_especificacao_total");
var emcargos_banco_especificacao_janeiro        = document.getElementById("id_emcargos_banco_especificacao_janeiro");
var emcargos_banco_especificacao_fevereiro      = document.getElementById("id_emcargos_banco_especificacao_fevereiro");
var emcargos_banco_especificacao_marco          = document.getElementById("id_emcargos_banco_especificacao_marco");
var emcargos_banco_especificacao_abril          = document.getElementById("id_emcargos_banco_especificacao_abril");
var emcargos_banco_especificacao_maio           = document.getElementById("id_emcargos_banco_especificacao_maio");
var emcargos_banco_especificacao_junho          = document.getElementById("id_emcargos_banco_especificacao_junho");
var emcargos_banco_especificacao_julho          = document.getElementById("id_emcargos_banco_especificacao_julho");
var emcargos_banco_especificacao_agosto         = document.getElementById("id_emcargos_banco_especificacao_agosto");
var emcargos_banco_especificacao_setembro       = document.getElementById("id_emcargos_banco_especificacao_setembro");
var emcargos_banco_especificacao_outubro        = document.getElementById("id_emcargos_banco_especificacao_outubro");
var emcargos_banco_especificacao_novembro       = document.getElementById("id_emcargos_banco_especificacao_novembro");
var emcargos_banco_especificacao_dezembro       = document.getElementById("id_emcargos_banco_especificacao_dezembro");

function emcargos_banco(){
    emcargos_banco_especificacao_total.innerHTML =
                parseInt(emcargos_banco_especificacao_janeiro.value)+
                parseInt(emcargos_banco_especificacao_fevereiro.value)+
                parseInt(emcargos_banco_especificacao_marco.value)+
                parseInt(emcargos_banco_especificacao_abril.value)+
                parseInt(emcargos_banco_especificacao_maio.value)+
                parseInt(emcargos_banco_especificacao_junho.value)+
                parseInt(emcargos_banco_especificacao_julho.value)+
                parseInt(emcargos_banco_especificacao_agosto.value)+
                parseInt(emcargos_banco_especificacao_setembro.value)+
                parseInt(emcargos_banco_especificacao_outubro.value)+
                parseInt(emcargos_banco_especificacao_novembro.value)+
                parseInt(emcargos_banco_especificacao_dezembro.value);


}

emcargos_banco();

emcargos_banco_especificacao_janeiro.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_fevereiro.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_marco.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_abril.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_maio.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_junho.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_julho.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_agosto.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_setembro.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_outubro.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_novembro.addEventListener("keyup",emcargos_banco);
emcargos_banco_especificacao_dezembro.addEventListener("keyup",emcargos_banco);





