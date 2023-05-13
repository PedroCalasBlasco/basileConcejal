$(document).ready(function(){

//VISTA

  var view = new ol.View({
    center: ol.proj.transform([-60.6792, -31.6200], 'EPSG:4326', 'EPSG:3857'),
    zoom: 12,
    maxZoom: 25,
    minZoom: 11
  });

//CAPA BASE MAPBOX

  var mapbox = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/pedrocalas/cj9xf83rz6muv2sobidhajg36/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVkcm9jYWxhcyIsImEiOiJjajJ4cjluMTMwMThtMndxOGg4Y3NoZWkzIn0.83VnuZwLtidmCHxuP1briA'

        // url: 'https://api.mapbox.com/styles/v1/pedrocalas/cj9xf83rz6muv2sobidhajg36/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVkcm9jYWxhcyIsImEiOiJjajJ4cjluMTMwMThtMndxOGg4Y3NoZWkzIn0.83VnuZwLtidmCHxuP1briA'


        //url: 'https://api.mapbox.com/styles/v1/pedrocalas/cj9xf83rz6muv2sobidhajg36.html?fresh=true&title=true&access_token=pk.eyJ1IjoicGVkcm9jYWxhcyIsImEiOiJjajJ4cjluMTMwMThtMndxOGg4Y3NoZWkzIn0.83VnuZwLtidmCHxuP1briA'
    }),
    visible: true,
    name: 'mapbox'
  });


var reclamo1 = new ol.layer.Tile({
      id: 'reclamo1',
      title: "reclamo1",
      name: 'pavimentacion',
      visible: false,
      source: new ol.source.TileWMS({

         url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
         crossOrigin: 'anonymous',
         params: {
           'format': 'image/png',
           version: '1.1.1',
           tiled: true,
           'LAYERS': 'num_reclamos_geo_resumen1_distrito',
           // STYLES: estilo
        },
     })
 });
 var reclamo2 = new ol.layer.Tile({
       id: 'reclamo2',
       title: "reclamo2",
       name: 'alumnbrado',
       visible: false,
       source: new ol.source.TileWMS({
          url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
          crossOrigin: 'anonymous',
          params: {
            'format': 'image/png',
            version: '1.1.1',
            tiled: true,
            'LAYERS': 'num_reclamos_geo_resumen2_distrito',
            // STYLES: estilo
         },
      })
  });
  var reclamo3 = new ol.layer.Tile({
        id: 'reclamo3',
        title: "reclamo3",
        name: 'limpieza',
        visible: false,
        source: new ol.source.TileWMS({
           url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
           crossOrigin: 'anonymous',
           params: {
             'format': 'image/png',
             version: '1.1.1',
             tiled: true,
             'LAYERS': 'num_reclamos_geo_resumen3_distrito',
             // STYLES: estilo
          },
       })
   });
   var reclamo4 = new ol.layer.Tile({
         id: 'reclamo4',
         title: "reclamo4",
         name: 'residuos',
         visible: false,
         source: new ol.source.TileWMS({
            url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
            crossOrigin: 'anonymous',
            params: {
              'format': 'image/png',
              version: '1.1.1',
              tiled: true,
              'LAYERS': 'num_reclamos_geo_resumen4_distrito',
              // STYLES: estilo
           },
        })
    });
    var reclamo5 = new ol.layer.Tile({
          id: 'reclamo5',
          title: "reclamo5",
          name: 'desagues',
          visible: false,
          source: new ol.source.TileWMS({
             url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
             crossOrigin: 'anonymous',
             params: {
               'format': 'image/png',
               version: '1.1.1',
               tiled: true,
               'LAYERS': 'num_reclamos_geo_resumen5_distrito',
               // STYLES: estilo
            },
         })
     });
     var reclamo6 = new ol.layer.Tile({
           id: 'reclamo6',
           title: "reclamo6",
           name: 'transporte',
           visible: false,
           source: new ol.source.TileWMS({
              url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
              crossOrigin: 'anonymous',
              params: {
                'format': 'image/png',
                version: '1.1.1',
                tiled: true,
                'LAYERS': 'num_reclamos_geo_resumen6_distrito',
                // STYLES: estilo
             },
          })
      });
      var reclamo7 = new ol.layer.Tile({
            id: 'reclamo7',
            title: "reclamo7",
            name: 'inseguridad',
            visible: false,
            source: new ol.source.TileWMS({
               url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
               crossOrigin: 'anonymous',
               params: {
                 'format': 'image/png',
                 version: '1.1.1',
                 tiled: true,
                 'LAYERS': 'num_reclamos_geo_resumen7_distrito',
                 // STYLES: estilo
              },
           })
       });
       var reclamo8 = new ol.layer.Tile({
             id: 'reclamo8',
             title: "reclamo8",
             name: 'transito',
             visible: false,
             source: new ol.source.TileWMS({
                url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                crossOrigin: 'anonymous',
                params: {
                  'format': 'image/png',
                  version: '1.1.1',
                  tiled: true,
                  'LAYERS': 'num_reclamos_geo_resumen8_distrito',
                  // STYLES: estilo
               },
            })
        });
        var reclamo9 = new ol.layer.Tile({
              id: 'reclamo9',
              title: "reclamo9",
              name: 'arboles',
              visible: false,
              source: new ol.source.TileWMS({
                 url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                 crossOrigin: 'anonymous',
                 params: {
                   'format': 'image/png',
                   version: '1.1.1',
                   tiled: true,
                   'LAYERS': 'num_reclamos_geo_resumen9_distrito',
                   // STYLES: estilo
                },
             })
         });
         var reclamo10 = new ol.layer.Tile({
               id: 'reclamo10',
               title: "reclamo10",
               name: 'particular',
               visible: false,
               source: new ol.source.TileWMS({
                  url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                  crossOrigin: 'anonymous',
                  params: {
                    'format': 'image/png',
                    version: '1.1.1',
                    tiled: true,
                    'LAYERS': 'num_reclamos_geo_resumen10_distrito',
                    // STYLES: estilo
                 },
              })
          });
          var reclamo11 = new ol.layer.Tile({
                id: 'reclamo11',
                title: "reclamo11",
                name: 'cloacas',
                visible: false,
                source: new ol.source.TileWMS({
                   url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                   crossOrigin: 'anonymous',
                   params: {
                     'format': 'image/png',
                     version: '1.1.1',
                     tiled: true,
                     'LAYERS': 'num_reclamos_geo_resumen11_distrito',
                     // STYLES: estilo
                  },
               })
           });
           var reclamo12 = new ol.layer.Tile({
                 id: 'reclamo12',
                 title: "reclamo12",
                 name: 'otros',
                 visible: false,
                 source: new ol.source.TileWMS({
                    url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                    crossOrigin: 'anonymous',
                    params: {
                      'format': 'image/png',
                      version: '1.1.1',
                      tiled: true,
                      'LAYERS': 'num_reclamos_geo_resumen12_distrito',
                      // STYLES: estilo
                   },
                })
            });
            var reclamo13 = new ol.layer.Tile({
                  id: 'reclamo13',
                  title: "reclamo13",
                  name: 'espacio',
                  visible: false,
                  source: new ol.source.TileWMS({
                     url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                     crossOrigin: 'anonymous',
                     params: {
                       'format': 'image/png',
                       version: '1.1.1',
                       tiled: true,
                       'LAYERS': 'num_reclamos_geo_resumen13_distrito',
                       // STYLES: estilo
                    },
                 })
             });
             var reclamo14 = new ol.layer.Tile({
                   id: 'reclamo14',
                   title: "reclamo14",
                   name: 'mantenimiento',
                   visible: false,
                   source: new ol.source.TileWMS({
                      url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
                      crossOrigin: 'anonymous',
                      params: {
                        'format': 'image/png',
                        version: '1.1.1',
                        tiled: true,
                        'LAYERS': 'num_reclamos_geo_resumen14_distrito',
                        // STYLES: estilo
                     },
                  })
              });


			  var arrayReclamos = [	reclamo1, reclamo2, reclamo3, reclamo4, reclamo5,
									reclamo6, reclamo7, reclamo8, reclamo9, reclamo10,
									reclamo11, reclamo12, reclamo13, reclamo14];


//CAPA DISTRITOS

var estiloDistritos = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#eb5b38',
    width: 2.5
  }),
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.1)'
  })
});

var distritosSource = new ol.source.Vector({
  // url:"http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:distritos",
  url:"http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:distritos",
  format: new ol.format.GeoJSON(),
  projection: 'EPSG:4326'
});

var distritosjson = new ol.layer.Vector({
  id: 'distritosjson',
  title: "distritosjson",
  name: 'distritosjson',
  source: distritosSource,
  style: estiloDistritos,

});

//CAPA BARRIOS

function estilobarrios(feature) {
    var estiloBarrios = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#8574c6',
        width: 1
      }),
      text: new ol.style.Text({
        font: '8px arial',
        overflow: true,
        textBaseline: 'middle',
        fill: new ol.style.Fill({ color: '#0b0528' }),
        stroke: new ol.style.Stroke({color: '#d5ceee',width: 2}),
        text: feature.get("barrio")
      })

    })
    return [estiloBarrios];
};

var barriosSource = new ol.source.Vector({
  // url:"http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:barrios"
  url:"http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:barrios",
  format: new ol.format.GeoJSON(),
  projection: 'EPSG:4326'
});

var barriosjson = new ol.layer.Vector({
  id: 'barriosjson',
  title: "barriosjson",
  name: 'barriosjson',
  source: barriosSource,
  style: estilobarrios,
  maxResolution: 14
});


//CAPA OFICINAS
var styleCache = {};
function styleFunction(feature){
  // debugger;

  var propiedades = feature.getProperties();
  if (!propiedades.fecha){
    return;
  }
  var anyo = propiedades.fecha.substr(6,4);
  //var anyo = feature.get("fecha").substr(6,4);

  if (styleCache[anyo]){
    return styleCache[anyo];
  }

  if (anyo < 2017){
    styleCache[anyo] = new ol.style.Style({
      image: new ol.style.Icon({
      opacity: 1,
      scale: 0.05,
      src: './icons/place1.svg'
      })
    });
  }else if  (anyo < 2018 ){
    styleCache[anyo] = new ol.style.Style({
      image: new ol.style.Icon({
      opacity: 1,
      scale: 0.05,
      src: './icons/pingreen.svg'
      })
    });
  }else{
    styleCache[anyo] = new ol.style.Style({
      image: new ol.style.Icon({
      opacity: 1,
      scale: 0.05,
      src: './icons/place3.svg'
      })
    });
  }
  return styleCache[anyo];
}

var oficinasSource = new ol.source.Vector({
  url:"http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:oficinasgeo",
  format: new ol.format.GeoJSON(),
  projection: 'EPSG:4326'
});

var oficinasjson = new ol.layer.Vector({
  id: 'oficinasjson',
  title: "oficinasjson",
  name: 'oficinasjson',
  source: oficinasSource,
  visible: false,
  style: styleFunction
});


var estiloOficina2018 = new ol.style.Style({
  image: new ol.style.Icon({
  opacity: 1,
  scale: 0.05,
  src: './icons/place2.svg'
  })
});

var oficinas2018Source = new ol.source.Vector({
  // url:"http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:oficinas2018",
  url:"http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:oficinas2018_distrit",
  format: new ol.format.GeoJSON(),
  projection: 'EPSG:4326'
});

oficinas2018Source.on("addfeature", function(evt){
  setTimeout(function() {
    oficinas2018json.animateFeature (evt.feature, [
        new ol.featureAnimation.ZoomOut({
          speed: 3,
          duration: 3000 - 3 * 300,
          side: false
        }),
        new ol.featureAnimation.Bounce({
          speed: 1.3,
          duration: 1000 - 1.3 * 300
          //horizontal: false
        })
    ]);
  }, 10)
});

var oficinas2018json = new ol.layer.Vector({
  id: 'oficinas2018json',
  title: "oficinas2018json",
  name: 'oficinas2018json',
  source: oficinas2018Source,
  visible: true,
  style: estiloOficina2018
});


var estiloOficina2016 = new ol.style.Style({
  image: new ol.style.Icon({
  opacity: 1,
  scale: 0.05,
  src: './icons/place1.svg'
  })
});

var oficinas2016Source = new ol.source.Vector({
  // url:"http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:oficinas2016",
  url:"http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:oficinas2016_distrit",

  format: new ol.format.GeoJSON(),
  projection: 'EPSG:4326'
});

oficinas2016Source.on("addfeature", function(evt){
  setTimeout(function() {
    oficinas2016json.animateFeature (evt.feature, [
        new ol.featureAnimation.ZoomOut({
          speed: 1.3,
          duration: 1000 - 1.3 * 300,
          side: false
        }),
        new ol.featureAnimation.Bounce({
          speed: 1.3,
          duration: 1000 - 1.3 * 300
          //horizontal: false
        })
    ]);
  }, 10)
});

var oficinas2016json = new ol.layer.Vector({
  id: 'oficinas2016json',
  title: "oficinas2016json",
  name: 'oficinas2016json',
  source: oficinas2016Source,
  visible: true,
  style: estiloOficina2016
});


var estiloOficina2017 = new ol.style.Style({
  image: new ol.style.Icon({
  opacity: 1,
  scale: 0.05,
  src: './icons/pingreen2.svg'
  })
});

var oficinas2017Source = new ol.source.Vector({
  // url:"http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:oficinas2017",
  url:"http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:oficinas2017_distrit",

  format: new ol.format.GeoJSON(),
  projection: 'EPSG:4326'
});


oficinas2017Source.on("addfeature", function(evt){
  setTimeout(function() {
    oficinas2017json.animateFeature (evt.feature, [
        new ol.featureAnimation.ZoomOut({
          speed: 2,
          duration: 2000 - 2 * 300,
          side: false
        }),
        new ol.featureAnimation.Bounce({
          speed: 1.3,
          duration: 1000 - 1.3 * 300
          //horizontal: false
        })
    ]);
  }, 10)
});

var oficinas2017json = new ol.layer.Vector({
  id: 'oficinas2017json',
  title: "oficinas2017json",
  name: 'oficinas2017json',
  source: oficinas2017Source,
  visible: true,
  style: estiloOficina2017
});



//MAPA
  var map = new ol.Map({
    target: 'mapa',
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine(),
        new ol.control.ZoomSlider()
    ]),
    renderer: 'canvas',
    layers: [mapbox,reclamo1, reclamo2, reclamo3,reclamo4,reclamo5,reclamo6,
      reclamo7,reclamo8,reclamo9,reclamo10,reclamo11,reclamo12,reclamo13,reclamo14,
       distritosjson, barriosjson, oficinas2016json, oficinas2017json, oficinas2018json],
    view: view
  });
//

//FORMULARIOS
//

  $('#type').change(function() {
    var layer = $(this).val();
    map.getLayers().getArray().forEach(function(e) {
        var name = e.get('name');
        if (name !== "oficinas2016json" && name !== "oficinas2017json" && name !== "oficinas2018json" && name !== "barriosjson" && name !== "distritosjson" && name !== "mapbox"){
          e.setVisible(name == layer);
       }
    });
  });

  $('#oficinas input').change(function(evt){
    var layer2 = $(this).val();
    var seleccionado = $(this).is(':checked');
    map.getLayers().getArray().forEach(function(e) {
      var name = e.get('name');
      if (name === layer2){
        e.setVisible(seleccionado);
     }
    });
  });


  $('#oficinas input').on('ifChanged', function(evt){
    var layer2 = $(this).val();
    var seleccionado = $(this).is(':checked');
    map.getLayers().getArray().forEach(function(e) {
      var name = e.get('name');
      if (name === layer2){
        e.setVisible(seleccionado);
     }
    });
 });


//GRAFICAS
//DATOS DISTRITO CENTRO
  // var url = "http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:centro_dist";
  var url = "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:centro_dist";
    var opcionesDistritoCentro = null;
	$.ajax({
      dataType: "json",
      url: url,
      success: function(data){
        console.log(data);

        var datosPie = [];
        var coloresPie = [];
        var labelsPie = [];
        var backgroundColor = [
          "#424949",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#1B2631",
          "#78281F",
          "#99A3A4",
          "#186A3B",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4"
        ];

        for(var i=0;i<data.features.length;i++){
          var porcentaje = data.features[i].properties.porcentaje;
          var resumen = data.features[i].properties.resumen;
          datosPie.push(porcentaje);
          labelsPie.push(resumen);
          coloresPie.push(backgroundColor[i]);
        }

           opcionesDistritoCentro = {
            type:"pie",
            data:{
                  datasets: [{
                    data:datosPie,
                    backgroundColor: coloresPie
                  }],
                  labels:labelsPie
          },
          options: {
              legend: { display: false },
              responsive: true,
              title: {
                display: true,
                text: 'DISTRITO CENTRO',
                fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
          }
        };

//          var ctxcentro = document.getElementById("centroPie").getContext('2d');
//          var barracentro = new Chart(ctxcentro, opcionesDistritoCentro);
        }
});

//DATOS DISTRITO COSTA

  var url = "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:costa_dist";
var opcionesDistritoCosta = null;
    $.ajax({
      dataType: "json",
      url: url,
      success: function(data){
        console.log(data);

        var datosPie = [];
        var coloresPie = [];
        var labelsPie = [];
        var backgroundColor = [
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#1B4F72",
          "#1B2631",
          "#78281F",
          "#424949",
          "#17202A",
          "#99A3A4",
          "#99A3A4"
        ];

        for(var i=0;i<data.features.length;i++){
          var porcentaje = data.features[i].properties.porcentaje;
          var resumen = data.features[i].properties.resumen;
          datosPie.push(porcentaje);
          labelsPie.push(resumen);
          coloresPie.push(backgroundColor[i]);
        }

           opcionesDistritoCosta = {
            type:"pie",
            data:{
                  datasets: [{
                    data:datosPie,
                    backgroundColor: coloresPie
                  }],
                  labels:labelsPie
          },
          options: {
              legend: { display: false },
              responsive: true,
              title: {
                display: true,
                text: 'DISTRITO DE LA COSTA',
                fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
          }
          };

//          var ctxcosta = document.getElementById("costaPie").getContext('2d');
//          var barracentro = new Chart(ctxcosta, opcionesDistritoCosta);
        }
});


//DATOS DISTRITO ESTE
var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:este_dist";
var opcionesDistritoEste = null;
  $.ajax({
    dataType: "json",
    url: url,
    success: function(data){
      console.log(data);

      var datosPie = [];
      var coloresPie = [];
      var labelsPie = [];
      var backgroundColor = [
        "#99A3A4",
        "#7D6608",
        "#99A3A4",
        "#99A3A4",
        "#1B4F72",
        "#99A3A4",
        "#78281F",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4"
      ];


      for(var i=0;i<data.features.length;i++){
        var porcentaje = data.features[i].properties.porcentaje;
        var resumen = data.features[i].properties.resumen;
        datosPie.push(porcentaje);
        labelsPie.push(resumen);
        coloresPie.push(backgroundColor[i]);
      }

         opcionesDistritoEste = {
          type:"pie",
          data:{
                datasets: [{
                  data:datosPie,
                  backgroundColor: coloresPie
                }],
                labels:labelsPie
        },
        options: {
            legend: { display: false },
            responsive: true,
            title: {
              display: true,
              text: 'DISTRITO ESTE',
              fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
        }
        };

//        var ctx3 = document.getElementById("estePie").getContext('2d');
//        var barra3 = new Chart(ctx3, opcionesDistritoEste);
      }
  });


//DATOS DISTRITO NORESTE
  var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:noreste_dist";
var opcionesDistritoNoreste = null;
    $.ajax({
      dataType: "json",
      url: url,
      success: function(data){
        console.log(data);

        var datosPie = [];
        var coloresPie = [];
        var labelsPie = [];
        var backgroundColor = [
          "#99A3A4",
          "#7D6608",
          "#145A32",
          "#99A3A4",
          "#1B4F72",
          "#99A3A4",
          "#78281F",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4",
          "#99A3A4"
        ];


        for(var i=0;i<data.features.length;i++){
          var porcentaje = data.features[i].properties.porcentaje;
          var resumen = data.features[i].properties.resumen;
          datosPie.push(porcentaje);
          labelsPie.push(resumen);
          coloresPie.push(backgroundColor[i]);
        }

           opcionesDistritoNoreste = {
            type:"pie",
            data:{
                  datasets: [{
                    data:datosPie,
                    backgroundColor: coloresPie
                  }],
                  labels:labelsPie
          },
          options: {
              legend: { display: false },
              responsive: true,
              title: {
                display: true,
                text: 'DISTRITO NORESTE',
                fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
          }
          };

//          var opcionesDistritoNoreste = document.getElementById("norestePie").getContext('2d');
//          var pie = new Chart(ctxnoreste, opcionesDistritoNoreste);
        }
});

  //DATOS DISTRITO NORTE

    var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:norte_dist";
var opcionesDistritoNorte = null;
      $.ajax({
        dataType: "json",
        url: url,
        success: function(data){
          console.log(data);

          var datosPie = [];
          var coloresPie = [];
          var labelsPie = [];
          var backgroundColor = [
            "#424949",
            "#7D6608",
            "#99A3A4",
            "#99A3A4",
            "#1B4F72",
            "#99A3A4",
            "#78281F",
            "#99A3A4",
            "#99A3A4",
            "#99A3A4",
            "#99A3A4",
            "#99A3A4",
            "#99A3A4",
            "#99A3A4"
          ];

          for(var i=0;i<data.features.length;i++){
            var porcentaje = data.features[i].properties.porcentaje;
            var resumen = data.features[i].properties.resumen;
            datosPie.push(porcentaje);
            labelsPie.push(resumen);
            coloresPie.push(backgroundColor[i]);
          }

             opcionesDistritoNorte = {
              type:"pie",
              data:{
                    datasets: [{
                      data:datosPie,
                      backgroundColor: coloresPie
                    }],
                    labels:labelsPie
            },
            options: {
                legend: { display: false },
                responsive: true,
                title: {
                  display: true,
                  text: 'DISTRITO NORTE',
                  fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
            }
            };

//            var ctxnorte = document.getElementById("nortePie").getContext('2d');
//            var pie = new Chart(ctxnorte, opcionesDistritoNorte);
          }
  });


    //DATOS DISTRITO NOROESTE

      var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:noroeste_dist";
var opcionesDistritoNoroeste = null;
        $.ajax({
          dataType: "json",
          url: url,
          success: function(data){
            console.log(data);

            var datosPie = [];
            var coloresPie = [];
            var labelsPie = [];
            var backgroundColor = [
              "#424949",
              "#7D6608",
              "#99A3A4",
              "#99A3A4",
              "#1B4F72",
              "#99A3A4",
              "#78281F",
              "#99A3A4",
              "#99A3A4",
              "#99A3A4",
              "#99A3A4",
              "#99A3A4"
            ];

            for(var i=0;i<data.features.length;i++){
              var porcentaje = data.features[i].properties.porcentaje;
              var resumen = data.features[i].properties.resumen;
              datosPie.push(porcentaje);
              labelsPie.push(resumen);
              coloresPie.push(backgroundColor[i]);
            }

               opcionesDistritoNoroeste = {
                type:"pie",
                data:{
                      datasets: [{
                        data:datosPie,
                        backgroundColor: coloresPie
                      }],
                      labels:labelsPie
              },
              options: {
                  legend: { display: false },
                  responsive: true,
                  title: {
                    display: true,
                    text: 'DISTRITO NOROESTE',
                    fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
              }
              };

//              var ctxnoroeste = document.getElementById("noroestePie").getContext('2d');
//              var pie = new Chart(ctxnoroeste, opcionesDistritoNoroeste);
            }
    });

      //DATOS DISTRITO OESTE

        var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:oeste_dist";
var opcionesDistritoOeste = null;
          $.ajax({
            dataType: "json",
            url: url,
            success: function(data){
              console.log(data);

              var datosPie = [];
              var coloresPie = [];
              var labelsPie = [];
              var backgroundColor = [
                "#424949",
                "#7D6608",
                "#99A3A4",
                "#99A3A4",
                "#1B4F72",
                "#99A3A4",
                "#78281F",
                "#99A3A4",
                "#99A3A4",
                "#99A3A4",
                "#99A3A4",
                "#99A3A4",
                "#99A3A4",
                "#99A3A4"
              ];

              for(var i=0;i<data.features.length;i++){
                var porcentaje = data.features[i].properties.porcentaje;
                var resumen = data.features[i].properties.resumen;
                datosPie.push(porcentaje);
                labelsPie.push(resumen);
                coloresPie.push(backgroundColor[i]);
              }

                 opcionesDistritoOeste = {
                  type:"pie",
                  data:{
                        datasets: [{
                          data:datosPie,
                          backgroundColor: coloresPie
                        }],
                        labels:labelsPie
                },
                options: {
                    legend: { display: false },
                    responsive: true,
                    title: {
                      display: true,
                      text: 'DISTRITO OESTE',
                      fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
                }
                };

//                var ctxoeste = document.getElementById("oestePie").getContext('2d');
//                var pie = new Chart(ctxoeste, opcionesDistritoOeste);
              }
      });

        //DATOS DISTRITO SUROESTE
          var url = "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:suroeste_dist";
var opcionesDistritoSuroeste = null;

            $.ajax({
              dataType: "json",
              url: url,
              success: function(data){
                console.log(data);

                var datosPie = [];
                var coloresPie = [];
                var labelsPie = [];
                var backgroundColor = [
                  "#99A3A4",
                  "#7D6608",
                  "#99A3A4",
                  "#99A3A4",
                  "#1B4F72",
                  "#99A3A4",
                  "#78281F",
                  "#99A3A4",
                  "#99A3A4",
                  "#99A3A4",
                  "#99A3A4",
                  "#17202A",
                  "#99A3A4",
                  "#99A3A4"
                ];

                for(var i=0;i<data.features.length;i++){
                  var porcentaje = data.features[i].properties.porcentaje;
                  var resumen = data.features[i].properties.resumen;
                  datosPie.push(porcentaje);
                  labelsPie.push(resumen);
                  coloresPie.push(backgroundColor[i]);
                }

                   opcionesDistritoSuroeste = {
                    type:"pie",
                    data:{
                          datasets: [{
                            data:datosPie,
                            backgroundColor: coloresPie
                          }],
                          labels:labelsPie
                  },
                  options: {
                      legend: { display: false },
                      responsive: true,
                      title: {
                        display: true,
                        text: 'DISTRITO SUROESTE',
                        fontColor: '#ffffff',
              },
			  tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index] + ": ";
						return label + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + "%";
					}
				}
			  }
                  }
                  };

//                  var ctxsuroeste = document.getElementById("suroestePie").getContext('2d');
//                  var pie = new Chart(ctxsuroeste, opcionesDistritoSuroeste);
                }
        });

  // VALORES DE RECLAMOS TOALES POR AÑO

  var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:reclamos_resumen_union";
var opcionesTotal = null;
    $.ajax({
      dataType: "json",
      url: url,
      success: function(data){
        console.log(data);

        var dato2016 = [];
        var dato2017 = [];
        var dato2018 = [];
        var coloresPie = [];
        var labels2016 = [];
        var labels2017 = [];
        var labels2018 = [];

      var backgroundColor = [
        "#99A3A4",
        "#7D6608",
        "#99A3A4",
        "#99A3A4",
        "#1B4F72",
        "#99A3A4",
        "#78281F",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4",
        "#99A3A4",
        "#17202A",
        "#99A3A4",
        "#99A3A4"
      ];


      // for(var i=0;i<data.features.length;i++){
      //     var count = data.features[i].properties.count;
      //     var resumen = data.features[i].properties.resumen;
      //     var year = data.features[i].properties.date_part;
      //     if (year == 2016){
      //       dato2016.push(count);
      //       labels2016.push(resumen);
      //       coloresPie.push(backgroundColor[i]);
      //     }
      //     else if (year == 2017){
      //       dato2017.push(count);
      //       label2017.push(resumen);
      //       coloresPie.push(backgroundColor[i]);
      //     }
      //     else if (year == 2018){
      //       dato2018.push(count);
      //       labels2018.push(resumen);
      //       coloresPie.push(backgroundColor[i]);
      //     }
      //   }

        for(var i=0; i<data.features.length; i++){
          var resumen = data.features[i].properties.resumen;
          var year = data.features[i].properties.date_part;
          var gid = data.features[i].properties.gid_resumen;
          var count = data.features[i].properties.count;
          if (year == 2016){
            dato2016.splice(gid-1,0,count);
          }
          else if (year == 2017){
            dato2017.splice(gid-1,0,count);
          }
          else if (year == 2018){
            dato2018.splice(gid-1,0,count);
          }

        }

         opcionesTotal = {
          type:"horizontalBar",
          data:{
                datasets: [
                  {data:dato2016, label:'2016', backgroundColor: "#2b298f"},
                  {data:dato2017, label:'2017', backgroundColor: "#1c4421"},
                  {data:dato2018, label:'2018', backgroundColor: "#8f2281"},
                ],
                labels:[
                            "Pavimentación",
                            "Alumbrado",
                            "Desmalezamiento",
                            "Residuos/Barrido",
                            "Desagües",
                            "Transporte Público",
                            "Inseguridad",
                            "Control de Tránsito",
                            "Arboles",
                            "Temas Particulares",
                            "Cloacas",
                            "Otros",
                            "Espacio Público",
                            "Mantenimiento",
              ]
        },
        options: {
            legend: { display: false,
                labels: {
                  boxWidth: 300,
                }},
            responsive: true,
            title: {
              display: true,
              text: 'VALORES TOTALES POR AÑO',
              fontColor: '#ffffff',
            },
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                   fontColor: "white",
                   max: 300,
                 },
              // scaleLabel:{
              //   display: true,
              //   labelString: 'Hoola'
              // }
            }],
            yAxes: [{
             stacked: true,
             ticks: {
                  fontColor: "white",
                  fontSize: 11
                 }
            }],
           },
          labels:{
            fontColor: '#ffffff',
            boxWidth: 300,
          }

        }
        };

  var ctxtotales = document.getElementById("totales").getContext('2d');
  var horizontales = new Chart(ctxtotales, opcionesTotal);
  var graficoEnMapa = horizontales;



	$('#distritos').change(function() {
/*
1. Norte
2. Noroeste
3. Este
4. Noreste
5. Suroeste
6. Oeste
7. Centro
8. La Costa
*/


      var distrito = $(this).val();
      var centro = null;
      var zoom = null;
	    var idDistrito = null;
	    var opcionesGrafico = null;
      if (distrito == "norte"){
        centro = ol.proj.transform([-60.7126, -31.5800], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.5;
		    idDistrito = "1";
		    opcionesGrafico = opcionesDistritoNorte;
     }else if (distrito == "noroeste"){
        centro = ol.proj.transform([-60.7449, -31.5763], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.5;
		    idDistrito = "2";
		    opcionesGrafico = opcionesDistritoNoroeste;
     }else if (distrito == "noreste"){
        centro = ol.proj.transform([-60.6743, -31.5840], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.8;
		    idDistrito = "4";
		    opcionesGrafico = opcionesDistritoNoreste;
     }else if (distrito == "oeste"){
        centro = ol.proj.transform([-60.7129, -31.6162], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.7;
		    idDistrito = "6";
		    opcionesGrafico = opcionesDistritoOeste;
     }else if (distrito == "este"){
        centro = ol.proj.transform([-60.6701, -31.6108], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.62;
		    idDistrito = "3";
		    opcionesGrafico = opcionesDistritoEste;
     }else if (distrito == "suroeste"){
        centro = ol.proj.transform([-60.7028, -31.6497], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.5;
		    idDistrito = "5";
		    opcionesGrafico = opcionesDistritoSuroeste;
     }else if (distrito == "centro"){
        centro = ol.proj.transform([-60.6851, -31.6461], 'EPSG:4326', 'EPSG:3857');
        zoom = 13.7;
		    idDistrito = "7";
		    opcionesGrafico = opcionesDistritoCentro;
    }else if (distrito == "costa"){
        centro = ol.proj.transform([-60.5731, -31.6627], 'EPSG:4326', 'EPSG:3857');
        zoom = 12.3;
		    idDistrito = "8";
		    opcionesGrafico = opcionesDistritoCosta;
    }else if (distrito == "ciudad"){
        centro = ol.proj.transform([-60.6792, -31.6200], 'EPSG:4326', 'EPSG:3857'),
        zoom = 12;
		    idDistrito = null;
		    opcionesGrafico = opcionesTotal;
    }

	  for(var i = 0; i < arrayReclamos.length; i++){
		  var reclamo = arrayReclamos[i];
		  var layer = reclamo.getSource().getParams().LAYERS;
		  var paramsSource = {
                'format': 'image/png',
                version: '1.1.1',
                tiled: true,
                'LAYERS': layer
		  };
		  if (idDistrito){
			  paramsSource.CQL_FILTER = "id_distrit=" + idDistrito + "";
		  }

      var source =  new ol.source.TileWMS({
      url: 'http://hades.palomar.org.es/geoserver/oficinamovil/wms' + "/wms",
      crossOrigin: 'anonymous',
      params: paramsSource});
		  reclamo.setSource(source);
	     }

       map.getView().animate({
         zoom: zoom,
         center: centro,
         duration: 800
       });



   	 //graficoEnMapa.options = opcionesGrafico.options;
   	 //graficoEnMapa.data    = opcionesGrafico.data;
   	 //graficoEnMapa.type    = opcionesGrafico.type;
	 //graficoEnMapa.update();

	   graficoEnMapa.destroy();
	   graficoEnMapa = new Chart(ctxtotales, opcionesGrafico);

   });
  }
});
//
//
//   var datahorizontalbar = {
//     type:"horizontalBar",
//     data:{
//           datasets: [{
//             data:[20,12,24,28,6,12,29,39,22,21,9,12,19,10],
//             backgroundColor:[
//               "#B03A2E",
//               "#76448A",
//               "#2874A6",
//               "#148F77",
//               "#B9770E",
//               "#B3B6B7",
//               "#616A6B",
//               "#B03A2E",
//               "#76448A",
//               "#2874A6",
//               "#148F77",
//               "#B9770E",
//               "#B3B6B7",
//               "#616A6B",
//             ]
//           }],
//           labels:[
//             "Pavimentación/Bacheo/Arreglo de calles",
//             "Alumbrado",
//             "Desmalezamiento/Limpieza",
//             "Recolección de residuos/Barrido",
//             "Desagües/Prevención de inundaciones",
//             "Transporte Público",
//             "Inseguridad/Presencia policial",
//             "Control de Tránsito",
//             "Extracción/Colocación de Arboles",
//             "Temas Particulares",
//             "Cloacas",
//             "Otros",
//             "Control del Espacio Público",
//             "Mantenimiento",
//           ]
//   },
//   options: {
//       legend: { display: false },
//       responsive: true,
//       title: {
//         display: true,
//         text: 'DATOS TOTALES'
//       }
//   }
// };
// var ctxtotales = document.getElementById("totales").getContext('2d');
// var horizontales = new Chart(ctxtotales, datahorizontalbar);

//
// var datapie = {
//   type:"pie",
//   data:{
//         datasets: [{
//           data:[20,12,24,28,6,12,29,39,22,21,9,12,19,10],
//           backgroundColor:[
//             "#B03A2E",
//             "#76448A",
//             "#2874A6",
//             "#148F77",
//             "#B9770E",
//             "#B3B6B7",
//             "#616A6B",
//             "#B03A2E",
//             "#76448A",
//             "#2874A6",
//             "#148F77",
//             "#B9770E",
//             "#B3B6B7",
//             "#616A6B",
//           ]
//         }],
//         labels:[
//           "Pavimentación/Bacheo/Arreglo de calles",
//           "Alumbrado",
//           "Desmalezamiento/Limpieza",
//           "Recolección de residuos/Barrido",
//           "Desagües/Prevención de inundaciones",
//           "Transporte Público",
//           "Inseguridad/Presencia policial",
//           "Control de Tránsito",
//           "Extracción/Colocación de Arboles",
//           "Temas Particulares",
//           "Cloacas",
//           "Otros",
//           "Control del Espacio Público",
//           "Mantenimiento",
//         ]
// },
// options: {
//     legend: { display: false },
//     responsive: true,
//     title: {
//       display: true,
//       text: 'DISTRITO NORESTE'
//     }
// }
// };
//
//
// // var ctx = document.getElementById("horizontalbar").getContext('2d');
// // var barra = new Chart(ctx, datahorizontalbar);
// //
// // var ctx2 = document.getElementById("bar").getContext('2d');
// // var barra2 = new Chart(ctx2, databar);
//
// var ctx3 = document.getElementById("pie").getContext('2d');
// var barra3 = new Chart(ctx3, datapie);



});
