import { lista_cartas_nivel } from "./Data_cartas.js";


let nivel  = construir_nivel(0)

function construir_nivel(nivel){

    function ordenAleatorio(a, b){

        return Math.random()-0.5;

    }
    let todas_las_tarjetas = lista_cartas_nivel[nivel].concat(lista_cartas_nivel[nivel]);
    todas_las_tarjetas.sort(ordenAleatorio)
    let lista_random = todas_las_tarjetas
    return lista_random;
}


function repartir_Cartas(nivel){
    
    let tablero = document.querySelector(".tablero")
    tablero.innerHTML =""
    nivel.forEach((cada_Carta)=>{
        let carta = document.createElement("div")
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_Carta}</div>`;
        //agrega un elemento hijo a este div, tiene que ser un createElement
        tablero.appendChild(carta)
        
    })
}
export {repartir_Cartas}
export {nivel}
repartir_Cartas(nivel);



