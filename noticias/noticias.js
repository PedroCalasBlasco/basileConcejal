
var requestURL = 'noticias.json';
 
var request = new XMLHttpRequest();

request.responseType = 'json';
request.send();

request.onload = function() {
	  var noticias = request.response;
	  muestraFecha(noticias);
	  muestraVolanta(noticias);
	  muestraTitulo(noticias);
	  muestraCopete(noticias);
	  muestraCuerpo(noticias);
}

function muestraFecha(jsonObj){
	
	var fecha = document.querySelector("#fecha").innerHTML();
	
}

function muestraVolanta(jsonObj){
	var volanta = document.querySelector("#volanta");
	volanta.textContent = jsonObj['volanta'];
	volanta.innerHTML(volanta);
}

function muestraTitulo(jsonObj){
	var titulo = document.querySelector("#titulo");
	titulo.textContent = jsonObj['titulo'];
	fecha.innerHTML(titulo);
}

function muestraCopete(jsonObj){
	var copete = document.querySelector("#copete");
	copete.textContent = jsonObj['copete'];
	fecha.innerHTML(copete);
}

function muestraCuerpo(jsonObj){
	var cuerpo = document.querySelector("#cuerpo");
	cuerpo.textContent = jsonObj['cuerpo'];
	fecha.innerHTML(cuerpo);
}*/