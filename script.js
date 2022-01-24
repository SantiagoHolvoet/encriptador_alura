//Encriptar
let botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let ingresoTexto = document.querySelector("#input-texto");
  let textoOriginal = ingresoTexto.value;
  let textoEncriptado = textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  let mostrarResultado = document.querySelector("#msg");

  function validarTexto(mensaje) {
    let mayusculas = /[A-Z]/g;
    let tildes = /[áéíóú]/g;

    if (textoOriginal.match(mayusculas)) {
      return true;
    } else if (textoOriginal.match(tildes)) {
      return true;
    } else {
      return false;
    }
  }

  if (validarTexto(textoOriginal) == false) {
    mostrarResultado.value = textoEncriptado;
  } else if (validarTexto(textoOriginal) == true) {
    mostrarResultado.value = `No se aceptan tildes o mayúsculas`;
  } else {
    mostrarResultado.value = `Ha ocurrido un error, inténtelo de nuevo`;
  }
});

let botonDesencriptar = document.querySelector("#btn-desencriptar");

// Desencriptar
botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let ingresoTexto = document.querySelector("#input-texto");
  let textoOriginal = ingresoTexto.value;
  let textoDesencriptado = textoOriginal
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  let mostrarResultado = document.querySelector("#msg");
  mostrarResultado.value = textoDesencriptado;
});

//Copiar texto
let botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click", (e) => {
  var contenido = document.querySelector("#msg").value;
  navigator.clipboard.writeText(contenido);
});

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
