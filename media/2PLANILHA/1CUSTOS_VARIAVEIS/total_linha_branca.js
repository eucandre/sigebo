var linha_branca_especificacao_total       = document.getElementById("id_linha_branca_especificacao_total");
var linha_branca_especificacao_janeiro        = document.getElementById("id_linha_branca_especificacao_janeiro");
var linha_branca_especificacao_fevereiro      = document.getElementById("id_linha_branca_especificacao_fevereiro");
var linha_branca_especificacao_marco          = document.getElementById("id_linha_branca_especificacao_marco");
var linha_branca_especificacao_abril          = document.getElementById("id_linha_branca_especificacao_abril");
var linha_branca_especificacao_maio           = document.getElementById("id_linha_branca_especificacao_maio");
var linha_branca_especificacao_junho          = document.getElementById("id_linha_branca_especificacao_junho");
var linha_branca_especificacao_julho          = document.getElementById("id_linha_branca_especificacao_julho");
var linha_branca_especificacao_agosto         = document.getElementById("id_linha_branca_especificacao_agosto");
var linha_branca_especificacao_setembro       = document.getElementById("id_linha_branca_especificacao_setembro");
var linha_branca_especificacao_outubro        = document.getElementById("id_linha_branca_especificacao_outubro");
var linha_branca_especificacao_novembro       = document.getElementById("id_linha_branca_especificacao_novembro");
var linha_branca_especificacao_dezembro       = document.getElementById("id_linha_branca_especificacao_dezembro");

function linha_branca(){
    linha_branca_especificacao_total.innerHTML =
                parseInt(linha_branca_especificacao_janeiro.value)+
                parseInt(linha_branca_especificacao_fevereiro.value)+
                parseInt(linha_branca_especificacao_marco.value)+
                parseInt(linha_branca_especificacao_abril.value)+
                parseInt(linha_branca_especificacao_maio.value)+
                parseInt(linha_branca_especificacao_junho.value)+
                parseInt(linha_branca_especificacao_julho.value)+
                parseInt(linha_branca_especificacao_agosto.value)+
                parseInt(linha_branca_especificacao_setembro.value)+
                parseInt(linha_branca_especificacao_outubro.value)+
                parseInt(linha_branca_especificacao_novembro.value)+
                parseInt(linha_branca_especificacao_dezembro.value);


}

linha_branca();

linha_branca_especificacao_janeiro.addEventListener("keyup",linha_branca);
linha_branca_especificacao_fevereiro.addEventListener("keyup",linha_branca);
linha_branca_especificacao_marco.addEventListener("keyup",linha_branca);
linha_branca_especificacao_abril.addEventListener("keyup",linha_branca);
linha_branca_especificacao_maio.addEventListener("keyup",linha_branca);
linha_branca_especificacao_junho.addEventListener("keyup",linha_branca);
linha_branca_especificacao_julho.addEventListener("keyup",linha_branca);
linha_branca_especificacao_agosto.addEventListener("keyup",linha_branca);
linha_branca_especificacao_setembro.addEventListener("keyup",linha_branca);
linha_branca_especificacao_outubro.addEventListener("keyup",linha_branca);
linha_branca_especificacao_novembro.addEventListener("keyup",linha_branca);
linha_branca_especificacao_dezembro.addEventListener("keyup",linha_branca);




