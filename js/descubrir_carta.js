//descubrir carta

// Seleccionar todas las cartas traseras en el documento

let todas_las_cartad = document.querySelectorAll(".carta_trasera");

// Iterar sobre cada carta trasera

    todas_las_cartad.forEach((cada_div)=>{
            // Agregar un evento de clic a cada carta trasera

        cada_div.addEventListener("click",()=>{
           


            
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

                        let carta_1 = cantidad_descubiertas[0].innerHTML;
                        let carta_2 = cantidad_descubiertas[1].innerHTML;

                        if(carta_1 == carta_2){
                            console.log("verdadero")
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
                        
                            
                        }else{
                            console.log("falso")
                            setTimeout(()=>{
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