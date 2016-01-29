var total_mes_Invest = document.getElementById("");
var total_mes_Herbicida_janeiro = document.getElementById("");
var total_mes_Equip_Aplicação_Herbicidas_janeiro = document.getElementById("");
var total_mes_Mão_de_obra_para_roçagem_janeiro = document.getElementById("");
var total_mes_Equip_Roçagem_janeiro = document.getElementById("");
var total_mes_COMPRA_VACAS_GIROLANDO_janeiro = document.getElementById("");
var total_mes_Cocho_Sal_janeiro = document.getElementById("");
var total_mes_Inseminação_Artificial_janeiro = document.getElementById("");
var total_mes_Mat_p_Cercas_janeiro = document.getElementById("");
var total_mes_EDIFICAÇÕES_janeiro = document.getElementById("");
var total_mes_SILO_janeiro = document.getElementById("");
var total_mes_CURRAL_CANCELAS_BALANÇAS_janeiro = document.getElementById("");
var total_mes_OUTROS_1_janeiro = document.getElementById("");
var total_mes_OUTROS_2_janeiro = document.getElementById("");
var total_mes_OUTROS_3_janeiro = document.getElementById("");
var total_mes_OUTROS_4_janeiro = document.getElementById("");
var total_mes_OUTROS_5_janeiro = document.getElementById("");
function tot_inv_JAN(){
    total_mes_Invest.innerHTML =
        parseInt(total_mes_Herbicida_janeiro.value)+
        parseInt(total_mes_Equip_Aplicação_Herbicidas_janeiro.value)+
        parseInt(total_mes_Mão_de_obra_para_roçagem_janeiro.value)+
        parseInt(total_mes_Equip_Roçagem_janeiro.value)+
        parseInt(total_mes_COMPRA_VACAS_GIROLANDO_janeiro.value)+
        parseInt(total_mes_Cocho_Sal_janeiro.value)+
        parseInt(total_mes_Inseminação_Artificial_janeiro.value)+
        parseInt(total_mes_Mat_p_Cercas_janeiro.value)+
        parseInt(total_mes_EDIFICAÇÕES_janeiro.value)+
        parseInt(total_mes_SILO_janeiro.value)+
        parseInt(total_mes_CURRAL_CANCELAS_BALANÇAS_janeiro.value)+
        parseInt(total_mes_OUTROS_1_janeiro.value)+
        parseInt(total_mes_OUTROS_2_janeiro.value)+
        parseInt(total_mes_OUTROS_3_janeiro.value)+
        parseInt(total_mes_OUTROS_4_janeiro.value)+
        parseInt(total_mes_OUTROS_5_janeiro.value);

}
tot_inv_JAN();
total_mes_Herbicida_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_Equip_Aplicação_Herbicidas_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_Mão_de_obra_para_roçagem_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_Equip_Roçagem_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_COMPRA_VACAS_GIROLANDO_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_Cocho_Sal_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_Inseminação_Artificial_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_Mat_p_Cercas_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_EDIFICAÇÕES_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_SILO_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_CURRAL_CANCELAS_BALANÇAS_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_OUTROS_1_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_OUTROS_2_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_OUTROS_3_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_OUTROS_4_janeiro.addEventListener("keyup",tot_inv_JAN);
total_mes_OUTROS_5_janeiro.addEventListener("keyup",tot_inv_JAN);