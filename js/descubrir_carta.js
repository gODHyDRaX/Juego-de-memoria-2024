//descubrir carta

// Seleccionar todas las cartas traseras en el documento


import { Actualizar_vidas } from "./Actualizar_vidas.js";
import { vidas } from "./Actualizar_vidas.js";
import { Cargar_puntos } from "./puntos.js";
import { iniciar_cronometro } from "./cargar_cronometro.js";
import { Cargar_aciertos } from "./Cargar_aciertos.js";


let todas_las_cartad = document.querySelectorAll(".carta_trasera");
let cartas_Descubiertas = 0;
let tablero = document.querySelector(".tablero")
let contador_de_Cartas = 0;
let entado_del_cronometro = 0;

function descubrir_Cartas(){
    // Iterar sobre cada carta trasera

    todas_las_cartad.forEach((cada_div)=>{
        // Agregar un evento de clic a cada carta trasera


    cada_div.addEventListener("click",()=>{

        contador_de_Cartas++;
        if(contador_de_Cartas==1){
            iniciar_cronometro(0,13)
        }
// cantidad de cartas descubiertas
        let cantidad_descubiertas = document.querySelectorAll(".activar")
        let total_descubiertas = cantidad_descubiertas.length;
    // Verificar si ya hay menos de 2 cartas descubiertas
        if(total_descubiertas <2){
            // Marcar la carta actual como activa
            cada_div.classList.add("activar")
            cantidad_descubiertas = document.querySelectorAll(".activar")
                // Si hay exactamente 1 carta descubierta, programar un temporizador para ocultar las cartas después de 1 segundo
            if(total_descubiertas==1){
                function comparar(){
                    let carta_1 = cantidad_descubiertas[0].textContent;
                    let carta_2 = cantidad_descubiertas[1].textContent;
                    if(carta_1 == carta_2){
                        Cargar_aciertos(carta_1);

                        cartas_Descubiertas++;
                        if (cartas_Descubiertas==todas_las_cartad.length/2) {
                            Cargar_puntos(vidas.length)
                        }
                        cantidad_descubiertas.forEach((carta)=>{
                            setTimeout(()=>{
                                // Iterar sobre cada carta descubierta y quitar la clase "activar"
                                    cantidad_descubiertas.forEach((cada_carta_descubierta)=>{
                                        cada_carta_descubierta.classList.remove("activar")
                                        carta.innerHTML = "";
                                        carta.classList.remove("activar")
                                        carta.classList.add("ocultar")
                                    });
                                },(1000))
                        })
                        if (cartas_Descubiertas ==12) {
                            tablero.innerHTML = `
                            <h1 class="titulo">WINNER</h1>
                            `;
                        }
                    }else{
                        setTimeout(()=>{
                            Actualizar_vidas(false);
                            // Iterar sobre cada carta descubierta y quitar la clase "activar"
                                cantidad_descubiertas.forEach((cada_carta_descubierta)=>{
                                    cada_carta_descubierta.classList.remove("activar")
                                });
                            },(1000))
                    }
                }
                comparar();   
            }
        }
    }); 
});

}
descubrir_Cartas()
export {descubrir_Cartas}