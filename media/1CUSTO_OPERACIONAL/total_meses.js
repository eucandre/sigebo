var total_ope = document.getElementById("");
var total_FIXO_jan = document.getElementById("");
var total_VARI_jan = document.getElementById("");
var total_ADM_jan  = document.getElementById("");
function TOTAL_OPER_jan(){
    total_ope.innerHTML =
        parseInt(total_FIXO_jan.value)+
        parseInt(total_VARI_jan.value)+
        parseInt(total_ADM_jan.value);

}
TOTAL_OPER_jan();

total_FIXO_jan.addEventListener("keyup",TOTAL_OPER_jan);
total_VARI_jan.addEventListener("keyup",TOTAL_OPER_jan);
total_ADM_jan.addEventListener("keyup",TOTAL_OPER_jan);