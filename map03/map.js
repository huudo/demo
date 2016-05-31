function initMap() {      
  var myPos = [
                {lat: 21.036253, lng: 105.816272},
                {lat: 21.036798, lng: 105.834755},
                {lat: 21.040394, lng: 105.814527}
              ];
  var myLatLng =  {lat: 21.036253, lng: 105.816272};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  for(var i= 0;i < 3; i++){
    var marker = new google.maps.Marker({
      position: myPos[i],
      map: map,
      title: 'Hello World!3s'
    });
  }
}