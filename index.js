let opcionOpen = 0;
const texto = document.querySelectorAll('.not-visible');
const opciones = document.querySelectorAll('#opcion');
const question = document.querySelectorAll('#question');
const flecha = document.querySelectorAll('.flecha');


document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){


    mostrar();
}


function mostrar(){

    opciones.forEach(opcion =>{

        opcion.addEventListener('click', e =>{
    
           opcionOpen = parseInt(e.target.dataset.opcion);

            mostrar2();
        });
    
    });

}


function mostrar2(){

    switch(opcionOpen){

        case 1:
            texto[0].classList.toggle("not-visible"); 
            question[0].classList.toggle("seleccionado"); 
            flecha[0].classList.toggle("seleccionado-flecha"); 
            break;
        case 2:
            texto[1].classList.toggle("not-visible"); 
            question[1].classList.toggle("seleccionado"); 
            flecha[1].classList.toggle("seleccionado-flecha"); 
            break;

        case 3:
            texto[2].classList.toggle("not-visible"); 
            question[2].classList.toggle("seleccionado"); 
            flecha[2].classList.toggle("seleccionado-flecha"); 
            break;

        case 4:
            texto[3].classList.toggle("not-visible"); 
            question[3].classList.toggle("seleccionado"); 
            flecha[3].classList.toggle("seleccionado-flecha"); 
            break;

        case 5:
            texto[4].classList.toggle("not-visible"); 
            question[4].classList.toggle("seleccionado"); 
            flecha[4].classList.toggle("seleccionado-flecha"); 
            break;

            default:
                break;
    }

}







