let cards1 = ["🚀","🏍️","🚛","🚌","🚗","🚓","🚕","🚑","🛻","🛺","🛸","🛩️" ]
let cards2 = ["🚀","🏍️","🚛","🚌","🚗","🚓","🚕","🚑","🛻","🛺","🛸","🛩️" ]
let todas_las_cartas= cards1.concat(cards2)

function repartir_Cartas(){
    let tablero = document.querySelector("#root")
    todas_las_cartas.forEach((cada_Carta)=>{
        let carta = document.createElement("div")
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_Carta}</div>`;
        //agrega un elemento hijo a este div, tiene que ser un createElement
        tablero.appendChild(carta)
    })
}




repartir_Cartas();

let todas_las_cartad = document.querySelectorAll(".carta_trasera");
    todas_las_cartad.forEach((cada_div)=>{
        cada_div.addEventListener("click",()=>{
            cada_div.classList.add("activar")
        })
    })
