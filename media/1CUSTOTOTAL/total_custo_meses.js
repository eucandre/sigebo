var total_Custo = document.getElementById("");
var total_FIXO_jan              = document.getElementById("");
var total_VARIÁVEL_jan          = document.getElementById("");
var total_D_ADMINISTRATIVAS_jan = document.getElementById("");

function total_CUSTO_JAN(){
    total_Custo.innerHTML =
        parseInt(total_FIXO_jan.value)+
        parseInt(total_VARIÁVEL_jan.value)+
        parseInt(total_D_ADMINISTRATIVAS_jan.value);
}

total_CUSTO_JAN();
total_FIXO_jan.addEventListener("keyup",total_CUSTO_JAN);
total_VARIÁVEL_jan.addEventListener("keyup",total_CUSTO_JAN);
total_D_ADMINISTRATIVAS_jan.addEventListener("keyup",total_CUSTO_JAN);


