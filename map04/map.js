var citymap = {
  ledaco: {
    center: {lat: 21.036253, lng: 105.816272},
    population: 2714856
  },
  quanngua: {
    center: {lat: 21.036798, lng: 105.834755},
    population: 8405837
  },
  langbac: {
    center: {lat: 21.040394, lng: 105.814527},
    population: 3857799
  }

};

function initMap() {
  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 21.036253, lng: 105.816272},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    // Add the circle for this city to the map.
    var marker = new google.maps.Marker({
      position: citymap[city].center,
      map: map,
      title: 'Hello World!'
    });
  }
   var cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: citymap["ledaco"].center,
    radius: Math.sqrt(citymap["ledaco"].population)*1.5
  });

}