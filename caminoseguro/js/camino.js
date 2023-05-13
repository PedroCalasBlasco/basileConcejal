//
// var app = {
//
//
//     dispositivoListo: function(){
//      navigator.geolocation.getCurrentPosition(app.caminoMapa,app.errorAlSolicitarLocalizacion);
//     },
//
//     caminoMapa: function(position){
        var map = L.map('caminoseguro',{
            fadeAnimation: true,
            zoomAnimation: false,
            minZoom: 14,
            maxZoom: 18,
            pitch: -20,
            bearing: 55,
            maxBounds: [[-31.66601,-60.75409], [-31.5782,-60.6482]],
            markerZoomAnimation: false
          }).setView([-31.6332294, -60.6900008], 14.5);

        L.control.scale({
        	imperial: false
        }).addTo(map);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGVkcm9jYWxhcyIsImEiOiJjajJ4cjluMTMwMThtMndxOGg4Y3NoZWkzIn0.83VnuZwLtidmCHxuP1briA', {
        	maxZoom: 18,
        	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        	id: 'mapbox.streets'
        }).addTo(map);


        // map.on('click', function(evento){
        // 	var texto = 'Esto es una incidencia';
        // 	app.pintaIncidencia(evento.latlng,texto,map);
        // });

//
//         //Añadir los GeoJsones//
//
        var caminoStyle = {
        	color: "#5A81AB",
        	weight: 6,
        	opacity: 0.7,
        	fillColor: "black",
        	lineJoin: "round"
        };

        // var biciStyle = {
        // 	color: "#30B13B",
        // 	weight: 4,
        // 	opacity: 0.7,
        // 	fillColor: "black",
        // 	lineJoin: "round"
        // };

        var layerCaminosSeguros = L.geoJson(caminosfinjs,{style: caminoStyle});
        layerCaminosSeguros.addTo(map);

        // var layerCarrilBici = L.geoJson(bicicletafinjs,{style: biciStyle});
        // layerCarrilBici.addTo(map);

        var iconosVecinos = [
        	L.AwesomeMarkers.icon({
        		icon: 'tshirt',
        		prefix:'fa',
        		markerColor: 'blue'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'coins',
        		prefix:'fa',
        		markerColor: 'orange'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'store',
        		prefix:'fa',
        		markerColor: 'purple'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'baby',
        		prefix:'fa',
        		markerColor: 'darkred'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'book',
        		prefix:'fa',
        		markerColor: 'darkpurple'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'user-friends',
        		prefix:'fa',
        		markerColor: 'darkgreen'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'utensils',
        		prefix:'fa',
        		markerColor: 'blue'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'shopping-basket',
        		prefix:'fa',
        		markerColor: 'cadetblue'
        	}),
        	L.AwesomeMarkers.icon({
        		icon: 'dumbdell',
        		prefix:'fa',
        		markerColor: 'orange'
        	})
        ];

        var layerVecinos = L.geoJson(vecinosfin2,{
        	onEachFeature: function(feature, layer){
        		layer.bindPopup("<h5 class='infoHeader'><strong>"+ feature.properties.nombre +"</strong></h5><hr><p class='infoBody'><strong> Dirección: </strong>" + feature.properties.direcion + "</p><p class='infoBody'><strong> Teléfono: </strong>" + feature.properties.telefono +
        				"</p><p class='infoBody'><strong> Horario: </strong>" + feature.properties.horario + "</p><p class='infoBody'><strong> Responsable: </strong>" + feature.properties.responsabl + "</p>");
        		layer.setIcon(iconosVecinos[feature.properties.tipo - 1]);
        	}
        });

        //capa Puntos de Encuentro
        var marcadorEncuentro = L.AwesomeMarkers.icon({
        	icon: 'bell',
        	prefix:'fa',
        	markerColor: 'green'
        });

        var layerEncuentro = L.geoJson(encuentrofinjs,{
        	onEachFeature: function(feature, layer){
        		layer.bindPopup("<h5 class='infoHeader'><strong>Punto de Encuentro</strong></h5><hr><p class='infoBody'><strong> Horario: </strong>" + feature.properties.horario1 + "</p><p class='infoBody'><strong> Horario: </strong>" + feature.properties.horario2 +"</p><p class='infoBody'><strong> Horario: </strong>" + feature.properties.horario3 +"</p>");
        		layer.setIcon(marcadorEncuentro);
        	}
        });

        //capa escuelas
        var marcadorEscuelas = L.AwesomeMarkers.icon({
        	icon: 'school',
        	prefix:'fa',
        	markerColor: 'red',
        	iconColor: 'white'
        });

        var layerEscuelas = L.geoJson(escuelas,{
        	onEachFeature: function(feature, layer){
        		layer.bindPopup("<h5 class='infoHeader'><strong>" +feature.properties.Nombre+ "</strong></h5><hr><p class='infoBody'><strong> Dirección: </strong>" +feature.properties.direccion+ "</p><p class='infoBody'><strong> Teléfono: </strong>" +feature.properties.telefono+ "</p>");
        		layer.setIcon(marcadorEscuelas);
        	}
        });
        layerEscuelas.addTo(map);
//
//         //CAMBIAR CENTRO SEGUN SELECT
//         $('#listaCaminos').change(function() {
//         	var camino = $(this).val();
//         	if(camino == "camino1"){
//         		map.setView([-31.63918, -60.69524],15.7);
//         	}else if(camino == "camino2"){
//         		map.setView([-31.63238, -60.68766],15.7);
//         	}
//         });
//
//        /* $('#type').change(function() {
//             var layer = $(this).val();
//             map.getLayers().getArray().forEach(function(e) {
//                 var name = e.get('name');
//                 if (name !== "oficinas2016json" && name !== "oficinas2017json" && name !== "oficinas2018json" && name !== "barriosjson" && name !== "distritosjson" && name !== "mapbox"){
//                   e.setVisible(name == layer);
//                }
//             });
//           }); */
//
//       //BOTON GEOLOCALIZAR
//         var marcadorGeo = L.AwesomeMarkers.icon({
//         	icon: 'child',
//         	prefix:'fa',
//         	markerColor: 'blue'
//         });
//
//         $("#button-geo").click(function(){
//         	map.locate({setView: true, maxZoom: 17})
//         	.on('locationfound', function(e){
//         		var marker = L.marker([e.latitude, e.longitude],{icon:marcadorGeo}).bindPopup('Tu estás aquí :)');
//         		map.addLayer(marker);
//         	})
//         	.on('locationerror', function(e){
//         		console.log(e);
//         		alert("Location access denied.");
//         	});
//         });
//
      //BOTON VECINOS CERCANOS
        $("#vecinosBoton").click(function(){
        	if(map.hasLayer(layerVecinos)){
        		map.removeLayer(layerVecinos);
        	}else {
        		map.addLayer(layerVecinos);
        	}
        });

        //BOTON PUNTOS DE ENCUENTRO
        $("#puntosBoton").click(function(){
        	if(map.hasLayer(layerEncuentro)){
        		map.removeLayer(layerEncuentro);
        	}else {
        		map.addLayer(layerEncuentro);
        	}
        });
//
//         //BOTON CARRIL BICI
//         $("#biciInput").click(function(){
//         	if(map.hasLayer(layerCarrilBici)){
//         		map.removeLayer(layerCarrilBici);
//         	}else {
//         		map.addLayer(layerCarrilBici);
//         	}
//         });
//
//         //BOTON CONTROL DE LAYERS OCULTAR/MOSTRAR controlCapas
//         $("#button-layer").click(function(){
//         	$("#controlCapas").toggle();
//         });
//     },
//
//     pintaIncidencia: function(latlng,texto,mapa){
//     	var marcadorIncidencia = L.AwesomeMarkers.icon({
//           	icon: 'exclamation-triangle',
//           	prefix:'fa',
//           	markerColor: 'red'
//          });
//     	var marcador = L.marker([latlng.lat,latlng.lon],{icon:marcadorEscuelas}).addTo(mapa);
//     	marcador.bindPopup(texto).openPopup()
//     },
//
//     errorAlSolicitarLocalizacion: function(error){
//     	console.log(error.code + ': ' +error.message);
//     }
//
// };
//
//
// if('addEventListener' in document){
//   document.addEventListener('DOMContentLoaded', function(){
//       app.inicio();
//   }, false);
//   document.addEventListener('deviceready', function(){
// 	  app.dispositivoListo();
//   }, false);
// }
//
//
//
// //PROBANDO CONTROL DE CAPAS
// /*var searchControl = new L.Control.Search({
// layer: layerEscuelas,
// propertyName: 'nombre',
// circleLocation: false
// });
//
// searchControl.on('search_locationfound', function(e) {
// e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
// })
// .on('search_collapsed', function(e) {
// layerEscuelas.eachLayer(function(layer) { //restauramos el color del elemento
// layerEscuelas.resetStyle(layer);
// });
// });
//
// map.addControl(searchControl);
// */
