var fluxo_janeiro = document.getElementById("");
var CUSTO_FIXO_janeiro              = document.getElementById("");
var CUSTO_VARIAVEL_janeiro          = document.getElementById("");
var DESP_ADMINISTRATIVAS_janeiro    = document.getElementById("");
var PAGAMENTO_EMPRESTIMO_janeiro    = document.getElementById("");
var INVESTIMENTOS_janeiro           = document.getElementById("");
var RECEITAS_FAZENDA_janeiro                 = document.getElementById("");
var RECEITA_EMPRÉSTIMO_janeiro              = document.getElementById("");

function fluxo_CAIXA_JANEIRO(){
    fluxo_janeiro.innerHTML =
        (parseInt(CUSTO_FIXO_janeiro.value)+
        parseInt(CUSTO_VARIAVEL_janeiro.value)+
        parseInt(DESP_ADMINISTRATIVAS_janeiro.value)+
        parseInt(PAGAMENTO_EMPRESTIMO_janeiro.value)+
        parseInt(INVESTIMENTOS_janeiro.value)-
        parseInt(RECEITAS_FAZENDA_janeiro.value)+
        parseInt(RECEITA_EMPRÉSTIMO_janeiro.value)).tofixed(2);
}
fluxo_CAIXA_JANEIRO();
CUSTO_FIXO_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);
CUSTO_VARIAVEL_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);
DESP_ADMINISTRATIVAS_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);
PAGAMENTO_EMPRESTIMO_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);
INVESTIMENTOS_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);
RECEITAS_FAZENDA_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);
RECEITA_EMPRÉSTIMO_janeiro.addEventListener("keyup",fluxo_CAIXA_JANEIRO);