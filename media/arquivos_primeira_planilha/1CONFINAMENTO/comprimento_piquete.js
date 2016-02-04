var compri = document.getElementById("id_area_piquete_comprimento");

var x = document.getElementById("id_cocho_por_animais");
var y = document.getElementById("id_N_animais_confinados");
function COMPR(){
    compri.innerHTML = (parseFloat(x.value)*parseInt(y.value)).toFixed(2);
}
COMPR();
x.addEventListener("keyup",COMPR);
y.addEventListener("keyup",COMPR);