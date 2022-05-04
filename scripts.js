//-----------------------------------------------------------------------
//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
//-----------------------------------------------------------------------

var test = document.getElementById("gen-1");
console.log(test);

var test = document.getElementById("gen-1");

//Creo un elemento del tipo H2
var etiqueta = document.createElement("h2");
//Creo un contenido de texto de genrasio.....  y se lo asigno a contenido
var contenido = document.createTextNode("Generasión 1 Pokimon");
//Metro dentro del elemento H2 el contenido de la var contenido
etiqueta.appendChild(contenido);
//Añado al documento el elemento etiqueta
document.body.appendChild(etiqueta);

//Localizo el elemento con id gen-1 y se lo asigno a lis
var lis = document.getElementById("gen-1");
console.log(lis);
//borro el lis obteniendo su id del documento y borrando el ultimo (solo hay uno)
lis.removeChild(document.getElementById("gen-1").lastChild);

document.getElementById("gen-1").appendChild(etiqueta);

//-----------------------------------------------------------------------
//Cambia el color de fondo de la primera generación de Pokimon.
//-----------------------------------------------------------------------

var element = document.querySelector(".infocard-list"); //PREGUNTAR DAVINIA COMO SERIA CON OPCION
element.style.background = "red"; //BODY
console.log(element);

//-----------------------------------------------------------------------
//Imprime por consola la URL de la página.
//-----------------------------------------------------------------------
var url = document.location.href;
console.log(url);

//-----------------------------------------------------------------------
//Imprime por consola el dominio de la página.
//-----------------------------------------------------------------------
var urlDomain = document.domain;
console.log(urlDomain);

//-----------------------------------------------------------------------
//Imprime todos los nodos de imagen.
//-----------------------------------------------------------------------
var imag = document.getElementsByClassName("img-fixed")
console.log(imag.length)

//-----------------------------------------------------------------------
//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
//-----------------------------------------------------------------------
 let cage = document.querySelectorAll("img")

 for (let i = 0; i < cage.length; i++) {
     cage[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"     
 }