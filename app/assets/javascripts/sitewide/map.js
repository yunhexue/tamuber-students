
var directionsService;
var map = null;
var infowindow;
var marker;
var stmarker;
var showDirections = true;

function initMap() {
   mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Vsc2hhbmsiLCJhIjoiY2pvM3d1NGV3MTFydzN3cWlkZ2xjdmE1MSJ9.zQ1AATk2EOGJ4XMDyBV9vA';
   var map = new mapboxgl.Map({
     container: 'mapid1', // HTML container id
     style: 'mapbox://styles/mapbox/streets-v9', // style URL
     center: [-96.3365,30.6185], // starting position as [lng, lat]
     zoom: 15
   });
}

function initMapWithMarker(lat, lng, startPoint) {
      var mapEl = $('#map');
      var optimized = mapEl.data('test-env'); //so that marker elements show up for testing
      var myLatLng = {lat: lat, lng: lng};
     
      mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Vsc2hhbmsiLCJhIjoiY2pvM3d1NGV3MTFydzN3cWlkZ2xjdmE1MSJ9.zQ1AATk2EOGJ4XMDyBV9vA';
      map = new mapboxgl.Map({
        container: 'mapid1', // HTML container id
        style: 'mapbox://styles/mapbox/streets-v9', // style URL
        center: [lat,lng], // starting position as [lng, lat]
        zoom: 15
      });
      
      map.on('load', function() {
        getRoute();
      });
      var start1 = [-96.3409565,30.6189768];

      function getRoute() {
        //var start = [lat,lng];
         var start = [-96.3409565,30.6189768];
        var end = [ -96.3425741,30.6213251];
         console.log("route enter");
        var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
        console.log(directionsRequest)
        $.ajax({
          method: 'GET',
          url: directionsRequest,
        }).done(function(data) {
            var geo = data.routes[0].geometry;
            var route = geo;
            if(geo!=null && geo.coordinates.length!=0){
            console.log("data " +geo);
            console.log("data " + geo.coordinates[0])
            console.log("fsdfsd"+geo.coordinates.length);
            
            start = geo.coordinates[0];
            end = geo.coordinates[geo.coordinates.length-1];
            console.log(route);
          }
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: route
              }
            },
            paint: {
              'line-width': 2
            }
          });
          // this is where the code from the next step will go
          
          var contentString = '<h3>'+startPoint+"</h3>"
          address = "..random.."
          contentString = contentString + "<p>Closest address: "+address+"</p>"
          var pop1 = new mapboxgl.Popup().setHTML(contentString);
          var marker = new mapboxgl.Marker()
                .setLngLat(start)
                .setPopup(pop1)
                .addTo(map);
        }).always(function(){
          map.addLayer({
            id: 'start',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: start
                }
              }
            }
          });
          map.addLayer({
            id: 'end',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: end
                }
              }
            }
          });
        });
      
      
        
        
      }
}    
function removeDirections() {
  // directionsDisplay.setMap(null);
}
function calcRoute(lat, lng) {
  // if (showDirections == false) {
  //   showDirections = !showDirections;
  //   directionsDisplay.setMap(null);
  //   return;
  // }
  
 
  // var start = {
  //   lat: 0,
  //   lng: 0
  // };
  
  // if (navigator.geolocation) {
  //   directionsDisplay.setMap(map)
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     start = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //       };
        
  //       var end = {
  //           lat: lat,
  //           lng: lng
  //       };

  //       var request = {
  //         origin: start,
  //         destination: end,
  //         travelMode: 'WALKING'
  //       };
  //       directionsService.route(request, function(result, status) {
  //         if (status == 'OK') {
  //           directionsDisplay.setDirections(result);
  //             stmarker = new google.maps.Marker({
  //             position: start,
  //             map: map,
  //             icon: '/if_Star_Gold_1398915.png',
  //             optimized: false
  //           });
  //           infowindow.close()
  //         }
  //       });
        
  //     }, function() {
  //           alert('Directions to pickup point not available');
  //         });
  // } 
  // else {
  //   alert("Directions to pickup point not available")
  // }
  // showDirections = !showDirections;
  
}


function calculateAndDisplayRoute(request, startPointName, endPointName, routeId) {
//   initMap();
//   selectRoute(startPointName + " to " + endPointName);
//   var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
//   directionsDisplay.setMap(map);
//   var startPoint;
//   var endPoint;

// 	var service_callback = function(response, status) {
// 		if (status === 'OK') {
// 			directionsDisplay.setDirections(response);
// 		} else {
// 			window.alert('Directions request failed due to ' + status);
// 		}
// 	}
  
//   //var jsonData = JSON.parse(request);
// 	for (var i = 0, parts = [], max = 22; i < request.length; i = i+max) {
// 		parts.push(request.slice(i, i + max + 1));
// 	}
	
// 	startPoint = new google.maps.LatLng(parseFloat(parts[0][0].lat), parseFloat(parts[0][0].lng));
	
//     var startMark = new google.maps.Marker({
//       position: startPoint,
//       map: map,
//       title: startPointName,
//       icon: '/if_Star_Gold_1398915.png'
//     });
    
//     var startInfo = new google.maps.InfoWindow({
//       content: '<h4>' + startPointName + '</h4>',
//       maxWidth: 250
//     });
//     startMark.addListener('mouseover', function() {
//       startInfo.open(map, startMark);
//     });
    
//     endPoint = new google.maps.LatLng(parseFloat(parts[0][parts[0].length-1].lat), parseFloat(parts[0][parts[0].length-1].lng))
    
//     //add marker at end point
//     var endMark = new google.maps.Marker({
//       position: endPoint,
//       map: map,
//       title: endPointName,
//     });
//     var endInfo = new google.maps.InfoWindow({
//       content: '<h4>' + endPointName + '</h4>',
//       maxWidth: 250
//     });
//     endMark.addListener('mouseover', function() {
//       endInfo.open(map, endMark);
//     });
    
//   for (var i = 0; i < parts.length; i++) {
// 		var waypts = [];
// 		for (var j = 0; j < parts[i].length - 1; j++) {
// 			waypts.push({
// 				location : new google.maps.LatLng(parseFloat(parts[i][j].lat), parseFloat(parts[i][j].lng)),
// 				stopover : false
// 			});
// 		}
// 		//alert(parts[i][parts[i].length-1].lat)
// 		var service_opts = {
// 			origin: new google.maps.LatLng(parseFloat(parts[i][0].lat), parseFloat(parts[i][0].lng)),
// 			destination: new google.maps.LatLng(parseFloat(parts[i][parts[i].length-1].lat), parseFloat(parts[i][parts[i].length-1].lng)),
// 			waypoints: waypts,
// 			optimizeWaypoints: true,
// 			travelMode: 'WALKING'
// 		};
// 		directionsService.route(service_opts, service_callback);
// 	}
}

function selectRoute(route) {
	$('#selectedRoute').text(route);
}