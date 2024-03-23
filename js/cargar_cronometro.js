import { repartir_Cartas } from "./repartir_cartas.js";
import { nivel } from "./repartir_cartas.js";
import { descubrir_Cartas } from "./descubrir_carta.js";
import { cargar_Ventana_modal } from "./ventana_modal.js";

let div_cronometro = document.querySelector(".cronometro")

function iniciar_cronometro(minutos, segundos) {
    let tiempo = setInterval(actualizar, 1000);

    function actualizar() {
        if (segundos <= 0 && minutos <= 0) {
            clearInterval(tiempo);
            div_cronometro.textContent = "00:00";
            return;
        }

        segundos--;

        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }

        let mn = minutos;
        let se = segundos;

        if (minutos < 10) {
            mn = "0" + minutos;
        }
        if (segundos < 10) {
            se = "0" + segundos;
        }
        if (segundos == 0 && minutos ==0) {
            cargar_Ventana_modal()
            repartir_Cartas(nivel)
            descubrir_Cartas()
                
        }

        div_cronometro.innerHTML = mn + ":" + se;
    }
}

export {iniciar_cronometro}
