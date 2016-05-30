<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Simple markers</title>
    <script type="text/javascript" src="map.js"></script>
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <style>
      html, body {
        height: 80%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgJu-cnkiF57hU-aDv1Prlb0zMkqY7iCk&libraries=geometry&callback=initMap">
    </script>
    <div id="demo"></div>
    <?php
    $array = array("const1" => "val", "const2" => "val2");
    ?>
    <script>
    $(document).ready(function(){
                /* call the php that has the php array which is json_encoded */
                $.getJSON('demo.php', function(data) {
                        /* data will hold the php array as a javascript object */
                        console.log(data[0]);
                        // $.each(data, function(key, val) {
                        //         $('ul').append('<li id="' + key + '">' + val.first_name + ' ' + val.last_name + ' ' + val.email + ' ' + val.age + '</li>');
                        // });
                });

        });
    </script>
<!--     <script>

    $.getJSON('demo.php', function(result)  {
      if (!result.prizes_available) {
          alert('no more prizes');
      }else{
        console.log(result);
      }
    });
    //  function quicksort(arr)
    // {
    // //if array is empty
    // if (arr.length === 0) {
    // return [];
    // }
    //   var left = [];
    //   var right = [];
    //   var pivot = arr[0];
    //   //go through each element in array
    //   for (var i = 1; i < arr.length; i++) {
    //       if (arr[i] < pivot) {
    //          left.push(arr[i]);
    //       } else {
    //          right.push(arr[i]);
    //       }
    //   }
    //   return quicksort(left).concat(pivot, quicksort(right));
    // }
    // var demo = [2,30,2,54,23,6,8];
    
  </script> -->
  </body>
</html>