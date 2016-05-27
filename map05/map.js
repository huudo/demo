function initMap() {
  var myLatLng = {lat: 21.036253, lng: 105.816272};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
    });       
  google.maps.event.addListener(map, 'click', function (event) {
    console.log("latitude:"+ event.latLng, "longitude:" +event.latLng);  
  
    marker.setMap(null);
    marker = new google.maps.Marker({
    position:  event.latLng,
    map: map,
    title: 'Hello World!'
    });    
  });
}