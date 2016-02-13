var materiais_fazenda_especificacao_total       = document.getElementById("id_materiais_fazenda_especificacao_total");
var materiais_fazenda_especificacao_janeiro        = document.getElementById("id_materiais_fazenda_especificacao_janeiro");
var materiais_fazenda_especificacao_fevereiro      = document.getElementById("id_materiais_fazenda_especificacao_fevereiro");
var materiais_fazenda_especificacao_marco          = document.getElementById("id_materiais_fazenda_especificacao_marco");
var materiais_fazenda_especificacao_abril          = document.getElementById("id_materiais_fazenda_especificacao_abril");
var materiais_fazenda_especificacao_maio           = document.getElementById("id_materiais_fazenda_especificacao_maio");
var materiais_fazenda_especificacao_junho          = document.getElementById("id_materiais_fazenda_especificacao_junho");
var materiais_fazenda_especificacao_julho          = document.getElementById("id_materiais_fazenda_especificacao_julho");
var materiais_fazenda_especificacao_agosto         = document.getElementById("id_materiais_fazenda_especificacao_agosto");
var materiais_fazenda_especificacao_setembro       = document.getElementById("id_materiais_fazenda_especificacao_setembro");
var materiais_fazenda_especificacao_outubro        = document.getElementById("id_materiais_fazenda_especificacao_outubro");
var materiais_fazenda_especificacao_novembro       = document.getElementById("id_materiais_fazenda_especificacao_novembro");
var materiais_fazenda_especificacao_dezembro       = document.getElementById("id_materiais_fazenda_especificacao_dezembro");

function materiais_fazenda(){
    materiais_fazenda_especificacao_total.innerHTML =
                parseInt(materiais_fazenda_especificacao_janeiro.value)+
                parseInt(materiais_fazenda_especificacao_fevereiro.value)+
                parseInt(materiais_fazenda_especificacao_marco.value)+
                parseInt(materiais_fazenda_especificacao_abril.value)+
                parseInt(materiais_fazenda_especificacao_maio.value)+
                parseInt(materiais_fazenda_especificacao_junho.value)+
                parseInt(materiais_fazenda_especificacao_julho.value)+
                parseInt(materiais_fazenda_especificacao_agosto.value)+
                parseInt(materiais_fazenda_especificacao_setembro.value)+
                parseInt(materiais_fazenda_especificacao_outubro.value)+
                parseInt(materiais_fazenda_especificacao_novembro.value)+
                parseInt(materiais_fazenda_especificacao_dezembro.value);


}

materiais_fazenda();

materiais_fazenda_especificacao_janeiro.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_fevereiro.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_marco.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_abril.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_maio.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_junho.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_julho.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_agosto.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_setembro.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_outubro.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_novembro.addEventListener("keyup",materiais_fazenda);
materiais_fazenda_especificacao_dezembro.addEventListener("keyup",materiais_fazenda);




