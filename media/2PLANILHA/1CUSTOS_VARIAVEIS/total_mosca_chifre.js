var mosca_chifre_especificacao_total       = document.getElementById("id_mosca_chifre_especificacao_total");
var mosca_chifre_especificacao_janeiro        = document.getElementById("id_mosca_chifre_especificacao_janeiro");
var mosca_chifre_especificacao_fevereiro      = document.getElementById("id_mosca_chifre_especificacao_fevereiro");
var mosca_chifre_especificacao_marco          = document.getElementById("id_mosca_chifre_especificacao_marco");
var mosca_chifre_especificacao_abril          = document.getElementById("id_mosca_chifre_especificacao_abril");
var mosca_chifre_especificacao_maio           = document.getElementById("id_mosca_chifre_especificacao_maio");
var mosca_chifre_especificacao_junho          = document.getElementById("id_mosca_chifre_especificacao_junho");
var mosca_chifre_especificacao_julho          = document.getElementById("id_mosca_chifre_especificacao_julho");
var mosca_chifre_especificacao_agosto         = document.getElementById("id_mosca_chifre_especificacao_agosto");
var mosca_chifre_especificacao_setembro       = document.getElementById("id_mosca_chifre_especificacao_setembro");
var mosca_chifre_especificacao_outubro        = document.getElementById("id_mosca_chifre_especificacao_outubro");
var mosca_chifre_especificacao_novembro       = document.getElementById("id_mosca_chifre_especificacao_novembro");
var mosca_chifre_especificacao_dezembro       = document.getElementById("id_mosca_chifre_especificacao_dezembro");

function mosca_chifre(){
    mosca_chifre_especificacao_total.innerHTML =
                parseInt(mosca_chifre_especificacao_janeiro.value)+
                parseInt(mosca_chifre_especificacao_fevereiro.value)+
                parseInt(mosca_chifre_especificacao_marco.value)+
                parseInt(mosca_chifre_especificacao_abril.value)+
                parseInt(mosca_chifre_especificacao_maio.value)+
                parseInt(mosca_chifre_especificacao_junho.value)+
                parseInt(mosca_chifre_especificacao_julho.value)+
                parseInt(mosca_chifre_especificacao_agosto.value)+
                parseInt(mosca_chifre_especificacao_setembro.value)+
                parseInt(mosca_chifre_especificacao_outubro.value)+
                parseInt(mosca_chifre_especificacao_novembro.value)+
                parseInt(mosca_chifre_especificacao_dezembro.value);


}

mosca_chifre();

mosca_chifre_especificacao_janeiro.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_fevereiro.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_marco.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_abril.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_maio.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_junho.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_julho.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_agosto.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_setembro.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_outubro.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_novembro.addEventListener("keyup",mosca_chifre);
mosca_chifre_especificacao_dezembro.addEventListener("keyup",mosca_chifre);




