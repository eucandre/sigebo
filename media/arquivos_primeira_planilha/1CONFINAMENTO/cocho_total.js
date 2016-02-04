var t_co = document.getElementById("id_cocho_total");
var ani_co = document.getElementById("id_cocho_por_animais");
var anims = document.getElementById("id_N_animais_confinados");
function COCHO_TOTALIS(){
    t_co.innerHTML = (parseFloat(ani_co.value)*parseInt(anims.value)).toFixed(2);
}
COCHO_TOTALIS();
ani_co.addEventListener("keyup",COCHO_TOTALIS);
anims.addEventListener("keyup",COCHO_TOTALIS);