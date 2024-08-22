// Conexiones con el HTML
const btnEncriptar = document.getElementById('btn_encriptar')
const btnDesncriptar = document.getElementById('btn_desencriptar')
const btnCopy = document.getElementById('btn_copy')
const mostrarTexto = document.getElementById('text_out')
const divError = document.getElementById('error_Text')

// Espresión regular para validar que el texto sea solamente en minuscula, sin acentos
const textoValido = /^[a-z\s]+$/;


// Funcion de Encriptacion de texto
const encriptar = (textoOriginal) => {
   
   let textoEncriptado = '';
      for (let i = 0; i < textoOriginal.length; i++) {
            let caracter = textoOriginal[i].toLowerCase();

            textoEncriptado += buscarVocales(caracter)
         
      }

   mostrarTexto.innerHTML = textoEncriptado ;
      
}

// Funcion de Desencriptar texto
const desencriptarTexto = (textoEncriptado) => {
   
   

   let desencriptedText = textoEncriptado
       .replace(/ai/g, 'a')
       .replace(/enter/g, 'e')
       .replace(/imes/g, 'i')
       .replace(/ober/g, 'o')
       .replace(/ufat/g, 'u');

   document.getElementById('text_out').innerText = desencriptedText;
   // inputElement.value = '';
}

// Funcion que verifica si el carácter es una vocal y agrega la modificacion según corresponda
const buscarVocales = (caracter) => {
    
    switch (caracter) {
        case 'a':
           return 'ai'
            
        case 'e':
           return 'enter'
            
        case 'i':
           return 'imes'
            
        case 'o':
           return 'ober'
            
        case 'u':
           return 'ufat'
            
        default:
           return caracter;
            
    }
}

// Función que copia el texto final, ya sea encriptado o desencriptado
const copiarTexto = () => {

   const textoFinal = document.getElementById('text_out').innerText;
         
      // Verifica si hay texto en el div para copiar
      if (textoFinal) {
         // Usar la API del portapapeles para copiar el texto
         navigator.clipboard.writeText(textoFinal)
            .then(() => {
                  alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                  alert('Error al copiar el texto: ', err);
            });
      } else {
         alert('No hay texto para copiar');
      }
   }



// Evento para el boton de "Encriptar"
btnEncriptar.onclick = function () {
   let textoOriginal = document.getElementById('in_text').value;

   //Validación de la cadena de texto
   if (textoValido.test(textoOriginal)) {
      encriptar(textoOriginal);
      document.getElementById("in_text").value = "";
      divError.hidden
   }else{
      divError.innerText='Escriba el texto solo en minúscula y sin acentos por favor';
   }    
}
    
// Evento para el boton de "Desencriptar"
btnDesncriptar.onclick = function () {
   let textoEncriptado = document.getElementById('in_text').value;
console.log(textoEncriptado);

   //Validación de la cadena de texto
   if (textoValido.test(textoEncriptado)) {
      desencriptarTexto(textoEncriptado);
      document.getElementById('in_text').value = '';

   }else{
      divError.innerText='Escriba el texto solo en minúscula y sin acentos por favor'
   }

}

// Evento para el boton copiar
btnCopy.onclick = function (){
   copiarTexto()
}

/* Requisitos:

 Debe funcionar solo con letras minúsculas

 No deben ser utilizados letras con acentos ni caracteres especiales

 Debe ser posible convertir una palabra para la versión encriptada 
 también devolver una palabra encriptada para su versión original.

 */