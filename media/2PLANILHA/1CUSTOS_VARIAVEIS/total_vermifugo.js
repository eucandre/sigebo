var vermifugo_especificacao_total       = document.getElementById("id_vermifugo_especificacao_total");
var vermifugo_especificacao_janeiro        = document.getElementById("id_vermifugo_especificacao_janeiro");
var vermifugo_especificacao_fevereiro      = document.getElementById("id_vermifugo_especificacao_fevereiro");
var vermifugo_especificacao_marco          = document.getElementById("id_vermifugo_especificacao_marco");
var vermifugo_especificacao_abril          = document.getElementById("id_vermifugo_especificacao_abril");
var vermifugo_especificacao_maio           = document.getElementById("id_vermifugo_especificacao_maio");
var vermifugo_especificacao_junho          = document.getElementById("id_vermifugo_especificacao_junho");
var vermifugo_especificacao_julho          = document.getElementById("id_vermifugo_especificacao_julho");
var vermifugo_especificacao_agosto         = document.getElementById("id_vermifugo_especificacao_agosto");
var vermifugo_especificacao_setembro       = document.getElementById("id_vermifugo_especificacao_setembro");
var vermifugo_especificacao_outubro        = document.getElementById("id_vermifugo_especificacao_outubro");
var vermifugo_especificacao_novembro       = document.getElementById("id_vermifugo_especificacao_novembro");
var vermifugo_especificacao_dezembro       = document.getElementById("id_vermifugo_especificacao_dezembro");

function vermifugo(){
    vermifugo_especificacao_total.innerHTML =
                parseInt(vermifugo_especificacao_janeiro.value)+
                parseInt(vermifugo_especificacao_fevereiro.value)+
                parseInt(vermifugo_especificacao_marco.value)+
                parseInt(vermifugo_especificacao_abril.value)+
                parseInt(vermifugo_especificacao_maio.value)+
                parseInt(vermifugo_especificacao_junho.value)+
                parseInt(vermifugo_especificacao_julho.value)+
                parseInt(vermifugo_especificacao_agosto.value)+
                parseInt(vermifugo_especificacao_setembro.value)+
                parseInt(vermifugo_especificacao_outubro.value)+
                parseInt(vermifugo_especificacao_novembro.value)+
                parseInt(vermifugo_especificacao_dezembro.value);


}

vermifugo();

vermifugo_especificacao_janeiro.addEventListener("keyup",vermifugo);
vermifugo_especificacao_fevereiro.addEventListener("keyup",vermifugo);
vermifugo_especificacao_marco.addEventListener("keyup",vermifugo);
vermifugo_especificacao_abril.addEventListener("keyup",vermifugo);
vermifugo_especificacao_maio.addEventListener("keyup",vermifugo);
vermifugo_especificacao_junho.addEventListener("keyup",vermifugo);
vermifugo_especificacao_julho.addEventListener("keyup",vermifugo);
vermifugo_especificacao_agosto.addEventListener("keyup",vermifugo);
vermifugo_especificacao_setembro.addEventListener("keyup",vermifugo);
vermifugo_especificacao_outubro.addEventListener("keyup",vermifugo);
vermifugo_especificacao_novembro.addEventListener("keyup",vermifugo);
vermifugo_especificacao_dezembro.addEventListener("keyup",vermifugo);




