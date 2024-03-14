import { lista_random } from "./Data_cartas.js";
let todas_las_cartas= lista_random;

function repartir_Cartas(){
    let tablero = document.querySelector(".tablero")
    todas_las_cartas.forEach((cada_Carta)=>{
        let carta = document.createElement("div")
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_Carta}</div>`;
        //agrega un elemento hijo a este div, tiene que ser un createElement
        tablero.appendChild(carta)
        
    })
}
console.log(todas_las_cartas);

repartir_Cartas();



