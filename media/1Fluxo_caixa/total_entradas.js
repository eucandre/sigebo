
var total_entradas = document.getElementById("");
var RECEITAS_FAZENDA_janeiro = document.getElementById("");
var RECEITA_EMPRÉSTIMO_janeiro= document.getElementById("");

function total_ENTRADAS_janeiro(){
    total_entradas.innerHTML = (parseInt(RECEITAS_FAZENDA.value)+parseInt(RECEITA_EMPRÉSTIMO.value)).tofixed(2);
}
total_ENTRADAS_janeiro();

total_entradas.addEventListener("keyup",total_ENTRADAS_janeiro);
RECEITAS_FAZENDA_janeiro.addEventListener("keyup",total_ENTRADAS_janeiro);
RECEITA_EMPRÉSTIMO_janeiro.addEventListener("keyup",total_ENTRADAS_janeiro);
