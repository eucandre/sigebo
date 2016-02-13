var maquinas_especificacao_total       = document.getElementById("id_maquinas_especificacao_total");
var maquinas_especificacao_janeiro        = document.getElementById("id_maquinas_especificacao_janeiro");
var maquinas_especificacao_fevereiro      = document.getElementById("id_maquinas_especificacao_fevereiro");
var maquinas_especificacao_marco          = document.getElementById("id_maquinas_especificacao_marco");
var maquinas_especificacao_abril          = document.getElementById("id_maquinas_especificacao_abril");
var maquinas_especificacao_maio           = document.getElementById("id_maquinas_especificacao_maio");
var maquinas_especificacao_junho          = document.getElementById("id_maquinas_especificacao_junho");
var maquinas_especificacao_julho          = document.getElementById("id_maquinas_especificacao_julho");
var maquinas_especificacao_agosto         = document.getElementById("id_maquinas_especificacao_agosto");
var maquinas_especificacao_setembro       = document.getElementById("id_maquinas_especificacao_setembro");
var maquinas_especificacao_outubro        = document.getElementById("id_maquinas_especificacao_outubro");
var maquinas_especificacao_novembro       = document.getElementById("id_maquinas_especificacao_novembro");
var maquinas_especificacao_dezembro       = document.getElementById("id_maquinas_especificacao_dezembro");

function maquinas(){
    maquinas_especificacao_total.innerHTML =
                parseInt(maquinas_especificacao_janeiro.value)+
                parseInt(maquinas_especificacao_fevereiro.value)+
                parseInt(maquinas_especificacao_marco.value)+
                parseInt(maquinas_especificacao_abril.value)+
                parseInt(maquinas_especificacao_maio.value)+
                parseInt(maquinas_especificacao_junho.value)+
                parseInt(maquinas_especificacao_julho.value)+
                parseInt(maquinas_especificacao_agosto.value)+
                parseInt(maquinas_especificacao_setembro.value)+
                parseInt(maquinas_especificacao_outubro.value)+
                parseInt(maquinas_especificacao_novembro.value)+
                parseInt(maquinas_especificacao_dezembro.value);


}

maquinas();

maquinas_especificacao_janeiro.addEventListener("keyup",maquinas);
maquinas_especificacao_fevereiro.addEventListener("keyup",maquinas);
maquinas_especificacao_marco.addEventListener("keyup",maquinas);
maquinas_especificacao_abril.addEventListener("keyup",maquinas);
maquinas_especificacao_maio.addEventListener("keyup",maquinas);
maquinas_especificacao_junho.addEventListener("keyup",maquinas);
maquinas_especificacao_julho.addEventListener("keyup",maquinas);
maquinas_especificacao_agosto.addEventListener("keyup",maquinas);
maquinas_especificacao_setembro.addEventListener("keyup",maquinas);
maquinas_especificacao_outubro.addEventListener("keyup",maquinas);
maquinas_especificacao_novembro.addEventListener("keyup",maquinas);
maquinas_especificacao_dezembro.addEventListener("keyup",maquinas);





