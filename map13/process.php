
<?php
$text1 = $_POST['text1'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maps";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
foreach ($text1 as $key) {
	$sql = "INSERT INTO shop (shopName,lat,lng,carNum)
		VALUES ('".$key['name']."', '".$key['lat']."','".$key['lng']."','".$key['carNum']."')";
	if ($conn->query($sql) === TRUE) {
    	echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
// $sql = "INSERT INTO shop (shopName,lat,lng,carNum)
// VALUES ('".$text1[0]['name']."', '".$text1[0]['lat']."','".$text1[0]['lng']."','".$text1[0]['carNum']."')";



$conn->close();
?>