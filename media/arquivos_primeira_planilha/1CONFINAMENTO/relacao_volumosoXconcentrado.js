var concentrado = document.getElementById("id_concentrado");
var volumoso = document.getElementById("id_volumoso");
function relacao(){
    concentrado.innerHTML = 100-parseInt(volumoso.value);
}
volumoso.addEventListener("keyup",relacao);