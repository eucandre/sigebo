var totalel = document.getElementById("id_area_piquete_total");
var numero = document.getElementById("id_N_animais_confinados");

    function  totalPiquetes(){
    //numero.value = 100
    totalel.innerHTML = (parseInt(numero.value)*10).toFixed(2);
    }
totalPiquetes();
numero.addEventListener("keyup",totalPiquetes);
