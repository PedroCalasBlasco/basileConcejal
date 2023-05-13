$(document).ready(function(){

//VISTA

  var view = new ol.View({
    center: ol.proj.transform([-60.6792, -31.6200], 'EPSG:4326', 'EPSG:3857'),
    zoom: 12.8,
    maxZoom: 25,
    minZoom: 11
  });

//CAPA BASE MAPBOX

  var mapbox = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/pedrocalas/cj9xf83rz6muv2sobidhajg36/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVkcm9jYWxhcyIsImEiOiJjajJ4cjluMTMwMThtMndxOGg4Y3NoZWkzIn0.83VnuZwLtidmCHxuP1briA'
    }),
    visible: true,
    name: 'mapbox',
    zIndex: 2
  });

//CAPA GROOMING

  var groomingSource = new ol.source.Vector({
	url:"./layers/grooming.json",
	format: new ol.format.GeoJSON(),
    projection: 'EPSG:4326'
  });

  var groomingStyle = new ol.style.Style({
    image: new ol.style.Icon({
    opacity: 1,
    scale: 0.05,
    src: './images/iconos/pinred.svg',
    
    })
  });

  var groomingJson = new ol.layer.Vector({
    id: 'groomingJson',
    title: "groomingJson",
    name: 'groomingJson',
    source: groomingSource,
    visible: true,
    style: groomingStyle,
    zIndex: 5
  });



  var map = new ol.Map({
    target: 'mapagrooming',
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine(),
        new ol.control.ZoomSlider()
    ]),
    renderer: 'canvas',
    layers: [groomingJson, mapbox],
    view: view
  });
//


});
