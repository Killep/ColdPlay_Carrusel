/**
 * Proyecto COLDPLAY
 *
 * Slideshow con 7 de sus discos mas escuchados
 */

/// Estructura de Datos//
var datosDiscos = [
  { titulo: "Parachutes", img: "FOTOS/Parachutes.jpeg" },
  { titulo: "Mylo Xyloto", img: "FOTOS/Coldplay_Mylo.jpeg" },
  { titulo: "Head full of Dreams", img: "FOTOS/Head_Full_of_Dreams.jpeg" },
  { titulo: "Viva la Vida", img: "FOTOS/Viva_La_Vida.jpeg" },
  { titulo: "Paradise", img: "FOTOS/Paradise.jpeg" },
  { titulo: "Yellow", img: "FOTOS/Yellow.jpeg" },
  { titulo: "Higher Power", img: "FOTOS/Higher_Power.jpeg" },
];
var contador = 0;
var album = {};
var disco_foto = document.getElementById("disco_foto");
var disco_texto = document.getElementById("disco_texto");

/// Algoritmos ///

function handler() {
  if (contador == datosDiscos.length) {
    contador = 0;
  } else {
    album = datosDiscos[contador];
    disco_foto.style = "background-image:  url(" + album.img + ")";
    disco_texto.innerHTML = album.titulo;
    contador = contador + 1; /*tambien puede ser contador ++*/
  }
}

setInterval(handler, 3000); //Funcion
