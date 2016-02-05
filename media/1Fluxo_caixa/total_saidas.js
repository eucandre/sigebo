
var total_saidas_janeiro = document.getElementById("");
var CUSTO_FIXO_janeiro              = document.getElementById("");
var CUSTO_VARIAVEL_janeiro          = document.getElementById("");
var DESP_ADMINISTRATIVAS_janeiro = document.getElementById("");
var PAGAMENTO_EMPRESTIMO_janeiro = document.getElementById("");
var INVESTIMENTOS_janeiro           = document.getElementById("");
function total_SAIDAS_JANEIRO(){
    total_saidas_janeiro.innerHTML = (parseInt(CUSTO_FIXO.value)+parseInt(CUSTO_VARIAVEL.value)+parseInt(DESP_ADMINISTRATIVAS.value)+parseInt(PAGAMENTO_EMPRESTIMO.value)+parseInt(INVESTIMENTOS.value)).tofixed(2);
}


total_SAIDAS_JANEIRO();
CUSTO_FIXO_janeiro.addEventListener("keyup",total_SAIDAS_JANEIRO);
CUSTO_VARIAVEL_janeiro.addEventListener("keyup",total_SAIDAS_JANEIRO);
DESP_ADMINISTRATIVAS_janeiro.addEventListener("keyup",total_SAIDAS_JANEIRO);
PAGAMENTO_EMPRESTIMO_janeiro.addEventListener("keyup",total_SAIDAS_JANEIRO);
INVESTIMENTOS_janeiro.addEventListener("keyup",total_SAIDAS_JANEIRO);




