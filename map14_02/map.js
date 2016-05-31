var listShop;
var positionNode;
var listFix;
var marker2=[];
var map;
var firstPos;
var cityCircle,marker;
function myFunction() {   
    var latFirst = document.getElementById("lat").value;
    var lngFirst = document.getElementById("lng").value;
    
    var distan = document.getElementById("distance").value;
    if(!Math.floor(latFirst) || !Math.floor(lngFirst) || !Math.floor(distan) ){
      alert("Dữ liệu nhập vào không chính xác!");
    }else{
      firstPos = {lat:latFirst,lng:lngFirst};
    positionNode = new google.maps.LatLng(latFirst, lngFirst);
    listFix = sortShop(listShop);
    if(distan <=0 ){
      alert("Nhập lại bán kính!");
    }else{
        showMap(distan);
      }
    }
    
    
}
function initMap() {
  document.getElementById("lat").value = 21.036253;
  document.getElementById("lng").value = 105.816272;
  $.getJSON('demo.php', function(data) {                                           
    listShop = data; 
    var myLatLng = {lat: 21.036253, lng: 105.816272};
     map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });
    marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
      });       
    
    google.maps.event.addListener(map, 'click', function (event) {           
      document.getElementById("lat").value = event.latLng.lat();
      document.getElementById("lng").value = event.latLng.lng();      
      marker.setMap(null);
      marker = new google.maps.Marker({
      position:  event.latLng,
      map: map,
      title: 'Hello World!'
      });      
    });
  });
}
function showMap(distan){
  if(marker2[0]){
    for(var i=0;i<marker2.length;i++){
      marker2[i].setMap(null);
    }

    marker2 = [];
  }
  if(cityCircle){
    cityCircle.setMap(null);
  }
  marker.setMap(null);
  var sumCar = 0;
  var i = 0;
  var flag= false;
  while( i < listFix.length){
    var newLat = parseFloat(listFix[i].lat);
    var newLng = parseFloat(listFix[i].lng);
    var newPoint = {lat: newLat,lng:newLng};
    var pointCheck = new google.maps.LatLng(newLat,newLng);
    var distanceNode = distance(positionNode,pointCheck);
    if(distanceNode > Math.floor(distan)){
      
      break;
    }
    marker2[i] = new google.maps.Marker({
          position: newPoint,
          map: map,
          title: 'Hello World!'
    });       
    sumCar += Math.floor(listFix[i].carNum);
    i++;
  }
  
  document.getElementById("countReal").value = sumCar;
  if(i==0){
    alert("Không có nhà cung cấp nào trong phạm vi!")
  }else{
    cityCircle = new google.maps.Circle({
      draggable:false,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: positionNode,
      radius: Math.floor(distan)
    });
    document.getElementById("distance").value = Math.floor(distan);
    document.getElementById("shop").value = i;
    
  }
  
}
 function sortShop(arr){
    //if array is empty
    if (arr.length === 0) {
    return [];
    }
      var left = [];
      var right = [];
      var latPivot = parseFloat(arr[0].lat);
      var lngPivot = parseFloat(arr[0].lng);
      var nodePivot = new google.maps.LatLng(latPivot,lngPivot);
      var pivot = distance(positionNode,nodePivot);
      var nodecenter = arr[0];
      //go through each element in array
      for (var i = 1; i < arr.length; i++) {
          var latNew = parseFloat(arr[i].lat);
          var lngNew = parseFloat(arr[i].lng);
          var newNode = new google.maps.LatLng(latNew,lngNew);
          var distanceNode = distance(positionNode,newNode);
          if (distanceNode < pivot) {
             left.push(arr[i]);
          } else {
             right.push(arr[i]);
          }
      }
      return $.merge($.merge(sortShop(left), $.makeArray(nodecenter)), sortShop(right));
    }
    
function distance(point1, point2){
  return google.maps.geometry.spherical.computeDistanceBetween(point1,point2);
}