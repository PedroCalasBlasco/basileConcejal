$(document).ready(function(){

//DATOS DISTRITO CENTRO
  // var url = "http://localhost:8080/geoserver/OficinaMovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=OficinaMovil:centro_dist";
  var url = "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:centro_dist";
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

          var datapie = {
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
                text: 'DISTRITO CENTR',
                fontColor: '#ffffff',
                fontSize: 4
              }
          }
          };

          var ctxcentro = document.getElementById("centroPie").getContext('2d');
          var barracentro = new Chart(ctxcentro, datapie);
        }
});

//DATOS DISTRITO COSTA

  var url = "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:costa_dist";

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

          var datapie = {
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
                text: 'DISTRITO DE LA COST',
                fontColor: "#ffffff",
                fontSize: 4
              }
          }
          };

          var ctxcosta = document.getElementById("costaPie").getContext('2d');
          var barracentro = new Chart(ctxcosta, datapie);
        }
});


//DATOS DISTRITO ESTE
var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:este_dist";
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

        var datapie = {
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
              text: 'DISTRITO ESTE'
            }
        }
        };

        var ctx3 = document.getElementById("estePie").getContext('2d');
        var barra3 = new Chart(ctx3, datapie);
      }
  });


//DATOS DISTRITO NORESTE
  var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:noreste_dist";

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

          var datapie = {
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
                text: 'DISTRITO NORESTE'
              }
          }
          };

          var ctxnoreste = document.getElementById("norestePie").getContext('2d');
          var pie = new Chart(ctxnoreste, datapie);
        }
});

  //DATOS DISTRITO NORTE

    var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:norte_dist";

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
            "#1B2631",
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

            var datapie = {
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
                  text: 'DISTRITO NORTE'
                }
            }
            };

            var ctxnorte = document.getElementById("nortePie").getContext('2d');
            var pie = new Chart(ctxnorte, datapie);
          }
  });


    //DATOS DISTRITO NOROESTE

      var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:noroeste_dist";

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

              var datapie = {
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
                    text: 'DISTRITO NOROESTE'
                  }
              }
              };

              var ctxnoroeste = document.getElementById("noroestePie").getContext('2d');
              var pie = new Chart(ctxnoroeste, datapie);
            }
    });

      //DATOS DISTRITO OESTE

        var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:oeste_dist";

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

                var datapie = {
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
                      text: 'DISTRITO OESTE'
                    }
                }
                };

                var ctxoeste = document.getElementById("oestePie").getContext('2d');
                var pie = new Chart(ctxoeste, datapie);
              }
      });

        //DATOS DISTRITO SUROESTE

          var url = "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:suroeste_dist";

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

                  var datapie = {
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
                        text: 'DISTRITO SUROESTE'
                      }
                  }
                  };

                  var ctxsuroeste = document.getElementById("suroestePie").getContext('2d');
                  var pie = new Chart(ctxsuroeste, datapie);
                }
        });

  // VALORES DE RECLAMOS TOALES POR AÑO

  var url =  "http://hades.palomar.org.es/geoserver/oficinamovil/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=oficinamovil:reclamos_resumen_union";
    $.ajax({
      dataType: "json",
      url: url,
      success: function(data){
        console.log(data);

        var datos2016 = [];
        var datos2017 = [];
        var datos2018 = [];
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
      var dato2016 = [];
      var label2016 = [];
      var dato2017 = [];
      var label2017 = [];
      var dato2018 = [];
      var label2018 = [];

      for(var i=0; i<data.features.length; i++){
        var resumen = data.features[i].properties.resumen;
        var year = data.features[i].properties.date_part;
        var gid = data.features[i].properties.gid_resumen;
        var count = data.features[i].properties.count;
        if (year == 2016){
          dato2016.splice(gid-1,0,count);
        }
        if (year == 2017){
          dato2017.splice(gid-1,0,count);
        }
        if (year == 2018){
          dato2018.splice(gid-1,0,count);
        }

      }
      //
      // for(var i=0;i<data.features.length;i++){
      //     var count = data.features[i].properties.count;
      //     var resumen = data.features[i].properties.resumen;
      //     var year = data.features[i].properties.date_part;
      //     if (year == 2016){
      //       datos2016.push(count);
      //       labels2016.push(resumen);
      //       coloresPie.push(backgroundColor[i]);
      //     }
      //     else if (year == 2017){
      //       datos2017.push(count);
      //       labels2017.push(resumen);
      //       coloresPie.push(backgroundColor[i]);
      //     }
      //     else if (year == 2018){
      //       datos2018.push(count);
      //       labels2018.push(resumen);
      //       coloresPie.push(backgroundColor[i]);
      //     }
      //   }

        var datahorizontalBar = {
          type:"horizontalBar",
          data:{
                datasets: [
                  {data:datos2016, label:'2016', backgroundColor: "rgb(23, 22, 96)"},
                  {data:datos2017, label:'2017', backgroundColor: "#1b4128"},
                  {data:datos2018, label:'2018', backgroundColor: "#53134b"},
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
            legend: { display: false },
            responsive: true,
            title: {
              display: true,
              text: 'VALORES TOTALES POR AÑO'.
              fontColor: '#ffffff'
            },
          scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
          }
        }
        };

  var ctxtotales = document.getElementById("totales").getContext('2d');
  var horizontales = new Chart(ctxtotales, datahorizontalBar);

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
