var bb = document.getElementById("id_bebedouro_total");
var bb_animais = document.getElementById("id_bebedouro_por_animais");
var animls = document.getElementById("id_N_animais_confinados");
function ttBB(){
    bb.innerHTML = (parseFloat(bb_animais.value)*parseInt(animls.value)).toFixed(2);
}
ttBB()
bb_animais.addEventListener("keyup",ttBB);
animals.addEventListener("keyup",ttBB);