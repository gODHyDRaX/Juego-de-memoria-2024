export let cards1 = ["🚀","🏍️","🚛","🚌","🚗","🚓","🚕","🚑","🛻","🛺","🛸","🛩️" ]
export let cards2 = ["🚀","🏍️","🚛","🚌","🚗","🚓","🚕","🚑","🛻","🛺","🛸","🛩️" ]


function ordenAleatorio(a, b){
    return Math.random()-0.5;
}
let todas_las_tarjetas =  cards1.concat(cards2);
todas_las_tarjetas.sort(ordenAleatorio);
let lista_random = todas_las_tarjetas

export {lista_random}

