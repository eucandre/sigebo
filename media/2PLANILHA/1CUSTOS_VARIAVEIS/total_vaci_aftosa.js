var vacina_aftosa_especificacao_total       = document.getElementById("id_vacina_aftosa_especificacao_total");
var vacina_aftosa_especificacao_janeiro        = document.getElementById("id_vacina_aftosa_especificacao_janeiro");
var vacina_aftosa_especificacao_fevereiro      = document.getElementById("id_vacina_aftosa_especificacao_fevereiro");
var vacina_aftosa_especificacao_marco          = document.getElementById("id_vacina_aftosa_especificacao_marco");
var vacina_aftosa_especificacao_abril          = document.getElementById("id_vacina_aftosa_especificacao_abril");
var vacina_aftosa_especificacao_maio           = document.getElementById("id_vacina_aftosa_especificacao_maio");
var vacina_aftosa_especificacao_junho          = document.getElementById("id_vacina_aftosa_especificacao_junho");
var vacina_aftosa_especificacao_julho          = document.getElementById("id_vacina_aftosa_especificacao_julho");
var vacina_aftosa_especificacao_agosto         = document.getElementById("id_vacina_aftosa_especificacao_agosto");
var vacina_aftosa_especificacao_setembro       = document.getElementById("id_vacina_aftosa_especificacao_setembro");
var vacina_aftosa_especificacao_outubro        = document.getElementById("id_vacina_aftosa_especificacao_outubro");
var vacina_aftosa_especificacao_novembro       = document.getElementById("id_vacina_aftosa_especificacao_novembro");
var vacina_aftosa_especificacao_dezembro       = document.getElementById("id_vacina_aftosa_especificacao_dezembro");

function vacina_aftosa(){
    vacina_aftosa_especificacao_total.innerHTML =
                parseInt(vacina_aftosa_especificacao_janeiro.value)+
                parseInt(vacina_aftosa_especificacao_fevereiro.value)+
                parseInt(vacina_aftosa_especificacao_marco.value)+
                parseInt(vacina_aftosa_especificacao_abril.value)+
                parseInt(vacina_aftosa_especificacao_maio.value)+
                parseInt(vacina_aftosa_especificacao_junho.value)+
                parseInt(vacina_aftosa_especificacao_julho.value)+
                parseInt(vacina_aftosa_especificacao_agosto.value)+
                parseInt(vacina_aftosa_especificacao_setembro.value)+
                parseInt(vacina_aftosa_especificacao_outubro.value)+
                parseInt(vacina_aftosa_especificacao_novembro.value)+
                parseInt(vacina_aftosa_especificacao_dezembro.value);


}

vacina_aftosa();

vacina_aftosa_especificacao_janeiro.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_fevereiro.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_marco.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_abril.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_maio.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_junho.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_julho.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_agosto.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_setembro.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_outubro.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_novembro.addEventListener("keyup",vacina_aftosa);
vacina_aftosa_especificacao_dezembro.addEventListener("keyup",vacina_aftosa);




