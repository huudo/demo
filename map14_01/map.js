var map,circle,marker,marker2=[],point;
function drawAll(point,radius){
  if(marker2[0]){
    for(var i=0; i<100;i++){
      marker2[i].setMap(null);
    }
   marker2 = [];
  }
  var ne = circle.getBounds().getNorthEast();
  var sw = circle.getBounds().getSouthWest(); 
  var minx = sw.lat();
  var miny = sw.lng();
  var maxx = ne.lat();
  var maxy = ne.lng();
  var i=0;
  while( i < 100){
    var latPoint = Math.random()*(maxx-minx)+minx;
    var lngPoint = Math.random()*(maxy-miny)+miny;
    var newPoint = new google.maps.LatLng(latPoint, lngPoint);
    var centerPoint =  new google.maps.LatLng(point.lat, point.lng);
    var distance = google.maps.geometry.spherical.computeDistanceBetween(centerPoint,newPoint);
    if(distance < radius){
      marker2[i] = new google.maps.Marker({
        position: newPoint,
        map: map,
        title: 'Hello World!'
      });
      i++;
    }
  }  
}
function initMap() {
  // Create the map.
  var latLng = {lat: 21.036253, lng: 105.816272};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  circle = new google.maps.Circle({
    draggable: true,
    editable:true,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: latLng,
    radius: 1000
  });
  var  point2 = {lat: circle.center.lat(), lng: circle.center.lng()};    
  drawAll(point2,circle.radius);  // create default points
  circle.addListener('bounds_changed', function(event){
    point = {lat: circle.center.lat(), lng: circle.center.lng()};    
    drawAll(point,circle.radius);
  });
    
}
