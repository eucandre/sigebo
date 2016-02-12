                        var total_cusFX = document.getElementById("id_total_custo_fixo");
                        var maquina_custo_fixo = document.getElementById("id_maquina_implemento_custo_fixo");
                        var tra_custo_fixo = document.getElementById("id_tratores_custo_fixo");
                        var vei_custofx = document.getElementById("id_veiculos_custo_fixo");
                        var equ_cf = document.getElementById("id_equipamentos_manuais_custo_fixo");
                        var rep_mac_CFX  = document.getElementById("id_reprodutores_machos_custo_fixo");
                        var femeaCUSTOF = document.getElementById("id_reprodutores_femeas_custo_fixo");
                        var A_ENGORD_CFX= document.getElementById("id_animais_gordo_custo_fixo");
                        var A_TRAB_CFX= document.getElementById("id_animais_trabalho_custo_fixo");
                        var CANA_VOLU_CFX= document.getElementById("id_canavial_ou_volumoso_custo_fixo");
                        var BEMFEITORIAS_CFX            = document.getElementById("id_benfeitorias_custo_fixo");
                        var cercas_fx = document.getElementById("id_cercas_custo_fixo");
                        var EDIF_CFX= document.getElementById("id_edificacoes_custo_fixo");
                        var PASTAGEM_CFX= document.getElementById("id_pastagem_custo_fixo");
                        function tota_CUSTO_FIX(){
                            total_cusFX.innerHTML = 10;/*parseInt(maquina_custo_fixo.value)+
                                    parseInt(tra_custo_fixo.value)+
                                    parseInt(equ_cf.value)+
                                    parseInt(rep_mac_CFX.value)+
                                    parseInt(femeaCUSTOF.value)+
                                    parseInt(A_ENGORD_CFX.value)+
                                    parseInt(A_TRAB_CFX.value)+
                                    parseInt(CANA_VOLU_CFX.value)+
                                    parseInt(BEMFEITORIAS_CFX.value)+
                                    parseInt(cercas_fx.value)+
                                    parseInt(EDIF_CFX.value)+
                                    parseInt(PASTAGEM_CFX.value);*/
                        }
                        tota_CUSTO_FIX();

                        tra_custo_fixo.addEventListener("keyup"tota_CUSTO_FIX);
                        equ_cf.addEventListener("keyup"tota_CUSTO_FIX);
                        rep_mac_CFX.addEventListener("keyup"tota_CUSTO_FIX);
                        femeaCUSTOF.addEventListener("keyup"tota_CUSTO_FIX);
                        A_ENGORD_CFX.addEventListener("keyup"tota_CUSTO_FIX);
                        A_TRAB_CFX.addEventListener("keyup"tota_CUSTO_FIX);
                        CANA_VOLU_CFX.addEventListener("keyup"tota_CUSTO_FIX);
                        BEMFEITORIAS_CFX.addEventListener("keyup"tota_CUSTO_FIX);
                        cercas_fx.addEventListener("keyup"tota_CUSTO_FIX);
                        EDIF_CFX.addEventListener("keyup"tota_CUSTO_FIX);
                        PASTAGEM_CFX.addEventListener("keyup"tota_CUSTO_FIX);

