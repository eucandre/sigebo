/**
 * Created by Carlos on 28/10/2015.
 */
var vacas = document.getElementById("id_vacas");
var novilas34 = document.getElementById("id_novilhas34");
var novilha23 = document.getElementById("id_novilhas23");
var novilhas12 = document.getElementById("id_novilhas12");
var bezerros01 = document.getElementById("id_bezerros01");
var bezerras01 = document.getElementById("id_bezerras01");
var machos12   = document.getElementById("id_machos12");
var machos23 = document.getElementById("id_machos23");
var machos34 = document.getElementById("id_machos34");
var machos_maior_que_4 = document.getElementById("id_machos_maior_que_4");
var touros = document.getElementById("id_touros");
var tourunos = document.getElementById("id_tourunos");
var vacas_descarte = document.getElementById("id_vacas_descarte");
var numero_vacas_touro = document.getElementById("id_numero_vacas_touro");//definicao inicial

var total = document.getElementById("id_total");
var tourosR = document.getElementById("id_tourosR");//definicao inicial

function efetuaCalculo(){
  //Cálculo simples de potência só pra ilustrar
  /*total.innerHTML =+

  ).tofixed(2);*/
    total.innerHTML = parseInt(vacas.value)+parseInt(novilas34.value)+parseInt(novilha23.value)+parseInt(novilhas12.value)+parseInt(bezerros01.value)
    +parseInt(bezerras01.value)+parseInt(machos12.value)+parseInt(machos23.value)+parseInt(machos34.value)+parseInt(machos_maior_que_4.value)
    +parseInt(touros.value)+parseInt(tourunos.value)+
  parseInt(vacas_descarte.value);
}



vacas.addEventListener("keyup", efetuaCalculo);
novilas34.addEventListener("keyup", efetuaCalculo);
novilha23.addEventListener("keyup", efetuaCalculo);
novilhas12.addEventListener("keyup", efetuaCalculo);
bezerros01.addEventListener("keyup", efetuaCalculo);
bezerras01.addEventListener("keyup", efetuaCalculo);
machos12.addEventListener("keyup", efetuaCalculo);
machos23.addEventListener("keyup", efetuaCalculo);
machos34.addEventListener("keyup", efetuaCalculo);
machos_maior_que_4.addEventListener("keyup", efetuaCalculo);
touros.addEventListener("keyup", efetuaCalculo);
tourunos.addEventListener("keyup", efetuaCalculo);
vacas_descarte.addEventListener("keyup", efetuaCalculo);

tourosR.addEventListener("keyup",efetuaCalculo);
