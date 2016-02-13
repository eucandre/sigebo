var elabora_projeto_pecuario_especificacao_total       = document.getElementById("id_elabora_projeto_pecuario_especificacao_total");
var elabora_projeto_pecuario_especificacao_janeiro        = document.getElementById("id_elabora_projeto_pecuario_especificacao_janeiro");
var elabora_projeto_pecuario_especificacao_fevereiro      = document.getElementById("id_elabora_projeto_pecuario_especificacao_fevereiro");
var elabora_projeto_pecuario_especificacao_marco          = document.getElementById("id_elabora_projeto_pecuario_especificacao_marco");
var elabora_projeto_pecuario_especificacao_abril          = document.getElementById("id_elabora_projeto_pecuario_especificacao_abril");
var elabora_projeto_pecuario_especificacao_maio           = document.getElementById("id_elabora_projeto_pecuario_especificacao_maio");
var elabora_projeto_pecuario_especificacao_junho          = document.getElementById("id_elabora_projeto_pecuario_especificacao_junho");
var elabora_projeto_pecuario_especificacao_julho          = document.getElementById("id_elabora_projeto_pecuario_especificacao_julho");
var elabora_projeto_pecuario_especificacao_agosto         = document.getElementById("id_elabora_projeto_pecuario_especificacao_agosto");
var elabora_projeto_pecuario_especificacao_setembro       = document.getElementById("id_elabora_projeto_pecuario_especificacao_setembro");
var elabora_projeto_pecuario_especificacao_outubro        = document.getElementById("id_elabora_projeto_pecuario_especificacao_outubro");
var elabora_projeto_pecuario_especificacao_novembro       = document.getElementById("id_elabora_projeto_pecuario_especificacao_novembro");
var elabora_projeto_pecuario_especificacao_dezembro       = document.getElementById("id_elabora_projeto_pecuario_especificacao_dezembro");

function elabora_projeto_pecuario(){
    elabora_projeto_pecuario_especificacao_total.innerHTML =
                parseInt(elabora_projeto_pecuario_especificacao_janeiro.value)+
                parseInt(elabora_projeto_pecuario_especificacao_fevereiro.value)+
                parseInt(elabora_projeto_pecuario_especificacao_marco.value)+
                parseInt(elabora_projeto_pecuario_especificacao_abril.value)+
                parseInt(elabora_projeto_pecuario_especificacao_maio.value)+
                parseInt(elabora_projeto_pecuario_especificacao_junho.value)+
                parseInt(elabora_projeto_pecuario_especificacao_julho.value)+
                parseInt(elabora_projeto_pecuario_especificacao_agosto.value)+
                parseInt(elabora_projeto_pecuario_especificacao_setembro.value)+
                parseInt(elabora_projeto_pecuario_especificacao_outubro.value)+
                parseInt(elabora_projeto_pecuario_especificacao_novembro.value)+
                parseInt(elabora_projeto_pecuario_especificacao_dezembro.value);


}

elabora_projeto_pecuario();

elabora_projeto_pecuario_especificacao_janeiro.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_fevereiro.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_marco.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_abril.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_maio.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_junho.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_julho.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_agosto.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_setembro.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_outubro.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_novembro.addEventListener("keyup",elabora_projeto_pecuario);
elabora_projeto_pecuario_especificacao_dezembro.addEventListener("keyup",elabora_projeto_pecuario);





