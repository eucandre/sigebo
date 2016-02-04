var ha = document.getElementById("id_area_piquete_por_ha");
var ani = document.getElementById("id_N_animais_confinados");
function Ha(){
    ha.innerHTML = ((parseInt(ani.value)*10)/10000).toFixed(2);
}
Ha();
ani.addEventListener("keyup",Ha)
