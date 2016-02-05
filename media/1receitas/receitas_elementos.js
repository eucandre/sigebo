var total_rece                      = document.getElementById("");
var total_VENDA_DE_BOI_GORDO_jan    = document.getElementById("");
var total_TOURINHOS_jan             = document.getElementById("");
var total_ABATE_jan                 = document.getElementById("");
var total_TRATOR_jan                = document.getElementById("");
var total_ALUGUEL_PASTO_jan         = document.getElementById("");
var total_OUTROS_1_jan              = document.getElementById("");
var total_OUTROS_1__jan              = document.getElementById("");
var total_OUTROS_1___jan              = document.getElementById("");


function TOTAL_rec_jan(){
    total_rece.innerHTML =

        (parseInt(total_VENDA_DE_BOI_GORDO_jan.value)+
        parseInt(total_TOURINHOS_jan.value)+
        parseInt(total_ABATE_jan.value)+
        parseInt(total_TRATOR_jan.value)+
        parseInt(total_ALUGUEL_PASTO_jan.value)+
        parseInt(total_OUTROS_1_jan.value)+
        parseInt(total_OUTROS_1__jan.value)+
        parseInt(total_OUTROS_1___jan.value)).tofixed(2);

}
TOTAL_rec_jan();

total_VENDA_DE_BOI_GORDO_jan.addEventListener("keyup",TOTAL_rec_jan);
total_TOURINHOS_jan.addEventListener("keyup",TOTAL_rec_jan);
total_ABATE_jan.addEventListener("keyup",TOTAL_rec_jan);
total_TRATOR_jan.addEventListener("keyup",TOTAL_rec_jan);
total_ALUGUEL_PASTO_jan.addEventListener("keyup",TOTAL_rec_jan);
total_OUTROS_1_jan.addEventListener("keyup",TOTAL_rec_jan);
total_OUTROS_1__jan.addEventListener("keyup",TOTAL_rec_jan);
total_OUTROS_1___jan.addEventListener("keyup",TOTAL_rec_jan);
