    var BEMFEITORIAS_remuneracao= document.getElementById("id_benfeitorias_remuneracao_capital");

    var BEMFEITORIAS_remuneracao_MEDIA= document.getElementById("id_benfeitorias_capital_medio");
    function benf_remuneracao(){
         BEMFEITORIAS_remuneracao.innerHTML = (parseInt(BEMFEITORIAS_remuneracao_MEDIA.value)*10).tofixed(2);
    }
    benf_remuneracao();
    BEMFEITORIAS_remuneracao_MEDIA.addEventListener("keyup",benf_remuneracao);