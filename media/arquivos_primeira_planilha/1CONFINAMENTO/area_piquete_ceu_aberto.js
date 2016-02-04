$('#valores_confinamento').change(function() {
    var val = $("#valores_confinamento option:selected").text();
    //alert(val);
    //alert(typeof (val));
    if (val.valueOf("ceu")){
        document.getElementById("id_area_piquete_por_animais").innerHTML=10;
    }
    else{
        document.getElementById("id_area_piquete_por_animais").innerHTML=20;
    }
    //if (("#valores_confinamento option:selected").valueOf("ceu")){
    //document.getElementById("id_area_piquete_por_animais").innerHTML=10;}

    //if (("#valores_confinamento option:selected").valueOf("galpao")){
    //document.getElementById("id_area_piquete_por_animais").innerHTML=20;}
});
//area_piquete.addEventListener("onchange",area_piquete1);
//area_piquete.addEventListener("onchange",area_piquete2);