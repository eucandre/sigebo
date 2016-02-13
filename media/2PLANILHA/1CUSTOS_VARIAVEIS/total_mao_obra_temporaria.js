var mao_obra_temporaria_especificacao_total       = document.getElementById("id_mao_obra_temporaria_especificacao_total");
var mao_obra_temporaria_especificacao_janeiro        = document.getElementById("id_mao_obra_temporaria_especificacao_janeiro");
var mao_obra_temporaria_especificacao_fevereiro      = document.getElementById("id_mao_obra_temporaria_especificacao_fevereiro");
var mao_obra_temporaria_especificacao_marco          = document.getElementById("id_mao_obra_temporaria_especificacao_marco");
var mao_obra_temporaria_especificacao_abril          = document.getElementById("id_mao_obra_temporaria_especificacao_abril");
var mao_obra_temporaria_especificacao_maio           = document.getElementById("id_mao_obra_temporaria_especificacao_maio");
var mao_obra_temporaria_especificacao_junho          = document.getElementById("id_mao_obra_temporaria_especificacao_junho");
var mao_obra_temporaria_especificacao_julho          = document.getElementById("id_mao_obra_temporaria_especificacao_julho");
var mao_obra_temporaria_especificacao_agosto         = document.getElementById("id_mao_obra_temporaria_especificacao_agosto");
var mao_obra_temporaria_especificacao_setembro       = document.getElementById("id_mao_obra_temporaria_especificacao_setembro");
var mao_obra_temporaria_especificacao_outubro        = document.getElementById("id_mao_obra_temporaria_especificacao_outubro");
var mao_obra_temporaria_especificacao_novembro       = document.getElementById("id_mao_obra_temporaria_especificacao_novembro");
var mao_obra_temporaria_especificacao_dezembro       = document.getElementById("id_mao_obra_temporaria_especificacao_dezembro");

function mao_obra_temporaria(){
    mao_obra_temporaria_especificacao_total.innerHTML =
                parseInt(mao_obra_temporaria_especificacao_janeiro.value)+
                parseInt(mao_obra_temporaria_especificacao_fevereiro.value)+
                parseInt(mao_obra_temporaria_especificacao_marco.value)+
                parseInt(mao_obra_temporaria_especificacao_abril.value)+
                parseInt(mao_obra_temporaria_especificacao_maio.value)+
                parseInt(mao_obra_temporaria_especificacao_junho.value)+
                parseInt(mao_obra_temporaria_especificacao_julho.value)+
                parseInt(mao_obra_temporaria_especificacao_agosto.value)+
                parseInt(mao_obra_temporaria_especificacao_setembro.value)+
                parseInt(mao_obra_temporaria_especificacao_outubro.value)+
                parseInt(mao_obra_temporaria_especificacao_novembro.value)+
                parseInt(mao_obra_temporaria_especificacao_dezembro.value);


}

mao_obra_temporaria();

mao_obra_temporaria_especificacao_janeiro.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_fevereiro.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_marco.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_abril.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_maio.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_junho.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_julho.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_agosto.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_setembro.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_outubro.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_novembro.addEventListener("keyup",mao_obra_temporaria);
mao_obra_temporaria_especificacao_dezembro.addEventListener("keyup",mao_obra_temporaria);




