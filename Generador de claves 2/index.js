"use strict"

let crear = document.getElementById('crear');
let form = document.getElementById('crearClave');
let largoContrasenya = document.getElementById('password');
let parrafo = document.querySelector("p");
let posicionHijo;



form.addEventListener("submit", (e)=>{
   if(ComprobarNumero()!= true){
    e.preventDefault();
    
   }else{
    
    crearContraseña();
   }

});

largoContrasenya.addEventListener('blur',(e)=>{
    
    let campo = e.target;
    
    if(parseInt(largoContrasenya.value) > 5 && parseInt(largoContrasenya.value) < 21){

        let etiquetaSpan = document.querySelector("span");
        if (etiquetaSpan){
            etiquetaSpan.remove();
            campo.classList.remove("invalid");
        }
        //crearContraseña();       
    }else{
        
        crearEtiquetas(posicionHijo, parrafo, campo, "span", "error", "Error, debe ser un número entre 6 y 20");
        campo.classList.add("invalid")
    }    
} );

/*
funcion para crear nuevas etiquetas html (posicionHijo)antes del cierre de la etiqueta html especificada(posicion). 
Una vez creada una etiqueta html hay que añadirla al DOM y para ello esta la variable "posicionPadre". 
Tambien añade el nombre que se quiera a la "class" y el texto que quieres que salga.
 */
function crearEtiquetas(posicionHijo, posicionPadre, posicion, elementoHtml, clase, texto){
        
    posicionHijo = document.createElement(elementoHtml);
    posicionPadre.appendChild(posicionHijo);
    posicion.nextElementSibling.classList.add(clase);
    posicion.nextElementSibling.innerText = texto;
}


function eliminarExcesoParrafo (){

    let borrarParrafo = document.getElementsByTagName("p");


    if (borrarParrafo){
        for(let i= 2; i < borrarParrafo.length; i++){
            
            borrarParrafo[i].remove();
        }
    }
}

function ComprobarNumero(){
    let correcto = false;
    
    if(largoContrasenya.value > 5 && largoContrasenya.value < 21){
         
        correcto = true;
    }else{
       
       
        correcto = false;
        
    }
    return correcto;
    
}

function crearContraseña() {
    
    
        let longitud = largoContrasenya.value;
        let clave = generarClave(longitud);
        
        crearEtiquetas(posicionHijo, parrafo,largoContrasenya , "p", "claveGenerada", clave);
        
        largoContrasenya.classList.remove("invalid");
        ComprobarNumero(longitud);
        eliminarExcesoParrafo();
        
    
  }
  
  
  /*
    Función principal | Generador de claves | Password Generator
  */
  function generarClave(long)
  {
      /*caracteres permitidos*/
      let caracteres = "%!Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$/?",
          clave = '',
          numeroClave;
  
      //creacion de clave
      for(let i= 0; i < long; i++)
      {
           numeroClave = getNumero( 0, caracteres.length );
           clave += caracteres.substring( numeroClave, numeroClave + 1 );
      }
      return clave;
  }
  
  
  //Función para generar un numero aleatorio
  function getNumero(min,max)
  {
      return Math.floor( Math.random() * ( max - min ) ) + min;
  }

