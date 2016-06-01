<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Simple markers</title>
     <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script type="text/javascript" src="map.js"></script>
   
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
        width: 80%;
        margin: 0px auto;
      }
      input{
        width: 150px;
        height: 30px;
      }
      #input{
        width: 15%;
        float: left;
        margin: 40px;

      }
    </style>
  </head>
  <body>
   <div id="input">        
        <input id="lat" name="lat" placeholder="Latitude">
        <input id="lng" name="lng" placeholder="Longitude">
       
        Bán kính tìm kiếm:<input id="distance" name="count" >m</br>
        <button onclick="myFunction()">Submit</button></br>     
        Số lượng xe thực tế:<input id="countReal" name="count" ></br>   
        Số shop trong bán kính:<input id="shop" name="count" >
        <div id="result"></div>
    </div>
    <div id="map"></div>
     
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgJu-cnkiF57hU-aDv1Prlb0zMkqY7iCk&libraries=geometry&callback=initMap">
    </script>
  
  </body>
</html>