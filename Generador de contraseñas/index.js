"use strict"
let numero = document.getElementById("numero");

let largoContrasenya = prompt("Introduce un numero entre 8 y 20 para generar tu contraseña: ")

crearContraseña();

function ComprobarNumero(){
    let esCorrecto = false;
    
    if(largoContrasenya > 7 && largoContrasenya < 21){
         
        esCorrecto = true;
    }else{
       
        alert("Número no correcto.");
        esCorrecto = false;
        
    }
    return esCorrecto;
    
}


function crearContraseña(){

    if (ComprobarNumero() == true) {
        let longitud = largoContrasenya;
        let clave = generarClave(longitud);
        let contrasenya = document.getElementById("contraseña");
        ComprobarNumero(longitud);
        contrasenya.innerText = clave;
    
    }
  }
  
  
  /*Función principal | Generador de claves | Password Generator*/
  function generarClave(long)
  {
      /*caracteres permitidos*/
      let caracteres = "%!Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$/?",
          clave = '',
          numeroClave;
  
      /*creacion de clave*/
      for(let i= 0; i < long; i++)
      {
           numeroClave = getNumero( 0, caracteres.length );
           clave += caracteres.substring( numeroClave, numeroClave + 1 );
      }
      return clave;
  }
  
  
  /*Función para generar un numero aleatorio*/
  function getNumero(min,max)
  {
      return Math.floor( Math.random() * ( max - min ) ) + min;
  }